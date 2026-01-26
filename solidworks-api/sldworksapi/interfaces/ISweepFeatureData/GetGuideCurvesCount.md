---
type: method
interface: ISweepFeatureData
member: GetGuideCurvesCount
returns: System.Int16
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISweepFeatureData.GetGuideCurvesType
  - ISweepFeatureData.GuideCurves
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
  - getguidecurvescount
  - sweep
  - feature
  - data
  - count
  - int16
---

# ISweepFeatureData.GetGuideCurvesCount

Gets a number of guide curves for this sweep feature.

## Signature

```csharp
System.Int16 GetGuideCurvesCount()
```
## Parameters

None.

## Return Value

Number of guide curves

## Remarks

This method is not valid if:
ISweepFeatureData::Direction
is set to
swSweepDirection_e
.swSweepBiDirectional.
- or -
ISweepFeatureData::TwistControlType
is set to
swTwistControlType_e
.swTwistControlConstantTwistAlongPath.
Call this method before calling
ISweepFeatureData::IGetGuideCurves
to get the size of the array for that method.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `ISweepFeatureData.GetGuideCurvesType`
- `ISweepFeatureData.GuideCurves`
- `ISweepFeatureData.IGetGuideCurves`
- `ISweepFeatureData.IGetGuideCurvesType`
- `ISweepFeatureData.ISetGuideCurves`
- `ISweepFeatureData.MergeSmoothFaces`