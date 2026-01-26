---
type: method
interface: ITableAnnotation
member: Split
returns: TableAnnotation
parameters:
  -
    name: Where
    type: System.Int32
    description: Where to split the table as defined in swTableSplitLocations_e
  -
    name: Index
    type: System.Int32
    description: Index of the row or column as specified in Where to split the table (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - ITableAnnotation.GetSplitInformation
  - ITableAnnotation.HorizontalAutoSplit
  - ITableAnnotation.IsCellMerged
  - ITableAnnotation.Merge
  - ITableAnnotation.MergeCells
  - ITableAnnotation.StopAutoSplitting
  - ITableAnnotation.UnmergeCells
keywords:
  - split
  - table
  - itableannotation
  - annotation
  - where
  - int32
  - index
---

# ITableAnnotation.Split

Splits the table at the specified location.

## Signature

```csharp
TableAnnotation Split( 
   System.Int32
Where
,
   System.Int32
Index
)
```
## Parameters

- `Where` (System.Int32): Where to split the table as defined in swTableSplitLocations_e
- `Index` (System.Int32): Index of the row or column as specified in Where to split the table (see Remarks )

## Return Value

Newly created ITableAnnotation object

## Remarks

The index for both rows and columns is 0-based.
The indexes for the rows and columns always correspond to the rows and columns of the table from which the split table originates.

## See Also

- `ITableAnnotation.GetSplitInformation`
- `ITableAnnotation.HorizontalAutoSplit`
- `ITableAnnotation.IsCellMerged`
- `ITableAnnotation.Merge`
- `ITableAnnotation.MergeCells`
- `ITableAnnotation.StopAutoSplitting`
- `ITableAnnotation.UnmergeCells`