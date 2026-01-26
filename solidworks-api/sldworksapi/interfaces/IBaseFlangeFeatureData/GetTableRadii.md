---
type: method
interface: IBaseFlangeFeatureData
member: GetTableRadii
returns: System.Object
parameters:
  -
    name: ThicknessTableName
    type: System.String
    description: Gauge table thickness names (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IBaseFlangeFeatureData.GaugeTablePath
  - IBaseFlangeFeatureData.GetTableRadiiCount
  - IBaseFlangeFeatureData.IGetTableRadii
  - IBaseFlangeFeatureData.OverrideRadius
  - IBaseFlangeFeatureData.TableRadius
  - IBaseFlangeFeatureData.UseGaugeTable
keywords:
  - gettableradii
  - ibaseflangefeaturedata
  - base
  - flange
  - feature
  - data
  - table
  - radii
  - thickness
  - name
  - string
  - object
  - create
  - using
  - gauge
  - vba
---

# IBaseFlangeFeatureData.GetTableRadii

Gets the bend radii from the gauge table for this base flange feature.

## Signature

```csharp
System.Object GetTableRadii( 
   System.String
ThicknessTableName
)
```
## Parameters

- `ThicknessTableName` (System.String): Gauge table thickness names (see Remarks )

## Return Value

Array of bend radii

## Remarks

Before calling this method call,
IBaseFlangeFeatureData::GetTableThicknesses
to get the names of the thicknesses in the gauge table.

## Examples

- Create Base-Flange Feature Using Gauge Table (VBA) (Create_Base-Flange_Feature_Using_Gauge_Table_Example_VB.htm)

## See Also

- `IBaseFlangeFeatureData.GaugeTablePath`
- `IBaseFlangeFeatureData.GetTableRadiiCount`
- `IBaseFlangeFeatureData.IGetTableRadii`
- `IBaseFlangeFeatureData.OverrideRadius`
- `IBaseFlangeFeatureData.TableRadius`
- `IBaseFlangeFeatureData.UseGaugeTable`