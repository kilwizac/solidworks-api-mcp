---
type: method
interface: ILoftFeatureData
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
    description: in-process, unmanaged C++: Pointer to an array of features of guide curves of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
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
  - ILoftFeatureData.IGetGuideCurvesType
  - ILoftFeatureData.SetGuideTangencyType
keywords:
  - guide
  - curves
  - lofts
  - see
  - also
  - iloftfeaturedata
  - isetguidecurves
  - loft
  - feature
  - data
  - count
  - int16
  - disp
  - object
  - void
---

# ILoftFeatureData.ISetGuideCurves

Sets the guide curves for this loft feature.

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
- `PDisp` (System.Object): in-process, unmanaged C++: Pointer to an array of features of guide curves of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

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
- `ILoftFeatureData.IGetGuideCurvesType`
- `ILoftFeatureData.SetGuideTangencyType`