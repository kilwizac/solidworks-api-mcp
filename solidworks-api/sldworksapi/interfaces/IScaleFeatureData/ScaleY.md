---
type: property
interface: IScaleFeatureData
member: ScaleY
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IScaleFeatureData.ScaleX
  - IScaleFeatureData.ScaleZ
keywords:
  - scaley
  - iscalefeaturedata
  - scale
  - feature
  - data
  - double
readonly: null
---

# IScaleFeatureData.ScaleY

Gets or sets the scaling factor in the Y direction when uniform scaling is disabled.

## Signature

```csharp
System.Double ScaleY {get; set;}
```
## Parameters

None.

## Return Value

Y-direction scale factor

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

- `IScaleFeatureData.ScaleX`
- `IScaleFeatureData.ScaleZ`