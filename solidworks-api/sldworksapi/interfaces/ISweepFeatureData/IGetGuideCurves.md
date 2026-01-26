---
type: method
interface: ISweepFeatureData
member: IGetGuideCurves
returns: System.Object
parameters:
  -
    name: Count
    type: System.Int16
    description: Number of guide curves
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related:
  - ISweepFeatureData.GetGuideCurvesType
  - ISweepFeatureData.GuideCurves
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
  - igetguidecurves
  - sweep
  - feature
  - data
  - count
  - int16
  - object
---

# ISweepFeatureData.IGetGuideCurves

Obsolete. Gets the guide curves for this sweep feature.

## Signature

```csharp
System.Object IGetGuideCurves( 
   System.Int16
Count
)
```
## Parameters

- `Count` (System.Int16): Number of guide curves

## Return Value

in-process, unmanaged C++: Pointer to an array of features of the guide curves of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
ISweepFeatureData::GetGuideCurvesCount
before calling this method to get the value for Count.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `ISweepFeatureData.GetGuideCurvesType`
- `ISweepFeatureData.GuideCurves`
- `ISweepFeatureData.IGetGuideCurvesType`
- `ISweepFeatureData.ISetGuideCurves`
- `ISweepFeatureData.MergeSmoothFaces`