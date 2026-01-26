---
type: method
interface: IView
member: IGetRelatedTangentEdges
returns: Edge
parameters:
  -
    name: BendLine
    type: SketchSegment
    description: Bendline whose visible tangent edges you want (see Remarks )
  -
    name: NumOfTangentEdges
    type: System.Int32
    description: Number of visible tangent edges for the specified bendline
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - geometry
  - ui
related:
  - IView.GetRelatedTangentEdges
keywords:
  - sheet
  - metal
  - see
  - also
  - isheetmetalfeaturedata
  - edges
  - tangent
  - igetrelatedtangentedges
  - iview
  - view
  - related
  - bend
  - line
  - sketch
  - segment
  - num
  - int32
  - edge
---

# IView.IGetRelatedTangentEdges

Gets the visible tangent edges for the specified bendline in a flat-pattern drawing view.

## Signature

```csharp
Edge IGetRelatedTangentEdges( 
   SketchSegment
BendLine
,
   System.Int32
NumOfTangentEdges
)
```
## Parameters

- `BendLine` (SketchSegment): Bendline whose visible tangent edges you want (see Remarks )
- `NumOfTangentEdges` (System.Int32): Number of visible tangent edges for the specified bendline

## Return Value

in-process, unmanaged C++: Pointer to an array of visible tangent edges for the specified bendline VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
IView::GetRelatedTangentEdgeCount
to get NumOfTangentEdges.
Hidden tangent edges are not returned by this method. Call
IDrawingDoc::ViewTangentEdges
to change the visibility of tangent edges in a drawing.
Call
IView::GetBendLineCount
to get the number of bendlines in a flat-pattern drawing view. Call
IView::GetBendLines
or
IView::IGetBendLines
to get an array of bendlines for a flat-pattern drawing view. Use the value returned by IView::GetBendLineCount to determine the index of the bendline in the array of bendlines you want.

## See Also

- `IView.GetRelatedTangentEdges`