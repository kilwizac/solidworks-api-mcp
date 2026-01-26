---
type: method
interface: IBaseFlangeFeatureData
member: IGetTableThicknesses
returns: System.String
parameters:
  -
    name: NCount
    type: System.Int32
    description: Number of thickness names
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IBaseFlangeFeatureData.GaugeTablePath
  - IBaseFlangeFeatureData.GetTableThicknesses
  - IBaseFlangeFeatureData.TableThickness
  - IBaseFlangeFeatureData.ThicknessTableName
  - IBaseFlangeFeatureData.UseGaugeTable
keywords:
  - igettablethicknesses
  - ibaseflangefeaturedata
  - base
  - flange
  - feature
  - data
  - table
  - thicknesses
  - count
  - int32
  - string
---

# IBaseFlangeFeatureData.IGetTableThicknesses

Gets the names of the thicknesses from the gauge table for this base flange feature.

## Signature

```csharp
System.String IGetTableThicknesses( 
   System.Int32
NCount
)
```
## Parameters

- `NCount` (System.Int32): Number of thickness names

## Return Value

in-process, unmanaged C++: Pointer to an array of names of the thicknesses VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
IBaseFlangeFeatureData::GetTableThicknessesCount
to get the value for NCount.

## See Also

- `IBaseFlangeFeatureData.GaugeTablePath`
- `IBaseFlangeFeatureData.GetTableThicknesses`
- `IBaseFlangeFeatureData.TableThickness`
- `IBaseFlangeFeatureData.ThicknessTableName`
- `IBaseFlangeFeatureData.UseGaugeTable`