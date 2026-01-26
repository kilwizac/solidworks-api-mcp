import argparse
import json
import os
import re
from collections import defaultdict

from bs4 import BeautifulSoup

SYSTEM_TYPE_MAP = {
    "string": "String",
    "object": "Object",
    "bool": "Boolean",
    "boolean": "Boolean",
    "int": "Int32",
    "int32": "Int32",
    "int16": "Int16",
    "int64": "Int64",
    "short": "Int16",
    "long": "Int64",
    "double": "Double",
    "float": "Single",
    "single": "Single",
    "decimal": "Decimal",
    "void": "Void",
}

STOPWORDS = {
    "method",
    "property",
    "interface",
    "event",
    "enum",
    "class",
    "and",
    "or",
    "the",
    "of",
    "in",
    "to",
    "for",
    "with",
    "a",
    "an",
    "is",
    "on",
    "by",
    "from",
    "as",
    "this",
    "that",
    "these",
    "those",
    "be",
    "into",
    "at",
    "if",
    "then",
    "else",
    "get",
    "set",
    "gets",
    "sets",
    "system",
}


def read_file(path):
    with open(path, "r", encoding="utf-8", errors="ignore") as handle:
        return handle.read()


def load_soup(path):
    return BeautifulSoup(read_file(path), "lxml")


def clean_text(text):
    if not text:
        return ""
    text = text.replace("\u00a0", " ")
    text = re.sub(r"\s+", " ", text)
    return text.strip()


def normalize_type(type_name):
    if not type_name:
        return type_name
    match = re.match(r"system\.([a-z0-9_]+)$", type_name.strip(), re.IGNORECASE)
    if match:
        raw = match.group(1).lower()
        mapped = SYSTEM_TYPE_MAP.get(raw, raw.capitalize())
        return f"System.{mapped}"
    return type_name


def normalize_signature(sig_text):
    if not sig_text:
        return sig_text
    normalized = sig_text
    for raw, mapped in SYSTEM_TYPE_MAP.items():
        normalized = re.sub(
            rf"System\.{raw}\b",
            f"System.{mapped}",
            normalized,
            flags=re.IGNORECASE,
        )
    return normalized


def text_block(elem):
    if elem is None:
        return ""
    for br in elem.find_all("br"):
        br.replace_with("\n")
    text = elem.get_text("\n", strip=True)
    text = text.replace("\u00a0", " ")
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


def meta_content(soup, name):
    tag = soup.find("meta", attrs={"name": name})
    if tag and tag.get("content"):
        return tag["content"].strip()
    return ""


def meta_keywords(soup):
    keywords = []
    for tag in soup.find_all("meta", attrs={"name": "Microsoft.Help.Keywords"}):
        content = tag.get("content")
        if content:
            keywords.append(content.strip())
    return keywords


def split_identifier(value):
    if not value:
        return []
    value = value.replace("_", " ")
    value = re.sub(r"([a-z0-9])([A-Z])", r"\1 \2", value)
    value = re.sub(r"([A-Z]+)([A-Z][a-z])", r"\1 \2", value)
    tokens = [t.lower() for t in value.split() if len(t.strip()) > 1]
    return tokens


def normalize_keywords(items):
    results = []
    seen = set()

    def add(token):
        if not token:
            return
        token = token.strip().lower()
        if len(token) < 2 or token in STOPWORDS:
            return
        if token in seen:
            return
        seen.add(token)
        results.append(token)

    for item in items:
        if not item:
            continue
        for part in re.split(r"[;,]", str(item)):
            part = part.strip()
            if not part:
                continue
            tokens = re.split(r"[^A-Za-z0-9_]+", part)
            if len(tokens) > 1:
                for token in tokens:
                    add(token)
            else:
                add(part)
    return results


def infer_categories(interface_name, member_name=None, category_map=None):
    categories = set()
    if category_map and interface_name in category_map:
        categories.update(category_map[interface_name])
    if interface_name in {"ISldWorks", "IModelDoc2"}:
        categories.update(["core", "documents"])

    text = " ".join(filter(None, [interface_name, member_name]))
    rules = [
        ("Assembly", "assemblies"),
        ("Drawing", "drawings"),
        ("Part", "parts"),
        ("Sketch", "sketches"),
        ("Feature", "features"),
        ("Selection", "selections"),
        ("Select", "selections"),
        ("Dimension", "dimensions"),
        ("Annotation", "dimensions"),
        ("Body", "geometry"),
        ("Face", "geometry"),
        ("Edge", "geometry"),
        ("Vertex", "geometry"),
        ("File", "file-io"),
        ("Save", "file-io"),
        ("Open", "file-io"),
        ("Import", "file-io"),
        ("Export", "file-io"),
        ("View", "ui"),
        ("User", "ui"),
        ("Command", "ui"),
    ]
    for token, category in rules:
        if token in text:
            categories.add(category)

    if not categories:
        categories.add("documents")

    return sorted(categories)


def parse_signature(sig_text):
    sig = normalize_signature(" ".join(sig_text.split()))
    if not sig:
        return None, None, []

    if "(" not in sig and "{" in sig:
        before = sig.split("{")[0].strip()
        parts = before.split()
        if len(parts) >= 2:
            return normalize_type(parts[0]), parts[1], []
        return None, None, []

    match = re.match(r"(.+?)\s+([A-Za-z_][A-Za-z0-9_]*)\s*\((.*)\)", sig)
    if not match:
        return None, None, []

    return_type = normalize_type(match.group(1).strip())
    name = match.group(2).strip()
    params_raw = match.group(3).strip()
    params = []
    if params_raw:
        for raw in params_raw.split(","):
            raw = raw.strip()
            if not raw:
                continue
            raw = re.sub(r"^(ref|out|in)\s+", "", raw)
            parts = raw.split()
            if len(parts) >= 2:
                param_name = parts[-1]
                param_type = " ".join(parts[:-1])
            else:
                param_name = parts[0]
                param_type = "unknown"
            params.append({"name": param_name, "type": normalize_type(param_type)})
    return return_type, name, params


