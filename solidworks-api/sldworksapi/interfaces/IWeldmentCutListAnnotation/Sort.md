---
type: method
interface: IWeldmentCutListAnnotation
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
  - iweldmentcutlistannotation
  - weldment
  - cut
  - list
  - annotation
  - column
  - index
  - int32
  - ascending
  - boolean
  - vba
  - vb
  - net
---

# IWeldmentCutListAnnotation.Sort

Sorts this weldment cut list by the specified column in the specified sorting direction.

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

Weldment cut lists must be sorted by any column except Item Number.
See
Sorting Tables
for more information.

## Examples

- Sort Table (VBA) (Sort_Table_Example_VB.htm)
- Sort Table (VB.NET) (Sort_Table_Example_VBNET.htm)
- Sort Table (C#) (Sort_Table_Example_CSharp.htm)