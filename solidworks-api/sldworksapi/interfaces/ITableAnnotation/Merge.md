---
type: method
interface: ITableAnnotation
member: Merge
returns: System.Boolean
parameters:
  -
    name: Where
    type: System.Int32
    description: Merge the display of this table as defined in swTableMergeLocations_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - ITableAnnotation.GetSplitInformation
  - ITableAnnotation.IsCellMerged
  - ITableAnnotation.MergeCells
  - ITableAnnotation.Split
  - ITableAnnotation.UnmergeCells
keywords:
  - merge
  - tables
  - table
  - itableannotation
  - annotation
  - where
  - int32
  - boolean
---

# ITableAnnotation.Merge

Merges the display of this table.

## Signature

```csharp
System.Boolean Merge( 
   System.Int32
Where
)
```
## Parameters

- `Where` (System.Int32): Merge the display of this table as defined in swTableMergeLocations_e

## Return Value

True if the merge is successful, false if not

## See Also

- `ITableAnnotation.GetSplitInformation`
- `ITableAnnotation.IsCellMerged`
- `ITableAnnotation.MergeCells`
- `ITableAnnotation.Split`
- `ITableAnnotation.UnmergeCells`