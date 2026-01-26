---
type: property
interface: IVariableFilletFeatureData2
member: CurvatureContinuous
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - curvaturecontinuous
  - ivariablefilletfeaturedata2
  - variable
  - fillet
  - feature
  - data2
  - curvature
  - continuous
  - boolean
  - create
  - vb
  - net
  - vba
readonly: null
---

# IVariableFilletFeatureData2.CurvatureContinuous

Gets or sets whether to create a smoother curvature between adjacent surfaces for this variable radius fillet feature.

## Signature

```csharp
System.Boolean CurvatureContinuous {get; set;}
```
## Parameters

None.

## Return Value

True to make curvatures continuous, false to not

## Remarks

This property supersedes any
IVariableFilletFeatureData2::ConicTypeForCrossSectionProfile
setting. Curvature continuous fillets are smoother than standard fillets because there is no jump in curvature at the boundary.

## Examples

- Create Curvature Continuous Variable Fillet Feature (C#) (Create_Curvature_Continuous_Variable_Fillet_Feature_Example_CSharp.htm)
- Create Curvature Continuous Variable Fillet Feature (VB.NET) (Create_Curvature_Continuous_Variable_Fillet_Feature_Example_VBNET.htm)
- Create Curvature Continuous Variable Fillet Feature (VBA) (Create_Curvature_Continuous_Variable_Fillet_Feature_Example_VB.htm)