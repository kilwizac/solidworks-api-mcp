---
type: property
interface: IEquationMgr
member: Equation
returns: System.String
parameters:
  -
    name: Index
    type: System.Int32
    description: 0-based index of the equation
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IEquationMgr.Add2
  - IEquationMgr.Add3
  - IEquationMgr.AutomaticRebuild
  - IEquationMgr.AutomaticSolveOrder
  - IEquationMgr.Delete
  - IEquationMgr.Disabled
  - IEquationMgr.EvaluateAll
  - IEquationMgr.GetCount
  - IEquationMgr.GetDisabledEquationCount
  - IEquationMgr.GlobalVariable
keywords:
  - equation
  - see
  - also
  - iequationmgr
  - mgr
  - index
  - int32
  - string
  - use
  - iif
  - function
  - when
  - adding
  - vba
  - disable
  - vb
  - net
  - values
readonly: null
---

# IEquationMgr.Equation

Gets or sets the equation at the specified index.

## Signature

```csharp
System.String Equation( 
   System.Int32
Index
) {get; set;}
```
## Parameters

- `Index` (System.Int32): 0-based index of the equation

## Return Value

String containing the equation

## Remarks

The string set by this property must be formatted as if entered in the SOLIDWORKS Design user interface; that is, you must embed the names of the dimensions and global variables in double double quotes. To use the following examples to specify Equation, you must replace every double quote with double double quotes, and enclose the entire equation with double quotes.
Global variable assignment:
"B" = 2
Component equation:
"
N_SPOKES@CirPattern1" = "BARLENGTH@Sketch2" /10
Dimension equation that uses the Visual Basic IIf function:
"D1@Extrude2" = (("D1@Extrude3">20, 15, 6))+5
Dimension equation that sets a dimension to the current value:
"D1@Extrude2" =
Dimension equation that modifies the right-hand side of an already existing dimension equation:
"D1@Extrude2" = 0.05
NOTE:
To set an equation:
directly to an assembly component's model, you must call
IAssemblyDoc::EditPart2
before calling this method.
for specific configurations in a model with multiple configurations, use
IEquationMgr::SetEquationAndConfigurationOption
.

## Examples

- Use IIf Function When Adding an Equation (VBA) (Use_IIf_Function_When_Adding_an_Equation_Example_VB.htm)
- Disable Equation (C#) (Disable_Equation_Example_CSharp.htm)
- Disable Equation (VB.NET) (Disable_Equation_Example_VBNET.htm)
- Disable Equation (VBA) (Disable_Equation_Example_VB.htm)
- Get Equation Values (C#) (Get_Equation_Values_Example_CSharp.htm)
- Get Equation Values (VB.NET) (Get_Equation_Values_Example_VBNET.htm)
- Get Equation Values (VBA) (Get_Equation_Values_Example_VB.htm)

## See Also

- `IEquationMgr.Add2`
- `IEquationMgr.Add3`
- `IEquationMgr.AutomaticRebuild`
- `IEquationMgr.AutomaticSolveOrder`
- `IEquationMgr.Delete`
- `IEquationMgr.Disabled`
- `IEquationMgr.EvaluateAll`
- `IEquationMgr.GetCount`
- `IEquationMgr.GetDisabledEquationCount`
- `IEquationMgr.GlobalVariable`