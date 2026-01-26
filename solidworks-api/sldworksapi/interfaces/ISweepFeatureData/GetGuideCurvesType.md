---
type: method
interface: ISweepFeatureData
member: GetGuideCurvesType
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISweepFeatureData.GetGuideCurvesCount
  - ISweepFeatureData.IGetGuideCurves
  - ISweepFeatureData.IGetGuideCurvesType
  - ISweepFeatureData.ISetGuideCurves
  - ISweepFeatureData.MergeSmoothFaces
keywords:
  - sweeps
  - see
  - also
  - isweepfeaturedata
  - guide
  - curves
  - getguidecurvestype
  - sweep
  - feature
  - data
  - type
  - object
---

# ISweepFeatureData.GetGuideCurvesType

Gets the type of guide curves in this sweep feature.

## Signature

```csharp
System.Object GetGuideCurvesType()
```
## Parameters

None.

## Return Value

Array of longs or integers representing the types of guide curves as defined in swSelectType_e

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
See
Accessing Selections that Define Features
for additional details.

## Examples

- ISweepFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISweepFeatureData)

## See Also

- `ISweepFeatureData.GetGuideCurvesCount`
- `ISweepFeatureData.IGetGuideCurves`
- `ISweepFeatureData.IGetGuideCurvesType`
- `ISweepFeatureData.ISetGuideCurves`
- `ISweepFeatureData.MergeSmoothFaces`