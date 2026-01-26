---
type: method
interface: IModelDoc2
member: CreateClippedSplines
returns: System.Object
parameters:
  -
    name: ParamsIn
    type: System.Object
    description: See Remarks
  -
    name: X1
    type: System.Double
    description: x component of the lower corner of the clipping rectangle
  -
    name: Y1
    type: System.Double
    description: y component of the lower corner of the clipping rectangle
  -
    name: X2
    type: System.Double
    description: x component of the upper corner of the clipping rectangle
  -
    name: Y2
    type: System.Double
    description: y component of the upper corner of the clipping rectangle
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.ICreateClippedSplines
keywords:
  - splines
  - clipped
  - createclippedsplines
  - imodeldoc2
  - model
  - doc2
  - create
  - params
  - object
  - x1
  - double
  - y1
  - x2
  - y2
---

# IModelDoc2.CreateClippedSplines

Creates one or more sketch spline segments that are clipped against a given (x1, y1), (x2, y2) rectangle. This rectangle lies in the space of the active 2D sketch.

## Signature

```csharp
System.Object CreateClippedSplines( 
   System.Object
ParamsIn
,
   System.Double
X1
,
   System.Double
Y1
,
   System.Double
X2
,
   System.Double
Y2
)
```
## Parameters

- `ParamsIn` (System.Object): See Remarks
- `X1` (System.Double): x component of the lower corner of the clipping rectangle
- `Y1` (System.Double): y component of the lower corner of the clipping rectangle
- `X2` (System.Double): x component of the upper corner of the clipping rectangle
- `Y2` (System.Double): y component of the upper corner of the clipping rectangle

## Return Value

Array of newly created sketch segments

## Remarks

The rectangle lies in the space of the active 2D sketch. The results are undefined for calls made in an active 3D sketch.
The ParamsIn argument in Visual Basic for Applications (VBA) is a SafeArray of size (4 + numKnots + numControlPointDoubles) as follows:
[
Dimension, Order, NumControlPoints, Periodicity, knot1, knot2,..., ControlPoint1[Dimension], ControlPoint2[Dimension],...
]
where:
Dimension
,
Order
,
NumControlPoints
, and
Periodicity
are integer values.
The size of the knot array is determined by (
NumControlPoints
+
Order
).
The size of the control point array is based upon the curve dimension:
If
Dimension
= 3, then
ControlPoint
is an array of 3 doubles ( x, y, z ).
If
Dimension
= 4, then
ControlPoint
is an array of 4 doubles ( x, y, z, w ) where w = weight.

## See Also

- `IModelDoc2.ICreateClippedSplines`