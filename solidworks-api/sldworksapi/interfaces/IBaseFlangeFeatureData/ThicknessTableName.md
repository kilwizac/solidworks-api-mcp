---
type: property
interface: IBaseFlangeFeatureData
member: ThicknessTableName
returns: System.String
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
  - thicknesstablename
  - ibaseflangefeaturedata
  - base
  - flange
  - feature
  - data
  - thickness
  - table
  - name
  - string
  - create
  - using
  - gauge
  - vba
readonly: null
---

# IBaseFlangeFeatureData.ThicknessTableName

Gets or sets the name of the thickness from the gauge table, if thickness not overridden, for this base flange feature.

## Signature

```csharp
System.String ThicknessTableName {get; set;}
```
## Parameters

None.

## Return Value

Name of thickness

## Examples

- Create Base-Flange Feature Using Gauge Table (VBA) (Create_Base-Flange_Feature_Using_Gauge_Table_Example_VB.htm)

## See Also

- `IBaseFlangeFeatureData.GaugeTablePath`
- `IBaseFlangeFeatureData.GetTableThicknesses`
- `IBaseFlangeFeatureData.GetTableThicknessesCount`
- `IBaseFlangeFeatureData.IGetTableThicknesses`
- `IBaseFlangeFeatureData.TableThickness`
- `IBaseFlangeFeatureData.UseGaugeTable`