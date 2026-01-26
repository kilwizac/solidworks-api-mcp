---
type: method
interface: IView
member: GetDisplayEdgesInShadedMode
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - geometry
  - ui
related:
  - IView.GetDisplayTangentEdges2
  - IView.GetUseParentDisplayMode
  - IView.SetDisplayTangentEdges2
  - IView.UpdateViewDisplayGeometry
keywords:
  - drawing
  - views
  - see
  - also
  - iview
  - display
  - mode
  - edges
  - view
  - edge
  - iedge
  - getdisplayedgesinshadedmode
  - shaded
  - boolean
---

# IView.GetDisplayEdgesInShadedMode

Gets whether to display the edges in this when the drawing view is in shaded mode.

## Signature

```csharp
System.Boolean GetDisplayEdgesInShadedMode()
```
## Parameters

None.

## Return Value

True if the edges are displayed when the view is in shaded mode, false if not

## Remarks

To...
Then use...
Determine whether this view is displayed with faceted or precise geometry
IView::GetFacettedHlrDisplay
Determine the display mode of a drawing view
IView::GetDisplayMode2
Set the display mode of a drawing view
IView::SetDisplayMode3

## See Also

- `IView.GetDisplayTangentEdges2`
- `IView.GetUseParentDisplayMode`
- `IView.SetDisplayTangentEdges2`
- `IView.UpdateViewDisplayGeometry`