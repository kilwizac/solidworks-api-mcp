---
type: method
interface: ISurface
member: GetBSurfParams2
returns: System.Object
parameters:
  -
    name: WantCubic
    type: System.Boolean
    description: True if cubic is needed, false if not; specifying true converts any surface type to a cubic Bsurface
  -
    name: WantNonRational
    type: System.Boolean
    description: True if non-rational is needed, false if not; specifying true converts any surface type to a non-rational Bsurface; if you specify true, then you should only use this method for surfaces that are Bsurface or blend surface; otherwise, the underlying call is not made and the values returned from this are not initialized or contain the values from the last call
  -
    name: VP0
    type: System.Object
    description: Array of values describing the UV range of the surface to be output; you can obtain these values by using ISurface::Parameterization or ISurface::IParameterization
  -
    name: Tolerance
    type: System.Double
    description: Tolerance, in meters, between the approximated b-spline surface and the underlying surface; the default value is 0.01 and should generally be reduced to the tolerance desired
  -
    name: Sense
    type: System.Boolean
    description: Approximated b-spline surface is not always in the same direction as the original surface; if sense is true, then the underlying surface and the b-spline surface are in the same direction
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - documents
related:
  - ISurface.IGetBSurfParams
  - ISurface.IGetBSurfParamsSize3
keywords:
  - getbsurfparams2
  - isurface
  - surface
  - surf
  - params2
  - want
  - cubic
  - boolean
  - non
  - rational
  - vp0
  - object
  - tolerance
  - double
  - sense
---

# ISurface.GetBSurfParams2

Obsolete. Superseded by ISurface::GetBSurfParams3.

## Signature

```csharp
System.Object GetBSurfParams2( 
   System.Boolean
WantCubic
,
   System.Boolean
WantNonRational
,
   System.Object
VP0
,
   System.Double
Tolerance
,
   out System.Boolean
Sense
)
```
## Parameters

- `WantCubic` (System.Boolean): True if cubic is needed, false if not; specifying true converts any surface type to a cubic Bsurface
- `WantNonRational` (System.Boolean): True if non-rational is needed, false if not; specifying true converts any surface type to a non-rational Bsurface; if you specify true, then you should only use this method for surfaces that are Bsurface or blend surface; otherwise, the underlying call is not made and the values returned from this are not initialized or contain the values from the last call
- `VP0` (System.Object): Array of values describing the UV range of the surface to be output; you can obtain these values by using ISurface::Parameterization or ISurface::IParameterization
- `Tolerance` (System.Double): Tolerance, in meters, between the approximated b-spline surface and the underlying surface; the default value is 0.01 and should generally be reduced to the tolerance desired
- `Sense` (System.Boolean): Approximated b-spline surface is not always in the same direction as the original surface; if sense is true, then the underlying surface and the b-spline surface are in the same direction

## Return Value

Array of values giving the b-spline surface parameters

## Remarks

The VP0 parameter contains the following values, which you can obtain by using
ISurface::Parameterization
or
ISurface::IParameterization
:
vP0[0] & vP0[2] are the lower bounds of the U & V surface parameters, respectively
vP0[1] &
vP0[3] are the upper bounds of the U & V surface parameters, respectively
If you want to use the Bsurface in combination with its trim curves, you should use the
IFace2::GetTrimCurves2
method to extract the trim curves and the Bsurface. The IFace2::GetTrimCurves2 method provides much better alignment of the trim curves with the Bsurface because they are both generated at the same time.
Evaluation is as follows:
Number of returned double elements is (4 + NumUKnots + NumVKnots + NumControlPointDoubles), where NumUKnots = (NumColumnsControlPoints + Uorder) and NumVKnots = (NumRowsControlPoints + Vorder).
The returned data are arranged in this order:
Uorder, Vorder - These are two ints packed into a double
Uorder - Order of surface in U direction
Vorder - Order of surface in V direction
NumColumnsControlPoints, NumRowsControlPoints - These are two integers packed into a double
NumColumnsControlPoints - Number of columns for the control points
NumRowsControlPoints - Number of rows for the control points
Uperiodicity, Vperiodicity - These are two integers packed into a double. Since you may be generating a Bsurface with this function, the U,V periodicity values may be opposite from the original surface. Refer to ISurface::Parameterization or ISurface::IParameterization.
Uperiodicity - True if surface is periodic in U direction
Vperiodicity - True if surface is periodic in V direction
DimensionControlPoints, dummy - These are two integers packed into a double
DimensionControlPoints - Dimension for control points.
DimensionControlPoints = 3 for non-rational surfaces and control point coordinates are output as [x0,y0,z0,x1,y1,z1,.........].
DimensionControlPoints = 4 for rational surfaces and control point coordinates and the weight are output as [x0,y0,z0,w0,x1,y1,z1,w1,........].
dummy - a system-used filler.
UKnots - Knot vector in the u direction.
There will be (NumColumnsControlPoints + Uorder) knot values. If the surface is periodic in the U direction, then data is converted and returned in a non-periodic form with additional knots added to the surface ends.
VKnots - Knot vector in the v direction.
There will be (NumRowsControlPoints + Vorder) knot values. If the surface is periodic in the V direction, then data is converted and returned in a non-periodic form with additional knots added to the surface ends.
ControlPoints - This is a list of control points output in (NumColumnsControlPoints*NumRowsControlPoints) vectors of dimension DimensionControlPoints. The vectors are output row by row. The U direction of surface is in the row direction. The V direction of surface is in the column direction.
For non-rational surfaces, control point coordinates are output as [x0,y0,z0,x1,y1,z1,.........].
For rational surfaces, control point coordinates and the weight are output as [x0,y0,z0,w0,x1,y1,z1,w1,........].
For example:
Row1, Column1
Row1, Column2
x0, y0, z0
x1, y1, z1
= 6
Row2, Column1
Row2, Column2
x2, y2, z2
x3, y3, z3
= 6
Row3, Column1
Row3, Column2
x4, y4, z4
x5, y5, z5
= 6
= 18

## See Also

- `ISurface.IGetBSurfParams`
- `ISurface.IGetBSurfParamsSize3`