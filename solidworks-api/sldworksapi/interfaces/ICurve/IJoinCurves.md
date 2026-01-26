---
type: method
interface: ICurve
member: IJoinCurves
returns: Curve
parameters:
  -
    name: NCurves
    type: System.Int32
    description: Number of curves to join
  -
    name: Curves
    type: Curve
    description: in-process, unmanaged C++: Pointer to an array of curves to join VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ICurve.JoinCurves
keywords:
  - ijoincurves
  - icurve
  - curve
  - join
  - curves
  - int32
---

# ICurve.IJoinCurves

Joins the specified curves.

## Signature

```csharp
Curve IJoinCurves( 
   System.Int32
NCurves
,
   ref Curve
Curves
)
```
## Parameters

- `NCurves` (System.Int32): Number of curves to join
- `Curves` (Curve): in-process, unmanaged C++: Pointer to an array of curves to join VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Newly created joined curve

## See Also

- `ICurve.JoinCurves`