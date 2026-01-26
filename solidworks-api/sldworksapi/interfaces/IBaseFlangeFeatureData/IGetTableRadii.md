---
type: method
interface: IBaseFlangeFeatureData
member: IGetTableRadii
returns: System.Double
parameters:
  -
    name: ThicknessTableName
    type: System.String
    description: Gauge table thickness names (see Remarks )
  -
    name: NCount
    type: System.Int32
    description: Number of bend radii (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IBaseFlangeFeatureData.GaugeTablePath
  - IBaseFlangeFeatureData.GetTableRadii
  - IBaseFlangeFeatureData.OverrideThickness
  - IBaseFlangeFeatureData.ThicknessTableName
  - IBaseFlangeFeatureData.UseGaugeTable
keywords:
  - igettableradii
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
  - count
  - int32
  - double
---

# IBaseFlangeFeatureData.IGetTableRadii

Gets the bend radii from the gauge table for this base flange feature.

## Signature

```csharp
System.Double IGetTableRadii( 
   System.String
ThicknessTableName
,
   System.Int32
NCount
)
```
## Parameters

- `ThicknessTableName` (System.String): Gauge table thickness names (see Remarks )
- `NCount` (System.Int32): Number of bend radii (see Remarks )

## Return Value

in-process, unmanaged C++: Pointer to an array of bend radii VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method call:
IBaseFlangeFeatureData::IGetTableThicknesses
to get the names of the thicknesses in the gauge table.
IBaseFlangeFeatureData::GetTableRadiiCount
to get the value for NCount.

## See Also

- `IBaseFlangeFeatureData.GaugeTablePath`
- `IBaseFlangeFeatureData.GetTableRadii`
- `IBaseFlangeFeatureData.OverrideThickness`
- `IBaseFlangeFeatureData.ThicknessTableName`
- `IBaseFlangeFeatureData.UseGaugeTable`