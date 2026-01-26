---
type: method
interface: IEdge
member: GetCurve
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - ICoEdge.GetCurve
  - ICoEdge.GetCurveParams
  - ICoEdge.GetEdge
  - IEdge.GetCurveParams2
keywords:
  - getcurve
  - iedge
  - edge
  - curve
  - object
  - dimension
  - drawing
  - vba
  - parameterization
  - entities
  - attached
  - cosmetic
  - thread
  - intersecting
  - face
  - length
  - select
  - tangent
  - edges
  - via
  - iteration
  - fill
  - holes
  - part
  - vb
  - net
  - all
---

# IEdge.GetCurve

Gets the underlying curve for this edge.

## Signature

```csharp
System.Object GetCurve()
```
## Parameters

None.

## Return Value

Pointer to the underlying curve for this edge

## Examples

- Dimension Edge in Drawing (VBA) (Dimension_Edge_in_Drawing_Example_VB.htm)
- Get Edge Curve Parameterization (VBA) (Get_Edge_Curve_Parameterization_Example_VB.htm)
- Get Entities Attached to Cosmetic Thread (VBA) (Get_Entities_Attached_To_Cosmetic_Thread_Example_VB.htm)
- Get Intersecting Face and Edge (VBA) (Get_Intersecting_Face_and_Edge_Example_VB.htm)
- Get Length of Edge (VBA) (Get_Length_of_Edge_Example_VB.htm)
- Select Tangent Edges Via Iteration (VBA) (Select_Tangent_Edges_Example_VB.htm)
- Fill Holes in Part (C#) (Fill_Holes_in_Part_Example_CSharp.htm)
- Fill Holes in Part (VB.NET) (Fill_Holes_in_Part_Example_VBNET.htm)
- Fill Holes in Part (VBA) (Fill_Holes_in_Part_Example_VB.htm)
- Select Edges of All Holes on Face (C#) (Select_Edges_of_All_Holes_on_Face_Example_CSharp.htm)
- Select Edges of All Holes on Face (VB.NET) (Select_Edges_of_All_Holes_on_Face_Example_VBNET.htm)
- Select Edges of All Holes on Face (VBA) (Select_Edges_of_All_Holes_on_Face_Example_VB.htm)

## See Also

- `ICoEdge.GetCurve`
- `ICoEdge.GetCurveParams`
- `ICoEdge.GetEdge`
- `IEdge.GetCurveParams2`