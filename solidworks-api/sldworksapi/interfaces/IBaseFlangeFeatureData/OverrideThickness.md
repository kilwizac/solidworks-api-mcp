---
type: property
interface: IBaseFlangeFeatureData
member: OverrideThickness
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IBaseFlangeFeatureData.GaugeTablePath
  - IBaseFlangeFeatureData.GetTableThicknesses
  - IBaseFlangeFeatureData.GetTableThicknessesCount
  - IBaseFlangeFeatureData.IGetTableThicknesses
  - IBaseFlangeFeatureData.TableThickness
  - IBaseFlangeFeatureData.UseGaugeTable
keywords:
  - overridethickness
  - ibaseflangefeaturedata
  - base
  - flange
  - feature
  - data
  - override
  - thickness
  - boolean
  - create
  - using
  - gauge
  - table
  - vba
readonly: null
---

# IBaseFlangeFeatureData.OverrideThickness

Gets or sets whether to override the thickness value specified in the gauge table for this base flange feature.

## Signature

```csharp
System.Boolean OverrideThickness {get; set;}
```
## Parameters

None.

## Return Value

True to override the thickness, false to not

## Examples

- Create Base-Flange Feature Using Gauge Table (VBA) (Create_Base-Flange_Feature_Using_Gauge_Table_Example_VB.htm)

## See Also

- `IBaseFlangeFeatureData.GaugeTablePath`
- `IBaseFlangeFeatureData.GetTableThicknesses`
- `IBaseFlangeFeatureData.GetTableThicknessesCount`
- `IBaseFlangeFeatureData.IGetTableThicknesses`
- `IBaseFlangeFeatureData.TableThickness`
- `IBaseFlangeFeatureData.UseGaugeTable`