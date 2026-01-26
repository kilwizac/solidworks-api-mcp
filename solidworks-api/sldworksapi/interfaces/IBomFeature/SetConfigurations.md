---
type: method
interface: IBomFeature
member: SetConfigurations
returns: System.Boolean
parameters:
  -
    name: OnlyVisible
    type: System.Boolean
    description: Indicator of the contents of the arrays (see Remarks )
  -
    name: Visible
    type: System.Object
    description: Array of Booleans indicating the visibility of the configurations
  -
    name: Names
    type: System.Object
    description: Array of strings of the names of the configurations
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
  - bill
  - materials
  - configurations
  - configuration
  - see
  - also
  - iconfiguration
  - setconfigurations
  - ibomfeature
  - bom
  - feature
  - only
  - visible
  - boolean
  - object
  - names
  - insert
  - table
  - vb
  - net
  - vba
---

# IBomFeature.SetConfigurations

Sets the configurations used in this BOM table.

## Signature

```csharp
System.Boolean SetConfigurations( 
   System.Boolean
OnlyVisible
,
   System.Object
Visible
,
   System.Object
Names
)
```
## Parameters

- `OnlyVisible` (System.Boolean): Indicator of the contents of the arrays (see Remarks )
- `Visible` (System.Object): Array of Booleans indicating the visibility of the configurations
- `Names` (System.Object): Array of strings of the names of the configurations

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
Can be passed in as null or nothing.
If it is passed in as non-null or non-nothing, then the array contains true for all items.
False
All configurations available.
Contains Booleans that correspond to each item in Names indicating if that particular configuration is shown in the BOM table or not.
To get the number of configurations, use
IBomFeature::GetConfigurationCount
.

## Examples

- Insert BOM Table (C#) (Insert_BOM_Table_Example_CSharp.htm)
- Insert BOM Table (VB.NET) (Insert_BOM_Table_Example_VBNET.htm)
- Insert BOM Table (VBA) (Insert_BOM_Table_Example_VB.htm)

## See Also

- `IBomFeature.GetConfigurations`
- `IBomFeature.ISetConfigurations`