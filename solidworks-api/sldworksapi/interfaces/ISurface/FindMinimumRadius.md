---
type: method
interface: ISurface
member: FindMinimumRadius
returns: System.Boolean
parameters:
  -
    name: UBound
    type: System.Object
    description: MinMax UParameter
  -
    name: VBound
    type: System.Object
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
  - ISurface.IFindMinimumRadius
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
  - findminimumradius
  - find
  - minimum
  - bound
  - object
  - num
  - int32
  - location
  - uv
  - parameter
  - boolean
  - vba
---

# ISurface.FindMinimumRadius

Gets the minimum radius of curvature for the selected surface.

## Signature

```csharp
System.Boolean FindMinimumRadius( 
   System.Object
UBound
,
   System.Object
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

- `UBound` (System.Object): MinMax UParameter
- `VBound` (System.Object): MinMax VParameter
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

## Examples

- Find Minimum Radius Curvature of Surface (VBA) (Find_Minimum_Radius_Curvature_of_Surface_Example_VB.htm)

## See Also

- `ICurve.FindMinimumRadius`
- `ICurve.IFindMinimumRadius`
- `IFace2.GetUVBounds`
- `IFace2.IGetUVBounds`
- `ISurface.IFindMinimumRadius`
- `ISurface.IParameterization`
- `ISurface.Parameterization`