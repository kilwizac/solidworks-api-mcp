---
type: property
interface: IBomTableAnnotation
member: GetColumnCustomProperty
returns: System.String
parameters:
  -
    name: Index
    type: System.Int32
    description: Column from which to get the custom property
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IBomTableAnnotation.GetAllCustomPropertiesCount
  - IBomTableAnnotation.SetColumnCustomProperty
keywords:
  - bill
  - materials
  - custom
  - properties
  - see
  - also
  - icustompropertymanager
  - columns
  - getcolumncustomproperty
  - ibomtableannotation
  - bom
  - table
  - annotation
  - column
  - index
  - int32
  - string
  - vba
readonly: null
---

# IBomTableAnnotation.GetColumnCustomProperty

Gets the custom property used to fill the values in a specified user-defined column.

## Signature

```csharp
System.String GetColumnCustomProperty( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Column from which to get the custom property

## Return Value

Custom property used to fill the values in this user-defined column

## Remarks

This method will return an empty string if the column is not a user-defined column.
To get the list of custom properties, use
IBomTableAnnotation::GetAllCustomProperties
or
IBomTableAnnotation::IGetAllCustomProperties
. The list of possible custom properties includes all of the items in the BOM table, which includes items from the file summary items and file custom properties that have been set.

## Examples

- Get Custom Properties for BOM Table Columns (VBA) (Get_Custom_Properties_for_BOM_Table_Columns_Example_VB.htm)

## See Also

- `IBomTableAnnotation.GetAllCustomPropertiesCount`
- `IBomTableAnnotation.SetColumnCustomProperty`