---
type: method
interface: ITableAnnotation
member: EvaluateCellEquation
returns: System.Int32
parameters:
  -
    name: Row
    type: System.Int32
    description: 0-based index of the row
  -
    name: Column
    type: System.Int32
    description: 0-based index of the column
  -
    name: IncludeHidden
    type: System.Boolean
    description: True to include hidden rows and columns in the Row and Column indexes, false to not
  -
    name: Equation
    type: System.String
    description: Equation to solve; empty string to remove an equation
  -
    name: SolvedValue
    type: System.String
    description: Value of solved Equation
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - ITableAnnotation.GetCellEquation
  - ITableAnnotation.GetColumnType3
  - ITableAnnotation.SetCellEquation
keywords:
  - table
  - cell
  - equation
  - evaluatecellequation
  - itableannotation
  - annotation
  - evaluate
  - row
  - int32
  - column
  - include
  - hidden
  - boolean
  - string
  - solved
  - value
  - bom
  - types
  - equations
  - vba
---

# ITableAnnotation.EvaluateCellEquation

Solves the specified equation in the specified cell of this BOM table.

## Signature

```csharp
System.Int32 EvaluateCellEquation( 
   System.Int32
Row
,
   System.Int32
Column
,
   System.Boolean
IncludeHidden
,
   System.String
Equation
,
   out System.String
SolvedValue
)
```
## Parameters

- `Row` (System.Int32): 0-based index of the row
- `Column` (System.Int32): 0-based index of the column
- `IncludeHidden` (System.Boolean): True to include hidden rows and columns in the Row and Column indexes, false to not
- `Equation` (System.String): Equation to solve; empty string to remove an equation
- `SolvedValue` (System.String): Value of solved Equation

## Return Value

Return code as defined in swCellEquationStatus_e

## Examples

- Get and Set BOM Column Types and Cell Equations (VBA) (Get_and_Set_Column_Types_and_Cell_Equations_Example_VB.htm)

## See Also

- `ITableAnnotation.GetCellEquation`
- `ITableAnnotation.GetColumnType3`
- `ITableAnnotation.SetCellEquation`