---
type: property
interface: ISheetMetalFeatureData
member: UseMaterialSheetMetalParameters
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IBaseFlangeFeatureData.Initialize
keywords:
  - usematerialsheetmetalparameters
  - isheetmetalfeaturedata
  - sheet
  - metal
  - feature
  - data
  - use
  - material
  - parameters
  - boolean
readonly: null
---

# ISheetMetalFeatureData.UseMaterialSheetMetalParameters

Gets or sets whether to use the properties of the material applied when creating this sheet metal feature.

## Signature

```csharp
System.Boolean UseMaterialSheetMetalParameters {get; set;}
```
## Parameters

None.

## Return Value

True to use the material sheet metal parameters, false to not

## Remarks

This property is valid only when
ISheetMetalFeatureData::GetUseGaugeTable
returns false.

## See Also

- `IBaseFlangeFeatureData.Initialize`