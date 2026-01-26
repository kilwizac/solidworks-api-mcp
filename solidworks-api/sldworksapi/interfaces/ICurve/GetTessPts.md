---
type: method
interface: ICurve
member: GetTessPts
returns: System.Object
parameters:
  -
    name: ChordTolerance
    type: System.Double
    description: Chord tolerance to use in tessellation (meters); this is the maximum permitted distance from a cord to the curve between the cord endpoints; the smallest allowable value for this parameter is 1E-8; if 0.0 or a value smaller than 1E-8 is specified, then 1E-8 is used by default
  -
    name: LengthTolerance
    type: System.Double
    description: Length tolerance to be used to filter out very short segments (meters); this method does not return tessellated segments shorter than this value
  -
    name: StartPoint
    type: System.Object
    description: Array containing the start point of the curve
  -
    name: EndPoint
    type: System.Object
    description: Array containing the end point of the curve
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ICurve.IGetTessPts
  - ICurve.IGetTessPtsSize
keywords:
  - gettesspts
  - icurve
  - curve
  - tess
  - pts
  - chord
  - tolerance
  - double
  - length
  - start
  - point
  - object
  - end
  - create
  - space
  - parameter
  - surface
  - vba
  - find
  - outside
  - edges
  - face
  - intersecting
  - faces
  - edge
  - reference
  - information
---

# ICurve.GetTessPts

Gets a set of points that represent the tessellation of this curve.

## Signature

```csharp
System.Object GetTessPts( 
   System.Double
ChordTolerance
,
   System.Double
LengthTolerance
,
   System.Object
StartPoint
,
   System.Object
EndPoint
)
```
## Parameters

- `ChordTolerance` (System.Double): Chord tolerance to use in tessellation (meters); this is the maximum permitted distance from a cord to the curve between the cord endpoints; the smallest allowable value for this parameter is 1E-8; if 0.0 or a value smaller than 1E-8 is specified, then 1E-8 is used by default
- `LengthTolerance` (System.Double): Length tolerance to be used to filter out very short segments (meters); this method does not return tessellated segments shorter than this value
- `StartPoint` (System.Object): Array containing the start point of the curve
- `EndPoint` (System.Object): Array containing the end point of the curve

## Return Value

Array of doubles containing the tessellation points (see Remarks )

## Remarks

The array returned contains the x, y, z location of the tessellation points:
[
x1, y1, z1, x2, y2, z2,
...
]

## Examples

- Create Space Parameter Curve on Surface (VBA) (Create_Space_Parameter_Curve_on_Surface_Example_VB.htm)
- Find Outside Edges of Face (VBA) (Find_Outside_Edges_of_Face_Example_VB.htm)
- Get Intersecting Faces (VBA) (Get_Intersecting_Faces_Example_VB.htm)
- Get Length of Edge (VBA) (Get_Length_of_Edge_Example_VB.htm)
- Get Reference Curve Information (VBA) (Get_Reference_Curve_Information_Example_VB.htm)

## See Also

- `ICurve.IGetTessPts`
- `ICurve.IGetTessPtsSize`