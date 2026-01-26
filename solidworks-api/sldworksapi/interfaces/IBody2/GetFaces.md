---
type: method
interface: IBody2
member: GetFaces
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.GetFaceCount
  - IBody2.GetFirstFace
  - IBody2.IGetFaces
  - IBody2.IGetFirstFace
keywords:
  - face
  - see
  - also
  - iface2
  - body
  - bodies
  - ibody2
  - faces
  - getfaces
  - body2
  - object
---

# IBody2.GetFaces

Gets all of the faces on the body.

## Signature

```csharp
System.Object GetFaces()
```
## Parameters

None.

## Return Value

Array of faces on the body

## Remarks

You can use this method instead of using
IBody2::GetFirstFace
and
IFace2::GetNextFace
to get all of the faces on a body.

## See Also

- `IBody2.GetFaceCount`
- `IBody2.GetFirstFace`
- `IBody2.IGetFaces`
- `IBody2.IGetFirstFace`