---
type: method
interface: IBaseFlangeFeatureData
member: GetTableRadiiCount
returns: System.Int32
parameters:
  -
    name: ThicknessTableName
    type: System.String
    description: Thickness names
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IBaseFlangeFeatureData.GaugeTablePath
  - IBaseFlangeFeatureData.GetTableRadii
  - IBaseFlangeFeatureData.OverrideRadius
  - IBaseFlangeFeatureData.TableRadius
  - IBaseFlangeFeatureData.UseGaugeTable
keywords:
  - gettableradiicount
  - ibaseflangefeaturedata
  - base
  - flange
  - feature
  - data
  - table
  - radii
  - count
  - thickness
  - name
  - string
  - int32
---

# IBaseFlangeFeatureData.GetTableRadiiCount

Gets the number of bend radii for the thickness names from the gauge table for this base flange feature.

## Signature

```csharp
System.Int32 GetTableRadiiCount( 
   System.String
ThicknessTableName
)
```
## Parameters

- `ThicknessTableName` (System.String): Thickness names

## Return Value

Number of bend radii

## Remarks

Call this method before calling
IBaseFlangeFeatureData::IGetTableRadii
.

## See Also

- `IBaseFlangeFeatureData.GaugeTablePath`
- `IBaseFlangeFeatureData.GetTableRadii`
- `IBaseFlangeFeatureData.OverrideRadius`
- `IBaseFlangeFeatureData.TableRadius`
- `IBaseFlangeFeatureData.UseGaugeTable`