---
type: method
interface: IView
member: GetFacettedHlrDisplay
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
  - IView.GetDisplayEdgesInShadedMode
  - IView.GetDisplayMode2
  - IView.GetDisplayTangentEdges2
  - IView.SetDisplayMode3
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
  - hlr
  - hlv
  - view
  - modes
  - getfacettedhlrdisplay
  - facetted
  - boolean
  - whether
  - edges
  - are
  - displayed
  - faceted
  - vba
---

# IView.GetFacettedHlrDisplay

Gets whether HLR/HLV (Hidden Lines Removed/Hidden Lines Visible) edges should be displayed faceted in the view.

## Signature

```csharp
System.Boolean GetFacettedHlrDisplay()
```
## Parameters

None.

## Return Value

True if the edges should be displayed faceted, false if not

## Examples

- Get Whether HLR/HLV Edges are Displayed Faceted (VBA) (Get_Whether_HLR_HLV_Edges_Are_Displayed_Faceted_Example_VB.htm)

## See Also

- `IView.GetDisplayEdgesInShadedMode`
- `IView.GetDisplayMode2`
- `IView.GetDisplayTangentEdges2`
- `IView.SetDisplayMode3`
- `IView.SetDisplayTangentEdges2`
- `IView.UpdateViewDisplayGeometry`