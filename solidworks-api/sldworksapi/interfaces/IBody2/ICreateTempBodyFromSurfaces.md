---
type: method
interface: IBody2
member: ICreateTempBodyFromSurfaces
returns: Body2
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.CreateTempBodyFromSurfaces
keywords:
  - temporary
  - bodies
  - icreatetempbodyfromsurfaces
  - ibody2
  - body2
  - create
  - temp
  - body
  - surfaces
---

# IBody2.ICreateTempBodyFromSurfaces

Creates a temporary body from a list of existing trimmed surfaces.

## Signature

```csharp
Body2 ICreateTempBodyFromSurfaces()
```
## Parameters

None.

## Return Value

Temporary body

## Remarks

This method is the final call to a set of related functions (same as
IBody2::CreateBodyFromSurfaces
) that are designed to construct a temporary body from trimmed surfaces.
The first call in this process should be to
IPartDoc::CreateNewBody2
, so as to arrange for a placeholder for all the trimmed surfaces.

## See Also

- `IBody2.CreateTempBodyFromSurfaces`