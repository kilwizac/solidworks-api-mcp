---
type: method
interface: IBody2
member: IGetFaces
returns: Face2
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of faces on the body (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.GetFaces
  - IBody2.GetFirstFace
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
  - igetfaces
  - body2
  - count
  - int32
  - face2
---

# IBody2.IGetFaces

Gets all of the faces on the body.

## Signature

```csharp
Face2 IGetFaces( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of faces on the body (see Remarks )

## Return Value

in-process, unmanaged C++: Pointer to an array of faces on the body VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
IBody2::GetFaceCount
to get the value of Count.

## See Also

- `IBody2.GetFaces`
- `IBody2.GetFirstFace`
- `IBody2.IGetFirstFace`