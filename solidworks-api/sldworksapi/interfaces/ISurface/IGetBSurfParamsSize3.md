---
type: method
interface: ISurface
member: IGetBSurfParamsSize3
returns: System.Int32
parameters:
  -
    name: WantCubic
    type: System.Boolean
    description: True for surface to be a cubic, false for not
  -
    name: WantNonRational
    type: System.Boolean
    description: True if non-rational is needed, false if not; specifying true converts any surface type to a non-rational Bsurface; if you specify true, then you should only use this method for surfaces that are Bsurface or blend surface; otherwise, the underlying call is not made and the values returned from this are not initialized or contain the values from the last call
  -
    name: Range
    type: System.Double
    description: Array of 4 doubles describing the U,V Range
  -
    name: Tolerance
    type: System.Double
    description: Tolerance, in meters, between the approximated b-spline surface and the underlying surface; the default value is 0.01 and should generally be reduced to the tolerance desired
  -
    name: Sense
    type: System.Boolean
    description: Approximated b-spline surface is not always in the same direction as the original surface; if sense is true, then the underlying surface and the b-spline surface are in the same direction
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - igetbsurfparamssize3
  - isurface
  - surface
  - surf
  - params
  - size3
  - want
  - cubic
  - boolean
  - non
  - rational
  - range
  - double
  - tolerance
  - sense
  - int32
---

# ISurface.IGetBSurfParamsSize3

Gets the allocation size necessary for Bsurface parameter data retrieval in a subsequent call to ISurface::IGetBSurfParams.

## Signature

```csharp
System.Int32 IGetBSurfParamsSize3( 
   System.Boolean
WantCubic
,
   System.Boolean
WantNonRational
,
   ref System.Double
Range
,
   System.Double
Tolerance
,
   out System.Boolean
Sense
)
```
## Parameters

- `WantCubic` (System.Boolean): True for surface to be a cubic, false for not
- `WantNonRational` (System.Boolean): True if non-rational is needed, false if not; specifying true converts any surface type to a non-rational Bsurface; if you specify true, then you should only use this method for surfaces that are Bsurface or blend surface; otherwise, the underlying call is not made and the values returned from this are not initialized or contain the values from the last call
- `Range` (System.Double): Array of 4 doubles describing the U,V Range
- `Tolerance` (System.Double): Tolerance, in meters, between the approximated b-spline surface and the underlying surface; the default value is 0.01 and should generally be reduced to the tolerance desired
- `Sense` (System.Boolean): Approximated b-spline surface is not always in the same direction as the original surface; if sense is true, then the underlying surface and the b-spline surface are in the same direction

## Return Value

Size of the data set

## Remarks

Range contains the following values that can be obtained using
ISurface::Parameterization
or
ISurface::IParameterization
:
Range[0] & Range[2] are the lower bounds of the U & V surface parameters respectively.
Range[1] & Range[3] are the upper bounds of the U & V surface parameters respectively.