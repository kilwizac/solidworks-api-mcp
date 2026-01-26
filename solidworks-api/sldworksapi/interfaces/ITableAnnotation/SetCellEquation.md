---
type: method
interface: ITableAnnotation
member: SetCellEquation
returns: System.Int32
parameters:
  -
    name: Row
    type: System.Int32
    description: 0-based index of the row, -1 to set a column equation
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
    description: Equation
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - ITableAnnotation.EvaluateCellEquation
  - ITableAnnotation.GetCellEquation
keywords:
  - table
  - cell
  - equation
  - setcellequation
  - itableannotation
  - annotation
  - row
  - int32
  - column
  - include
  - hidden
  - boolean
  - string
  - bom
  - types
  - equations
  - vba
---

# ITableAnnotation.SetCellEquation

Sets the specified equation for the specified row and column of this BOM table.

## Signature

```csharp
System.Int32 SetCellEquation( 
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
)
```
## Parameters

- `Row` (System.Int32): 0-based index of the row, -1 to set a column equation
- `Column` (System.Int32): 0-based index of the column
- `IncludeHidden` (System.Boolean): True to include hidden rows and columns in the Row and Column indexes, false to not
- `Equation` (System.String): Equation

## Return Value

Return code as defined in swCellEquationStatus_e

## Remarks

After calling this method, call
IModelDoc2::EditRebuild3
to refresh the table in the user interface.

## Examples

- Get and Set BOM Column Types and Cell Equations (VBA) (Get_and_Set_Column_Types_and_Cell_Equations_Example_VB.htm)

## See Also

- `ITableAnnotation.EvaluateCellEquation`
- `ITableAnnotation.GetCellEquation`