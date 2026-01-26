---
type: method
interface: ITableAnnotation
member: InsertColumn2
returns: System.Boolean
parameters:
  -
    name: Where
    type: System.Int32
    description: Where to insert the column as specified in swTableItemInsertPosition_e
  -
    name: Index
    type: System.Int32
    description: Index of the column where to insert the new column
  -
    name: Name
    type: System.String
    description: Column name
  -
    name: WidthStyle
    type: System.Int32
    description: Style of the width of the column as defined in swInsertTableColumnWidthStyle_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - ITableAnnotation.ColumnCount
  - ITableAnnotation.ColumnHidden
  - ITableAnnotation.DeleteColumn
  - ITableAnnotation.GetColumnTitle
  - ITableAnnotation.GetColumnType
  - ITableAnnotation.GetColumnWidth
  - ITableAnnotation.GetLockColumnWidth
  - ITableAnnotation.MoveColumn
  - ITableAnnotation.SetColumnTitle
  - ITableAnnotation.SetColumnType
  - ITableAnnotation.SetColumnWidth
  - ITableAnnotation.SetLockColumnWidth
  - ITableAnnotation.TotalColumnCount
keywords:
  - table
  - columns
  - insertcolumn2
  - itableannotation
  - annotation
  - insert
  - column2
  - where
  - int32
  - index
  - name
  - string
  - width
  - style
  - boolean
  - column
  - bom
  - vb
  - net
  - vba
---

# ITableAnnotation.InsertColumn2

Inserts a column into this table.

## Signature

```csharp
System.Boolean InsertColumn2( 
   System.Int32
Where
,
   System.Int32
Index
,
   System.String
Name
,
   System.Int32
WidthStyle
)
```
## Parameters

- `Where` (System.Int32): Where to insert the column as specified in swTableItemInsertPosition_e
- `Index` (System.Int32): Index of the column where to insert the new column
- `Name` (System.String): Column name
- `WidthStyle` (System.Int32): Style of the width of the column as defined in swInsertTableColumnWidthStyle_e

## Return Value

True if column is inserted successfully, false if not

## Remarks

Index:
is 0-based.
is valid only if Where is set to swTableItemInsertPosition_e.swTableItemInsertPosition_After or swTableItemInsertPosition_e.swTableItemInsertPosition_Before.

## Examples

- Insert Column in BOM Table (C#) (Insert_Column_in_BOM_Table_Example_CSharp.htm)
- Insert Column in BOM Table (VB.NET) (Insert_Column_in_BOM_Table_Example_VBNET.htm)
- Insert Column in BOM Table (VBA) (Insert_Column_in_BOM_Table_Example_VB.htm)

## See Also

- `ITableAnnotation.ColumnCount`
- `ITableAnnotation.ColumnHidden`
- `ITableAnnotation.DeleteColumn`
- `ITableAnnotation.GetColumnTitle`
- `ITableAnnotation.GetColumnType`
- `ITableAnnotation.GetColumnWidth`
- `ITableAnnotation.GetLockColumnWidth`
- `ITableAnnotation.MoveColumn`
- `ITableAnnotation.SetColumnTitle`
- `ITableAnnotation.SetColumnType`
- `ITableAnnotation.SetColumnWidth`
- `ITableAnnotation.SetLockColumnWidth`
- `ITableAnnotation.TotalColumnCount`