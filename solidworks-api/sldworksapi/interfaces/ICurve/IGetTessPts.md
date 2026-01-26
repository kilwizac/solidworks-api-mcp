---
type: method
interface: ICurve
member: IGetTessPts
returns: System.Double
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
    type: System.Double
    description: Pointer to an array containing the start point of the curve
  -
    name: EndPoint
    type: System.Double
    description: Pointer to an array containing the end point of the curve
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ICurve.GetTessPts
keywords:
  - igettesspts
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
  - end
---

# ICurve.IGetTessPts

Gets a set of points that represent the tessellation of this curve.

## Signature

```csharp
System.Double IGetTessPts( 
   System.Double
ChordTolerance
,
   System.Double
LengthTolerance
,
   ref System.Double
StartPoint
,
   ref System.Double
EndPoint
)
```
## Parameters

- `ChordTolerance` (System.Double): Chord tolerance to use in tessellation (meters); this is the maximum permitted distance from a cord to the curve between the cord endpoints; the smallest allowable value for this parameter is 1E-8; if 0.0 or a value smaller than 1E-8 is specified, then 1E-8 is used by default
- `LengthTolerance` (System.Double): Length tolerance to be used to filter out very short segments (meters); this method does not return tessellated segments shorter than this value
- `StartPoint` (System.Double): Pointer to an array containing the start point of the curve
- `EndPoint` (System.Double): Pointer to an array containing the end point of the curve

## Return Value

in-process, unmanaged C++: Pointer to an array containing the tessellation points (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

The array returned contains the x, y, z location of the tessellation points:
[
x1, y1, z1, x2, y2, z2,
...
]
Before calling this method, call
ICurve::IGetTessPtsSize
to determine the size of the array needed to contain the return values of this method.

## See Also

- `ICurve.GetTessPts`