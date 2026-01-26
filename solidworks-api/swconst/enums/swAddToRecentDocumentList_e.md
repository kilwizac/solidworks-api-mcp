---
type: enum
name: swAddToRecentDocumentList_e
description: Recent Documents list actions for a document opened using ISldWorks::OpenDoc7 and IDocumentSpecification::AddToRecentDocumentList.
member_count: 3
docset: swconst
categories:
  - constants
used_by: []
---

# swAddToRecentDocumentList_e

Recent Documents list actions for a document opened using ISldWorks::OpenDoc7 and IDocumentSpecification::AddToRecentDocumentList.

## Values

| Member | Value | Description |
|---|---|---|
| `swAddToRecentDocumentList_Add` | 1 |  |
| `swAddToRecentDocumentList_Default` | 0 | = Default OpenDoc7 action: if a configuration is specified, the document is not added to the Recent Documents list; if a configuration is not specified, the document is added |
| `swAddToRecentDocumentList_DontAdd` | 2 |  |