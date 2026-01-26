---
type: method
interface: ITableAnnotation
member: SetCellTextOrientation
returns: void
parameters:
  -
    name: Row
    type: System.Int32
    description: 0-based index of row; valid only if AllCells is set to false
  -
    name: Column
    type: System.Int32
    description: 0-based index of column; valid only if AllCells is set to false
  -
    name: IncludeHidden
    type: System.Boolean
    description: True to include hidden rows and columns in the Row and Column indexes, false to not
  -
    name: AllCells
    type: System.Boolean
    description: True for all cells, false if not; if false, set Row and Column
  -
    name: Orientation
    type: System.Int32
    description: Text orientation as defined in swTableCellOrientation_e (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - ITableAnnotation.GetCellTextOrientation
keywords:
  - table
  - cells
  - setcelltextorientation
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
  - void
---

# ITableAnnotation.SetCellTextOrientation

Sets the text orientation in the specified table cell.

## Signature

```csharp
void SetCellTextOrientation( 
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
,
   System.Int32
Orientation
)
```
## Parameters

- `Row` (System.Int32): 0-based index of row; valid only if AllCells is set to false
- `Column` (System.Int32): 0-based index of column; valid only if AllCells is set to false
- `IncludeHidden` (System.Boolean): True to include hidden rows and columns in the Row and Column indexes, false to not
- `AllCells` (System.Boolean): True for all cells, false if not; if false, set Row and Column
- `Orientation` (System.Int32): Text orientation as defined in swTableCellOrientation_e (see Remarks )

## Return Value

Unknown.

## Remarks

You can set Orientation to any member of swTableCellOrientation_e except swTableCellOrientation_Varies.

## See Also

- `ITableAnnotation.GetCellTextOrientation`