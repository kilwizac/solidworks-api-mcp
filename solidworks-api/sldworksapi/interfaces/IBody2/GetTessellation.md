---
type: method
interface: IBody2
member: GetTessellation
returns: System.Object
parameters:
  -
    name: FaceList
    type: System.Object
    description: Array of faces to tessellate; if this is empty, then SOLIDWORKS will tessellate the body
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.IGetTessellation
keywords:
  - tessellation
  - see
  - also
  - itessellation
  - faces
  - body
  - gettessellation
  - ibody2
  - body2
  - face
  - list
  - object
  - create
  - convert
  - non
  - manifold
  - bodies
  - vb
  - net
  - vba
---

# IBody2.GetTessellation

Gets the ITessellation object.

## Signature

```csharp
System.Object GetTessellation( 
   System.Object
FaceList
)
```
## Parameters

- `FaceList` (System.Object): Array of faces to tessellate; if this is empty, then SOLIDWORKS will tessellate the body

## Return Value

Object for the tessellation

## Examples

- Create and Convert Non-manifold Bodies (C#) (Create_and_Convert_Non-manifold_Bodies_Example_CSharp.htm)
- Create and Convert Non-manifold Bodies (VB.NET) (Create_and_Convert_Non-manifold_Bodies_Example_VBNET.htm)
- Create and Convert Non-manifold Bodies (VBA) (Create_and_Convert_Non-manifold_Bodies_Example_VB.htm)

## See Also

- `IBody2.IGetTessellation`