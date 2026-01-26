---
type: property
interface: ISwScene
member: EnvironmentSize
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - environmentsize
  - iswscene
  - sw
  - scene
  - environment
  - size
  - double
readonly: null
---

# ISwScene.EnvironmentSize

Gets or sets the size of the high dynamic range imaging (HDRI) scene sphere that surrounds the model.

## Signature

```csharp
System.Double EnvironmentSize {get; set;}
```
## Parameters

None.

## Return Value

Size of the HDRI scene sphere

## Remarks

This property is valid only if
ISwScene::FlattenFloor
is set to true.

## Examples

- ISwScene (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISwScene)