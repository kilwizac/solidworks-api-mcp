---
type: property
interface: IBaseFlangeFeatureData
member: TableRadius
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IBaseFlangeFeatureData.GaugeTablePath
  - IBaseFlangeFeatureData.GetTableRadii
  - IBaseFlangeFeatureData.GetTableRadiiCount
  - IBaseFlangeFeatureData.IGetTableRadii
  - IBaseFlangeFeatureData.OverrideRadius
  - IBaseFlangeFeatureData.UseGaugeTable
keywords:
  - tableradius
  - ibaseflangefeaturedata
  - base
  - flange
  - feature
  - data
  - table
  - radius
  - double
  - create
  - using
  - gauge
  - vba
readonly: null
---

# IBaseFlangeFeatureData.TableRadius

Gets or sets the bend radius, if is not overridden, in the gauge table for this base flange feature.

## Signature

```csharp
System.Double TableRadius {get; set;}
```
## Parameters

None.

## Return Value

Bend radius

## Remarks

If the bend radius is not overridden, then the value for the bend radius is the value returned or set by
IBaseFlangeFeatureData::BendRadius
.

## Examples

- Create Base-Flange Feature Using Gauge Table (VBA) (Create_Base-Flange_Feature_Using_Gauge_Table_Example_VB.htm)

## See Also

- `IBaseFlangeFeatureData.GaugeTablePath`
- `IBaseFlangeFeatureData.GetTableRadii`
- `IBaseFlangeFeatureData.GetTableRadiiCount`
- `IBaseFlangeFeatureData.IGetTableRadii`
- `IBaseFlangeFeatureData.OverrideRadius`
- `IBaseFlangeFeatureData.UseGaugeTable`