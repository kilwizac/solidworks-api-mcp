---
type: method
interface: IModelDoc2
member: ICreateClippedSplines
returns: EnumSketchSegments
parameters:
  -
    name: PropArray
    type: System.Int32
    description: See Remarks
  -
    name: KnotsArray
    type: System.Double
    description: See Remarks
  -
    name: CntrlPntCoordArray
    type: System.Double
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
    description: x component of the upper corner of the clipping rectang
  -
    name: Y2
    type: System.Double
    description: y component of the upper corner of the clipping rectang
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.CreateClippedSplines
keywords:
  - splines
  - clipped
  - icreateclippedsplines
  - imodeldoc2
  - model
  - doc2
  - create
  - prop
  - array
  - int32
  - knots
  - double
  - cntrl
  - pnt
  - coord
  - x1
  - y1
  - x2
  - y2
  - sketch
  - segments
---

# IModelDoc2.ICreateClippedSplines

Creates one or more sketch spline segments that are clipped against a given (x1, y1), (x2, y2) rectangle. This rectangle lies in the space of the active 2D sketch.

## Signature

```csharp
EnumSketchSegments ICreateClippedSplines( 
   ref System.Int32
PropArray
,
   ref System.Double
KnotsArray
,
   ref System.Double
CntrlPntCoordArray
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

- `PropArray` (System.Int32): See Remarks
- `KnotsArray` (System.Double): See Remarks
- `CntrlPntCoordArray` (System.Double): See Remarks
- `X1` (System.Double): x component of the lower corner of the clipping rectangle
- `Y1` (System.Double): y component of the lower corner of the clipping rectangle
- `X2` (System.Double): x component of the upper corner of the clipping rectang
- `Y2` (System.Double): y component of the upper corner of the clipping rectang

## Return Value

Newly created sketch segments enumeration

## Remarks

The rectangle lies in the space of the active 2D sketch. The results are undefined for calls made in an active 3D sketch.
The arrays are as follows:
PropArray =
[
Dimension, Order, NumControlPoints, Periodicity
]
KnotsArray =
[
NumControlPoints
+ Order
]
CntrlPntCoordArray =
[
NumControlPoints
*
Dimension
]
If
Dimension
= 3, then
CntrlPntCoordArray
is an array of 3 doubles ( x, y, z ).
If
Dimension
= 4, then
CntrlPntCoordArray
is an array of 4 doubles ( x, y, z, w ) where w = weight.

## See Also

- `IModelDoc2.CreateClippedSplines`