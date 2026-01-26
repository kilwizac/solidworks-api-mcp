---
type: method
interface: ITableAnnotation
member: SetColumnType
returns: System.Boolean
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of the column whose type to set
  -
    name: Type
    type: System.Int32
    description: Column type as defined by swTableColumnTypes_e
docset: sldworksapi
deprecated: true
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
  - ITableAnnotation.InsertColumn
  - ITableAnnotation.MoveColumn
  - ITableAnnotation.SetColumnTitle
  - ITableAnnotation.SetColumnWidth
  - ITableAnnotation.SetLockColumnWidth
  - ITableAnnotation.TotalColumnCount
keywords:
  - setcolumntype
  - itableannotation
  - table
  - annotation
  - column
  - type
  - index
  - int32
  - boolean
---

# ITableAnnotation.SetColumnType

Obsolete. Superseded by ITableAnnotation::SetColumnType2.

## Signature

```csharp
System.Boolean SetColumnType( 
   System.Int32
Index
,
   System.Int32
Type
)
```
## Parameters

- `Index` (System.Int32): Index of the column whose type to set
- `Type` (System.Int32): Column type as defined by swTableColumnTypes_e

## Return Value

True if column type is set, false if not

## Remarks

The index for both rows and columns is 0-based.
When you set a column type, the title is automatically changed to match that column type. If you change the column type to be a custom property column, then the column title is empty and you must set the column title using
ITableAnnotation::SetColumnTitle
.
A BOM table column cannot be changed to a Quantity type column in the SOLIDWORKS Design user interface. This method is consistent with the user interface and should return a failure; that is, a value < 0.

## See Also

- `ITableAnnotation.ColumnCount`
- `ITableAnnotation.ColumnHidden`
- `ITableAnnotation.DeleteColumn`
- `ITableAnnotation.GetColumnTitle`
- `ITableAnnotation.GetColumnType`
- `ITableAnnotation.GetColumnWidth`
- `ITableAnnotation.GetLockColumnWidth`
- `ITableAnnotation.InsertColumn`
- `ITableAnnotation.MoveColumn`
- `ITableAnnotation.SetColumnTitle`
- `ITableAnnotation.SetColumnWidth`
- `ITableAnnotation.SetLockColumnWidth`
- `ITableAnnotation.TotalColumnCount`