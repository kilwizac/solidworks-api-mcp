import json
import os
import re
import sys
from collections import defaultdict

from fastmcp import FastMCP

PROTOCOL_VERSION = "2024-11-05"
SERVER_NAME = "solidworks-mcp"
SERVER_VERSION = "0.1.0"


def load_json(path):
    with open(path, "r", encoding="utf-8") as handle:
        return json.load(handle)


def read_text(path):
    with open(path, "r", encoding="utf-8", errors="ignore") as handle:
        return handle.read()


def tokenize(text):
    return re.findall(r"[a-z0-9]+", text.lower()) if text else []


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
            self._json_search = load_json(
                os.path.join(self.root, "json", "_search_index.json")
            )
        return self._json_search

    def examples_map(self):
        if self._examples_map is not None:
            return self._examples_map
        path = os.path.join(
            self.root, "json", "sldworksapi", "patterns", "examples-to-members.json"
        )
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
            match = re.match(r"- `([^`]+)`", line)
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

    def search_api(self, query, limit=10):
        """Search API documentation by query string."""
        tokens = tokenize(query)
        if not tokens:
            return []

        docs = self.search().get("documents", [])
        scored = []
        for doc in docs:
            score = score_doc(doc, tokens)
            if score > 0:
                scored.append((score, doc))

        scored.sort(reverse=True, key=lambda x: x[0])
        return [doc for score, doc in scored[:limit]]

    def get_interface_info(self, interface_name):
        """Get detailed information about a specific interface."""
        search_results = self.search_api(interface_name, limit=5)

        for doc in search_results:
            if doc.get("interface", "").lower() == interface_name.lower():
                return doc

        return None

    def get_method_info(self, interface_name, method_name):
        """Get information about a specific method."""
        query = f"{interface_name} {method_name}"
        results = self.search_api(query, limit=10)

        for doc in results:
            if (
                doc.get("interface", "").lower() == interface_name.lower()
                and doc.get("title", "").lower() == method_name.lower()
            ):
                return doc

        return None


def main():
    """Main entry point for FastMCP Cloud."""
    root = os.environ.get("SW_API_DATA_ROOT")
    if not root:
        root = os.path.join(os.path.dirname(__file__), "..", "solidworks-api")
        root = os.path.abspath(root)

    if not os.path.isdir(root):
        sys.stderr.write(f"Data root not found: {root}\n")
        sys.exit(1)

    store = DataStore(root)

    # Create FastMCP server instance
    mcp = FastMCP(SERVER_NAME, SERVER_VERSION)

    @mcp.tool()
    def search_solidworks_api(query: str, limit: int = 10) -> list:
        """
        Search the SolidWorks API documentation.

        Args:
            query: Search terms (e.g., "create feature", "get properties")
            limit: Maximum number of results to return (default: 10)

        Returns:
            List of matching documentation entries with titles, summaries, and relevance scores.
        """
        results = store.search_api(query, limit=limit)
        return [
            {
                "title": doc.get("title"),
                "summary": doc.get("summary"),
                "interface": doc.get("interface"),
                "docset": doc.get("docset"),
                "href": doc.get("href"),
            }
            for doc in results
        ]

    @mcp.tool()
    def get_interface_details(interface_name: str) -> dict:
        """
        Get detailed information about a specific API interface.

        Args:
            interface_name: Name of the interface (e.g., "IDocument", "IFeature")

        Returns:
            Detailed interface documentation including methods, properties, and examples.
        """
        info = store.get_interface_info(interface_name)
        if not info:
            return {"error": f"Interface '{interface_name}' not found"}

        return info

    @mcp.tool()
    def get_method_details(interface_name: str, method_name: str) -> dict:
        """
        Get detailed information about a specific method or property.

        Args:
            interface_name: Name of the interface (e.g., "IDocument")
            method_name: Name of the method or property (e.g., "CreateFeature")

        Returns:
            Detailed method/property documentation including parameters and examples.
        """
        info = store.get_method_info(interface_name, method_name)
        if not info:
            return {
                "error": f"Method '{method_name}' not found in interface '{interface_name}'"
            }

        return info

    @mcp.tool()
    def search_programming_guides(query: str, limit: int = 5) -> list:
        """
        Search programming guides and code examples.

        Args:
            query: Search terms (e.g., "macro best practices", "event handler")
            limit: Maximum number of results to return (default: 5)

        Returns:
            List of matching programming guides with summaries and links.
        """
        results = store.search_api(query, limit=limit)
        progguide_results = [doc for doc in results if doc.get("docset") == "progguide"]

        return [
            {
                "title": doc.get("title"),
                "summary": doc.get("summary"),
                "href": doc.get("href"),
                "categories": doc.get("categories"),
            }
            for doc in progguide_results
        ]

    return mcp


if __name__ == "__main__":
    # For local testing with standard MCP protocol
    root = os.environ.get("SW_API_DATA_ROOT")
    if not root:
        root = os.path.join(os.path.dirname(__file__), "..", "solidworks-api")
        root = os.path.abspath(root)

    if not os.path.isdir(root):
        sys.stderr.write(f"Data root not found: {root}\n")
        sys.exit(1)

    store = DataStore(root)
    mcp = main()
    mcp.run()
