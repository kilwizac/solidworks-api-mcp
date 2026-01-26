---
type: method
interface: ISketchSpline
member: MakeRational
returns: System.Boolean
parameters:
  -
    name: Val
    type: System.Boolean
    description: True to make rational, false to make non-rational
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchSpline.IsRationalCurve
keywords:
  - makerational
  - isketchspline
  - sketch
  - spline
  - make
  - rational
  - val
  - boolean
---

# ISketchSpline.MakeRational

Sets whether this spline is rational or non-rational.

## Signature

```csharp
System.Boolean MakeRational( 
   System.Boolean
Val
)
```
## Parameters

- `Val` (System.Boolean): True to make rational, false to make non-rational

## Return Value

True if successfully set, false if not

## See Also

- `ISketchSpline.IsRationalCurve`