---
type: method
interface: IModelDoc2
member: GetEquationMgr
returns: EquationMgr
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related: []
keywords:
  - equation
  - see
  - also
  - iequationmgr
  - getequationmgr
  - imodeldoc2
  - model
  - doc2
  - mgr
  - use
  - iif
  - function
  - when
  - adding
  - vba
  - automatically
  - solve
  - equations
  - sequence
  - vb
  - net
  - values
---

# IModelDoc2.GetEquationMgr

Gets the equation manager.

## Signature

```csharp
EquationMgr GetEquationMgr()
```
## Parameters

None.

## Return Value

Equation manager

## Remarks

Use the equation manager to work with the existing equations in a model and modify a specific equation.
The
IEquationMgr
object is associated with the configuration that was active at the time it was acquired. If you change the active configuration while holding an IEquationMgr object reference, release it and reacquire it if it is needed.

## Examples

- Use IIf Function When Adding an Equation (VBA) (Use_IIf_Function_When_Adding_an_Equation_Example_VB.htm)
- Automatically Solve Equations in Sequence (C#) (Automatically_Solve_Equations_in_Sequence_Example_CSharp.htm)
- Automatically Solve Equations in Sequence (VB.NET) (Automatically_Solve_Equations_in_Sequence_Example_VBNET.htm)
- Automatically Solve Equations in Sequence (VBA) (Automatically_Solve_Equations_in_Sequence_Example_VB.htm)
- Get Equation Values (C#) (Get_Equation_Values_Example_CSharp.htm)
- Get Equation Values (VB.NET) (Get_Equation_Values_Example_VBNET.htm)
- Get Equation Values (VBA) (Get_Equation_Values_Example_VB.htm)