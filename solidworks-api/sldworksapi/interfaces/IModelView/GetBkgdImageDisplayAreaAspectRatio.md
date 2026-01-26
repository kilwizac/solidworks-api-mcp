---
type: method
interface: IModelView
member: GetBkgdImageDisplayAreaAspectRatio
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - background
  - image
  - getbkgdimagedisplayareaaspectratio
  - imodelview
  - model
  - view
  - bkgd
  - display
  - area
  - aspect
  - ratio
  - double
---

# IModelView.GetBkgdImageDisplayAreaAspectRatio

Gets the aspect ratio (width/height) of the area of the window where the background image is displayed.

## Signature

```csharp
System.Double GetBkgdImageDisplayAreaAspectRatio()
```
## Parameters

None.

## Return Value

Aspect ratio (width/height) of the area of the window where the background image is displayed, or -1 if there is no background image or if the image covers the entire window

## Remarks

For use with ray-trace rendering engines to match SOLIDWORKS' display.