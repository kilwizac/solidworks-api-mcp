---
type: method
interface: ISurface
member: IFindMinimumRadius
returns: System.Boolean
parameters:
  -
    name: UBound
    type: System.Double
    description: MinMax UParameter
  -
    name: VBound
    type: System.Double
    description: MinMax VParameter
  -
    name: NumOfRadius
    type: System.Int32
    description: Number of radius; can be 0, 1, or 2
  -
    name: Radius
    type: System.Object
    description: Minimum radius of curvature (see Remarks )
  -
    name: Location
    type: System.Object
    description: Position where the minimum radius curvature occurred (see Remarks )
  -
    name: UVParameter
    type: System.Object
    description: UV parameters ; because points are UV, third ordinates are 0 (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ICurve.FindMinimumRadius
  - ICurve.IFindMinimumRadius
  - IFace2.GetUVBounds
  - IFace2.IGetUVBounds
  - ISurface.FindMinimumRadius
  - ISurface.IParameterization
  - ISurface.Parameterization
keywords:
  - surface
  - see
  - also
  - isurface
  - radius
  - curvature
  - surfaces
  - ifindminimumradius
  - find
  - minimum
  - bound
  - double
  - num
  - int32
  - object
  - location
  - uv
  - parameter
  - boolean
---

# ISurface.IFindMinimumRadius

Gets the minimum radius of curvature for the selected surface.

## Signature

```csharp
System.Boolean IFindMinimumRadius( 
   ref System.Double
UBound
,
   ref System.Double
VBound
,
   out System.Int32
NumOfRadius
,
   out System.Object
Radius
,
   out System.Object
Location
,
   out System.Object
UVParameter
)
```
## Parameters

- `UBound` (System.Double): MinMax UParameter
- `VBound` (System.Double): MinMax VParameter
- `NumOfRadius` (System.Int32): Number of radius; can be 0, 1, or 2
- `Radius` (System.Object): Minimum radius of curvature (see Remarks )
- `Location` (System.Object): Position where the minimum radius curvature occurred (see Remarks )
- `UVParameter` (System.Object): UV parameters ; because points are UV, third ordinates are 0 (see Remarks )

## Return Value

True if operation succeeds, false if it fails

## Remarks

The search is confined to the portion of the selected curve lying inside of UBound and VBound.
COM returns these data types for these parameters:
Radius: VARIANT of SafeDoubleArray
Location: VARIANT of SafeDispatchArray of
IMathpoint
UVParameter: VARIANT of SafeDispatchArray of
IMathpoint

## See Also

- `ICurve.FindMinimumRadius`
- `ICurve.IFindMinimumRadius`
- `IFace2.GetUVBounds`
- `IFace2.IGetUVBounds`
- `ISurface.FindMinimumRadius`
- `ISurface.IParameterization`
- `ISurface.Parameterization`