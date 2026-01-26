---
type: method
interface: IBaseFlangeFeatureData
member: GetTableThicknessesCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IBaseFlangeFeatureData.GaugeTablePath
  - IBaseFlangeFeatureData.GetTableThicknesses
  - IBaseFlangeFeatureData.OverrideThickness
  - IBaseFlangeFeatureData.TableThickness
  - IBaseFlangeFeatureData.ThicknessTableName
  - IBaseFlangeFeatureData.UseGaugeTable
keywords:
  - gettablethicknessescount
  - ibaseflangefeaturedata
  - base
  - flange
  - feature
  - data
  - table
  - thicknesses
  - count
  - int32
---

# IBaseFlangeFeatureData.GetTableThicknessesCount

Gets the number of names of the thicknesses in the gauge table for this base flange feature.

## Signature

```csharp
System.Int32 GetTableThicknessesCount()
```
## Parameters

None.

## Return Value

Number of names of the thicknesses

## Remarks

Call this method before calling
IBaseFlangeFeatureData::IGetTableThicknesses
to get the size of the array for that method.

## See Also

- `IBaseFlangeFeatureData.GaugeTablePath`
- `IBaseFlangeFeatureData.GetTableThicknesses`
- `IBaseFlangeFeatureData.OverrideThickness`
- `IBaseFlangeFeatureData.TableThickness`
- `IBaseFlangeFeatureData.ThicknessTableName`
- `IBaseFlangeFeatureData.UseGaugeTable`