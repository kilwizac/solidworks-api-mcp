---
type: property
interface: ISweepFeatureData
member: GuideCurves
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISweepFeatureData.GetGuideCurvesCount
  - ISweepFeatureData.GetGuideCurvesType
  - ISweepFeatureData.IGetGuideCurves
  - ISweepFeatureData.IGetGuideCurvesType
  - ISweepFeatureData.ISetGuideCurves
  - ISweepFeatureData.MergeSmoothFaces
keywords:
  - guide
  - curves
  - sweeps
  - see
  - also
  - isweepfeaturedata
  - guidecurves
  - sweep
  - feature
  - data
  - object
readonly: null
---

# ISweepFeatureData.GuideCurves

Gets or sets the guide curves for this sweep feature.

## Signature

```csharp
System.Object GuideCurves {get; set;}
```
## Parameters

None.

## Return Value

Array of guide curves , edges , lines , or arcs

## Remarks

This property is not valid if:
ISweepFeatureData::Direction
is set to
swSweepDirection_e
.swSweepBiDirectional.
- or -
ISweepFeatureData::TwistControlType
is set to
swTwistControlType_e
.swTwistControlConstantTwistAlongPath.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `ISweepFeatureData.GetGuideCurvesCount`
- `ISweepFeatureData.GetGuideCurvesType`
- `ISweepFeatureData.IGetGuideCurves`
- `ISweepFeatureData.IGetGuideCurvesType`
- `ISweepFeatureData.ISetGuideCurves`
- `ISweepFeatureData.MergeSmoothFaces`