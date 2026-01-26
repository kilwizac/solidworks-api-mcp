---
type: method
interface: IBody2
member: EnumFaces
returns: EnumFaces2
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related: []
keywords:
  - enumfaces
  - ibody2
  - body2
  - faces
  - faces2
  - enumerate
  - bodies
---

# IBody2.EnumFaces

Returns an enumerated list of the faces in a body.

## Signature

```csharp
EnumFaces2 EnumFaces()
```
## Parameters

None.

## Return Value

Enumerated list of faces (see Remarks )

## Remarks

OLE automation applications should use
IBody2::GetFirstFace
and
IFace2::GetNextFace
.

## Examples

- Enumerate Bodies (C++) (Enumerate_Bodies_Example_CPlusPlus_COM.htm)