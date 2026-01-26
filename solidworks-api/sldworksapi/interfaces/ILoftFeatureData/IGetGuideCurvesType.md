---
type: method
interface: ILoftFeatureData
member: IGetGuideCurvesType
returns: System.Int32
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of guide curves
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILoftFeatureData.GetGuideCurvesCount
  - ILoftFeatureData.GetGuideCurvesType
  - ILoftFeatureData.GetGuideTangencyType
  - ILoftFeatureData.GuideCurveInfluence
  - ILoftFeatureData.GuideCurves
  - ILoftFeatureData.IGetGuideCurves
  - ILoftFeatureData.ISetGuideCurves
  - ILoftFeatureData.SetGuideTangencyType
keywords:
  - igetguidecurvestype
  - iloftfeaturedata
  - loft
  - feature
  - data
  - guide
  - curves
  - type
  - count
  - int32
---

# ILoftFeatureData.IGetGuideCurvesType

Gets the guide curve types for this loft feature.

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

in-process, unmanaged C++: Pointer to an array of the types of guide curves as defined by swSelectType_e of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `ILoftFeatureData.GetGuideCurvesCount`
- `ILoftFeatureData.GetGuideCurvesType`
- `ILoftFeatureData.GetGuideTangencyType`
- `ILoftFeatureData.GuideCurveInfluence`
- `ILoftFeatureData.GuideCurves`
- `ILoftFeatureData.IGetGuideCurves`
- `ILoftFeatureData.ISetGuideCurves`
- `ILoftFeatureData.SetGuideTangencyType`