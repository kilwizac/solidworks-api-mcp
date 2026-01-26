---
type: method
interface: ILoop2
member: GetFirstCoEdge
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - ILoop2.EnumCoEdges
  - ILoop2.GetCoEdgeCount
  - ILoop2.GetCoEdges
  - ILoop2.IGetCoEdges
  - ILoop2.IGetFirstCoEdge
keywords:
  - getfirstcoedge
  - iloop2
  - loop2
  - first
  - co
  - edge
  - object
  - determine
  - type
  - face
  - vba
  - select
  - tangent
  - faces
  - edges
  - all
  - holes
  - vb
  - net
---

# ILoop2.GetFirstCoEdge

Gets the first coedge of the loop.

## Signature

```csharp
System.Object GetFirstCoEdge()
```
## Parameters

None.

## Return Value

First coedge in loop

## Remarks

The
ICoEdge
objects are returned in a CW or CCW manner based on the direction of the
ILoop2
.
The loop direction is determined as follows: if a loop is viewed along its direction, with the face normal pointing upwards, then the face that owns the loop is to the left. This means that inner loops are CW and outer loops are CCW. To determine if a loop is an outer loop, see
ILoop2::IsOuter
.
The coedge direction always aligns with the direction of the loop.

## Examples

- Determine Type of Face (VBA) (Determine_Type_of_Face_Example_VB.htm)
- Select Tangent Faces (VBA) (Select_Tangent_Faces_Example_VB.htm)
- Select Edges of All Holes on Face (C#) (Select_Edges_of_All_Holes_on_Face_Example_CSharp.htm)
- Select Edges of All Holes on Face (VB.NET) (Select_Edges_of_All_Holes_on_Face_Example_VBNET.htm)
- Select Edges of All Holes on Face (VBA) (Select_Edges_of_All_Holes_on_Face_Example_VB.htm)

## See Also

- `ILoop2.EnumCoEdges`
- `ILoop2.GetCoEdgeCount`
- `ILoop2.GetCoEdges`
- `ILoop2.IGetCoEdges`
- `ILoop2.IGetFirstCoEdge`