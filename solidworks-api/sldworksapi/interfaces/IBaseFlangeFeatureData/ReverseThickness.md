---
type: property
interface: IBaseFlangeFeatureData
member: ReverseThickness
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IBaseFlangeFeatureData.Thickness
keywords:
  - reversethickness
  - ibaseflangefeaturedata
  - base
  - flange
  - feature
  - data
  - reverse
  - thickness
  - boolean
readonly: null
---

# IBaseFlangeFeatureData.ReverseThickness

Gets or sets the direction in which to thicken the sketch for the base flange feature.

## Signature

```csharp
System.Boolean ReverseThickness {get; set;}
```
## Parameters

None.

## Return Value

True reverses the direction in which to thicken the sketch, false does not

## Remarks

The setter of this property is valid only if
IBaseFlangeFeatureData::OverrideDefaultSheetMetalParameters
is true and
IBaseFlangeFeatureData::UseMaterialSheetMetalParameters
is false.

## See Also

- `IBaseFlangeFeatureData.Thickness`