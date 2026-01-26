---
type: method
interface: IBomTableAnnotation
member: ApplySavedSortScheme
returns: System.Boolean
parameters:
  -
    name: SortData
    type: BomTableSortData
    description: IBomTableSortData
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - file-io
related: []
keywords:
  - table
  - sort
  - applysavedsortscheme
  - ibomtableannotation
  - bom
  - annotation
  - apply
  - saved
  - scheme
  - data
  - boolean
  - vba
  - vb
  - net
---

# IBomTableAnnotation.ApplySavedSortScheme

Sorts this BOM table using the sort data that was previously saved in the table.

## Signature

```csharp
System.Boolean ApplySavedSortScheme( 
   BomTableSortData
SortData
)
```
## Parameters

- `SortData` (BomTableSortData): IBomTableSortData

## Return Value

True if BOM table is successfully sorted, false if not

## Remarks

Before calling this method, you must:
Set
IBomTableSortData::SaveCurrentSortParameters
to true to indicate that the sort settings should be saved in the BOM table in the drawing.
IBomTableAnnotation::Sort
to actually save the sort settings in the BOM table in the drawing.
IBomTableAnnotation::GetBomTableSortData
to populate SortData.
See
Sorting Tables
for more information.

## Examples

- Sort Table (VBA) (Sort_Table_Example_VB.htm)
- Sort Table (VB.NET) (Sort_Table_Example_VBNET.htm)
- Sort Table (C#) (Sort_Table_Example_CSharp.htm)