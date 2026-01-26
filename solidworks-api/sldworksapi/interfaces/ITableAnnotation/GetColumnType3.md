---
type: method
interface: ITableAnnotation
member: GetColumnType3
returns: System.Int32
parameters:
  -
    name: Index
    type: System.Int32
    description: 0-based index of the column whose type to get
  -
    name: IncludeHidden
    type: System.Boolean
    description: True to include hidden columns in Index, false to not
  -
    name: PropertyData
    type: System.Object
    description: Property data specific to the type of column (see Remarks )
  -
    name: Status
    type: System.Int32
    description: Return code as defined in swColumnTypeStatus_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - ITableAnnotation.GetCellEquation
keywords:
  - table
  - columns
  - getcolumntype3
  - itableannotation
  - annotation
  - column
  - type3
  - index
  - int32
  - include
  - hidden
  - boolean
  - data
  - object
  - status
  - bom
  - types
  - cell
  - equations
  - vba
---

# ITableAnnotation.GetColumnType3

Gets the type and property data for the specified BOM table column.

## Signature

```csharp
System.Int32 GetColumnType3( 
   System.Int32
Index
,
   System.Boolean
IncludeHidden
,
   out System.Object
PropertyData
,
   out System.Int32
Status
)
```
## Parameters

- `Index` (System.Int32): 0-based index of the column whose type to get
- `IncludeHidden` (System.Boolean): True to include hidden columns in Index, false to not
- `PropertyData` (System.Object): Property data specific to the type of column (see Remarks )
- `Status` (System.Int32): Return code as defined in swColumnTypeStatus_e

## Return Value

Type of column as defined in swTableColumnTypes_e

## Remarks

PropertyData varies by the type of column. See the Remarks in
ITableAnnotation::SetColumnType3
.

## Examples

- Get and Set BOM Column Types and Cell Equations (VBA) (Get_and_Set_Column_Types_and_Cell_Equations_Example_VB.htm)

## See Also

- `ITableAnnotation.GetCellEquation`