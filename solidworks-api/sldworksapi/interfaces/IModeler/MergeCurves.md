---
type: method
interface: IModeler
member: MergeCurves
returns: Curve
parameters:
  -
    name: CurveVar
    type: System.Object
    description: Array of curves to merge
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IModeler.IMergeCurves
keywords:
  - curve
  - see
  - also
  - icurve
  - merge
  - curves
  - mergecurves
  - imodeler
  - modeler
  - var
  - object
---

# IModeler.MergeCurves

Merges multiple curves into one curve.

## Signature

```csharp
Curve MergeCurves( 
   System.Object
CurveVar
)
```
## Parameters

- `CurveVar` (System.Object): Array of curves to merge

## Return Value

Newly created merged curve or Nothing if merge fails

## See Also

- `IModeler.IMergeCurves`