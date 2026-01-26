---
type: method
interface: IFace2
member: ReverseEvaluate
returns: System.Object
parameters:
  -
    name: PositionX
    type: System.Double
    description: X coordinate of this location on the face
  -
    name: PositionY
    type: System.Double
    description: Y coordinate of this location on the face
  -
    name: PositionZ
    type: System.Double
    description: Z coordinate of this location on the face
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - ICurve.ReverseEvaluate
keywords:
  - face
  - see
  - also
  - iface2
  - uv
  - parameters
  - reverseevaluate
  - face2
  - reverse
  - evaluate
  - position
  - double
  - object
  - xyz
  - location
  - vba
  - vb
  - net
---

# IFace2.ReverseEvaluate

Gets the UV parameters for the given XYZ location on this face.

## Signature

```csharp
System.Object ReverseEvaluate( 
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

- `PositionX` (System.Double): X coordinate of this location on the face
- `PositionY` (System.Double): Y coordinate of this location on the face
- `PositionZ` (System.Double): Z coordinate of this location on the face

## Return Value

Array of two doubles representing the U and V parameters of this location on the face

## Remarks

This method returns corrected UV parameters for periodic surfaces; thus, you should use this method when dealing with periodic surfaces.
For example, you can have a cylindrical surface that extends from 0 to 2pi in the Udir. The face related to this surface in some cases extends from 0 to pi, then from 0 to pi again. In this case, neither
ISurface::IReverseEvaluate
nor
ISurface::ReverseEvaluate
will work for values greater than pi (the returned U value will be greater than Maximum U for the face). However,
IFace2::IReverseEvaluate
, and IFace2::ReverseEvaluate, will return the correct values.

## Examples

- Get UV Parameters for XYZ Location (VBA) (Get_UV_Parameters_For_XYZ_Location_Example_VB.htm)
- Get UV Parameters for XYZ Location (VB.NET) (Get_UV_Parameters_For_XYZ_Location_Example_VBNET.htm)
- Get UV Parameters for XYZ Location (C#) (Get_UV_Parameters_For_XYZ_Location_Example_CSharp.htm)

## See Also

- `ICurve.ReverseEvaluate`