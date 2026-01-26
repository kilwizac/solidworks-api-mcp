---
type: method
interface: ITableAnnotation
member: UnmergeCells
returns: System.Boolean
parameters:
  -
    name: Row
    type: System.Int32
    description: Index of the row of the cell
  -
    name: Column
    type: System.Int32
    description: Index of the column of the cell
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - ITableAnnotation.GetSplitInformation
  - ITableAnnotation.IsCellMerged
  - ITableAnnotation.Merge
  - ITableAnnotation.MergeCells
  - ITableAnnotation.Split
keywords:
  - merge
  - tables
  - table
  - unmergecells
  - itableannotation
  - annotation
  - unmerge
  - cells
  - row
  - int32
  - column
  - boolean
---

# ITableAnnotation.UnmergeCells

Splits the specified previously merged cell in this table.

## Signature

```csharp
System.Boolean UnmergeCells( 
   System.Int32
Row
,
   System.Int32
Column
)
```
## Parameters

- `Row` (System.Int32): Index of the row of the cell
- `Column` (System.Int32): Index of the column of the cell

## Return Value

True if the cell splits successfully, false if not

## Remarks

Index for both rows and columns is 0-based.

## See Also

- `ITableAnnotation.GetSplitInformation`
- `ITableAnnotation.IsCellMerged`
- `ITableAnnotation.Merge`
- `ITableAnnotation.MergeCells`
- `ITableAnnotation.Split`