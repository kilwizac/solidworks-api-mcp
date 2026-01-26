---
type: method
interface: ITableAnnotation
member: MoveRow
returns: System.Boolean
parameters:
  -
    name: Source
    type: System.Int32
    description: Index of row to move
  -
    name: Where
    type: System.Int32
    description: Position where to move Source relative to Destination as defined by swTableItemInsertPosition_e
  -
    name: Destination
    type: System.Int32
    description: Index of row where to move Source, which is either 1 greater than the Source or 1 less than Source
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
  - ITableAnnotation.InsertRow
  - ITableAnnotation.RowCount
  - ITableAnnotation.RowHidden
  - ITableAnnotation.SetLockRowHeight
  - ITableAnnotation.SetRowHeight
  - ITableAnnotation.SetRowVerticalGap
  - ITableAnnotation.TotalRowCount
keywords:
  - table
  - rows
  - moverow
  - itableannotation
  - annotation
  - move
  - row
  - source
  - int32
  - where
  - destination
  - boolean
---

# ITableAnnotation.MoveRow

Moves a row in this table either up one row or down one row.

## Signature

```csharp
System.Boolean MoveRow( 
   System.Int32
Source
,
   System.Int32
Where
,
   System.Int32
Destination
)
```
## Parameters

- `Source` (System.Int32): Index of row to move
- `Where` (System.Int32): Position where to move Source relative to Destination as defined by swTableItemInsertPosition_e
- `Destination` (System.Int32): Index of row where to move Source, which is either 1 greater than the Source or 1 less than Source

## Return Value

True if a row is moved, false if not

## Remarks

The index for both rows and columns is 0-based.

## See Also

- `ITableAnnotation.DeleteRow`
- `ITableAnnotation.GetLockRowHeight`
- `ITableAnnotation.GetRowHeight`
- `ITableAnnotation.GetRowVerticalGap`
- `ITableAnnotation.InsertRow`
- `ITableAnnotation.RowCount`
- `ITableAnnotation.RowHidden`
- `ITableAnnotation.SetLockRowHeight`
- `ITableAnnotation.SetRowHeight`
- `ITableAnnotation.SetRowVerticalGap`
- `ITableAnnotation.TotalRowCount`