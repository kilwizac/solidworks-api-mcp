---
type: property
interface: IBaseFlangeFeatureData
member: TableThickness
returns: System.Double
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
  - IBaseFlangeFeatureData.ThicknessTableName
  - IBaseFlangeFeatureData.UseGaugeTable
keywords:
  - tablethickness
  - ibaseflangefeaturedata
  - base
  - flange
  - feature
  - data
  - table
  - thickness
  - double
  - create
  - using
  - gauge
  - vba
readonly: null
---

# IBaseFlangeFeatureData.TableThickness

Gets or sets the thickness, if it is not overridden, in the gauge table for this base flange feature.

## Signature

```csharp
System.Double TableThickness {get; set;}
```
## Parameters

None.

## Return Value

Thickness

## Remarks

If the thickness is not overridden, then the value for thickness is the value returned or set by
IBaseFlangeFeatureData::Thickness
.

## Examples

- Create Base-Flange Feature Using Gauge Table (VBA) (Create_Base-Flange_Feature_Using_Gauge_Table_Example_VB.htm)

## See Also

- `IBaseFlangeFeatureData.GaugeTablePath`
- `IBaseFlangeFeatureData.GetTableThicknesses`
- `IBaseFlangeFeatureData.GetTableThicknessesCount`
- `IBaseFlangeFeatureData.IGetTableThicknesses`
- `IBaseFlangeFeatureData.ThicknessTableName`
- `IBaseFlangeFeatureData.UseGaugeTable`