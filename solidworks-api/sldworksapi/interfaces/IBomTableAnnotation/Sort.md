---
type: method
interface: IBomTableAnnotation
member: Sort
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
related:
  - IBomTableAnnotation.ApplySavedSortScheme
keywords:
  - table
  - sort
  - ibomtableannotation
  - bom
  - annotation
  - data
  - boolean
  - vb
  - net
  - vba
---

# IBomTableAnnotation.Sort

Sorts this BOM table using the specified sorting data.

## Signature

```csharp
System.Boolean Sort( 
   BomTableSortData
SortData
)
```
## Parameters

- `SortData` (BomTableSortData): IBomTableSortData

## Return Value

True if sorted successfully, false if not

## Remarks

Before calling this method, call
IBomTableAnnotation::GetBomTableSortData
to populate SortData.
See
Sorting Tables
for more information.

## Examples

- Sort Table (C#) (Sort_Table_Example_CSharp.htm)
- Sort Table (VB.NET) (Sort_Table_Example_VBNET.htm)
- Sort Table (VBA) (Sort_Table_Example_VB.htm)

## See Also

- `IBomTableAnnotation.ApplySavedSortScheme`