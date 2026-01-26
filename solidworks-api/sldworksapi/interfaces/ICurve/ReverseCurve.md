---
type: method
interface: ICurve
member: ReverseCurve
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ICurve.IReverseCurve
  - ICurve.IsTrimmedCurve
keywords:
  - reversecurve
  - icurve
  - curve
  - reverse
  - object
---

# ICurve.ReverseCurve

Gets the reversed copy of this curve.

## Signature

```csharp
System.Object ReverseCurve()
```
## Parameters

None.

## Return Value

Reversed curve

## Remarks

If this is a trimmed curve, then the underlying curve is reversed and a new trimmed curve is made from the reversed curve. This method returns the new trimmed curve.

## See Also

- `ICurve.IReverseCurve`
- `ICurve.IsTrimmedCurve`