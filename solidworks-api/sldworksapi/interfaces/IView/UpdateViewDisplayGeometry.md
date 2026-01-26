---
type: method
interface: IView
member: UpdateViewDisplayGeometry
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetDisplayMode2
  - IView.SetDisplayMode3
keywords:
  - display
  - modes
  - drawing
  - views
  - see
  - also
  - iview
  - mode
  - view
  - update
  - updateviewdisplaygeometry
  - geometry
  - void
---

# IView.UpdateViewDisplayGeometry

Updates the displayed geometry for a drawing view.

## Signature

```csharp
void UpdateViewDisplayGeometry()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

This method accesses new view geometry before Microsoft has repainted the window. For example, this can occur if you were changing the display mode of the drawing view from HLR to HLV and wanted immediate access to the polylines in that drawing view.
Because Microsoft controls repainting the window, you do not have access to your drawing view changes until control is returned. However, using this method immediately updates the view geometry for your purposes.

## See Also

- `IView.GetDisplayMode2`
- `IView.SetDisplayMode3`