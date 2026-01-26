---
type: method
interface: ILoftFeatureData
member: IGetGuideCurves
returns: System.Object
parameters:
  -
    name: Count
    type: System.Int16
    description: Number of guide curves
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILoftFeatureData.GetGuideCurvesType
  - ILoftFeatureData.GetGuideTangencyType
  - ILoftFeatureData.GuideCurveInfluence
  - ILoftFeatureData.GuideCurves
  - ILoftFeatureData.IGetGuideCurvesType
  - ILoftFeatureData.ISetGuideCurves
  - ILoftFeatureData.SetGuideTangencyType
keywords:
  - guide
  - curves
  - lofts
  - see
  - also
  - iloftfeaturedata
  - igetguidecurves
  - loft
  - feature
  - data
  - count
  - int16
  - object
---

# ILoftFeatureData.IGetGuideCurves

Gets the guide curves for this loft feature.

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

in-process, unmanaged C++: Pointer to an array of features of guide curves of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
ILoftFeatureData::GetGuideCurvesCount
to get the size of Count.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `ILoftFeatureData.GetGuideCurvesType`
- `ILoftFeatureData.GetGuideTangencyType`
- `ILoftFeatureData.GuideCurveInfluence`
- `ILoftFeatureData.GuideCurves`
- `ILoftFeatureData.IGetGuideCurvesType`
- `ILoftFeatureData.ISetGuideCurves`
- `ILoftFeatureData.SetGuideTangencyType`