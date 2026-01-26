---
type: method
interface: ISurface
member: IReverseEvaluate
returns: System.Double
parameters:
  -
    name: PositionX
    type: System.Double
    description: X position on the surface
  -
    name: PositionY
    type: System.Double
    description: Y position on the surface
  -
    name: PositionZ
    type: System.Double
    description: Z position on the surface
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISurface.Evaluate
  - ISurface.EvaluateAtPoint
  - ISurface.IEvaluate
  - ISurface.IEvaluateAtPoint
  - ISurface.ReverseEvaluate
keywords:
  - ireverseevaluate
  - isurface
  - surface
  - reverse
  - evaluate
  - position
  - double
---

# ISurface.IReverseEvaluate

Gets the UV parameters at the specified location, which must be on the surface.

## Signature

```csharp
System.Double IReverseEvaluate( 
   System.Double
PositionX
,
   System.Double
PositionY
,
   System.Double
PositionZ
)
```
## Parameters

- `PositionX` (System.Double): X position on the surface
- `PositionY` (System.Double): Y position on the surface
- `PositionZ` (System.Double): Z position on the surface

## Return Value

Array of doubles describing the UV parameters

## Remarks

At parametric singularities, such as sphere poles, the non-degenerate parameter is returned as the lowest value in its range. To determine the UV range, call
ISurface::Parameterization
or
ISurface::IParameterization
.
IFace2::ReverseEvaluate
and
IFace2::IReverseEvaluate
return corrected UV parameters for periodic surfaces; thus, you should use either of these methods when dealing with periodic surfaces.

## See Also

- `ISurface.Evaluate`
- `ISurface.EvaluateAtPoint`
- `ISurface.IEvaluate`
- `ISurface.IEvaluateAtPoint`
- `ISurface.ReverseEvaluate`