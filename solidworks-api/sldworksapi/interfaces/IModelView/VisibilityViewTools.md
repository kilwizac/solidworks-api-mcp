---
type: property
interface: IModelView
member: VisibilityViewTools
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - heads
  - view
  - toolbar
  - visibilityviewtools
  - imodelview
  - model
  - visibility
  - tools
  - boolean
readonly: null
---

# IModelView.VisibilityViewTools

Gets or sets the visibility of the Heads-up View Toolbar for this model view.

## Signature

```csharp
System.Boolean VisibilityViewTools {get; set;}
```
## Parameters

None.

## Return Value

True if the Heads-up View toolbar is visible, false if not

## Remarks

After setting this property to false, call
IModelView::GraphicsRedraw
or
IModelView::IGraphicsRedraw
to repaint the entire graphics window.