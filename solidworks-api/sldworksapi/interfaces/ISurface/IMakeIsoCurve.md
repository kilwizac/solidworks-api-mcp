---
type: method
interface: ISurface
member: IMakeIsoCurve
returns: Curve
parameters:
  -
    name: UorV
    type: System.Boolean
    description: True to specify V, false to specify U
  -
    name: UvValue
    type: System.Double
    description: U or V vertex or point that specifies the intersection of two curves
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISurface.IGetMakeIsoCurvesCount
  - ISurface.IMakeIsoCurves
  - ISurface.MakeIsoCurve
  - ISurface.MakeIsoCurves
keywords:
  - imakeisocurve
  - isurface
  - surface
  - make
  - iso
  - curve
  - uor
  - boolean
  - uv
  - value
  - double
---

# ISurface.IMakeIsoCurve

Creates a curve that represents the ISO line of a given surface.

## Signature

```csharp
Curve IMakeIsoCurve( 
   System.Boolean
UorV
,
   System.Double
UvValue
)
```
## Parameters

- `UorV` (System.Boolean): True to specify V, false to specify U
- `UvValue` (System.Double): U or V vertex or point that specifies the intersection of two curves

## Return Value

Curve

## See Also

- `ISurface.IGetMakeIsoCurvesCount`
- `ISurface.IMakeIsoCurves`
- `ISurface.MakeIsoCurve`
- `ISurface.MakeIsoCurves`