---
type: method
interface: ILoop2
member: GetEdges
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - ILoop2.EnumEdges
  - ILoop2.GetEdgeCount
  - ILoop2.IGetEdges
keywords:
  - getedges
  - iloop2
  - loop2
  - edges
  - object
  - find
  - outside
  - face
  - vba
  - select
  - loop
  - fill
  - holes
  - part
  - vb
  - net
  - all
---

# ILoop2.GetEdges

Gets all the edges in the loop.

## Signature

```csharp
System.Object GetEdges()
```
## Parameters

None.

## Return Value

Array of edges that make up the loop

## Remarks

The
IEdge
objects are returned in a clockwise (CW) or counter-clockwise (CCW) manner based on the direction of the
ILoop2
.
The loop direction is determined as follows: if a loop is viewed along its direction, with the face normal pointing upwards, then the face that owns the loop is to the left. This means that inner loops are CW and outer loops are CCW. To determine if a loop is an outer loop, use
ILoop2::IsOuter
.
Because an edge is shared by multiple loops, the edge direction might be opposite to the direction of the ILoop2. To check this, use
IEdge::EdgeInFaceSense
.
If the loop is a singular loop, use
ILoop2::GetVertices
to get its position (a single vertex). ILoop2::GetEdges returns an empty array if the loop is singular.

## Examples

- Find Outside Edges of Face (VBA) (Find_Outside_Edges_of_Face_Example_VB.htm)
- Select Loop of Edges (VBA) (Select_Loop_of_Edges_Example_VB_.htm)
- Fill Holes in Part (C#) (Fill_Holes_in_Part_Example_CSharp.htm)
- Fill Holes in Part (VB.NET) (Fill_Holes_in_Part_Example_VBNET.htm)
- Fill Holes in Part (VBA) (Fill_Holes_in_Part_Example_VB.htm)
- Select Edges of All Holes on Face (C#) (Select_Edges_of_All_Holes_on_Face_Example_CSharp.htm)
- Select Edges of All Holes on Face (VB.NET) (Select_Edges_of_All_Holes_on_Face_Example_VBNET.htm)
- Select Edges of All Holes on Face (VBA) (Select_Edges_of_All_Holes_on_Face_Example_VB.htm)

## See Also

- `ILoop2.EnumEdges`
- `ILoop2.GetEdgeCount`
- `ILoop2.IGetEdges`