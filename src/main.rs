use ahash::{AHashMap, AHashSet};
use serde::Serialize;
use serde_json::{json, Value};
use std::cmp::Reverse;
use std::collections::BinaryHeap;
use std::fs;
use std::io::{self, BufRead, Write};
use std::path::{Path, PathBuf};

const SERVER_NAME: &str = "solidworks-mcp";
const SERVER_VERSION: &str = "0.3.0-rust";
const PROTOCOL_VERSION: &str = "2024-11-05";

#[derive(Clone)]
struct PreparedDoc {
    doc: Value,
    docset: String,
    ty: String,
    interface: String,
    categories: AHashSet<String>,
}

struct SearchCorpus {
    docs: Vec<PreparedDoc>,
    token_index: AHashMap<String, Vec<(usize, i32)>>,
}

struct DataStore {
    root: PathBuf,
    index: Value,
    json_index: Value,
    search_md: SearchCorpus,
    search_json: SearchCorpus,
    examples_map: AHashMap<String, Vec<String>>,
    progguide_titles: AHashMap<String, Value>,
    iface_lookup_json: AHashMap<String, AHashMap<String, String>>,
    iface_lookup_md: AHashMap<String, AHashMap<String, String>>,
    member_lookup_json: AHashMap<String, AHashMap<String, String>>,
}

#[derive(Serialize)]
struct SearchResult {
    score: i32,
    doc: Value,
}

fn tokenize(text: &str) -> Vec<String> {
    let mut out = Vec::with_capacity(text.len() / 4);
    let mut cur = String::new();
    for c in text.chars() {
        if c.is_ascii_alphanumeric() {
            cur.push(c.to_ascii_lowercase());
        } else if !cur.is_empty() {
            out.push(std::mem::take(&mut cur));
        }
    }
    if !cur.is_empty() {
        out.push(cur);
    }
    out
}

fn unique_tokens(text: &str) -> AHashSet<String> {
    tokenize(text).into_iter().collect()
}

fn unique_tokens_from_slice(parts: &[String]) -> AHashSet<String> {
    let mut tokens = AHashSet::new();
    for part in parts {
        for token in tokenize(part) {
            tokens.insert(token);
        }
    }
    tokens
}

fn normalize_query(query: &str) -> String {
    query
        .split_whitespace()
        .map(str::to_ascii_lowercase)
        .collect::<Vec<_>>()
        .join(" ")
}

fn parse_limit(v: Option<&Value>, default: Option<usize>) -> Option<usize> {
    let Some(v) = v else {
        return default;
    };
    match v {
        Value::Number(n) => n.as_i64().map(|x| x.max(0) as usize).or(default),
        Value::String(s) => s.parse::<i64>().ok().map(|x| x.max(0) as usize).or(default),
        Value::Null => default,
        _ => default,
    }
}

fn get_str<'a>(v: &'a Value, key: &str) -> &'a str {
    v.get(key).and_then(Value::as_str).unwrap_or("")
}

fn get_str_array(v: &Value, key: &str) -> Vec<String> {
    v.get(key)
        .and_then(Value::as_array)
        .map(|arr| {
            arr.iter()
                .filter_map(Value::as_str)
                .map(ToOwned::to_owned)
                .collect()
        })
        .unwrap_or_default()
}

fn read_json(path: &Path) -> io::Result<Value> {
    let bytes = fs::read(path)?;
    serde_json::from_slice::<Value>(&bytes)
        .map_err(|e| io::Error::new(io::ErrorKind::InvalidData, e))
}

impl SearchCorpus {
    fn from_search_json(search: &Value) -> Self {
        let docs_json = search
            .get("documents")
            .and_then(Value::as_array)
            .cloned()
            .unwrap_or_default();

        let mut docs = Vec::with_capacity(docs_json.len());
        for doc in docs_json {
            let categories = get_str_array(&doc, "categories");
            docs.push(PreparedDoc {
                docset: get_str(&doc, "docset").to_string(),
                ty: get_str(&doc, "type").to_string(),
                interface: get_str(&doc, "interface").to_string(),
                categories: categories.into_iter().collect(),
                doc,
            });
        }

        let mut token_index: AHashMap<String, Vec<(usize, i32)>> = AHashMap::new();
        for (idx, d) in docs.iter().enumerate() {
            let mut push_weighted = |tokens: AHashSet<String>, weight: i32| {
                for token in tokens {
                    token_index.entry(token).or_default().push((idx, weight));
                }
            };

            push_weighted(unique_tokens(get_str(&d.doc, "title")), 4);
            push_weighted(
                unique_tokens_from_slice(&get_str_array(&d.doc, "keywords")),
                3,
            );
            push_weighted(unique_tokens(get_str(&d.doc, "interface")), 2);
            push_weighted(unique_tokens(get_str(&d.doc, "summary")), 1);
            push_weighted(
                unique_tokens_from_slice(&get_str_array(&d.doc, "categories")),
                1,
            );
            push_weighted(unique_tokens(get_str(&d.doc, "type")), 1);
        }

        Self { docs, token_index }
    }
}

