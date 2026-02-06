"""Tests for performance-related changes in the MCP server modules."""

import json
import os
import re
import sys
import unittest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))

from server.solidworks_mcp_server import (
    _EXAMPLE_MEMBER_RE,
    _TOKEN_RE,
    MCPServer,
    DataStore,
    score_doc,
    tokenize,
)


class TestTokenize(unittest.TestCase):
    """Verify tokenize returns the same results after regex pre-compilation."""

    def test_basic_words(self):
        self.assertEqual(tokenize("Hello World"), ["hello", "world"])

    def test_mixed_case(self):
        self.assertEqual(tokenize("ISldWorks"), ["isldworks"])

    def test_alphanumeric(self):
        self.assertEqual(tokenize("Part2Doc"), ["part2doc"])

    def test_special_characters(self):
        self.assertEqual(tokenize("get_feature-data!"), ["get", "feature", "data"])

    def test_empty_string(self):
        self.assertEqual(tokenize(""), [])

    def test_none(self):
        self.assertEqual(tokenize(None), [])

    def test_numbers_only(self):
        self.assertEqual(tokenize("123 456"), ["123", "456"])

    def test_camel_case_becomes_single_token(self):
        result = tokenize("GetFeatureData")
        self.assertEqual(result, ["getfeaturedata"])


class TestTokenRegex(unittest.TestCase):
    """Verify the compiled regex constant matches expected patterns."""

    def test_is_compiled(self):
        self.assertIsInstance(_TOKEN_RE, re.Pattern)

    def test_matches_lowercase(self):
        self.assertEqual(_TOKEN_RE.findall("hello world"), ["hello", "world"])

    def test_matches_digits(self):
        self.assertEqual(_TOKEN_RE.findall("abc123"), ["abc123"])


class TestExampleMemberRegex(unittest.TestCase):
    """Verify the compiled example member regex works correctly."""

    def test_is_compiled(self):
        self.assertIsInstance(_EXAMPLE_MEMBER_RE, re.Pattern)

    def test_matches_member_line(self):
        m = _EXAMPLE_MEMBER_RE.match("- `ISldWorks.OpenDoc`")
        self.assertIsNotNone(m)
        self.assertEqual(m.group(1), "ISldWorks.OpenDoc")

    def test_no_match_plain_text(self):
        m = _EXAMPLE_MEMBER_RE.match("Some plain text")
        self.assertIsNone(m)


class TestScoreDoc(unittest.TestCase):
    """Verify score_doc returns correct scores."""

    def test_title_match(self):
        doc = {"title": "GetFeature", "summary": "", "keywords": [], "categories": [], "interface": "", "type": ""}
        score = score_doc(doc, ["getfeature"])
        self.assertEqual(score, 4)

    def test_keyword_match(self):
        doc = {"title": "", "summary": "", "keywords": ["feature"], "categories": [], "interface": "", "type": ""}
        score = score_doc(doc, ["feature"])
        self.assertEqual(score, 3)

    def test_multiple_fields_match(self):
        doc = {"title": "feature", "summary": "feature info", "keywords": ["feature"], "categories": [], "interface": "", "type": ""}
        score = score_doc(doc, ["feature"])
        self.assertEqual(score, 4 + 3 + 1)  # title + keywords + summary

    def test_no_match(self):
        doc = {"title": "Something", "summary": "else", "keywords": [], "categories": [], "interface": "", "type": ""}
        score = score_doc(doc, ["nonexistent"])
        self.assertEqual(score, 0)

    def test_empty_tokens(self):
        doc = {"title": "Feature", "summary": "Data", "keywords": [], "categories": [], "interface": "", "type": ""}
        score = score_doc(doc, [])
        self.assertEqual(score, 0)

    def test_none_fields(self):
        doc = {}
        score = score_doc(doc, ["test"])
        self.assertEqual(score, 0)


class TestToolDispatch(unittest.TestCase):
    """Verify dict-based dispatch works for all tool names."""

    def test_dispatch_table_has_all_tools(self):
        expected = {
            "solidworks_lookup_method",
            "solidworks_search_api",
            "solidworks_get_interface_members",
            "solidworks_get_enum_values",
            "solidworks_find_related",
            "solidworks_get_examples",
        }
        self.assertEqual(set(MCPServer._TOOL_DISPATCH.keys()), expected)

    def test_dispatch_values_are_valid_methods(self):
        for tool_name, method_name in MCPServer._TOOL_DISPATCH.items():
            self.assertTrue(
                hasattr(MCPServer, method_name),
                f"MCPServer missing method '{method_name}' for tool '{tool_name}'",
            )


class TestIssubsetWithoutSet(unittest.TestCase):
    """Verify that set.issubset works with list arguments (no wrapping needed)."""

    def test_issubset_with_list(self):
        categories = {"api", "feature"}
        doc_categories = ["api", "feature", "design"]
        self.assertTrue(categories.issubset(doc_categories))

    def test_issubset_with_empty_list(self):
        categories = {"api"}
        self.assertFalse(categories.issubset([]))

    def test_empty_set_issubset_of_list(self):
        categories = set()
        self.assertTrue(categories.issubset(["anything"]))


if __name__ == "__main__":
    unittest.main()
