---
type: method
interface: IModelDoc2
member: IsOpenedReadOnly
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
  - IModelDoc2.IsOpenedViewOnly
  - IModelDoc2.SetReadOnlyState
keywords:
  - document
  - open
  - isopenedreadonly
  - imodeldoc2
  - model
  - doc2
  - opened
  - read
  - only
  - boolean
---

# IModelDoc2.IsOpenedReadOnly

Gets whether a SOLIDWORKS document is open in read-only mode.

## Signature

```csharp
System.Boolean IsOpenedReadOnly()
```
## Parameters

None.

## Return Value

True if this document is read-only, false if not

## See Also

- `IModelDoc2.IsOpenedViewOnly`
- `IModelDoc2.SetReadOnlyState`