impl DataStore {
    fn load(root: PathBuf) -> io::Result<Self> {
        let index = read_json(&root.join("_index.json"))?;
        let json_index = read_json(&root.join("json").join("_index.json"))?;
        let search_md = read_json(&root.join("_search_index.json"))?;
        let search_json = read_json(&root.join("json").join("_search_index.json"))?;

        let search_md = SearchCorpus::from_search_json(&search_md);
        let search_json = SearchCorpus::from_search_json(&search_json);

        let mut progguide_titles = AHashMap::new();
        for d in &search_md.docs {
            if d.docset == "progguide" {
                let title = get_str(&d.doc, "title");
                if !title.is_empty() {
                    progguide_titles.insert(title.to_string(), d.doc.clone());
                }
            }
        }

        let examples_map = Self::load_examples_map(&root);
        let iface_lookup_json = Self::build_interface_lookup(&json_index);
        let iface_lookup_md = Self::build_interface_lookup(&index);
        let member_lookup_json = Self::build_member_lookup(&json_index);

        Ok(Self {
            root,
            index,
            json_index,
            search_md,
            search_json,
            examples_map,
            progguide_titles,
            iface_lookup_json,
            iface_lookup_md,
            member_lookup_json,
        })
    }

    fn search_corpus(&self, fmt: &str) -> &SearchCorpus {
        if fmt == "json" {
            &self.search_json
        } else {
            &self.search_md
        }
    }

    fn build_interface_lookup(index: &Value) -> AHashMap<String, AHashMap<String, String>> {
        let mut lookup = AHashMap::new();
        let Some(docsets) = index.get("docsets").and_then(Value::as_object) else {
            return lookup;
        };

        for (docset, docset_index) in docsets {
            let mut doc_lookup = AHashMap::new();
            if let Some(interfaces) = docset_index.get("interfaces").and_then(Value::as_object) {
                for iface_name in interfaces.keys() {
                    doc_lookup
                        .entry(iface_name.to_ascii_lowercase())
                        .or_insert_with(|| iface_name.clone());
                }
            }
            lookup.insert(docset.clone(), doc_lookup);
        }
        lookup
    }

    fn build_member_lookup(index: &Value) -> AHashMap<String, AHashMap<String, String>> {
        let mut lookup = AHashMap::new();
        let Some(docsets) = index.get("docsets").and_then(Value::as_object) else {
            return lookup;
        };

        for (docset, docset_index) in docsets {
            let Some(interfaces) = docset_index.get("interfaces").and_then(Value::as_object) else {
                continue;
            };
            for (iface_name, iface_entry) in interfaces {
                let Some(members) = iface_entry.get("members").and_then(Value::as_object) else {
                    continue;
                };
                let key = format!("{docset}|{iface_name}");
                let mut mem_lookup = AHashMap::new();
                for member_name in members.keys() {
                    mem_lookup
                        .entry(member_name.to_ascii_lowercase())
                        .or_insert_with(|| member_name.clone());
                }
                lookup.insert(key, mem_lookup);
            }
        }
        lookup
    }

    fn load_examples_map(root: &Path) -> AHashMap<String, Vec<String>> {
        let mut out = AHashMap::new();
        let path = root
            .join("json")
            .join("sldworksapi")
            .join("patterns")
            .join("examples-to-members.json");
        let Ok(v) = read_json(&path) else {
            return out;
        };

        let mut title: Option<String> = None;
        for line in v
            .get("body")
            .and_then(Value::as_array)
            .into_iter()
            .flatten()
            .filter_map(Value::as_str)
        {
            if let Some(rest) = line.strip_prefix("## ") {
                title = Some(rest.trim().to_string());
                continue;
            }
            if let Some(member) = line
                .trim()
                .strip_prefix("- `")
                .and_then(|l| l.strip_suffix('`'))
            {
                if let Some(t) = &title {
                    out.entry(member.to_string()).or_default().push(t.clone());
                }
            }
        }
        out
    }

