---
type: method
interface: IBomFeature
member: ISetConfigurations
returns: System.Boolean
parameters:
  -
    name: OnlyVisible
    type: System.Boolean
    description: Indicator of the contents of the arrays (see Remarks )
  -
    name: Count
    type: System.Int32
    description: Number of items in Visible and Names
  -
    name: Visible
    type: System.Boolean
    description: in-process, unmanaged C++: Pointer to an array of Booleans indicating the visibility of the configurations VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
  -
    name: Names
    type: System.String
    description: in-process, unmanaged C++: Pointer to an array of strings of the names of the configurations VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - features
related:
  - IBomFeature.IGetConfigurations
  - IBomFeature.SetConfigurations
keywords:
  - bill
  - materials
  - configurations
  - configuration
  - see
  - also
  - iconfiguration
  - isetconfigurations
  - ibomfeature
  - bom
  - feature
  - only
  - visible
  - boolean
  - count
  - int32
  - names
  - string
---

# IBomFeature.ISetConfigurations

Sets the configurations used in this BOM table.

## Signature

```csharp
System.Boolean ISetConfigurations( 
   System.Boolean
OnlyVisible
,
   System.Int32
Count
,
   ref System.Boolean
Visible
,
   ref System.String
Names
)
```
## Parameters

- `OnlyVisible` (System.Boolean): Indicator of the contents of the arrays (see Remarks )
- `Count` (System.Int32): Number of items in Visible and Names
- `Visible` (System.Boolean): in-process, unmanaged C++: Pointer to an array of Booleans indicating the visibility of the configurations VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
- `Names` (System.String): in-process, unmanaged C++: Pointer to an array of strings of the names of the configurations VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

True if configurations are set, false if not

## Remarks

Although this method works on all styles of BOM tables (top-level only, parts-only, indented subassemblies), it is only necessary for top-level only style tables.
For the other style tables, where only a single configuration is shown at a time, using
IBomFeature::Configuration
is simpler and more efficient.
NOTE:
If the
Restrict top-level only BOMs to one configuration
option on the
Document Properties > Tables > Bill of Materials
dialog or
IModelDocExtension::GetUserPreferenceToggle
(
swUserPreferenceToggle_e
.swOneConfigOnlyTopLevelBom) returns true, then only the active or default configuration of the drawing view is inserted in the BOM.
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
Can be passed in as null.
If it is passed in as non-null, the array contains true for all items.
False
All configurations available.
Contains Booleans that correspond to each item in Names indicating if that particular configuration is shown in the BOM table or not.
To get the number of configurations, use
IBomFeature::GetConfigurationCount
.

## See Also

- `IBomFeature.IGetConfigurations`
- `IBomFeature.SetConfigurations`