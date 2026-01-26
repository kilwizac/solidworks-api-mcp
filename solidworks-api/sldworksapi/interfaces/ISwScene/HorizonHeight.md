---
type: property
interface: ISwScene
member: HorizonHeight
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - horizonheight
  - iswscene
  - sw
  - scene
  - horizon
  - height
  - double
readonly: null
---

# ISwScene.HorizonHeight

Gets or sets the height on the high dynamic range imaging (HDRI) scene sphere where the scene floor starts to flatten.

## Signature

```csharp
System.Double HorizonHeight {get; set;}
```
## Parameters

None.

## Return Value

0.0 <= Horizon height <= 1.0

## Remarks

This property is valid only if
ISwScene::FlattenFloor
is set to true.

## Examples

- ISwScene (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISwScene)