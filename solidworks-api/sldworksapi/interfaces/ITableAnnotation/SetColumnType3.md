---
type: method
interface: ITableAnnotation
member: SetColumnType3
returns: System.Int32
parameters:
  -
    name: Index
    type: System.Int32
    description: 0-based index of the column whose type to set
  -
    name: ColumnType
    type: System.Int32
    description: Type of column as defined in swTableColumnTypes_e (see Remarks )
  -
    name: IncludeHidden
    type: System.Boolean
    description: True to include hidden columns in Index, false to not
  -
    name: PropertyData
    type: System.Object
    description: Property data specific to ColumnType (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - ITableAnnotation.GetColumnType3
  - ITableAnnotation.SetCellEquation
keywords:
  - table
  - columns
  - setcolumntype3
  - itableannotation
  - annotation
  - column
  - type3
  - index
  - int32
  - type
  - include
  - hidden
  - boolean
  - data
  - object
  - bom
  - types
  - cell
  - equations
  - vba
---

# ITableAnnotation.SetColumnType3

Sets the type and property data for the specified BOM table column.

## Signature

```csharp
System.Int32 SetColumnType3( 
   System.Int32
Index
,
   System.Int32
ColumnType
,
   System.Boolean
IncludeHidden
,
   System.Object
PropertyData
)
```
## Parameters

- `Index` (System.Int32): 0-based index of the column whose type to set
- `ColumnType` (System.Int32): Type of column as defined in swTableColumnTypes_e (see Remarks )
- `IncludeHidden` (System.Boolean): True to include hidden columns in Index, false to not
- `PropertyData` (System.Object): Property data specific to ColumnType (see Remarks )

## Return Value

Return code as defined in swColumnTypeStatus_e

## Remarks

PropertyData specifies the column title and contents.
If ColumnType is set to swTableColumnTypes_e....
Then Set PropertyData with...
swBomTableColumnType_CustomProperty
Valid property name*
swBomTableColumnType_UnitOfMeasure
Valid property name*
swBomTableColumnType_Equation
Equation string
swBomTableColumnType_ComponentReference
Null or Nothing
swBomTableColumnType_ToolboxProperty
Property as defined in
swToolBoxPropertyName_e
swBomTableColumnType_CutListProperties (valid only for sheetmetal parts)
Valid cutlist property name*
swBomTableColumnType_ItemNumber
Array of four values {
Start_Item_Int
,
Increment_Int
,
Order_balloons_and_BOM_to_follow_assembly_order_Bool
,
Do_not_change_BOM_item_number_Bool
}
swBomTableColumnType_PartNumber
True to use title summary, false to not
* Note: To get the valid property names for a given column type, open a part in SOLIDWORKS and add a BOM table to it. Right-click a column and select
Insert > Column Right
. In the popup, select the column type of interest in the first dropdown. Inspect the contents of the second dropdown to see the valid property names for the column type.
When you set a column type, the title is automatically changed to match that column type. If you change the column type to custom property, you must set the column title using
ITableAnnotation::SetColumnTitle2
.
This method is consistent with the SOLIDWORKS Design user interface where you cannot add, delete, or replace the Quantity type column in a BOM table.

## Examples

- Get and Set BOM Column Types and Cell Equations (VBA) (Get_and_Set_Column_Types_and_Cell_Equations_Example_VB.htm)

## See Also

- `ITableAnnotation.GetColumnType3`
- `ITableAnnotation.SetCellEquation`