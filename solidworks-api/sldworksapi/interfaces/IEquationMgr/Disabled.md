---
type: property
interface: IEquationMgr
member: Disabled
returns: System.Boolean
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
  - IEquationMgr.Delete
  - IEquationMgr.Equation
  - IEquationMgr.GetCount
  - IEquationMgr.GetDisabledEquationCount
keywords:
  - equation
  - see
  - also
  - iequationmgr
  - disabled
  - mgr
  - index
  - int32
  - boolean
  - disable
  - vb
  - net
  - vba
readonly: null
---

# IEquationMgr.Disabled

Gets or sets whether to disable the specified equation in the model.

## Signature

```csharp
System.Boolean Disabled( 
   System.Int32
Index
) {get; set;}
```
## Parameters

- `Index` (System.Int32): 0-based index of the equation

## Return Value

True to disable the specified equation, false to not

## Remarks

When you disable an equation, you are removing it from the list of relations. Thus, do not disable an equation while traversing the equations in a model, because SOLIDWORKS could crash.

## Examples

- Disable Equation (C#) (Disable_Equation_Example_CSharp.htm)
- Disable Equation (VB.NET) (Disable_Equation_Example_VBNET.htm)
- Disable Equation (VBA) (Disable_Equation_Example_VB.htm)

## See Also

- `IEquationMgr.Add2`
- `IEquationMgr.Add3`
- `IEquationMgr.Delete`
- `IEquationMgr.Equation`
- `IEquationMgr.GetCount`
- `IEquationMgr.GetDisabledEquationCount`