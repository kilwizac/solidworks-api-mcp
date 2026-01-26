---
type: method
interface: ISheetMetalFeatureData
member: SetUseGaugeTable
returns: System.Int32
parameters:
  -
    name: UseGaugeTable
    type: System.Boolean
    description: True to use a gauge table, false to not
  -
    name: GaugeTableFile
    type: System.String
    description: Gauge table file name; valid only if UseGaugeTable is true
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISheetMetalFeatureData.GetUseGaugeTable
keywords:
  - sheet
  - metal
  - see
  - also
  - isheetmetalfeaturedata
  - gauge
  - table
  - setusegaugetable
  - feature
  - data
  - use
  - boolean
  - file
  - string
  - int32
---

# ISheetMetalFeatureData.SetUseGaugeTable

Sets whether to use a sheet metal feature gauge table.

## Signature

```csharp
System.Int32 SetUseGaugeTable( 
   System.Boolean
UseGaugeTable
,
   System.String
GaugeTableFile
)
```
## Parameters

- `UseGaugeTable` (System.Boolean): True to use a gauge table, false to not
- `GaugeTableFile` (System.String): Gauge table file name; valid only if UseGaugeTable is true

## Return Value

Result code as defined in swSheetMetalModifierError_e

## See Also

- `ISheetMetalFeatureData.GetUseGaugeTable`