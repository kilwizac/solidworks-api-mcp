---
type: method
interface: IModelView
member: GetVisibleBox
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IModelView.IGetVisibleBox
keywords:
  - getvisiblebox
  - imodelview
  - model
  - view
  - visible
  - box
  - object
---

# IModelView.GetVisibleBox

Gets the boundaries of the visible model view window.

## Signature

```csharp
System.Object GetVisibleBox()
```
## Parameters

None.

## Return Value

Array of four longs (win_x_min, win-y_min, win_x_max, and win_y_max) in screen pixels indicating the boundaries of the visible model view window; any part of the model view window blocked by the FeatureManager design tree is excluded

## See Also

- `IModelView.IGetVisibleBox`