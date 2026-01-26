---
type: method
interface: IEdge
member: GetStartVertex
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IEdge.GetEndVertex
  - IEdge.IGetEndVertex
  - IEdge.IGetStartVertex
keywords:
  - getstartvertex
  - iedge
  - edge
  - start
  - vertex
  - object
  - check
  - interference
  - using
  - imodeler
  - checkinterference
  - vba
  - display
  - vertices
  - radius
  - variable
  - fillet
  - modify
  - weld
  - bead
  - vb
  - net
---

# IEdge.GetStartVertex

Gets the starting vertex for this edge.

## Signature

```csharp
System.Object GetStartVertex()
```
## Parameters

None.

## Return Value

Vertex

## Remarks

If no vertex exists for this edge (such as the edge of a newly created cylinder), then this method returns null.
This method and
IEdge::GetEndVertex
or
IEdge::IGetEndVertex
return distinct vertices, unless the edge is closed.
Because edges have no natural direction, you cannot necessarily predict which of the two points you will get first and which last.
Use
ICoEdge::GetCurveParams
or
ICoEdge::IGetCurveParams
to get consistent start and end positions.

## Examples

- Check Interference Using IModeler::CheckInterference (VBA) (Check_Interference_using_Modeler_CheckInterference_Example_VB.htm)
- Display Vertices (VBA) (Display_Vertices_Example_VB.htm)
- Get Radius of Variable Radius Fillet (VBA) (Get_Radius_of_Variable_Radius_Fillet_Example_VB.htm)
- Get Vertex (VBA) (Get_Vertex_Example_VB.htm)
- Modify Fillet Weld Bead (VBA) (Modify_Fillet_Weld_Bead_Example_VB.htm)
- Modify Fillet Weld Bead (VB.NET) (Modify_Fillet_Weld_Bead_Example_VBNET.htm)
- Modify Fillet Weld Bead (C#) (Modify_Fillet_Weld_Bead_Example_CSharp.htm)

## See Also

- `IEdge.GetEndVertex`
- `IEdge.IGetEndVertex`
- `IEdge.IGetStartVertex`