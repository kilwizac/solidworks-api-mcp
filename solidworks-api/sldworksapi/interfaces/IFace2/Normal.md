---
type: property
interface: IFace2
member: Normal
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IFace2.INormal
keywords:
  - normal
  - iface2
  - face2
  - object
  - planar
  - face
  - vba
  - surface
  - plane
  - sketch
readonly: null
---

# IFace2.Normal

Gets the unit normal vector for any planar face.

## Signature

```csharp
System.Object Normal {get; set;}
```
## Parameters

None.

## Return Value

Array of 3 doubles (i,j,k)

## Remarks

If the face is not a planar face, then this property returns 0,0,0.

## Examples

- Get Normal of Planar Face (VBA) (Get_Normal_of_Planar_Face_Example_VB.htm)
- Get Normal of Planar Surface (VBA) (Get_Normal_of_Planar_Surface_Example_VB.htm)
- Get Plane or Face for Sketch (VBA) (Get_Plane_or_Face_for_Sketch_Example_VB.htm)

## See Also

- `IFace2.INormal`