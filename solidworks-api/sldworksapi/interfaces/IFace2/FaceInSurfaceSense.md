---
type: method
interface: IFace2
member: FaceInSurfaceSense
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related: []
keywords:
  - faceinsurfacesense
  - iface2
  - face2
  - face
  - surface
  - sense
  - boolean
  - determine
  - type
  - vba
  - normal
  - planar
  - select
  - edges
  - all
  - holes
  - vb
  - net
---

# IFace2.FaceInSurfaceSense

Checks whether the face normal has the opposite direction (sense) as the underlying surface.

## Signature

```csharp
System.Boolean FaceInSurfaceSense()
```
## Parameters

None.

## Return Value

True if face normal and surface normal are in the opposite direction, false if they are in same direction

## Remarks

Although the name of this method and its results are somewhat contradictory, the results are:
True if face normal and surface normal are in the opposite direction.
False if they are in the same direction.
You might need this method because the underlying surface geometry can have an orientation where its normal vector points toward or away from the body material. The normal vector of faces, however, are directed away from the body material.

## Examples

- Determine Type of Face (VBA) (Determine_Type_of_Face_Example_VB.htm)
- Get Normal of Planar Surface (VBA) (Get_Normal_of_Planar_Surface_Example_VB.htm)
- Select Edges of All Holes on Face (C#) (Select_Edges_of_All_Holes_on_Face_Example_CSharp.htm)
- Select Edges of All Holes on Face (VB.NET) (Select_Edges_of_All_Holes_on_Face_Example_VBNET.htm)
- Select Edges of All Holes on Face (VBA) (Select_Edges_of_All_Holes_on_Face_Example_VB.htm)