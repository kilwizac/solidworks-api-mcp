---
type: property
interface: IBomTableSortData
member: Ascending
returns: System.Boolean
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
  - ascending
  - ibomtablesortdata
  - bom
  - table
  - sort
  - data
  - order
  - index
  - int32
  - boolean
readonly: null
---

# IBomTableSortData.Ascending

Gets and sets whether this is an ascending sort for the specified sort order index.

## Signature

```csharp
System.Boolean Ascending( 
   System.Int32
SortOrderIndex
) {get; set;}
```
## Parameters

- `SortOrderIndex` (System.Int32): 0 for primary sort, 1 for secondary sort, 2 for tertiary sort (see Remarks )

## Return Value

True if sort is ascending, false if descending

## Remarks

BOM tables may be sorted by up to three columns. This property maps the sort order index with a sorting direction (ascending or descending). Call this property three times to set the sorting directions of all three sort order indexes.

## Examples

- IBomTableSortData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IBomTableSortData)