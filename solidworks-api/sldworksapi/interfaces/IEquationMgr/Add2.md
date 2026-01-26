---
type: method
interface: IEquationMgr
member: Add2
returns: System.Int32
parameters:
  -
    name: Index
    type: System.Int32
    description: 0-based index of the new equation (-1 places it at the end of the list)
  -
    name: Equation
    type: System.String
    description: String containing the equation (see Remarks )
  -
    name: Solve
    type: System.Boolean
    description: True to solve the equation immediately; false otherwise (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IEquationMgr.Delete
  - IEquationMgr.Disabled
  - IEquationMgr.Equation
  - IEquationMgr.GetCount
  - IEquationMgr.GetDisabledEquationCount
  - IEquationMgr.Status
keywords:
  - equation
  - see
  - also
  - iequationmgr
  - add
  - iif
  - evaluate
  - all
  - add2
  - mgr
  - index
  - int32
  - string
  - solve
  - boolean
  - use
  - function
  - when
  - adding
  - vba
  - vb
  - net
---

# IEquationMgr.Add2

Adds an equation at the specified index.

## Signature

```csharp
System.Int32 Add2( 
   System.Int32
Index
,
   System.String
Equation
,
   System.Boolean
Solve
)
```
## Parameters

- `Index` (System.Int32): 0-based index of the new equation (-1 places it at the end of the list)
- `Equation` (System.String): String containing the equation (see Remarks )
- `Solve` (System.Boolean): True to solve the equation immediately; false otherwise (see Remarks )

## Return Value

Index of the new equation if successfully added, -1 if an error

## Remarks

To add an equation using the SOLIDWORKS Design user interface, you must embed the names of dimensions and global variables in double quotes:
Global variable assignment:
"B" = 2
Component equation:
"N_SPOKES@CirPattern" = "BARLENGTH@Sketch2" /10
Dimension equation that uses the Visual Basic IIf function:
"D1@Extrude2" = (IIf("D1@Extrude3">20, 15, 6))+5
Dimension equation that sets a dimension to the current value:
"D1@Extrude2" =
NOTE:
To add an equation using this method, you must specify Equation with the names of dimensions and global variables in double double quotes and the entire equation in double quotes. See the
Examples
.
If you call this method to add an equation whose left-hand side already exists in another equation, this method returns an error.
Setting the Solve argument to false delays evaluation of this equation, which enhances performance when there are many equations to solve. When Solve is set to false, the equation appears in the FeatureManager design tree only after calling
IEquationaMgr::EvaluateAll
or
IModelDoc2::EditRebuild3
.
To add equations to models having multiple configurations created in SOLIDWORKS 2014 or later, use
IEquationMgr::Add3
instead of this method.
When you add an equation, you are adding it to the list of relations. Thus, do not add an equation while traversing the equations in a model, because SOLIDWORKS could crash.

## Examples

- Use IIf Function When Adding an Equation (VBA) (Use_IIf_Function_When_Adding_an_Equation_Example_VB.htm)
- Add Equation and Evaluate All (VB.NET) (Add_Equation_And_Evaluate_All_Example_VBNET.htm)
- Add Equation and Evaluate All (VBA) (Add_Equation_And_Evaluate_All_Example_VB.htm)
- Add Equation and Evaluate All (C#) (Add_Equation_And_Evaluate_All_Example_CSharp.htm)

## See Also

- `IEquationMgr.Delete`
- `IEquationMgr.Disabled`
- `IEquationMgr.Equation`
- `IEquationMgr.GetCount`
- `IEquationMgr.GetDisabledEquationCount`
- `IEquationMgr.Status`