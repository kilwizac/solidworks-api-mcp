---
type: method
interface: IFace2
member: GetArea
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related: []
keywords:
  - getarea
  - iface2
  - face2
  - area
  - double
  - find
  - outside
  - edges
  - face
  - vba
  - sweep
  - planar
  - loop
  - along
  - vector
  - areas
  - midsurface
  - faces
  - vb
  - net
---

# IFace2.GetArea

Gets the area of this face.

## Signature

```csharp
System.Double GetArea()
```
## Parameters

None.

## Return Value

Face area in square meters (see Remarks )

## Remarks

This method calculates and returns an approximate value. If your application requires a more accurate value for a face area, then use tessellation. See
IBody2::GetTessellation
and
ITessellation
for details.

## Examples

- Find Outside Edges of Face (VBA) (Find_Outside_Edges_of_Face_Example_VB.htm)
- Sweep Planar Loop Along Vector (VBA) (Sweep_Planar_Loop_Along_Vector_Example_VB.htm)
- Get Areas of MidSurface Faces (C#) (Get_Areas_of_MidSurface_Faces_Example_CSharp.htm)
- Get Areas of MidSurface Faces (VB.NET) (Get_Areas_of_MidSurface_FAces_Example_VBNET.htm)
- Get Areas of MidSurface Faces (VBA) (Get_Areas_of_MidSurface_Faces_Example_VB.htm)