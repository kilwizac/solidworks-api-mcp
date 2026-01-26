---
type: method
interface: IEquationMgr
member: Delete
returns: System.Int32
parameters:
  -
    name: Index
    type: System.Int32
    description: 0-based index of the equation to delete
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IEquationMgr.Add2
  - IEquationMgr.Add3
  - IEquationMgr.Disabled
  - IEquationMgr.Equation
  - IEquationMgr.GetCount
  - IEquationMgr.GetDisabledEquationCount
keywords:
  - delete
  - iequationmgr
  - equation
  - mgr
  - index
  - int32
  - add
  - evalute
  - all
  - vb
  - net
  - vba
---

# IEquationMgr.Delete

Deletes the equation at the specified index.

## Signature

```csharp
System.Int32 Delete( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): 0-based index of the equation to delete

## Return Value

0 if the equation is deleted; -1 if there was an error

## Remarks

When you delete an equation, you are removing it from the list of relations. Thus, do not delete an equation while traversing the equations in a model, because SOLIDWORKS could crash.

## Examples

- Add Equation and Evalute All (C#) (Add_Equation_And_Evaluate_All_Example_CSharp.htm)
- Add Equation and Evalute All (VB.NET) (Add_Equation_And_Evaluate_All_Example_VBNET.htm)
- Add Equation and Evalute All (VBA) (Add_Equation_And_Evaluate_All_Example_VB.htm)

## See Also

- `IEquationMgr.Add2`
- `IEquationMgr.Add3`
- `IEquationMgr.Disabled`
- `IEquationMgr.Equation`
- `IEquationMgr.GetCount`
- `IEquationMgr.GetDisabledEquationCount`