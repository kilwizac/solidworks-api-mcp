---
type: method
interface: IBomFeature
member: GetConfigurationCount
returns: System.Int32
parameters:
  -
    name: OnlyVisible
    type: System.Boolean
    description: True to get the number of configurations currently displayed in this table, false to get the total number of configurations available in this table
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - features
related: []
keywords:
  - getconfigurationcount
  - ibomfeature
  - bom
  - feature
  - configuration
  - count
  - only
  - visible
  - boolean
  - int32
---

# IBomFeature.GetConfigurationCount

Gets the number of configurations available to this BOM table or used in this BOM table.

## Signature

```csharp
System.Int32 GetConfigurationCount( 
   System.Boolean
OnlyVisible
)
```
## Parameters

- `OnlyVisible` (System.Boolean): True to get the number of configurations currently displayed in this table, false to get the total number of configurations available in this table

## Return Value

Number of configurations in this BOM table or available to this BOM table

## Remarks

The view associated with this BOM can contain a model with multiple configurations.
For a top-level only style BOM table, there can be several Quantity columns, each showing the results for a different configuration.
For the other styles of BOM tables, only a particular configuration can be shown in the table, and that configuration can be changed. To determine the style of the BOM table, use
IBomFeature::TableType
.
If OnlyVisible is...
Then the value returned is...
True
Number of configurations currently shown in the BOM table.
For a top-level only style BOM table, this could be any number from 0 to the total number of configurations available. For the other styles of BOM tables, this value is always 1.
false
Total number of configurations available.
T
o get the configuration names, call
IBomFeature::GetConfigurations
or
IBomFeature::IGetConfigurations
.
Call this method before calling IBomFeature::IGetConfigurations to get the number of configurations.