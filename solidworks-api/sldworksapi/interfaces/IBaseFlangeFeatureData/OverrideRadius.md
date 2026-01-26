---
type: property
interface: IBaseFlangeFeatureData
member: OverrideRadius
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IBaseFlangeFeatureData.GetTableRadii
  - IBaseFlangeFeatureData.GetTableRadiiCount
  - IBaseFlangeFeatureData.IGetTableRadii
  - IBaseFlangeFeatureData.TableRadius
keywords:
  - overrideradius
  - ibaseflangefeaturedata
  - base
  - flange
  - feature
  - data
  - override
  - radius
  - boolean
  - create
  - using
  - gauge
  - table
  - vba
readonly: null
---

# IBaseFlangeFeatureData.OverrideRadius

Gets or sets whether to override the bend radius value specified in the gauge table for this base flange feature.

## Signature

```csharp
System.Boolean OverrideRadius {get; set;}
```
## Parameters

None.

## Return Value

True to override the bend radius value, false to not

## Examples

- Create Base-Flange Feature Using Gauge Table (VBA) (Create_Base-Flange_Feature_Using_Gauge_Table_Example_VB.htm)

## See Also

- `IBaseFlangeFeatureData.GetTableRadii`
- `IBaseFlangeFeatureData.GetTableRadiiCount`
- `IBaseFlangeFeatureData.IGetTableRadii`
- `IBaseFlangeFeatureData.TableRadius`