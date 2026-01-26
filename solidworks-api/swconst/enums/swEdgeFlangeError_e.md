---
type: enum
name: swEdgeFlangeError_e
description: Edge flange error codes.
member_count: 8
docset: swconst
categories:
  - constants
used_by: []
---

# swEdgeFlangeError_e

Edge flange error codes.

## Values

| Member | Value | Description |
|---|---|---|
| `swEdgeFlangeError_EdgeAlreadyExists` | 4 | = Specified edge already exists |
| `swEdgeFlangeError_EdgeNotSpecified` | 1 | = Input array of edges is empty |
| `swEdgeFlangeError_GenericError` | 7 | = Unknown error |
| `swEdgeFlangeError_InvalidEdge` | 5 | = Specified edge is invalid |
| `swEdgeFlangeError_MustSpecifyAtLeastOneEdge` | 6 | = You must specify at least one edge |
| `swEdgeFlangeError_NoError` | 0 | = No error |
| `swEdgeFlangeError_NumberOfEdgesAndSketchesNotEqual` | 3 | = Number of edges must equal the number of sketches |
| `swEdgeFlangeError_SketchNotSpecified` | 2 | = Input array of sketches is empty |