---
type: property
interface: IBomTableSortData
member: ColumnIndex
returns: System.Int32
parameters:
  -
    name: SortOrderIndex
    type: System.Int32
    description: 0 for primary sort, 1 for secondary sort, 2 for tertiary sort (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - columnindex
  - ibomtablesortdata
  - bom
  - table
  - sort
  - data
  - column
  - index
  - order
  - int32
readonly: null
---

# IBomTableSortData.ColumnIndex

Gets and sets the column index for the specified sort order index.

## Signature

```csharp
System.Int32 ColumnIndex( 
   System.Int32
SortOrderIndex
) {get; set;}
```
## Parameters

- `SortOrderIndex` (System.Int32): 0 for primary sort, 1 for secondary sort, 2 for tertiary sort (see Remarks )

## Return Value

0-based column index mapped to the specified SortOrderIndex; specify -1 if the specified SortOrderIndex is not used

## Remarks

BOM tables may be sorted by up to three columns. This property maps one column to a sort order index. Call this property three times to set the sort order indexes of all three columns.

## Examples

- IBomTableSortData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IBomTableSortData)