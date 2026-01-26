---
type: method
interface: IBody2
member: IGetTessellation
returns: Tessellation
parameters:
  -
    name: NumOfFaces
    type: System.Int32
    description: Number of faces to tessellate
  -
    name: FaceList
    type: Face2
    description: Array of faces to tessellate; if this is NULL, then SOLIDWORKS will tessellate the body
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.GetTessellation
keywords:
  - tessellation
  - see
  - also
  - itessellation
  - faces
  - body
  - igettessellation
  - ibody2
  - body2
  - num
  - int32
  - face
  - list
  - face2
  - tessellate
---

# IBody2.IGetTessellation

Gets the ITessellation object.

## Signature

```csharp
Tessellation IGetTessellation( 
   System.Int32
NumOfFaces
,
   ref Face2
FaceList
)
```
## Parameters

- `NumOfFaces` (System.Int32): Number of faces to tessellate
- `FaceList` (Face2): Array of faces to tessellate; if this is NULL, then SOLIDWORKS will tessellate the body

## Return Value

Pointer to the ITessellation object

## Examples

- Tessellate a Body (C#) (Tessellate_a_Body_Example_CSharp.htm)

## See Also

- `IBody2.GetTessellation`