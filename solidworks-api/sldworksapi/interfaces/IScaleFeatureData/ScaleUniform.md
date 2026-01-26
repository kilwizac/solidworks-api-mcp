---
type: property
interface: IScaleFeatureData
member: ScaleUniform
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - scaleuniform
  - iscalefeaturedata
  - scale
  - feature
  - data
  - uniform
  - double
readonly: null
---

# IScaleFeatureData.ScaleUniform

Gets or sets the uniform scaling factor for this scale feature when uniform scaling is enabled.

## Signature

```csharp
System.Double ScaleUniform {get; set;}
```
## Parameters

None.

## Return Value

Value for the uniform scaling factor

## Remarks

You can use:
IScaleFeatureData::IsUniform
to enable or disable uniform scaling.
- or -
IScaleFeatureData::GetScale
or
IScaleFeatureData::SetScale
to get or set all of the scaling-related values, including uniform scaling, in the same call.
NOTE:
If uniform scaling is disabled, then use these properties to get or set the individual scaling values:
IScaleFeatureData::ScaleX
IScaleFeatureData::ScaleY
IScaleFeatureData::ScaleZ

## Examples

- IScaleFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IScaleFeatureData)