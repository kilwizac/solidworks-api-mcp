import json
import os
import re
import sys
from collections import defaultdict

PROTOCOL_VERSION = "2024-11-05"
SERVER_NAME = "solidworks-mcp"
SERVER_VERSION = "0.1.0"

_TOKEN_RE = re.compile(r"[a-z0-9]+")
_EXAMPLE_MEMBER_RE = re.compile(r"- `([^`]+)`")


def load_json(path):
    with open(path, "r", encoding="utf-8") as handle:
        return json.load(handle)


def read_text(path):
    with open(path, "r", encoding="utf-8", errors="ignore") as handle:
        return handle.read()


def tokenize(text):
    return _TOKEN_RE.findall(text.lower()) if text else []


def score_doc(doc, tokens):
    hay_title = (doc.get("title") or "").lower()
    hay_summary = (doc.get("summary") or "").lower()
    hay_keywords = " ".join(doc.get("keywords") or []).lower()
    hay_categories = " ".join(doc.get("categories") or []).lower()
    hay_interface = (doc.get("interface") or "").lower()
    hay_type = (doc.get("type") or "").lower()

    score = 0
    for token in tokens:
        if token in hay_title:
            score += 4
        if token in hay_keywords:
            score += 3
        if token in hay_interface:
            score += 2
        if token in hay_summary:
            score += 1
        if token in hay_categories:
            score += 1
        if token in hay_type:
            score += 1
    return score


class DataStore:
    def __init__(self, root):
        self.root = root
        self._index = None
        self._search = None
        self._json_index = None
        self._json_search = None
        self._examples_map = None
        self._progguide_titles = None

    def index(self):
        if self._index is None:
            self._index = load_json(os.path.join(self.root, "_index.json"))
        return self._index

    def search(self):
        if self._search is None:
            self._search = load_json(os.path.join(self.root, "_search_index.json"))
        return self._search

    def json_index(self):
        if self._json_index is None:
            self._json_index = load_json(os.path.join(self.root, "json", "_index.json"))
        return self._json_index

    def json_search(self):
        if self._json_search is None:
            self._json_search = load_json(os.path.join(self.root, "json", "_search_index.json"))
        return self._json_search

    def examples_map(self):
        if self._examples_map is not None:
            return self._examples_map
        path = os.path.join(self.root, "json", "sldworksapi", "patterns", "examples-to-members.json")
        if not os.path.isfile(path):
            self._examples_map = {}
            return self._examples_map
        data = load_json(path)
        body = data.get("body") or []
        current = None
        mapping = defaultdict(list)
        for line in body:
            if line.startswith("## "):
                current = line[3:].strip()
                continue
            match = _EXAMPLE_MEMBER_RE.match(line)
            if match and current:
                member = match.group(1)
                mapping[member].append(current)
        self._examples_map = mapping
        return self._examples_map

    def progguide_titles(self):
        if self._progguide_titles is not None:
            return self._progguide_titles
        titles = {}
        for doc in self.search().get("documents", []):
            if doc.get("docset") != "progguide":
                continue
            titles[doc.get("title")] = doc
        self._progguide_titles = titles
        return titles


