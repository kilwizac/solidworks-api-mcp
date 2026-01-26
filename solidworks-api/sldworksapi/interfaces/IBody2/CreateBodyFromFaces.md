---
type: method
interface: IBody2
member: CreateBodyFromFaces
returns: System.Object
parameters:
  -
    name: NumOfFaces
    type: System.Int32
    description: Number of faces to use to create the body
  -
    name: FaceList
    type: System.Object
    description: Array containing the faces to use to create the body
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.ICreateBodyFromFaces
keywords:
  - temporary
  - bodies
  - createbodyfromfaces
  - ibody2
  - body2
  - create
  - body
  - faces
  - num
  - int32
  - face
  - list
  - object
  - selected
  - vb
  - net
  - vba
---

# IBody2.CreateBodyFromFaces

Creates a temporary body from the faces.

## Signature

```csharp
System.Object CreateBodyFromFaces( 
   System.Int32
NumOfFaces
,
   System.Object
FaceList
)
```
## Parameters

- `NumOfFaces` (System.Int32): Number of faces to use to create the body
- `FaceList` (System.Object): Array containing the faces to use to create the body

## Return Value

Object for the body

## Examples

- Create Body from Selected Faces (C#) (Create_Body_From_Selected_Faces_Example_CSharp.htm)
- Create Body from Selected Faces (VB.NET) (Create_Body_From_Selected_Faces_Example_VBNET.htm)
- Create Body from Selected Faces (VBA) (Create_Body_From_Selected_Faces_Example_VB.htm)

## See Also

- `IBody2.ICreateBodyFromFaces`