    fn docset_index<'a>(&'a self, fmt: &str, docset: &str) -> Option<&'a Value> {
        let base = if fmt == "json" {
            &self.json_index
        } else {
            &self.index
        };
        base.get("docsets")?.get(docset)
    }

    fn resolve_interface_name<'a>(
        &'a self,
        interface: &str,
        docset: &str,
        fmt: &str,
    ) -> Option<&'a str> {
        let docset_index = self.docset_index(fmt, docset)?;
        let interfaces = docset_index.get("interfaces")?.as_object()?;
        if interfaces.contains_key(interface) {
            return Some(interface);
        }
        let lookup = if fmt == "json" {
            self.iface_lookup_json.get(docset)?
        } else {
            self.iface_lookup_md.get(docset)?
        };
        lookup
            .get(&interface.to_ascii_lowercase())
            .map(String::as_str)
    }

    fn resolve_member_name<'a>(
        &'a self,
        interface: &str,
        member: &str,
        docset: &str,
    ) -> Option<&'a str> {
        let iface = self.resolve_interface_name(interface, docset, "json")?;
        let docset_index = self.docset_index("json", docset)?;
        let members = docset_index
            .get("interfaces")?
            .get(iface)?
            .get("members")?
            .as_object()?;
        if members.contains_key(member) {
            return Some(member);
        }
        let key = format!("{docset}|{iface}");
        self.member_lookup_json
            .get(&key)?
            .get(&member.to_ascii_lowercase())
            .map(String::as_str)
    }

    fn resolve_member_path(
        &self,
        interface: &str,
        member: &str,
        docset: &str,
        fmt: &str,
    ) -> Option<PathBuf> {
        let resolved_interface = self.resolve_interface_name(interface, docset, fmt)?;
        let resolved_member = if fmt == "json" {
            self.resolve_member_name(resolved_interface, member, docset)?
        } else {
            member
        };
        let rel = self
            .docset_index(fmt, docset)?
            .get("interfaces")?
            .get(resolved_interface)?
            .get("members")?
            .get(resolved_member)?
            .as_str()?;
        Some(if fmt == "json" {
            self.root.join(rel)
        } else {
            self.root.join(docset).join(rel)
        })
    }

    fn resolve_interface_path(&self, interface: &str, docset: &str, fmt: &str) -> Option<PathBuf> {
        let resolved_interface = self.resolve_interface_name(interface, docset, fmt)?;
        let rel = self
            .docset_index(fmt, docset)?
            .get("interfaces")?
            .get(resolved_interface)?
            .get("file")?
            .as_str()?;
        Some(if fmt == "json" {
            self.root.join(rel)
        } else {
            self.root.join(docset).join(rel)
        })
    }

    fn resolve_enum_path(&self, en: &str, docset: &str, fmt: &str) -> Option<PathBuf> {
        let rel = self
            .docset_index(fmt, docset)?
            .get("enums")?
            .get(en)?
            .as_str()?;
        Some(if fmt == "json" {
            self.root.join(rel)
        } else {
            self.root.join(docset).join(rel)
        })
    }

    fn search_api_scored(
        &self,
        query: &str,
        docset: Option<&str>,
        fmt: &str,
        doc_type: Option<&str>,
        interface: Option<&str>,
        categories: &[String],
        limit: Option<usize>,
    ) -> Vec<SearchResult> {
        let nq = normalize_query(query);
        let tokens = tokenize(&nq);
        if tokens.is_empty() || matches!(limit, Some(0)) {
            return vec![];
        }

        let corpus = self.search_corpus(fmt);
        let mut scores: AHashMap<usize, i32> = AHashMap::new();
        let mut query_token_freq: AHashMap<&str, i32> = AHashMap::new();
        for token in &tokens {
            *query_token_freq.entry(token.as_str()).or_insert(0) += 1;
        }
        for (token, freq) in query_token_freq {
            if let Some(postings) = corpus.token_index.get(token) {
                for (doc_idx, weight) in postings {
                    *scores.entry(*doc_idx).or_insert(0) += *weight * freq;
                }
            }
        }

        if scores.is_empty() {
            return vec![];
        }

        let cat_set: AHashSet<&str> = categories.iter().map(String::as_str).collect();
        let mut filtered: Vec<(i32, usize)> = Vec::with_capacity(scores.len());
        for (idx, score) in scores {
            if score <= 0 {
                continue;
            }
            let d = &corpus.docs[idx];
            if let Some(ds) = docset {
                if d.docset != ds {
                    continue;
                }
            }
            if let Some(t) = doc_type {
                if d.ty != t {
                    continue;
                }
            }
            if let Some(i) = interface {
                if d.interface != i {
                    continue;
                }
            }
            if !cat_set.is_empty() && !cat_set.iter().all(|c| d.categories.contains(*c)) {
                continue;
            }
            filtered.push((score, idx));
        }

        if filtered.is_empty() {
            return vec![];
        }

        let mut top_hits: Vec<(i32, usize)> = if let Some(top_n) = limit.filter(|l| *l > 0) {
            let mut heap: BinaryHeap<Reverse<(i32, usize)>> = BinaryHeap::with_capacity(top_n + 1);
            for item in filtered {
                if heap.len() < top_n {
                    heap.push(Reverse(item));
                } else if let Some(min_hit) = heap.peek() {
                    if item.0 > min_hit.0 .0 {
                        let _ = heap.pop();
                        heap.push(Reverse(item));
                    }
                }
            }
            heap.into_iter().map(|v| v.0).collect()
        } else {
            filtered
        };

        top_hits.sort_unstable_by_key(|(score, _)| Reverse(*score));
        if let Some(l) = limit {
            top_hits.truncate(l);
        }

        top_hits
            .into_iter()
            .map(|(score, idx)| SearchResult {
                score,
                doc: corpus.docs[idx].doc.clone(),
            })
            .collect()
    }
}

