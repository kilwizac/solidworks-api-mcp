---
type: method
interface: IHoleTableAnnotation
member: Sort
returns: System.Boolean
parameters:
  -
    name: ColumnIndex
    type: System.Int32
    description: 0-based index of column to sort by (see Remarks )
  -
    name: SortAscending
    type: System.Boolean
    description: True to sort ascending, false to sort descending
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - table
  - sort
  - iholetableannotation
  - hole
  - annotation
  - column
  - index
  - int32
  - ascending
  - boolean
  - vb
  - net
  - vba
---

# IHoleTableAnnotation.Sort

Sorts this hole table by the specified column in the specified sorting direction.

## Signature

```csharp
System.Boolean Sort( 
   System.Int32
ColumnIndex
,
   System.Boolean
SortAscending
)
```
## Parameters

- `ColumnIndex` (System.Int32): 0-based index of column to sort by (see Remarks )
- `SortAscending` (System.Boolean): True to sort ascending, false to sort descending

## Return Value

True if sorted successfully, false if not

## Remarks

Hole tables must be sorted by the Tag column.
See
Sorting Tables
for more information.

## Examples

- Sort Table (C#) (Sort_Table_Example_CSharp.htm)
- Sort Table (VB.NET) (Sort_Table_Example_VBNET.htm)
- Sort Table (VBA) (Sort_Table_Example_VB.htm)