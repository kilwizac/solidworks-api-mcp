# Index File Schemas

## _index.json (Master Index)

Purpose: O(1) lookup by interface and member name.

```json
{
  "generated": "2024-01-15T10:30:00Z",
  "solidworks_version": "2024",
  "interfaces": {
    "ISldWorks": {
      "file": "interfaces/ISldWorks/_interface.md",
      "member_count": 312,
      "members": {
        "ActivateDoc3": "interfaces/ISldWorks/ActivateDoc3.md",
        "CloseDoc": "interfaces/ISldWorks/CloseDoc.md"
      }
    },
    "IModelDoc2": {
      "file": "interfaces/IModelDoc2/_interface.md",
      "member_count": 847,
      "members": {
        "GetTitle": "interfaces/IModelDoc2/GetTitle.md"
      }
    }
  },
  "enums": {
    "swDocumentTypes_e": "enums/swDocumentTypes_e.md"
  }
}
```

Rules:
- `interfaces.<InterfaceName>.members` maps member name to file path.
- `interfaces.<InterfaceName>.file` points to the interface overview.
- `enums` maps enum name to file path.

If multiple docsets are combined, wrap them to avoid key collisions:

```json
{
  "generated": "2024-01-15T10:30:00Z",
  "solidworks_version": "2024",
  "docsets": {
    "sldworksapi": {
      "interfaces": { },
      "enums": { }
    },
    "swconst": {
      "interfaces": { },
      "enums": { }
    }
  }
}
```

## _search_index.json (Search Metadata)

Purpose: Keyword and semantic search support across all documents.

```json
{
  "documents": [
    {
      "id": "IModelDoc2.GetTitle",
      "path": "interfaces/IModelDoc2/GetTitle.md",
      "type": "method",
      "interface": "IModelDoc2",
      "title": "GetTitle",
      "summary": "Returns the title of the document as displayed in the SOLIDWORKS title bar",
      "keywords": ["title", "document name", "file name", "caption", "display name"],
      "docset": "sldworksapi",
      "categories": ["core", "documents"],
      "parameters": [],
      "returns": "string"
    }
  ]
}
```

Rules:
- `id` is `Interface.Member` for members, or the enum/interface name for non-members.
- `summary` should be one sentence from the description or remarks.
- Include `parameters` and `returns` for methods and properties.
- Keep `keywords` and `categories` aligned with frontmatter.
