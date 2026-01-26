---
type: method
interface: ISweepFeatureData
member: IGetGuideCurvesType
returns: System.Int32
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of guide curves
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related:
  - ISweepFeatureData.GetGuideCurvesType
  - ISweepFeatureData.GuideCurves
  - ISweepFeatureData.IGetGuideCurves
  - ISweepFeatureData.ISetGuideCurves
  - ISweepFeatureData.MergeSmoothFaces
keywords:
  - guide
  - curves
  - sweeps
  - see
  - also
  - isweepfeaturedata
  - igetguidecurvestype
  - sweep
  - feature
  - data
  - type
  - count
  - int32
---

# ISweepFeatureData.IGetGuideCurvesType

Obsolete. Gets the guide curve types for this sweep feature.

## Signature

```csharp
System.Int32 IGetGuideCurvesType( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of guide curves

## Return Value

in-process, unmanaged C++: Pointer to an array of longs or integers representing the types of guide curves as defined in swSelectType_e VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
ISweepFeatureData::GetGuideCurvesCount
to get the value for Count.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `ISweepFeatureData.GetGuideCurvesType`
- `ISweepFeatureData.GuideCurves`
- `ISweepFeatureData.IGetGuideCurves`
- `ISweepFeatureData.ISetGuideCurves`
- `ISweepFeatureData.MergeSmoothFaces`