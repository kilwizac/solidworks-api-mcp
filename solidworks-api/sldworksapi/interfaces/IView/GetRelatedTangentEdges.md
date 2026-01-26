---
type: method
interface: IView
member: GetRelatedTangentEdges
returns: System.Object
parameters:
  -
    name: BendLine
    type: System.Object
    description: Bendline whose visible tangent edges you want (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - geometry
  - ui
related:
  - IView.GetRelatedTangentEdgeCount
  - IView.IGetRelatedTangentEdges
keywords:
  - tangent
  - edges
  - sheet
  - metal
  - see
  - also
  - isheetmetalfeaturedata
  - getrelatedtangentedges
  - iview
  - view
  - related
  - bend
  - line
  - object
  - bendlines
  - vb
  - net
  - vba
---

# IView.GetRelatedTangentEdges

Gets the visible tangent edges for the specified bendline in a flat-pattern drawing view.

## Signature

```csharp
System.Object GetRelatedTangentEdges( 
   System.Object
BendLine
)
```
## Parameters

- `BendLine` (System.Object): Bendline whose visible tangent edges you want (see Remarks )

## Return Value

Array of visible tangent edges for the specified bendline

## Remarks

Hidden tangent edges are not returned by this method. Use
IDrawingDoc::ViewTangentEdges
to change the visibility of tangent edges in a drawing.
Call
IView::GetBendLineCount
to get the number of bendlines in a flat-pattern drawing view. Call
IView::GetBendLines
or
IView::IGetBendLines
to get an array of bendlines for a flat-pattern drawing view. Use the value returned by IView::GetBendLineCount to determine the index of the bendline in the array of bendlines you want.

## Examples

- Get Tangent Edges of Bendlines (VB.NET) (Get_Tangent_Edges_of_Bendlines_Example_VBNET.htm)
- Get Tangent Edges of Bendlines (VBA) (Get_Tangent_Edges_of_Bendlines_Example_VB.htm)
- Get Tangent Edges of Bendlines (C#) (Get_Tangent_Edges_of_Bendlines_Example_CSharp.htm)

## See Also

- `IView.GetRelatedTangentEdgeCount`
- `IView.IGetRelatedTangentEdges`