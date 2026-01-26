---
type: property
interface: ISwScene
member: FitToSWWindow
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - scene
  - properties
  - fittoswwindow
  - iswscene
  - sw
  - fit
  - window
  - boolean
readonly: null
---

# ISwScene.FitToSWWindow

Gets or sets whether to stretch an image to fit the SOLIDWORKS window.

## Signature

```csharp
System.Boolean FitToSWWindow {get; set;}
```
## Parameters

None.

## Return Value

True to stretch an image to fit, false to not

## Remarks

This property is valid only if
ISwScene::BackgroundType
is
swSceneBackgroundType_e
.swBackgroundType_Image.
Set the background image with
ISwScene::BackgroundImage
.

## Examples

- ISwScene (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISwScene)