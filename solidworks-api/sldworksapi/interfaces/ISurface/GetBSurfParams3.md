---
type: method
interface: ISurface
member: GetBSurfParams3
returns: BSurfParamData
parameters:
  -
    name: WantCubic
    type: System.Boolean
    description: True if cubic is needed, false if not; specifying true converts any surface to a cubic B-spline surface
  -
    name: WantNonRational
    type: System.Boolean
    description: True if non-rational is needed, false if not; specifying true converts any surface to a non-rational B-spline surface; if you specify true, then you should only use this method for surfaces that are of B-spline or blend type; otherwise, the underlying call is not made and the values returned from this are not initialized, or they contain the values from the last call
  -
    name: VP0
    type: System.Object
    description: ISurfaceParameterizationData
  -
    name: Tolerance
    type: System.Double
    description: Tolerance, in meters, between the approximated B-spline surface and the underlying surface; the default value is 0.01 and should generally be reduced to the tolerance desired
  -
    name: Sense
    type: System.Boolean
    description: Approximated B-spline surface is not always in the same direction as the original surface; if Sense is true, then the underlying surface and the B-spline surface are in the same direction
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISurface.IGetBSurfParams
  - ISurface.IGetBSurfParamsSize3
keywords:
  - spline
  - surface
  - see
  - also
  - isurface
  - parameterization
  - getbsurfparams3
  - surf
  - params3
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
  - param
  - data
  - vb
  - net
  - vba
---

# ISurface.GetBSurfParams3

Gets the parameterization data for a B-spline surface.

## Signature

```csharp
BSurfParamData GetBSurfParams3( 
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

- `WantCubic` (System.Boolean): True if cubic is needed, false if not; specifying true converts any surface to a cubic B-spline surface
- `WantNonRational` (System.Boolean): True if non-rational is needed, false if not; specifying true converts any surface to a non-rational B-spline surface; if you specify true, then you should only use this method for surfaces that are of B-spline or blend type; otherwise, the underlying call is not made and the values returned from this are not initialized, or they contain the values from the last call
- `VP0` (System.Object): ISurfaceParameterizationData
- `Tolerance` (System.Double): Tolerance, in meters, between the approximated B-spline surface and the underlying surface; the default value is 0.01 and should generally be reduced to the tolerance desired
- `Sense` (System.Boolean): Approximated B-spline surface is not always in the same direction as the original surface; if Sense is true, then the underlying surface and the B-spline surface are in the same direction

## Return Value

An IBSurfParamData object

## Remarks

Before calling this method, call
ISurface:Parameterization2
to populate VP0.
If you want to use the B-spline surface in combination with its trim curves, you should use the
IFace2::GetTrimCurves2
method to extract both the trim curves and the B-spline surface. The
IFace2::GetTrimCurves2
method provides much better alignment of the trim curves with the B-spline surface, because they are both generated at the same time.

## Examples

- Get B-Spline Surface Parameterization Data (C#) (Get_B-Spline_Surface_Parameterization_Data_Example_CSharp.htm)
- Get B-Spline Surface Parameterization Data (VB.NET) (Get_B-Spline_Surface_Parameterization_Data_Example_VBNET.htm)
- Get B-Spline Surface Parameterization Data (VBA) (Get_B-Spline_Surface_Parameterization_Data_Example_VB.htm)

## See Also

- `ISurface.IGetBSurfParams`
- `ISurface.IGetBSurfParamsSize3`