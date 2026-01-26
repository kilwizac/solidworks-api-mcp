---
type: method
interface: ITableAnnotation
member: InsertRow
returns: System.Boolean
parameters:
  -
    name: Where
    type: System.Int32
    description: Where to insert the new row as defined in swTableItemInsertPosition_e
  -
    name: Index
    type: System.Int32
    description: Index of row where to insert new row (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - ITableAnnotation.DeleteRow
  - ITableAnnotation.GetLockRowHeight
  - ITableAnnotation.GetRowHeight
  - ITableAnnotation.GetRowVerticalGap
  - ITableAnnotation.MoveRow
  - ITableAnnotation.RowCount
  - ITableAnnotation.RowHidden
  - ITableAnnotation.SetLockRowHeight
  - ITableAnnotation.SetRowHeight
  - ITableAnnotation.SetRowVerticalGap
  - ITableAnnotation.TotalRowCount
keywords:
  - table
  - rows
  - insertrow
  - itableannotation
  - annotation
  - insert
  - row
  - where
  - int32
  - index
  - boolean
  - sort
  - vba
  - vb
  - net
---

# ITableAnnotation.InsertRow

Inserts a row into this table.

## Signature

```csharp
System.Boolean InsertRow( 
   System.Int32
Where
,
   System.Int32
Index
)
```
## Parameters

- `Where` (System.Int32): Where to insert the new row as defined in swTableItemInsertPosition_e
- `Index` (System.Int32): Index of row where to insert new row (see Remarks )

## Return Value

Unknown.

## Remarks

Index:
is 0-based.
is valid only if Where is set to swTableItemInsertPosition_e.swTableItemInsertPosition_After or swTableItemInsertPosition_e.swTableItemInsertPosition_Before.

## Examples

- Sort Table (VBA) (Sort_Table_Example_VB.htm)
- Sort Table (VB.NET) (Sort_Table_Example_VBNET.htm)
- Sort Table (C#) (Sort_Table_Example_CSharp.htm)

## See Also

- `ITableAnnotation.DeleteRow`
- `ITableAnnotation.GetLockRowHeight`
- `ITableAnnotation.GetRowHeight`
- `ITableAnnotation.GetRowVerticalGap`
- `ITableAnnotation.MoveRow`
- `ITableAnnotation.RowCount`
- `ITableAnnotation.RowHidden`
- `ITableAnnotation.SetLockRowHeight`
- `ITableAnnotation.SetRowHeight`
- `ITableAnnotation.SetRowVerticalGap`
- `ITableAnnotation.TotalRowCount`