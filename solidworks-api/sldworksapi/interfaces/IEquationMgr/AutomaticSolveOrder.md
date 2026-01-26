---
type: property
interface: IEquationMgr
member: AutomaticSolveOrder
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IEquationMgr.Equation
keywords:
  - automaticsolveorder
  - iequationmgr
  - equation
  - mgr
  - automatic
  - solve
  - order
  - boolean
  - automatically
  - equations
  - sequence
  - vb
  - net
  - vba
readonly: null
---

# IEquationMgr.AutomaticSolveOrder

Gets or sets whether to automatically sequence equations in an order determined by SOLIDWORKS to produce accurate results.

## Signature

```csharp
System.Boolean AutomaticSolveOrder {get; set;}
```
## Parameters

None.

## Return Value

True to automatically sequence equations in an order determined by SOLIDWORKS to produce accurate results and to prevent changing the order in which equations are solved, false to solve equations in the order in which they appear in the equation's Ordered View and to allow changing the order in which equations are solved

## Examples

- Automatically Solve Equations in Sequence (C#) (Automatically_Solve_Equations_in_Sequence_Example_CSharp.htm)
- Automatically Solve Equations in Sequence (VB.NET) (Automatically_Solve_Equations_in_Sequence_Example_VBNET.htm)
- Automatically Solve Equations in Sequence (VBA) (Automatically_Solve_Equations_in_Sequence_Example_VB.htm)

## See Also

- `IEquationMgr.Equation`