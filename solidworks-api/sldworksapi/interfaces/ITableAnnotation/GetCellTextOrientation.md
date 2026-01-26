---
type: method
interface: ITableAnnotation
member: GetCellTextOrientation
returns: System.Int32
parameters:
  -
    name: Row
    type: System.Int32
    description: 0-based index of the cell row; valid only if AllCells is set to false
  -
    name: Column
    type: System.Int32
    description: 0-based index of the cell column; valid only if AllCells is set to false
  -
    name: IncludeHidden
    type: System.Boolean
    description: True to include hidden rows and columns in Row and Column indexes, false to not
  -
    name: AllCells
    type: System.Boolean
    description: True to get the orientation in all cells, false to not; if false, set Row and Column (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - ITableAnnotation.SetCellTextOrientation
keywords:
  - table
  - cells
  - getcelltextorientation
  - itableannotation
  - annotation
  - cell
  - text
  - orientation
  - row
  - int32
  - column
  - include
  - hidden
  - boolean
  - all
---

# ITableAnnotation.GetCellTextOrientation

Gets the text orientation in the specified cell of this table.

## Signature

```csharp
System.Int32 GetCellTextOrientation( 
   System.Int32
Row
,
   System.Int32
Column
,
   System.Boolean
IncludeHidden
,
   System.Boolean
AllCells
)
```
## Parameters

- `Row` (System.Int32): 0-based index of the cell row; valid only if AllCells is set to false
- `Column` (System.Int32): 0-based index of the cell column; valid only if AllCells is set to false
- `IncludeHidden` (System.Boolean): True to include hidden rows and columns in Row and Column indexes, false to not
- `AllCells` (System.Boolean): True to get the orientation in all cells, false to not; if false, set Row and Column (see Remarks )

## Return Value

Text orientation as defined in swTableCellOrientation_e (see Remarks )

## Remarks

If AllCells is set to false, this method returns one of swTableCellOrientation_e.:
swTableCellOrientation_Right
swTableCellOrientation_Left
swTableCellOrientation_Up
swTableCellOrientation_Down
If AllCells is set to true, this method returns one of the above or:
swTableCellOrientation_Varies, if all the cells do not share the same text orientation.

## See Also

- `ITableAnnotation.SetCellTextOrientation`