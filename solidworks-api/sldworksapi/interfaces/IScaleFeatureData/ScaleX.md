---
type: property
interface: IScaleFeatureData
member: ScaleX
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IScaleFeatureData.ScaleY
  - IScaleFeatureData.ScaleZ
keywords:
  - scalex
  - iscalefeaturedata
  - scale
  - feature
  - data
  - double
readonly: null
---

# IScaleFeatureData.ScaleX

Gets or sets the scaling factor in the X direction when uniform scaling is disabled.

## Signature

```csharp
System.Double ScaleX {get; set;}
```
## Parameters

None.

## Return Value

X-direction scale factor

## Remarks

To get or set...
Use...
Uniform scaling
IScaleFeatureData::IsUniform
All scale-related values in the same call
IScaleFeatureData::GetScale
or
IScaleFeatureData::SetScale
NOTE:
To get or set the scaling factor when uniform scaling is enabled, use
IScaleFeatureData::ScaleUniform
.

## Examples

- IScaleFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IScaleFeatureData)

## See Also

- `IScaleFeatureData.ScaleY`
- `IScaleFeatureData.ScaleZ`