---
type: method
interface: ILoftFeatureData
member: GetGuideCurvesCount
returns: System.Int16
parameters: []
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
  - lofts
  - see
  - also
  - iloftfeaturedata
  - guide
  - curves
  - getguidecurvescount
  - loft
  - feature
  - data
  - count
  - int16
  - vb
  - net
  - vba
---

# ILoftFeatureData.GetGuideCurvesCount

Gets the number of guide curves for this loft feature.

## Signature

```csharp
System.Int16 GetGuideCurvesCount()
```
## Parameters

None.

## Return Value

Number of guide curves

## Remarks

Call this method before calling
ILoftFeatureData::IGetGuideCurves
to determine the size of the array for that method.

## Examples

- Get Guide Curves in Loft Feature (C#) (Get_Guide_Curves_in_Loft_Feature_Example_CSharp.htm)
- Get Guide Curves in Loft Feature (VB.NET) (Get_Guide_Curves_in_Loft_Feature_Example_VBNET.htm)
- Get Guide Curves in Loft Feature (VBA) (Get_Guide_Curves_in_Loft_Feature_Example_VB.htm)

## See Also

- `ILoftFeatureData.GetGuideCurvesType`
- `ILoftFeatureData.GetGuideTangencyType`
- `ILoftFeatureData.GuideCurveInfluence`
- `ILoftFeatureData.GuideCurves`
- `ILoftFeatureData.IGetGuideCurvesType`
- `ILoftFeatureData.ISetGuideCurves`
- `ILoftFeatureData.SetGuideTangencyType`