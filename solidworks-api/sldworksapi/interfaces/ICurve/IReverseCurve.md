---
type: method
interface: ICurve
member: IReverseCurve
returns: Curve
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ICurve.IsTrimmedCurve
  - ICurve.ReverseCurve
keywords:
  - ireversecurve
  - icurve
  - curve
  - reverse
---

# ICurve.IReverseCurve

Gets the reversed copy of this curve.

## Signature

```csharp
Curve IReverseCurve()
```
## Parameters

None.

## Return Value

Pointer to the reversed curve

## Remarks

If this is a trimmed curve, then the underlying curve is reversed and a new trimmed curve is made from the reversed curve. This method returns the new trimmed curve.

## See Also

- `ICurve.IsTrimmedCurve`
- `ICurve.ReverseCurve`