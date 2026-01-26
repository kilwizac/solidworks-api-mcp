---
type: property
interface: ISwScene
member: BackgroundImage
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IModelDoc2.InsertBkgImage
keywords:
  - scene
  - background
  - properties
  - backgroundimage
  - iswscene
  - sw
  - image
  - string
readonly: null
---

# ISwScene.BackgroundImage

Gets or sets the background image for this scene.

## Signature

```csharp
System.String BackgroundImage {get; set;}
```
## Parameters

None.

## Return Value

Fully qualified path to a background image file

## Remarks

This property is valid only if
ISwScene::BackgroundType
is
swSceneBackgroundType_e
.swBackgroundType_Image.

## Examples

- ISwScene (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISwScene)

## See Also

- `IModelDoc2.InsertBkgImage`