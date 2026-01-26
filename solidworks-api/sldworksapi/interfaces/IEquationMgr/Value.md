---
type: property
interface: IEquationMgr
member: Value
returns: System.Double
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
  - IEquationMgr.GlobalVariable
  - IEquationMgr.Status
keywords:
  - value
  - iequationmgr
  - equation
  - mgr
  - index
  - int32
  - double
  - use
  - iif
  - function
  - when
  - adding
  - vba
  - values
  - vb
  - net
readonly: true
---

# IEquationMgr.Value

Gets the value of the equation at the specified index.

## Signature

```csharp
System.Double Value( 
   System.Int32
Index
) {get;}
```
## Parameters

- `Index` (System.Int32): 0-based index of the equation

## Return Value

Value or -1 if Index is out of range

## Examples

- Use IIf Function When Adding an Equation (VBA) (Use_IIf_Function_When_Adding_an_Equation_Example_VB.htm)
- Get Equation Values (C#) (Get_Equation_Values_Example_CSharp.htm)
- Get Equation Values (VB.NET) (Get_Equation_Values_Example_VBNET.htm)
- Get Equation Values (VBA) (Get_Equation_Values_Example_VB.htm)

## See Also

- `IEquationMgr.Equation`
- `IEquationMgr.GetCount`
- `IEquationMgr.GlobalVariable`
- `IEquationMgr.Status`