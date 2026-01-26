---
type: method
interface: ITableAnnotation
member: MergeCells
returns: System.Boolean
parameters:
  -
    name: RowStart
    type: System.Int32
    description: Index of row at which start the merge
  -
    name: ColumnStart
    type: System.Int32
    description: Index of column at which to start the merge
  -
    name: RowEnd
    type: System.Int32
    description: Index of row at which to end the merge
  -
    name: ColumnEnd
    type: System.Int32
    description: Index of column at which to end the merge
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - ITableAnnotation.GetCellRange
  - ITableAnnotation.GetSplitInformation
  - ITableAnnotation.IsCellMerged
  - ITableAnnotation.Merge
  - ITableAnnotation.Split
  - ITableAnnotation.UnmergeCells
keywords:
  - cells
  - tables
  - table
  - merge
  - mergecells
  - itableannotation
  - annotation
  - row
  - start
  - int32
  - column
  - end
  - boolean
---

# ITableAnnotation.MergeCells

Merges the cells in the specified range.

## Signature

```csharp
System.Boolean MergeCells( 
   System.Int32
RowStart
,
   System.Int32
ColumnStart
,
   System.Int32
RowEnd
,
   System.Int32
ColumnEnd
)
```
## Parameters

- `RowStart` (System.Int32): Index of row at which start the merge
- `ColumnStart` (System.Int32): Index of column at which to start the merge
- `RowEnd` (System.Int32): Index of row at which to end the merge
- `ColumnEnd` (System.Int32): Index of column at which to end the merge

## Return Value

True if the cells in the specified range merge successfully, false if not

## Remarks

The index for both rows and columns is 0-based.

## See Also

- `ITableAnnotation.GetCellRange`
- `ITableAnnotation.GetSplitInformation`
- `ITableAnnotation.IsCellMerged`
- `ITableAnnotation.Merge`
- `ITableAnnotation.Split`
- `ITableAnnotation.UnmergeCells`