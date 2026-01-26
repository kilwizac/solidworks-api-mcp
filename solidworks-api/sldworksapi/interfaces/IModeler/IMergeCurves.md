---
type: method
interface: IModeler
member: IMergeCurves
returns: Curve
parameters:
  -
    name: CurveCount
    type: System.Int32
    description: Number of curves to merge
  -
    name: CurveArr
    type: Curve
    description: Array of curves to merge
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IModeler.MergeCurves
keywords:
  - curve
  - see
  - also
  - icurve
  - merge
  - curves
  - imergecurves
  - imodeler
  - modeler
  - count
  - int32
  - arr
---

# IModeler.IMergeCurves

Merges multiple curves into one curve.

## Signature

```csharp
Curve IMergeCurves( 
   System.Int32
CurveCount
,
   ref Curve
CurveArr
)
```
## Parameters

- `CurveCount` (System.Int32): Number of curves to merge
- `CurveArr` (Curve): Array of curves to merge

## Return Value

Newly created merged curve or NULL if merge fails

## See Also

- `IModeler.MergeCurves`