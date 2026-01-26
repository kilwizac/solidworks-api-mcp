---
type: method
interface: IModelDoc2
member: IsOpenedViewOnly
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - file-io
  - ui
related:
  - IModelDoc2.IsOpenedReadOnly
  - IModelDoc2.SetReadOnlyState
keywords:
  - open
  - document
  - isopenedviewonly
  - imodeldoc2
  - model
  - doc2
  - opened
  - view
  - only
  - boolean
---

# IModelDoc2.IsOpenedViewOnly

Gets whether a SOLIDWORKS document is open in view-only mode.

## Signature

```csharp
System.Boolean IsOpenedViewOnly()
```
## Parameters

None.

## Return Value

True if document is in a view-only state, false if not

## Remarks

Files are loaded using multi-threading. When a file is loading, the graphics are displayed immediately and the end-user is able to perform certain view zooming and panning functions. Until all data and references are loaded, the file is in view-only mode.
A file can be in view-only mode if the end-user chose to load the file for viewing purposes. You application should check for view-only mode to determine how to proceed.
NOTE:
When a file is in view-only mode, many API queries return NULL or empty data.

## See Also

- `IModelDoc2.IsOpenedReadOnly`
- `IModelDoc2.SetReadOnlyState`