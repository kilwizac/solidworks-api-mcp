---
type: method
interface: IView
member: IGetSketch
returns: Sketch
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - sketches
  - ui
related:
  - IView.GetSketch
keywords:
  - drawing
  - views
  - see
  - also
  - iview
  - sketch
  - view
  - isketch
  - igetsketch
---

# IView.IGetSketch

Gets the sketch used by this view.

## Signature

```csharp
Sketch IGetSketch()
```
## Parameters

None.

## Return Value

Sketch

## Remarks

Each drawing view contains an underlying sketch. The user can activate the sketch for a drawing view by double-clicking the view. Once the drawing view is active, you can add sketch directly to the view's sketch.

## See Also

- `IView.GetSketch`