def extract_heading_content(section, heading_text):
    if section is None:
        return ""
    for heading in section.find_all(["h4", "h3", "h2"]):
        if heading.get_text(strip=True).lower() == heading_text.lower():
            chunks = []
            for sib in heading.next_siblings:
                if getattr(sib, "name", None) in ["h4", "h3", "h2"]:
                    break
                if getattr(sib, "name", None):
                    chunks.append(text_block(sib))
                else:
                    text = str(sib).strip()
                    if text:
                        chunks.append(clean_text(text))
            return clean_text("\n".join([c for c in chunks if c]))
    return ""


def extract_parameters(section):
    params = {}
    if section is None:
        return params
    dl = section.find("dl")
    if not dl:
        return params
    names = [clean_text(dt.get_text(" ", strip=True)) for dt in dl.find_all("dt")]
    descs = [clean_text(dd.get_text(" ", strip=True)) for dd in dl.find_all("dd")]
    for name, desc in zip(names, descs):
        if name:
            params[name] = desc
    return params


def extract_related(soup):
    section = soup.select_one("#i-seealso-section-content")
    if not section:
        return []
    related = []
    for link in section.find_all("a"):
        href = link.get("href") or ""
        text = clean_text(link.get_text(" ", strip=True))
        if "ms-xhelp://" in href and "id=" in href:
            target = href.split("id=")[-1]
            m = re.match(r"SolidWorks\.Interop\.sldworks~SolidWorks\.Interop\.sldworks\.([^.~]+)(?:~([^.~]+))?", target)
            if m:
                iface = m.group(1)
                member = m.group(2)
                if member:
                    related.append(f"{iface}.{member}")
                else:
                    related.append(iface)
                continue
        if text:
            related.append(text)
    filtered = []
    for item in related:
        lowered = item.lower()
        if lowered.endswith(("_members", "_methods", "_properties", "_events")):
            continue
        filtered.append(item)
    return sorted(set(filtered))


def build_file_index(root_dir):
    index = {}
    for root, _, files in os.walk(root_dir):
        for name in files:
            if not name.lower().endswith((".html", ".htm")):
                continue
            key = name.lower()
            if key not in index:
                index[key] = os.path.join(root, name)
    return index


def detect_language_from_text(text):
    if not text:
        return ""
    lowered = text.lower()
    if "c#" in lowered or "csharp" in lowered or "c sharp" in lowered:
        return "csharp"
    if "vb.net" in lowered or "vbnet" in lowered or "vba" in lowered or "visual basic" in lowered:
        return "vb"
    if "c++" in lowered or "cplus" in lowered or "cpp" in lowered:
        return "cpp"
    return ""


def detect_language_from_name(name):
    if not name:
        return ""
    lowered = name.lower()
    if "csharp" in lowered or "c#" in lowered or re.search(r"(^|[^a-z])cs([^a-z]|$)", lowered):
        return "csharp"
    if "vbnet" in lowered or "vb.net" in lowered or "vba" in lowered or re.search(r"(^|[^a-z])vb([^a-z]|$)", lowered):
        return "vb"
    if "cplus" in lowered or "c++" in lowered or "cpp" in lowered:
        return "cpp"
    return detect_language_from_text(name)


def detect_language(elem, fallback_name="", fallback_text=""):
    hints = []
    for node in [elem] + list(elem.parents):
        if node is None:
            continue
        node_id = node.get("id") or ""
        node_class = " ".join(node.get("class", []))
        hints.append(node_id)
        hints.append(node_class)
    hint_text = " ".join(hints).lower()

    if re.search(r"\b(cs|csharp)\b", hint_text):
        return "csharp"
    if re.search(r"\b(vb|vbnet|vba)\b", hint_text):
        return "vb"
    if re.search(r"\b(cpp|c\\+\\+|cpp2005)\b", hint_text):
        return "cpp"

    return detect_language_from_name(fallback_name) or detect_language_from_text(fallback_text)


def extract_code_blocks(soup, filename=""):
    blocks = []
    title_text = ""
    if soup.title:
        title_text = soup.title.get_text(" ", strip=True)
    header = soup.find("h1")
    header_text = header.get_text(" ", strip=True) if header else ""
    fallback_text = " ".join(filter(None, [title_text, header_text]))

    for pre in soup.find_all("pre"):
        code = pre.get_text("\n", strip=True)
        if not code:
            continue
        language = detect_language(pre, filename, fallback_text)
        blocks.append({"language": language, "code": code})

    if blocks:
        return blocks

    code_lines = []
    for para in soup.find_all("p", class_=re.compile(r"APICODE", re.IGNORECASE)):
        raw = para.get_text()
        raw = raw.replace("\u00a0", " ").replace("\r", "").replace("\n", " ")
        leading = len(raw) - len(raw.lstrip(" "))
        body = re.sub(r"\s+", " ", raw.lstrip(" ")).rstrip()
        code_lines.append((" " * leading) + body)

    if code_lines:
        language = detect_language_from_name(filename) or detect_language_from_text(fallback_text)
        blocks.append({"language": language, "code": "\n".join(code_lines).strip()})

    return blocks


