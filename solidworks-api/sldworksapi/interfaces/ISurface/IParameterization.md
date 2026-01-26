---
type: method
interface: ISurface
member: IParameterization
returns: System.Double
parameters: []
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
  - ISurface.Parameterization
keywords:
  - iparameterization
  - isurface
  - surface
  - parameterization
  - double
---

# ISurface.IParameterization

Gets the parameterization of the surface.

## Signature

```csharp
System.Double IParameterization()
```
## Parameters

None.

## Return Value

Pointer to an array of doubles (see Remarks )

## Remarks

The return value is the following array of 11 doubles:
[
uRange
[2]
, vRange
[2]
, uBoundType, vBoundType, uProps
[2]
, vProps
[2]
, numProps
]
where:
uRange
[2] = array of two doubles describing the low and high range, respectively, for U.
vRange
[2] =
array of two doubles describing the low and high range, respectively, for V.
uBoundType
= two
integers packed into a double. Each integer describes the behavior at the start and at the end of the U range. Valid values and their meanings are:
13733 -  Infinite
13734 -  Extendable
13735 -  Not Extendable
13701 -  Periodic
13736 -  Periodic, but not continuously differentiable across the boundary
13741 -  Degenerate
If the behavior at the start of the U range is Degenerate', then the V parameter is degenerate when U = urange[0]'. The derivative of the parameterization function with respect to v is 0whenever u = urange[0]', for all values of v, and the parameter curve corresponding to u = urange[0]' degenerates to a single point. A parameterization can only degenerate at the end of its range, unless the surface is a type of Bsurface.
vBoundType
= two integers packed into a double. Each integer describes the behavior at the start and end of the V range. For valid values and their meanings, see description of
uBoundType
.
uProps
[2]  = four
integers packed into two doubles representing U parameterization properties. The
uProps
array of two doubles will contain a total of one or more integer values with a maximum of four. Valid values and their meanings are:
13701 -  Periodic parameterization.
13737 -  All derivatives continuous.
13738 -  All derivatives non necessarily continuous.
13739 -  Linear. Corresponding parameter is proportional to the distance along a straight line. Straight line corresponds to a constant value of the other parameter.
13740 -  Circular. Corresponding parameter represents an angle around a circle. Circle corresponds to a constant value of the other parameter.
13746 -  Bounds at the ends of the parameter range are coincident.
vProps
[2]  = four integers packed into two doubles representing V parameterization properties. The
vProps
array of two doubles will contain a total of one or more integer values with a maximum of four. For valid values and their meanings, see description of
uProps
.
numProps
= two integers packed into a double. Each integer represents the number of properties returned in
uProps
and
vProps,
respectively.
If a surface is periodic in one direction (that is, cylinder, cone, torus (apple and lemon shapes), spheres), then U is the periodic direction.
The -10000 to 10000 parameter range is the modeling limit for the modeler. This means that the values are effectively infinite in size. To get the parameter range from a given face, use
IFace2::GetBox
or
IFace2::IGetBox
,
ISurface::GetClosestPointOn
or
ISurface::IGetClosestPointOn
, and
ISurface::ReverseEvaluate
or
ISurface::IReverseEvaluate
.
These methods provide a true parameter range that the face is using on the surface.

## See Also

- `ISurface.Evaluate`
- `ISurface.EvaluateAtPoint`
- `ISurface.IEvaluate`
- `ISurface.IEvaluateAtPoint`
- `ISurface.Parameterization`