fn tool_list() -> Value {
    json!({"tools": [
      {"name":"solidworks_lookup_method","description":"Lookup a method/property/event by interface + member.","inputSchema":{"type":"object","properties":{"interface":{"type":"string"},"member":{"type":"string"},"docset":{"type":"string"},"format":{"type":"string","enum":["markdown","json"]}},"required":["interface","member"]}},
      {"name":"solidworks_search_api","description":"Search the SolidWorks API corpus by keywords or concepts.","inputSchema":{"type":"object","properties":{"query":{"type":"string"},"docset":{"type":"string"},"type":{"type":"string"},"interface":{"type":"string"},"categories":{"type":"array","items":{"type":"string"}},"limit":{"type":"integer"},"format":{"type":"string","enum":["markdown","json"]}},"required":["query"]}},
      {"name":"solidworks_get_interface_members","description":"List all members of an interface.","inputSchema":{"type":"object","properties":{"interface":{"type":"string"},"docset":{"type":"string"},"format":{"type":"string","enum":["markdown","json"]}},"required":["interface"]}},
      {"name":"solidworks_get_enum_values","description":"Get enum member values and descriptions.","inputSchema":{"type":"object","properties":{"enum":{"type":"string"},"docset":{"type":"string"},"format":{"type":"string","enum":["markdown","json"]}},"required":["enum"]}},
      {"name":"solidworks_find_related","description":"Find related members for a given interface/member.","inputSchema":{"type":"object","properties":{"interface":{"type":"string"},"member":{"type":"string"},"docset":{"type":"string"},"limit":{"type":"integer"}},"required":["interface","member"]}},
      {"name":"solidworks_get_examples","description":"Find example code by member or free-text query.","inputSchema":{"type":"object","properties":{"interface":{"type":"string"},"member":{"type":"string"},"query":{"type":"string"},"limit":{"type":"integer"},"docset":{"type":"string"}}}}
    ]})
}

fn text_result(v: Value) -> Value {
    json!({"content":[{"type":"text","text":serde_json::to_string(&v).unwrap_or_else(|_|"{}".to_string())}]})
}