def resolve_example_path(href, file_index, docset_root, examples_index=None, examples_root=None):
    if not href:
        return None
    href = href.split("#")[0].split("?")[0]
    if href.startswith("ms-"):
        return None
    candidate = os.path.join(docset_root, href)
    if os.path.isfile(candidate):
        return candidate
    key = os.path.basename(href).lower()
    if key in file_index:
        return file_index.get(key)
    if examples_index and key in examples_index:
        return examples_index.get(key)
    if examples_root:
        candidate = os.path.join(examples_root, href)
        if os.path.isfile(candidate):
            return candidate
    return None


def extract_examples(soup, file_index, docset_root, examples_index=None, examples_root=None):
    section = soup.select_one("#i-example-section-content")
    if not section:
        return []
    examples = []
    for link in section.find_all("a"):
        text = clean_text(link.get_text(" ", strip=True))
        href = link.get("href")
        code_blocks = []
        example_path = resolve_example_path(href, file_index, docset_root, examples_index, examples_root)
        if example_path and os.path.isfile(example_path):
            example_soup = load_soup(example_path)
            code_blocks = extract_code_blocks(example_soup, os.path.basename(example_path))
        if text:
            examples.append({
                "title": text,
                "href": href,
                "code_blocks": code_blocks,
            })
    return examples


def load_functional_categories(docset_root):
    path = os.path.join(docset_root, "FunctionalCategories-sldworksapi.html")
    if not os.path.isfile(path):
        return {}, {}

    category_map = defaultdict(list)
    heading_map = defaultdict(list)
    soup = load_soup(path)
    for heading in soup.find_all("h4"):
        heading_text = clean_text(heading.get_text(" ", strip=True))
        label = heading_text.lower().replace("interfaces", "").strip()
        if "application" in label:
            categories = ["core", "ui"]
        elif "annotation" in label:
            categories = ["dimensions"]
        elif "assembly" in label:
            categories = ["assemblies"]
        elif "drawing" in label:
            categories = ["drawings"]
        elif "configuration" in label:
            categories = ["documents"]
        elif "enumeration" in label:
            categories = ["core"]
        elif "feature" in label:
            categories = ["features"]
        elif "model" in label:
            categories = ["documents"]
        elif "motion" in label:
            categories = ["documents"]
        elif "sketch" in label:
            categories = ["sketches"]
        elif "utility" in label:
            categories = ["documents"]
        elif "user-interface" in label or "user interface" in label:
            categories = ["ui"]
        elif "custom" in label:
            categories = ["documents"]
        else:
            categories = ["documents"]

        node = heading.next_sibling
        while node is not None and getattr(node, "name", None) != "h4":
            if getattr(node, "name", None) == "ul":
                for link in node.find_all("a"):
                    interface_name = clean_text(link.get_text(" ", strip=True))
                    if interface_name.startswith("I"):
                        category_map[interface_name] = categories
                        heading_map[heading_text].append(interface_name)
            node = node.next_sibling

    return category_map, heading_map


def build_keywords(interface_name, member_name, meta_kw, params, returns_text, example_titles=None):
    keywords = []
    keywords.extend(meta_kw)
    if interface_name:
        keywords.append(interface_name)
        keywords.extend(split_identifier(interface_name))
    if member_name:
        keywords.append(member_name)
        keywords.extend(split_identifier(member_name))
    for param in params:
        keywords.extend(split_identifier(param.get("name")))
        keywords.extend(split_identifier(param.get("type")))
    keywords.extend(split_identifier(returns_text))
    if example_titles:
        keywords.extend(example_titles)
    return normalize_keywords(keywords)


