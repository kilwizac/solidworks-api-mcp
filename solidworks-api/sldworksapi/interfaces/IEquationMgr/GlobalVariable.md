---
type: property
interface: IEquationMgr
member: GlobalVariable
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
  - IEquationMgr.Equation
  - IEquationMgr.GetCount
  - IEquationMgr.Value
keywords:
  - equation
  - see
  - also
  - iequationmgr
  - global
  - variable
  - globalvariable
  - mgr
  - index
  - int32
  - boolean
  - values
  - vb
  - net
  - vba
readonly: true
---

# IEquationMgr.GlobalVariable

Gets whether the equation at the specified index is a global variable.

## Signature

```csharp
System.Boolean GlobalVariable( 
   System.Int32
Index
) {get;}
```
## Parameters

- `Index` (System.Int32): 0-based index of the equation

## Return Value

True if the equation at the specified index is a global variable, false if not

## Examples

- Get Equation Values (C#) (Get_Equation_Values_Example_CSharp.htm)
- Get Equation Values (VB.NET) (Get_Equation_Values_Example_VBNET.htm)
- Get Equation Values (VBA) (Get_Equation_Values_Example_VB.htm)

## See Also

- `IEquationMgr.Equation`
- `IEquationMgr.GetCount`
- `IEquationMgr.Value`