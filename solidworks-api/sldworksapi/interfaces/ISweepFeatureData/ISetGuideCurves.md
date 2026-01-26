---
type: method
interface: ISweepFeatureData
member: ISetGuideCurves
returns: void
parameters:
  -
    name: Count
    type: System.Int16
    description: Number of guide curves
  -
    name: PDisp
    type: System.Object
    description: in-process, unmanaged C++: Pointer to an array of the features of the guide curves of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related:
  - ISweepFeatureData.GetGuideCurvesCount
  - ISweepFeatureData.GetGuideCurvesType
  - ISweepFeatureData.GuideCurves
  - ISweepFeatureData.IGetGuideCurves
  - ISweepFeatureData.IGetGuideCurvesType
  - ISweepFeatureData.MergeSmoothFaces
keywords:
  - guide
  - curves
  - sweeps
  - see
  - also
  - isweepfeaturedata
  - isetguidecurves
  - sweep
  - feature
  - data
  - count
  - int16
  - disp
  - object
  - void
---

# ISweepFeatureData.ISetGuideCurves

Obsolete. Sets the guide curves for this sweep feature.

## Signature

```csharp
void ISetGuideCurves( 
   System.Int16
Count
,
   ref System.Object
PDisp
)
```
## Parameters

- `Count` (System.Int16): Number of guide curves
- `PDisp` (System.Object): in-process, unmanaged C++: Pointer to an array of the features of the guide curves of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details.

## See Also

- `ISweepFeatureData.GetGuideCurvesCount`
- `ISweepFeatureData.GetGuideCurvesType`
- `ISweepFeatureData.GuideCurves`
- `ISweepFeatureData.IGetGuideCurves`
- `ISweepFeatureData.IGetGuideCurvesType`
- `ISweepFeatureData.MergeSmoothFaces`