def write_markdown(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as handle:
        handle.write(content)


def write_json(path, data):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as handle:
        json.dump(data, handle, indent=2)


def write_pattern(path, title, body_lines, keywords, categories, json_path=None):
    frontmatter = {
        "type": "pattern",
        "title": title,
        "keywords": keywords,
        "categories": categories,
        "related": [],
    }
    sections = [format_frontmatter(frontmatter), "", f"# {title}", ""]
    sections.extend(body_lines)
    write_markdown(path, "\n".join(sections))
    if json_path:
        write_json(json_path, {
            "frontmatter": frontmatter,
            "title": title,
            "body": body_lines,
        })


def format_value(value):
    if value is None:
        return "null"
    if isinstance(value, bool):
        return "true" if value else "false"
    return str(value)


def format_frontmatter(data):
    lines = ["---"]
    for key, value in data.items():
        if isinstance(value, list):
            if not value:
                lines.append(f"{key}: []")
                continue
            lines.append(f"{key}:")
            for item in value:
                if isinstance(item, dict):
                    lines.append("  -")
                    for sub_key, sub_value in item.items():
                        lines.append(f"    {sub_key}: {format_value(sub_value)}")
                else:
                    lines.append(f"  - {format_value(item)}")
        else:
            lines.append(f"{key}: {format_value(value)}")
    lines.append("---")
    return "\n".join(lines)


def convert_sldworks(docset_root, output_root, docset_name, examples_root=None, json_root=None):
    interface_members = defaultdict(list)
    member_files = []
    interface_files = []
    example_index = defaultdict(list)
    category_map, heading_map = load_functional_categories(docset_root)
    file_index = build_file_index(docset_root)
    examples_index = build_file_index(examples_root) if examples_root else {}

    for root, _, files in os.walk(docset_root):
        for name in files:
            if not name.lower().endswith(('.html', '.htm')):
                continue
            if name.endswith("_members.html") or name.endswith("_methods.html") or name.endswith("_properties.html"):
                continue
            if "namespace" in name.lower():
                continue
            full_path = os.path.join(root, name)
            match_member = re.match(r"SolidWorks\.Interop\.sldworks~SolidWorks\.Interop\.sldworks\.([^.~]+)~([^.~]+)\.html$", name)
            if match_member:
                interface_members[match_member.group(1)].append(full_path)
                member_files.append(full_path)
                continue
            match_interface = re.match(r"SolidWorks\.Interop\.sldworks~SolidWorks\.Interop\.sldworks\.([^.~]+)\.html$", name)
            if match_interface:
                interface_files.append(full_path)

    index_interfaces = {}
    search_documents = []

    json_base = os.path.join(json_root, docset_name) if json_root else os.path.join(output_root, "json")

    for path in sorted(member_files):
        file_name = os.path.basename(path)
        match = re.match(r"SolidWorks\.Interop\.sldworks~SolidWorks\.Interop\.sldworks\.([^.~]+)~([^.~]+)\.html$", file_name)
        if not match:
            continue
        interface_name = match.group(1)
        member_name = match.group(2)
        soup = load_soup(path)
        title_text = (soup.title.get_text(" ", strip=True) if soup.title else "").lower()
        if "event" in title_text:
            member_type = "event"
        elif "property" in title_text:
            member_type = "property"
        else:
            member_type = "method"

        description = meta_content(soup, "Description")
        meta_kw = meta_keywords(soup)
        syntax_section = soup.select_one("#i-syntax-section-content")
        cs_pre = soup.select_one("#i-syntax-CS pre")
        vb_pre = soup.select_one("#i-syntax-VB pre")
        sig_text = normalize_signature(text_block(cs_pre) or text_block(vb_pre))
        return_type, sig_name, parsed_params = parse_signature(sig_text)

        param_descs = extract_parameters(syntax_section)
        parameters = []
        for param in parsed_params:
            desc = param_descs.get(param["name"], "")
            parameters.append({"name": param["name"], "type": param["type"], "description": desc})

        returns_text = extract_heading_content(syntax_section, "Return Value")
        if not returns_text and member_type == "property":
            returns_text = extract_heading_content(syntax_section, "Property Value")

        remarks = text_block(soup.select_one("#i-remarks-section-content"))
        examples = extract_examples(soup, file_index, docset_root, examples_index, examples_root)
        related = extract_related(soup)
        related = [item for item in related if item not in {interface_name, f"{interface_name}.{member_name}"}]

        readonly = None
        if member_type == "property" and vb_pre:
            vb_text = text_block(vb_pre).lower()
            if "readonly" in vb_text:
                readonly = True
            elif "writeonly" in vb_text:
                readonly = False

        categories = infer_categories(interface_name, member_name, category_map)
        example_titles = [example["title"] for example in examples]
        keywords = build_keywords(interface_name, member_name, meta_kw, parameters, return_type or "", example_titles)

        frontmatter = {
            "type": member_type,
            "interface": interface_name,
            "member": member_name,
            "returns": return_type or "unknown",
            "parameters": parameters,
            "docset": docset_name,
            "deprecated": True if "obsolete" in description.lower() or "deprecated" in description.lower() else False,
            "since_version": "unknown",
            "categories": categories,
            "related": related,
            "keywords": keywords,
        }
        if member_type == "property":
            frontmatter["readonly"] = readonly

        member_title = f"{interface_name}.{member_name}"
        sections = [
            format_frontmatter(frontmatter),
            "",
            f"# {member_title}",
            "",
            description or "",
            "",
            "## Signature",
            "",
            "```csharp",
            sig_text or "",
            "```",
        ]

        sections.append("## Parameters")
        sections.append("")
        if parameters:
            for param in parameters:
                sections.append(f"- `{param['name']}` ({param['type']}): {param['description']}")
        else:
            sections.append("None.")

        sections.append("")
        sections.append("## Return Value")
        sections.append("")
        sections.append(returns_text or "Unknown.")

        if remarks:
            sections.append("")
            sections.append("## Remarks")
            sections.append("")
            sections.append(remarks)

        if examples:
            sections.append("")
            sections.append("## Examples")
            sections.append("")
            for example in examples:
                label = example["title"]
                href = example.get("href") or ""
                code_blocks = example.get("code_blocks") or []
                if code_blocks:
                    sections.append(f"### {label}")
                    sections.append("")
                    for block in code_blocks:
                        language = block.get("language") or ""
                        sections.append(f"```{language}")
                        sections.append(block.get("code") or "")
                        sections.append("```")
                        sections.append("")
                else:
                    if href:
                        sections.append(f"- {label} ({href})")
                    else:
                        sections.append(f"- {label}")
                if label:
                    example_index[label].append(f"{interface_name}.{member_name}")

        if related:
            sections.append("")
            sections.append("## See Also")
            sections.append("")
            for item in related:
                sections.append(f"- `{item}`")

        out_path = os.path.join(output_root, "interfaces", interface_name, f"{member_name}.md")
        write_markdown(out_path, "\n".join([s for s in sections if s is not None]))
        json_path = os.path.join(json_base, "interfaces", interface_name, f"{member_name}.json")
        write_json(json_path, {
            "frontmatter": frontmatter,
            "title": member_title,
            "description": description,
            "signature": sig_text or "",
            "parameters": parameters,
            "returns": returns_text or "",
            "remarks": remarks,
            "examples": examples,
            "related": related,
        })

        interface_entry = index_interfaces.setdefault(interface_name, {
            "file": f"interfaces/{interface_name}/_interface.md",
            "member_count": 0,
            "members": {}
        })
        interface_entry["member_count"] += 1
        interface_entry["members"][member_name] = f"interfaces/{interface_name}/{member_name}.md"

        search_documents.append({
            "id": f"{interface_name}.{member_name}",
            "path": f"interfaces/{interface_name}/{member_name}.md",
            "type": member_type,
            "interface": interface_name,
            "title": member_name,
            "summary": description,
            "docset": docset_name,
            "keywords": keywords,
            "categories": categories,
            "parameters": [p["name"] for p in parameters],
            "returns": return_type or "unknown",
        })

    for path in sorted(interface_files):
        file_name = os.path.basename(path)
        match = re.match(r"SolidWorks\.Interop\.sldworks~SolidWorks\.Interop\.sldworks\.([^.~]+)\.html$", file_name)
        if not match:
            continue
        interface_name = match.group(1)
        soup = load_soup(path)
        description = text_block(soup.select_one(".i-description-content")) or meta_content(soup, "Description")
        categories = infer_categories(interface_name, None, category_map)
        members = sorted(index_interfaces.get(interface_name, {}).get("members", {}).keys())
        common_members = members[:8]

        frontmatter = {
            "type": "interface",
            "interface": interface_name,
            "inherits": None,
            "description": description or "",
            "member_count": len(members),
            "docset": docset_name,
            "categories": categories,
            "common_members": common_members,
        }

        sections = [
            format_frontmatter(frontmatter),
            "",
            f"# {interface_name}",
            "",
            description or "",
        ]

        if common_members:
            sections.append("")
            sections.append("## Common Members")
            sections.append("")
            for item in common_members:
                sections.append(f"- `{item}`")

        out_path = os.path.join(output_root, "interfaces", interface_name, "_interface.md")
        write_markdown(out_path, "\n".join(sections))
        json_path = os.path.join(json_base, "interfaces", interface_name, "_interface.json")
        write_json(json_path, {
            "frontmatter": frontmatter,
            "title": interface_name,
            "description": description,
            "common_members": common_members,
        })

        search_documents.append({
            "id": interface_name,
            "path": f"interfaces/{interface_name}/_interface.md",
            "type": "interface",
            "interface": interface_name,
            "title": interface_name,
            "summary": description,
            "docset": docset_name,
            "keywords": build_keywords(interface_name, None, meta_keywords(soup), [], ""),
            "categories": categories,
            "parameters": [],
            "returns": "",
        })

    if heading_map:
        lines = []
        for heading in sorted(heading_map.keys()):
            lines.append(f"## {heading}")
            lines.append("")
            for iface in sorted(set(heading_map[heading])):
                lines.append(f"- `{iface}`")
            lines.append("")
        pattern_path = os.path.join(output_root, "patterns", "functional-categories.md")
        pattern_json = os.path.join(json_base, "patterns", "functional-categories.json")
        write_pattern(
            pattern_path,
            "Functional Categories",
            lines,
            ["functional", "categories", "interfaces", "grouping"],
            ["documents"],
            pattern_json,
        )
        search_documents.append({
            "id": "Functional Categories",
            "path": "patterns/functional-categories.md",
            "type": "pattern",
            "interface": "",
            "title": "Functional Categories",
            "summary": "SOLIDWORKS interfaces grouped by functional category.",
            "docset": docset_name,
            "keywords": ["functional", "categories", "interfaces", "grouping"],
            "categories": ["documents"],
            "parameters": [],
            "returns": "",
        })

    if example_index:
        lines = []
        for title in sorted(example_index.keys()):
            members = sorted(set(example_index[title]))
            lines.append(f"## {title}")
            lines.append("")
            for member in members:
                lines.append(f"- `{member}`")
            lines.append("")
        pattern_path = os.path.join(output_root, "patterns", "examples-index.md")
        pattern_json = os.path.join(json_base, "patterns", "examples-index.json")
        write_pattern(
            pattern_path,
            "Examples Index",
            lines,
            ["examples", "code", "macro", "addin", "sample"],
            ["documents"],
            pattern_json,
        )
        search_documents.append({
            "id": "Examples Index",
            "path": "patterns/examples-index.md",
            "type": "pattern",
            "interface": "",
            "title": "Examples Index",
            "summary": "Index of example topics referenced by API members.",
            "docset": docset_name,
            "keywords": ["examples", "code", "macro", "addin", "sample"],
            "categories": ["documents"],
            "parameters": [],
            "returns": "",
        })

    return index_interfaces, search_documents


def convert_swconst(docset_root, output_root, docset_name, json_root=None):
    enums_index = {}
    search_documents = []
    json_base = os.path.join(json_root, docset_name) if json_root else os.path.join(output_root, "json")

    for root, _, files in os.walk(docset_root):
        for name in files:
            if not name.lower().endswith(('.html', '.htm')):
                continue
            if "namespace" in name.lower():
                continue
            match = re.match(r"SolidWorks\.Interop\.swconst~SolidWorks\.Interop\.swconst\.([^.~]+)\.html$", name)
            if not match:
                continue
            enum_name = match.group(1)
            path = os.path.join(root, name)
            soup = load_soup(path)
            title = (soup.title.get_text(" ", strip=True) if soup.title else "").lower()
            if "enumeration" not in title:
                continue

            description = meta_content(soup, "Description")
            table = soup.find("table", class_="FilteredItemListTable")
            rows = []
            if table:
                for row in table.find_all("tr")[1:]:
                    cells = row.find_all("td")
                    if len(cells) < 2:
                        continue
                    name_cell = clean_text(cells[0].get_text(" ", strip=True))
                    desc_cell = clean_text(cells[1].get_text(" ", strip=True))
                    value = ""
                    desc = desc_cell
                    m = re.match(r"^(-?\d+)\s*(.*)$", desc_cell)
                    if m:
                        value = m.group(1)
                        desc = m.group(2).strip()
                    rows.append({"member": name_cell, "value": value, "description": desc})

            categories = ["constants"]
            keywords = build_keywords(enum_name, None, meta_keywords(soup), [], "")

            frontmatter = {
                "type": "enum",
                "name": enum_name,
                "description": description or "",
                "member_count": len(rows),
                "docset": docset_name,
                "categories": categories,
                "used_by": [],
            }

            sections = [
                format_frontmatter(frontmatter),
                "",
                f"# {enum_name}",
                "",
                description or "",
                "",
                "## Values",
                "",
                "| Member | Value | Description |",
                "|---|---|---|",
            ]
            for row in rows:
                sections.append(f"| `{row['member']}` | {row['value']} | {row['description']} |")

            out_path = os.path.join(output_root, "enums", f"{enum_name}.md")
            write_markdown(out_path, "\n".join(sections))
            json_path = os.path.join(json_base, "enums", f"{enum_name}.json")
            write_json(json_path, {
                "frontmatter": frontmatter,
                "title": enum_name,
                "description": description,
                "values": rows,
            })

            enums_index[enum_name] = f"enums/{enum_name}.md"

            search_documents.append({
                "id": enum_name,
                "path": f"enums/{enum_name}.md",
                "type": "enum",
                "interface": "",
                "title": enum_name,
                "summary": description,
                "docset": docset_name,
                "keywords": keywords,
                "categories": categories,
                "parameters": [],
                "returns": "",
            })

    return enums_index, search_documents


def convert_examples(docset_root, output_root, docset_name, json_root=None):
    if not docset_root:
        return [], []

    search_documents = []
    patterns_out = os.path.join(output_root, "patterns")
    json_base = os.path.join(json_root, docset_name) if json_root else os.path.join(output_root, "json")
    json_patterns_out = os.path.join(json_base, "patterns")
    os.makedirs(patterns_out, exist_ok=True)

    file_index = build_file_index(docset_root)
    for filename, path in sorted(file_index.items()):
        if not filename.lower().endswith((".htm", ".html")):
            continue
        if "example" not in filename.lower():
            continue
        soup = load_soup(path)
        title = ""
        headings = [clean_text(h.get_text(" ", strip=True)) for h in soup.find_all("h1")]
        headings = [h for h in headings if h]
        if headings:
            for candidate in reversed(headings):
                if candidate.lower() != "solidworks api help":
                    title = candidate
                    break
            if not title:
                title = headings[-1]
        if not title and soup.title:
            title = clean_text(soup.title.get_text(" ", strip=True))
        if not title:
            title = os.path.splitext(os.path.basename(path))[0]

        description = ""
        for para in soup.find_all("p"):
            if para.get("class") and any("apicode" in cls.lower() for cls in para.get("class", [])):
                continue
            text = clean_text(para.get_text(" ", strip=True))
            if text:
                description = text
                break

        code_blocks = extract_code_blocks(soup, os.path.basename(path))
        if not code_blocks:
            continue

        body_lines = []
        if description:
            body_lines.append(description)
            body_lines.append("")
        body_lines.append("## Code")
        body_lines.append("")
        for block in code_blocks:
            language = block.get("language") or ""
            body_lines.append(f"```{language}")
            body_lines.append(block.get("code") or "")
            body_lines.append("```")
            body_lines.append("")

        slug = os.path.splitext(os.path.basename(path))[0]
        md_path = os.path.join(patterns_out, f"{slug}.md")
        json_path = os.path.join(json_patterns_out, f"{slug}.json")
        keywords = normalize_keywords([title])
        write_pattern(md_path, title, body_lines, keywords, ["documents"], json_path)

        search_documents.append({
            "id": title,
            "path": f"patterns/{slug}.md",
            "type": "pattern",
            "interface": "",
            "title": title,
            "summary": description,
            "docset": docset_name,
            "keywords": keywords,
            "categories": ["documents"],
            "parameters": [],
            "returns": "",
        })

    return search_documents


def write_index(path, data):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as handle:
        json.dump(data, handle, indent=2)


def build_example_member_map(member_docs, example_docs, output_root, json_root, docset_name):
    keyword_to_members = defaultdict(set)
    member_keywords = {}

    for doc in member_docs:
        if doc.get("type") not in {"method", "property", "event"}:
            continue
        member_id = doc.get("id")
        keywords = doc.get("keywords") or []
        member_keywords[member_id] = set(keywords)
        for keyword in keywords:
            keyword_to_members[keyword].add(member_id)

    if not member_keywords or not example_docs:
        return None

    mapping = {}
    lines = []
    for example in example_docs:
        title = example.get("title") or example.get("id")
        example_keywords = example.get("keywords") or []
        scores = defaultdict(int)
        for keyword in example_keywords:
            for member_id in keyword_to_members.get(keyword, []):
                scores[member_id] += 1

        ranked = sorted(scores.items(), key=lambda item: item[1], reverse=True)
        ranked = [item for item in ranked if item[1] >= 2][:10]
        if not ranked:
            continue

        mapping[title] = [{"member": member_id, "score": score} for member_id, score in ranked]
        lines.append(f"## {title}")
        lines.append("")
        for member_id, score in ranked:
            lines.append(f"- `{member_id}` (score: {score})")
        lines.append("")

    if not mapping:
        return None

    md_path = os.path.join(output_root, "patterns", "examples-to-members.md")
    json_path = os.path.join(json_root, docset_name, "patterns", "examples-to-members.json")
    write_pattern(
        md_path,
        "Examples to Members",
        lines,
        ["examples", "mapping", "members", "lookup"],
        ["documents"],
        json_path,
    )

    return {
        "id": "Examples to Members",
        "path": "patterns/examples-to-members.md",
        "type": "pattern",
        "interface": "",
        "title": "Examples to Members",
        "summary": "Keyword-based mapping from programming guide examples to API members.",
        "docset": docset_name,
        "keywords": ["examples", "mapping", "members", "lookup"],
        "categories": ["documents"],
        "parameters": [],
        "returns": "",
    }


def extract_guide_sections(docset_root, filenames):
    sections = []
    for name in filenames:
        path = os.path.join(docset_root, name)
        if not os.path.isfile(path):
            continue
        soup = load_soup(path)
        title = ""
        headings = [clean_text(h.get_text(" ", strip=True)) for h in soup.find_all("h1")]
        headings = [h for h in headings if h]
        if headings:
            for candidate in reversed(headings):
                if candidate.lower() != "solidworks api help":
                    title = candidate
                    break
            if not title:
                title = headings[-1]
        if not title and soup.title:
            title = clean_text(soup.title.get_text(" ", strip=True))
        if not title:
            title = os.path.splitext(name)[0]

        paragraphs = []
        for para in soup.find_all("p"):
            if para.get("class") and any("apicode" in cls.lower() for cls in para.get("class", [])):
                continue
            text = clean_text(para.get_text(" ", strip=True))
            if text:
                paragraphs.append(text)
        paragraphs = paragraphs[:8]

        sections.append({
            "title": title,
            "paragraphs": paragraphs,
            "code": extract_code_blocks(soup, name),
        })
    return sections


def convert_guides(docset_root, output_root, docset_name, json_root=None):
    if not docset_root:
        return []

    json_base = os.path.join(json_root, docset_name) if json_root else os.path.join(output_root, "json")
    patterns_out = os.path.join(output_root, "patterns")
    os.makedirs(patterns_out, exist_ok=True)

    guides = [
        {
            "slug": "macro-best-practices",
            "title": "Macro Best Practices",
            "keywords": ["macro", "vba", "record", "run", "debug"],
            "sources": [
                os.path.join("GettingStarted", "SolidWorks_Macros.htm"),
                os.path.join("GettingStarted", "Record_Solidworks_Macro.htm"),
                os.path.join("GettingStarted", "Run_SolidWorks_Macro.htm"),
                os.path.join("GettingStarted", "Edit_or_Debug_SolidWorks_Macro.htm"),
                os.path.join("GettingStarted", "Assign_SolidWorks_Macro_to_Button.htm"),
                os.path.join("GettingStarted", "Option_Explicit_Statement.htm"),
            ],
        },
        {
            "slug": "addin-best-practices",
            "title": "Add-in Best Practices",
            "keywords": ["addin", "add-in", "standalone", "application", "c#"],
            "sources": [
                os.path.join("GettingStarted", "SolidWorks_API_Standalone_and_Add-in_Applications_Overview.htm"),
                os.path.join("GettingStarted", "Types_of_SolidWorks_API_Applications_Overview.htm"),
                os.path.join("GettingStarted", "Visual_C__Standalone_and_Add-in_Applications.htm"),
                os.path.join("GettingStarted", "Visual_Basic_.NET_Standalone_and_Add-in_Applications.htm"),
                os.path.join("GettingStarted", "CPP_.NET_Standalone_and_Add-in_Applications.htm"),
            ],
        },
        {
            "slug": "api-getting-started",
            "title": "API Getting Started",
            "keywords": ["getting", "started", "object", "model", "hierarchy"],
            "sources": [
                os.path.join("GettingStarted", "SolidWorks_API_Getting_Started_Overview.htm"),
                os.path.join("GettingStarted", "SolidWorks_API_Object_Model_Overview.htm"),
                os.path.join("GettingStarted", "Understanding_the_SolidWorks_API_Class_Hierarchy.htm"),
            ],
        },
    ]

    search_docs = []
    for guide in guides:
        sections = extract_guide_sections(docset_root, guide["sources"])
        if not sections:
            continue

        body_lines = []
        for section in sections:
            body_lines.append(f"## {section['title']}")
            body_lines.append("")
            for paragraph in section["paragraphs"]:
                body_lines.append(f"- {paragraph}")
            body_lines.append("")
            if section["code"]:
                body_lines.append("### Code")
                body_lines.append("")
                for block in section["code"]:
                    language = block.get("language") or ""
                    body_lines.append(f"```{language}")
                    body_lines.append(block.get("code") or "")
                    body_lines.append("```")
                    body_lines.append("")

        md_path = os.path.join(patterns_out, f"{guide['slug']}.md")
        json_path = os.path.join(json_base, "patterns", f"{guide['slug']}.json")
        write_pattern(
            md_path,
            guide["title"],
            body_lines,
            normalize_keywords(guide["keywords"]),
            ["documents"],
            json_path,
        )

        search_docs.append({
            "id": guide["title"],
            "path": f"patterns/{guide['slug']}.md",
            "type": "pattern",
            "interface": "",
            "title": guide["title"],
            "summary": f"{guide['title']} from the SolidWorks API programming guide.",
            "docset": docset_name,
            "keywords": normalize_keywords(guide["keywords"]),
            "categories": ["documents"],
            "parameters": [],
            "returns": "",
        })

    return search_docs


def build_json_index(index_data, docset_name):
    prefix = f"json/{docset_name}"
    interfaces = {}
    enums = {}
    for iface, iface_data in index_data.get("interfaces", {}).items():
        interfaces[iface] = {
            "file": f"{prefix}/interfaces/{iface}/_interface.json",
            "member_count": iface_data.get("member_count", 0),
            "members": {name: f"{prefix}/interfaces/{iface}/{name}.json" for name in iface_data.get("members", {})},
        }
    for enum_name in index_data.get("enums", {}):
        enums[enum_name] = f"{prefix}/enums/{enum_name}.json"
    return {"interfaces": interfaces, "enums": enums}


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--sldworks", required=True, help="Path to extracted sldworksapi HTML root")
    parser.add_argument("--swconst", required=True, help="Path to extracted swconst HTML root")
    parser.add_argument("--examples", help="Path to extracted sldworksapiprogguide HTML root")
    parser.add_argument("--output", required=True, help="Output directory for MCP-ready docs")
    args = parser.parse_args()

    output_root = args.output
    os.makedirs(output_root, exist_ok=True)
    json_root = os.path.join(output_root, "json")

    sldworks_out = os.path.join(output_root, "sldworksapi")
    swconst_out = os.path.join(output_root, "swconst")
    progguide_out = os.path.join(output_root, "progguide")

    interfaces_index, sldworks_search = convert_sldworks(
        args.sldworks,
        sldworks_out,
        "sldworksapi",
        args.examples,
        json_root,
    )
    enums_index, swconst_search = convert_swconst(args.swconst, swconst_out, "swconst", json_root)
    progguide_search = []
    if args.examples:
        example_search = convert_examples(args.examples, progguide_out, "progguide", json_root)
        guide_search = convert_guides(args.examples, progguide_out, "progguide", json_root)
        progguide_search = example_search + guide_search

    write_index(os.path.join(sldworks_out, "_index.json"), {
        "generated": "",
        "solidworks_version": "",
        "interfaces": interfaces_index,
        "enums": {},
    })

    write_index(os.path.join(swconst_out, "_index.json"), {
        "generated": "",
        "solidworks_version": "",
        "interfaces": {},
        "enums": enums_index,
    })

    if args.examples:
        write_index(os.path.join(progguide_out, "_index.json"), {
            "generated": "",
            "solidworks_version": "",
            "interfaces": {},
            "enums": {},
        })

    write_index(os.path.join(sldworks_out, "_search_index.json"), {
        "documents": sldworks_search,
    })

    write_index(os.path.join(swconst_out, "_search_index.json"), {
        "documents": swconst_search,
    })

    if args.examples:
        write_index(os.path.join(progguide_out, "_search_index.json"), {
            "documents": progguide_search,
        })

    mapping_doc = build_example_member_map(
        sldworks_search,
        progguide_search,
        sldworks_out,
        json_root,
        "sldworksapi",
    )
    if mapping_doc:
        sldworks_search.append(mapping_doc)

    merged_search = sldworks_search + swconst_search + progguide_search
    write_index(os.path.join(output_root, "_search_index.json"), {
        "documents": merged_search,
    })

    index_docsets = {
        "sldworksapi": {
            "interfaces": interfaces_index,
            "enums": {},
        },
        "swconst": {
            "interfaces": {},
            "enums": enums_index,
        },
    }
    if args.examples:
        index_docsets["progguide"] = {
            "interfaces": {},
            "enums": {},
        }

    write_index(os.path.join(output_root, "_index.json"), {
        "generated": "",
        "solidworks_version": "",
        "docsets": index_docsets,
    })

    json_index_docsets = {
        "sldworksapi": build_json_index({"interfaces": interfaces_index, "enums": {}}, "sldworksapi"),
        "swconst": build_json_index({"interfaces": {}, "enums": enums_index}, "swconst"),
    }
    if args.examples:
        json_index_docsets["progguide"] = build_json_index({"interfaces": {}, "enums": {}}, "progguide")

    write_index(os.path.join(output_root, "json", "_index.json"), {
        "generated": "",
        "solidworks_version": "",
        "docsets": json_index_docsets,
    })

    def json_path_from_doc(path, docset):
        base = f"json/{docset}"
        if path.startswith("interfaces/"):
            return f"{base}/" + path.replace("interfaces/", "interfaces/").replace(".md", ".json")
        if path.startswith("enums/"):
            return f"{base}/" + path.replace("enums/", "enums/").replace(".md", ".json")
        if path.startswith("patterns/"):
            return f"{base}/" + path.replace("patterns/", "patterns/").replace(".md", ".json")
        return f"{base}/" + path.replace(".md", ".json")

    json_search = []
    for doc in merged_search:
        json_doc = dict(doc)
        json_doc["path"] = json_path_from_doc(doc["path"], doc.get("docset", "sldworksapi"))
        json_search.append(json_doc)
    write_index(os.path.join(output_root, "json", "_search_index.json"), {
        "documents": json_search,
    })


if __name__ == "__main__":
    main()
