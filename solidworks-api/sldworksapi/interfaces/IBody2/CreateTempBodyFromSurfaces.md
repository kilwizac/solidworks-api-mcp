---
type: method
interface: IBody2
member: CreateTempBodyFromSurfaces
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.ICreateTempBodyFromSurfaces
keywords:
  - temporary
  - bodies
  - createtempbodyfromsurfaces
  - ibody2
  - body2
  - create
  - temp
  - body
  - surfaces
  - object
---

# IBody2.CreateTempBodyFromSurfaces

Creates a temporary body from a list of existing trimmed surfaces.

## Signature

```csharp
System.Object CreateTempBodyFromSurfaces()
```
## Parameters

None.

## Return Value

Body

## Remarks

This method is the final call to a set of related functions (same as
IBody2::CreateBodyFromSurfaces
) that are designed to construct a temporary body from trimmed surfaces.
The first call in this process should be to
IPartDoc::CreateNewBody
, so as to arrange for a placeholder for all the trimmed surfaces.

## See Also

- `IBody2.ICreateTempBodyFromSurfaces`