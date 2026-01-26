---
type: method
interface: ICurve
member: IGetTessPtsSize
returns: System.Int32
parameters:
  -
    name: ChordTolerance
    type: System.Double
    description: Chord tolerance to be used in tessellation (meters); this is the maximum permitted distance from a cord to the curve between the cord endpoints
  -
    name: LengthTolerance
    type: System.Double
    description: Length tolerance to be used to filter out very short segments (meters); tessellated segments shorter than this value are not returned
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
  - igettessptssize
  - icurve
  - curve
  - tess
  - pts
  - size
  - chord
  - tolerance
  - double
  - length
  - start
  - point
  - end
  - int32
---

# ICurve.IGetTessPtsSize

Gets the size of the array required by ICurve::IGetTessPts.

## Signature

```csharp
System.Int32 IGetTessPtsSize( 
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

- `ChordTolerance` (System.Double): Chord tolerance to be used in tessellation (meters); this is the maximum permitted distance from a cord to the curve between the cord endpoints
- `LengthTolerance` (System.Double): Length tolerance to be used to filter out very short segments (meters); tessellated segments shorter than this value are not returned
- `StartPoint` (System.Double): Pointer to an array containing the start point of the curve
- `EndPoint` (System.Double): Pointer to an array containing the end point of the curve

## Return Value

Number of doubles returned when ICurve::IGetTessPts is called

## Remarks

To get the actual tessellation points, use
ICurve::IGetTessPts
. Arguments passed to ICurve::IGetTessPts must match the arguments passed to this method.

## See Also

- `ICurve.GetTessPts`