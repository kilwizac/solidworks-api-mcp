---
type: method
interface: ITableAnnotation
member: GetCellEquation
returns: System.String
parameters:
  -
    name: Row
    type: System.Int32
    description: 0-based index of the row, -1 to get the column equation
  -
    name: Column
    type: System.Int32
    description: 0-based index of the column
  -
    name: IncludeHidden
    type: System.Boolean
    description: True to include hidden rows and columns in the Row and Column indexes, false to not
  -
    name: SolvedValue
    type: System.String
    description: Evaluated equation
  -
    name: Status
    type: System.Int32
    description: Return code as defined in swCellEquationStatus_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - ITableAnnotation.EvaluateCellEquation
  - ITableAnnotation.GetColumnType3
  - ITableAnnotation.SetCellEquation
keywords:
  - table
  - cell
  - equation
  - getcellequation
  - itableannotation
  - annotation
  - row
  - int32
  - column
  - include
  - hidden
  - boolean
  - solved
  - value
  - string
  - status
  - bom
  - types
  - equations
  - vba
---

# ITableAnnotation.GetCellEquation

Gets the equation and its solved value for the specified row and column of this BOM table.

## Signature

```csharp
System.String GetCellEquation( 
   System.Int32
Row
,
   System.Int32
Column
,
   System.Boolean
IncludeHidden
,
   out System.String
SolvedValue
,
   out System.Int32
Status
)
```
## Parameters

- `Row` (System.Int32): 0-based index of the row, -1 to get the column equation
- `Column` (System.Int32): 0-based index of the column
- `IncludeHidden` (System.Boolean): True to include hidden rows and columns in the Row and Column indexes, false to not
- `SolvedValue` (System.String): Evaluated equation
- `Status` (System.Int32): Return code as defined in swCellEquationStatus_e

## Return Value

Equation

## Examples

- Get and Set BOM Column Types and Cell Equations (VBA) (Get_and_Set_Column_Types_and_Cell_Equations_Example_VB.htm)

## See Also

- `ITableAnnotation.EvaluateCellEquation`
- `ITableAnnotation.GetColumnType3`
- `ITableAnnotation.SetCellEquation`