---
type: method
interface: IEquationMgr
member: EvaluateAll
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IEquationMgr.Equation
  - IEquationMgr.GetCount
  - IEquationMgr.Status
keywords:
  - equation
  - see
  - also
  - iequationmgr
  - add
  - evaluate
  - all
  - iif
  - evaluateall
  - mgr
  - int32
  - use
  - function
  - when
  - adding
  - vba
  - vb
  - net
---

# IEquationMgr.EvaluateAll

Evaluates all equations.

## Signature

```csharp
System.Int32 EvaluateAll()
```
## Parameters

None.

## Return Value

-1 for both success and failure

## Remarks

Use this method to solve all equations that were added by
IEquationMgr::Add2
or
IEquationMgr::Add3
where Solve is set to false.

## Examples

- Use IIf Function When Adding an Equation (VBA) (Use_IIf_Function_When_Adding_an_Equation_Example_VB.htm)
- Add Equation and Evaluate All (VBA) (Add_Equation_And_Evaluate_All_Example_VB.htm)
- Add Equation and Evaluate All (VB.NET) (Add_Equation_And_Evaluate_All_Example_VBNET.htm)
- Add Equation and Evaluate All (C#) (Add_Equation_And_Evaluate_All_Example_CSharp.htm)

## See Also

- `IEquationMgr.Equation`
- `IEquationMgr.GetCount`
- `IEquationMgr.Status`