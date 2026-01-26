---
type: property
interface: ISweepFeatureData
member: MergeSmoothFaces
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - ISweepFeatureData.GetGuideCurvesCount
  - ISweepFeatureData.GetGuideCurvesType
  - ISweepFeatureData.GuideCurves
  - ISweepFeatureData.IGetGuideCurves
  - ISweepFeatureData.IGetGuideCurvesType
  - ISweepFeatureData.ISetGuideCurves
keywords:
  - guide
  - curves
  - sweeps
  - see
  - also
  - isweepfeaturedata
  - mergesmoothfaces
  - sweep
  - feature
  - data
  - merge
  - smooth
  - faces
  - boolean
readonly: null
---

# ISweepFeatureData.MergeSmoothFaces

Gets or sets whether to merge the smooth faces of this sweep feature that uses guide curves.

## Signature

```csharp
System.Boolean MergeSmoothFaces {get; set;}
```
## Parameters

None.

## Return Value

True to merge the smooth faces, false to not (see Remarks )

## Remarks

This property corresponds to the
Merge smooth faces
check box on the
Guide Curves
group box on the
Sweep
PropertyManager.
Setting this property to false improves the performance of sweeps with guide curves and segments the sweep at all points where the guide curve or path is not curvature continuous.
See
Accessing Selections that Define Features
for additional details.

## Examples

- ISweepFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISweepFeatureData)

## See Also

- `ISweepFeatureData.GetGuideCurvesCount`
- `ISweepFeatureData.GetGuideCurvesType`
- `ISweepFeatureData.GuideCurves`
- `ISweepFeatureData.IGetGuideCurves`
- `ISweepFeatureData.IGetGuideCurvesType`
- `ISweepFeatureData.ISetGuideCurves`