fn main() -> io::Result<()> {
    let root = std::env::var("SW_API_DATA_ROOT")
        .map(PathBuf::from)
        .unwrap_or_else(|_| PathBuf::from("solidworks-api"));
    if !root.is_dir() {
        eprintln!("Data root not found: {}", root.display());
        std::process::exit(1);
    }

    let store = DataStore::load(root)?;

    let stdin = io::stdin();
    let mut stdout = io::stdout().lock();

    for line in stdin.lock().lines() {
        let Ok(line) = line else { continue };
        let line = line.trim();
        if line.is_empty() {
            continue;
        }
        let Ok(msg) = serde_json::from_str::<Value>(line) else {
            continue;
        };
        let id = msg.get("id").cloned().unwrap_or(Value::Null);
        let method = msg.get("method").and_then(Value::as_str).unwrap_or("");
        let params = msg.get("params").cloned().unwrap_or_else(|| json!({}));

        let response = match method {
            "initialize" => {
                json!({"jsonrpc":"2.0","id":id,"result":{"protocolVersion":PROTOCOL_VERSION,"capabilities":{"tools":{"listChanged":false}},"serverInfo":{"name":SERVER_NAME,"version":SERVER_VERSION}}})
            }
            "tools/list" => json!({"jsonrpc":"2.0","id":id,"result": tool_list()}),
            "tools/call" => {
                let name = params.get("name").and_then(Value::as_str).unwrap_or("");
                let args = params
                    .get("arguments")
                    .cloned()
                    .unwrap_or_else(|| json!({}));
                let result = match name {
                    "solidworks_lookup_method" => {
                        let interface = get_str(&args, "interface");
                        let member = get_str(&args, "member");
                        let docset = if get_str(&args, "docset").is_empty() {
                            "sldworksapi"
                        } else {
                            get_str(&args, "docset")
                        };
                        let format = if get_str(&args, "format") == "json" {
                            "json"
                        } else {
                            "markdown"
                        };
                        match store.resolve_member_path(interface, member, docset, format) {
                            Some(p) => {
                                if format == "json" {
                                    match read_json(&p) {
                                        Ok(data) => json!({"path": p, "data": data}),
                                        Err(_) => json!({"error":"Not found"}),
                                    }
                                } else {
                                    match fs::read_to_string(&p) {
                                        Ok(content) => json!({"path": p, "content": content}),
                                        Err(_) => json!({"error":"Not found"}),
                                    }
                                }
                            }
                            None => json!({"error":"Not found"}),
                        }
                    }
                    "solidworks_search_api" => {
                        let query = get_str(&args, "query");
                        let docset = args.get("docset").and_then(Value::as_str);
                        let doc_type = args.get("type").and_then(Value::as_str);
                        let interface = args.get("interface").and_then(Value::as_str);
                        let format = if get_str(&args, "format") == "json" {
                            "json"
                        } else {
                            "markdown"
                        };
                        let categories = args
                            .get("categories")
                            .and_then(Value::as_array)
                            .map(|a| {
                                a.iter()
                                    .filter_map(Value::as_str)
                                    .map(ToOwned::to_owned)
                                    .collect::<Vec<_>>()
                            })
                            .unwrap_or_default();
                        let limit = parse_limit(args.get("limit"), Some(20));
                        let results = store.search_api_scored(
                            query,
                            docset,
                            format,
                            doc_type,
                            interface,
                            &categories,
                            limit,
                        );
                        json!({"results": results})
                    }
                    "solidworks_get_interface_members" => {
                        let interface = get_str(&args, "interface");
                        let docset = if get_str(&args, "docset").is_empty() {
                            "sldworksapi"
                        } else {
                            get_str(&args, "docset")
                        };
                        let format = if get_str(&args, "format") == "json" {
                            "json"
                        } else {
                            "markdown"
                        };
                        if let Some(iface) = store
                            .resolve_interface_name(interface, docset, format)
                            .and_then(|resolved| {
                                store
                                    .docset_index(format, docset)
                                    .and_then(|d| d.get("interfaces"))
                                    .and_then(|i| i.get(resolved))
                            })
                        {
                            let members = iface
                                .get("members")
                                .and_then(Value::as_object)
                                .map(|m| {
                                    let mut k = m.keys().cloned().collect::<Vec<_>>();
                                    k.sort_unstable();
                                    k
                                })
                                .unwrap_or_default();
                            let member_count = iface
                                .get("member_count")
                                .and_then(Value::as_u64)
                                .unwrap_or(members.len() as u64);
                            json!({"interface": interface, "member_count": member_count, "members": members})
                        } else {
                            json!({"error":"Not found"})
                        }
                    }
                    "solidworks_get_enum_values" => {
                        let en = get_str(&args, "enum");
                        let docset = if get_str(&args, "docset").is_empty() {
                            "swconst"
                        } else {
                            get_str(&args, "docset")
                        };
                        let format = if get_str(&args, "format") == "markdown" {
                            "markdown"
                        } else {
                            "json"
                        };
                        match store.resolve_enum_path(en, docset, format) {
                            Some(p) => {
                                if format == "json" {
                                    match read_json(&p) {
                                        Ok(data) => {
                                            json!({"enum":en,"values": data.get("values").cloned().unwrap_or_else(||json!([])), "path":p})
                                        }
                                        Err(_) => json!({"error":"Not found"}),
                                    }
                                } else {
                                    let txt = fs::read_to_string(&p).unwrap_or_default();
                                    let mut values = Vec::<Value>::new();
                                    let mut in_table = false;
                                    for line in txt.lines() {
                                        let l = line.trim();
                                        if l.starts_with("| Member") {
                                            in_table = true;
                                            continue;
                                        }
                                        if !in_table {
                                            continue;
                                        }
                                        if !l.starts_with('|') {
                                            break;
                                        }
                                        let cols: Vec<String> = l
                                            .trim_matches('|')
                                            .split('|')
                                            .map(|s| s.trim().to_string())
                                            .collect();
                                        if cols.len() >= 3 {
                                            values.push(json!({"member": cols[0].trim_matches('`'), "value": cols[1], "description": cols[2]}));
                                        }
                                    }
                                    json!({"enum":en,"values":values,"path":p})
                                }
                            }
                            None => json!({"error":"Not found"}),
                        }
                    }
                    "solidworks_find_related" => {
                        let interface = get_str(&args, "interface");
                        let member = get_str(&args, "member");
                        let docset = if get_str(&args, "docset").is_empty() {
                            "sldworksapi"
                        } else {
                            get_str(&args, "docset")
                        };
                        let limit = parse_limit(args.get("limit"), Some(20)).unwrap_or(20);
                        match store.resolve_member_path(interface, member, docset, "json") {
                            Some(p) => match read_json(&p) {
                                Ok(data) => {
                                    let mut related = data
                                        .get("related")
                                        .and_then(Value::as_array)
                                        .cloned()
                                        .unwrap_or_default();
                                    related.truncate(limit);
                                    json!({"interface": interface, "member": member, "related": related})
                                }
                                Err(_) => json!({"error":"Not found"}),
                            },
                            None => json!({"error":"Not found"}),
                        }
                    }
                    "solidworks_get_examples" => {
                        let interface = get_str(&args, "interface");
                        let member = get_str(&args, "member");
                        let query = get_str(&args, "query");
                        let limit = parse_limit(args.get("limit"), Some(10)).unwrap_or(10);
                        if !interface.is_empty() && !member.is_empty() {
                            match store.resolve_member_path(
                                interface,
                                member,
                                "sldworksapi",
                                "json",
                            ) {
                                Some(p) => match read_json(&p) {
                                    Ok(data) => {
                                        let key = format!("{interface}.{member}");
                                        let related_titles = store
                                            .examples_map
                                            .get(&key)
                                            .cloned()
                                            .unwrap_or_default();
                                        let mut extra = Vec::<Value>::new();
                                        for t in related_titles {
                                            if let Some(v) = store.progguide_titles.get(&t) {
                                                extra.push(v.clone());
                                            }
                                        }
                                        extra.truncate(limit);
                                        json!({"member": key, "examples": data.get("examples").cloned().unwrap_or_else(||json!([])), "related_examples": extra})
                                    }
                                    Err(_) => json!({"error":"Not found"}),
                                },
                                None => json!({"error":"Not found"}),
                            }
                        } else if !query.is_empty() {
                            let results = store.search_api_scored(
                                query,
                                Some("progguide"),
                                "markdown",
                                None,
                                None,
                                &[],
                                Some(limit),
                            );
                            json!({"results": results})
                        } else {
                            json!({"error":"No query or member provided"})
                        }
                    }
                    _ => json!({"error":"Unknown tool"}),
                };
                json!({"jsonrpc":"2.0","id":id,"result": text_result(result)})
            }
            "initialized" => continue,
            _ => {
                if id.is_null() {
                    continue;
                }
                json!({"jsonrpc":"2.0","id":id,"error":{"code":-32601,"message":"Method not found"}})
            }
        };

        writeln!(
            stdout,
            "{}",
            serde_json::to_string(&response).unwrap_or_default()
        )?;
        stdout.flush()?;
    }

    Ok(())
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn tokenize_works() {
        assert_eq!(
            tokenize("ISldWorks::OpenDoc6"),
            vec!["isldworks", "opendoc6"]
        );
    }

    #[test]
    fn limit_parse_works() {
        assert_eq!(parse_limit(Some(&json!("12")), Some(3)), Some(12));
        assert_eq!(parse_limit(Some(&json!(-7)), Some(3)), Some(0));
    }
}