class MCPServer:
    def __init__(self, store):
        self.store = store

    def send(self, payload):
        sys.stdout.write(json.dumps(payload) + "\n")
        sys.stdout.flush()

    def error(self, request_id, code, message):
        self.send({"jsonrpc": "2.0", "id": request_id, "error": {"code": code, "message": message}})

    def result(self, request_id, result):
        self.send({"jsonrpc": "2.0", "id": request_id, "result": result})

    def handle_initialize(self, request_id, params):
        result = {
            "protocolVersion": PROTOCOL_VERSION,
            "capabilities": {
                "tools": {"listChanged": False},
            },
            "serverInfo": {"name": SERVER_NAME, "version": SERVER_VERSION},
        }
        self.result(request_id, result)

    def handle_tools_list(self, request_id):
        tools = [
            {
                "name": "solidworks_lookup_method",
                "description": "Lookup a method/property/event by interface + member.",
                "inputSchema": {
                    "type": "object",
                    "properties": {
                        "interface": {"type": "string"},
                        "member": {"type": "string"},
                        "docset": {"type": "string"},
                        "format": {"type": "string", "enum": ["markdown", "json"]},
                    },
                    "required": ["interface", "member"],
                },
            },
            {
                "name": "solidworks_search_api",
                "description": "Search the SolidWorks API corpus by keywords or concepts.",
                "inputSchema": {
                    "type": "object",
                    "properties": {
                        "query": {"type": "string"},
                        "docset": {"type": "string"},
                        "type": {"type": "string"},
                        "interface": {"type": "string"},
                        "categories": {"type": "array", "items": {"type": "string"}},
                        "limit": {"type": "integer"},
                        "format": {"type": "string", "enum": ["markdown", "json"]},
                    },
                    "required": ["query"],
                },
            },
            {
                "name": "solidworks_get_interface_members",
                "description": "List all members of an interface.",
                "inputSchema": {
                    "type": "object",
                    "properties": {
                        "interface": {"type": "string"},
                        "docset": {"type": "string"},
                        "format": {"type": "string", "enum": ["markdown", "json"]},
                    },
                    "required": ["interface"],
                },
            },
            {
                "name": "solidworks_get_enum_values",
                "description": "Get enum member values and descriptions.",
                "inputSchema": {
                    "type": "object",
                    "properties": {
                        "enum": {"type": "string"},
                        "docset": {"type": "string"},
                        "format": {"type": "string", "enum": ["markdown", "json"]},
                    },
                    "required": ["enum"],
                },
            },
            {
                "name": "solidworks_find_related",
                "description": "Find related members for a given interface/member.",
                "inputSchema": {
                    "type": "object",
                    "properties": {
                        "interface": {"type": "string"},
                        "member": {"type": "string"},
                        "docset": {"type": "string"},
                        "limit": {"type": "integer"},
                    },
                    "required": ["interface", "member"],
                },
            },
            {
                "name": "solidworks_get_examples",
                "description": "Find example code by member or free-text query.",
                "inputSchema": {
                    "type": "object",
                    "properties": {
                        "interface": {"type": "string"},
                        "member": {"type": "string"},
                        "query": {"type": "string"},
                        "limit": {"type": "integer"},
                        "docset": {"type": "string"},
                    },
                },
            },
        ]
        self.result(request_id, {"tools": tools})

    def resolve_member_path(self, interface, member, docset, fmt):
        if fmt == "json":
            idx = self.store.json_index()["docsets"].get(docset, {})
            path = idx.get("interfaces", {}).get(interface, {}).get("members", {}).get(member)
            if not path:
                return None
            return os.path.join(self.store.root, path)
        idx = self.store.index()["docsets"].get(docset, {})
        path = idx.get("interfaces", {}).get(interface, {}).get("members", {}).get(member)
        if not path:
            return None
        return os.path.join(self.store.root, docset, path)

    def resolve_interface_path(self, interface, docset, fmt):
        if fmt == "json":
            idx = self.store.json_index()["docsets"].get(docset, {})
            path = idx.get("interfaces", {}).get(interface, {}).get("file")
            if not path:
                return None
            return os.path.join(self.store.root, path)
        idx = self.store.index()["docsets"].get(docset, {})
        path = idx.get("interfaces", {}).get(interface, {}).get("file")
        if not path:
            return None
        return os.path.join(self.store.root, docset, path)

    def resolve_enum_path(self, enum_name, docset, fmt):
        if fmt == "json":
            idx = self.store.json_index()["docsets"].get(docset, {})
            path = idx.get("enums", {}).get(enum_name)
            if not path:
                return None
            return os.path.join(self.store.root, path)
        idx = self.store.index()["docsets"].get(docset, {})
        path = idx.get("enums", {}).get(enum_name)
        if not path:
            return None
        return os.path.join(self.store.root, docset, path)

    def tool_lookup_method(self, args):
        interface = args.get("interface")
        member = args.get("member")
        docset = args.get("docset") or "sldworksapi"
        fmt = args.get("format") or "markdown"
        path = self.resolve_member_path(interface, member, docset, fmt)
        if not path:
            return {"error": "Not found"}
        if fmt == "json":
            return {"path": path, "data": load_json(path)}
        return {"path": path, "content": read_text(path)}

    def tool_search_api(self, args):
        query = args.get("query", "")
        docset = args.get("docset")
        doc_type = args.get("type")
        interface = args.get("interface")
        categories = set(args.get("categories") or [])
        limit = int(args.get("limit") or 20)
        fmt = args.get("format") or "markdown"

        search_data = self.store.json_search() if fmt == "json" else self.store.search()
        docs = search_data.get("documents", [])

        tokens = tokenize(query)
        results = []
        for doc in docs:
            if docset and doc.get("docset") != docset:
                continue
            if doc_type and doc.get("type") != doc_type:
                continue
            if interface and doc.get("interface") != interface:
                continue
            if categories and not categories.issubset(doc.get("categories") or []):
                continue
            score = score_doc(doc, tokens)
            if score == 0:
                continue
            results.append({"score": score, "doc": doc})

        results.sort(key=lambda item: item["score"], reverse=True)
        return {"results": results[:limit]}

    def tool_get_interface_members(self, args):
        interface = args.get("interface")
        docset = args.get("docset") or "sldworksapi"
        fmt = args.get("format") or "markdown"
        if fmt == "json":
            idx = self.store.json_index()["docsets"].get(docset, {})
        else:
            idx = self.store.index()["docsets"].get(docset, {})
        iface = idx.get("interfaces", {}).get(interface)
        if not iface:
            return {"error": "Not found"}
        members = sorted(iface.get("members", {}).keys())
        return {"interface": interface, "member_count": iface.get("member_count", len(members)), "members": members}

    def tool_get_enum_values(self, args):
        enum_name = args.get("enum")
        docset = args.get("docset") or "swconst"
        fmt = args.get("format") or "json"
        path = self.resolve_enum_path(enum_name, docset, fmt)
        if not path:
            return {"error": "Not found"}
        if fmt == "json":
            data = load_json(path)
            return {"enum": enum_name, "values": data.get("values", []), "path": path}
        text = read_text(path)
        values = []
        lines = text.splitlines()
        in_table = False
        for line in lines:
            if line.strip().startswith("| Member"):
                in_table = True
                continue
            if in_table:
                if not line.strip().startswith("|"):
                    break
                cols = [c.strip() for c in line.strip("|").split("|")]
                if len(cols) >= 3:
                    values.append({"member": cols[0].strip("`"), "value": cols[1], "description": cols[2]})
        return {"enum": enum_name, "values": values, "path": path}

    def tool_find_related(self, args):
        interface = args.get("interface")
        member = args.get("member")
        docset = args.get("docset") or "sldworksapi"
        limit = int(args.get("limit") or 20)
        path = self.resolve_member_path(interface, member, docset, "json")
        if not path:
            return {"error": "Not found"}
        data = load_json(path)
        related = data.get("related", [])
        return {"interface": interface, "member": member, "related": related[:limit]}

    def tool_get_examples(self, args):
        interface = args.get("interface")
        member = args.get("member")
        query = args.get("query")
        limit = int(args.get("limit") or 10)

        if interface and member:
            path = self.resolve_member_path(interface, member, "sldworksapi", "json")
            if not path:
                return {"error": "Not found"}
            data = load_json(path)
            examples = data.get("examples", [])

            mapping = self.store.examples_map()
            extra = []
            for title in mapping.get(f"{interface}.{member}", []):
                doc = self.store.progguide_titles().get(title)
                if doc:
                    extra.append(doc)

            return {
                "member": f"{interface}.{member}",
                "examples": examples,
                "related_examples": extra[:limit],
            }

        if query:
            tokens = tokenize(query)
            docs = [d for d in self.store.search().get("documents", []) if d.get("docset") == "progguide"]
            results = []
            for doc in docs:
                score = score_doc(doc, tokens)
                if score == 0:
                    continue
                results.append({"score": score, "doc": doc})
            results.sort(key=lambda item: item["score"], reverse=True)
            return {"results": results[:limit]}

        return {"error": "No query or member provided"}

    _TOOL_DISPATCH = {
        "solidworks_lookup_method": "tool_lookup_method",
        "solidworks_search_api": "tool_search_api",
        "solidworks_get_interface_members": "tool_get_interface_members",
        "solidworks_get_enum_values": "tool_get_enum_values",
        "solidworks_find_related": "tool_find_related",
        "solidworks_get_examples": "tool_get_examples",
    }

    def handle_tools_call(self, request_id, params):
        name = params.get("name")
        args = params.get("arguments") or {}
        handler_name = self._TOOL_DISPATCH.get(name)
        if handler_name is None:
            self.error(request_id, -32601, "Unknown tool")
            return
        result = getattr(self, handler_name)(args)
        self.result(request_id, {"content": [{"type": "text", "text": json.dumps(result, indent=2)}]})

    def handle(self, message):
        method = message.get("method")
        request_id = message.get("id")
        params = message.get("params") or {}

        if method == "initialize":
            self.handle_initialize(request_id, params)
            return
        if method == "tools/list":
            self.handle_tools_list(request_id)
            return
        if method == "tools/call":
            self.handle_tools_call(request_id, params)
            return
        if method == "initialized":
            return

        if request_id is not None:
            self.error(request_id, -32601, "Method not found")


def main():
    root = os.environ.get("SW_API_DATA_ROOT")
    if not root:
        root = os.path.join(os.path.dirname(__file__), "..", "solidworks-api")
        root = os.path.abspath(root)

    if not os.path.isdir(root):
        sys.stderr.write(f"Data root not found: {root}\n")
        sys.exit(1)

    store = DataStore(root)
    server = MCPServer(store)

    for line in sys.stdin:
        line = line.strip()
        if not line:
            continue
        try:
            message = json.loads(line)
        except json.JSONDecodeError:
            continue
        server.handle(message)


if __name__ == "__main__":
    main()
