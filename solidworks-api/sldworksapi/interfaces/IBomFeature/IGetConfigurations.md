---
type: method
interface: IBomFeature
member: IGetConfigurations
returns: System.String
parameters:
  -
    name: OnlyVisible
    type: System.Boolean
    description: True to get the names of configurations currently displayed in this table, false to get the names of configurations available to this table
  -
    name: Count
    type: System.Int32
    description: Number of items in the Visible and Names arguments
  -
    name: Visible
    type: System.Boolean
    description: Array of BOOLEANs indicating the visibility of the configurations
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - features
related:
  - IBomFeature.GetConfigurations
  - IBomFeature.ISetConfigurations
keywords:
  - igetconfigurations
  - ibomfeature
  - bom
  - feature
  - configurations
  - only
  - visible
  - boolean
  - count
  - int32
  - string
---

# IBomFeature.IGetConfigurations

Gets the configurations available to this BOM table or used in this BOM table.

## Signature

```csharp
System.String IGetConfigurations( 
   System.Boolean
OnlyVisible
,
   System.Int32
Count
,
   out System.Boolean
Visible
)
```
## Parameters

- `OnlyVisible` (System.Boolean): True to get the names of configurations currently displayed in this table, false to get the names of configurations available to this table
- `Count` (System.Int32): Number of items in the Visible and Names arguments
- `Visible` (System.Boolean): Array of BOOLEANs indicating the visibility of the configurations

## Return Value

in-process, unmanaged C++: Pointer to an array of strings of the names of the configurations VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Although this method works on all styles of BOM tables (top-level only, parts-only, indented subassemblies), it is only necessary for top-level only style tables.
For the other style tables, where only a single configuration is shown at a time, using
IBomFeature::Configuration
is simpler and more efficient.
The view associated with this BOM can contain a model with multiple configurations. For a top-level only style BOM table, there can be several Quantity columns, each showing the results for a different configuration.
For the other styles of BOM tables, only a particular configuration can be shown in the table, and that configuration can be changed. To determine the BOM table style, use the
IBomFeature::TableType
property.
If OnlyVisible is...
Then Names contains the names of...
And Visible...
True
Only the configurations currently shown in the BOM table.
For a top-level only style BOM table, this could be any number of configurations. For the other styles of BOM tables, it is one configuration name.
Can be passed in as NULL.
If it is passed in as non-NULL, the array contains True for all items.
False
All configurations available.
Contains BOOLEANs that correspond to each item in Names indicating if that particular configuration is shown in the BOM table or not.
To get the number of configurations, use
IBomFeature::GetConfigurationCount
.
To set the configurations, use
IBomFeature::ISetConfigurations
.

## See Also

- `IBomFeature.GetConfigurations`
- `IBomFeature.ISetConfigurations`