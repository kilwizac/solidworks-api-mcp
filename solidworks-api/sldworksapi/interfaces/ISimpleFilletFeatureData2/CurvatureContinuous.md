---
type: property
interface: ISimpleFilletFeatureData2
member: CurvatureContinuous
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISimpleFilletFeatureData2.GetHoldLineCount
  - ISimpleFilletFeatureData2.HelpPoint
  - ISimpleFilletFeatureData2.HoldLines
  - ISimpleFilletFeatureData2.IGetHoldLines
  - ISimpleFilletFeatureData2.ISetHoldLines
keywords:
  - curvaturecontinuous
  - isimplefilletfeaturedata2
  - simple
  - fillet
  - feature
  - data2
  - curvature
  - continuous
  - boolean
readonly: null
---

# ISimpleFilletFeatureData2.CurvatureContinuous

Gets or sets whether to create a smoother curvature between adjacent surfaces for this simple fillet feature.

## Signature

```csharp
System.Boolean CurvatureContinuous {get; set;}
```
## Parameters

None.

## Return Value

True to make curvatures continuous, false to not

## Remarks

This property overrides any
ISimpleFilletFeatureData2::ConicTypeForCrossSectionProfile
setting. Curvature continuous fillets are smoother than standard fillets because there is no jump in curvature at the boundary.

## Examples

- ISimpleFilletFeatureData2 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISimpleHoleFeatureData2)

## See Also

- `ISimpleFilletFeatureData2.GetHoldLineCount`
- `ISimpleFilletFeatureData2.HelpPoint`
- `ISimpleFilletFeatureData2.HoldLines`
- `ISimpleFilletFeatureData2.IGetHoldLines`
- `ISimpleFilletFeatureData2.ISetHoldLines`