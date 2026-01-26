---
type: method
interface: ICurve
member: IGetSplinePtsSize
returns: System.Int32
parameters:
  -
    name: PropArray
    type: System.Int32
    description: Array that includes dimension, order, number of control points, and periodicity
  -
    name: KnotsArray
    type: System.Double
    description: knot1, knot2, ..., knot n
  -
    name: CntrlPntCoordArray
    type: System.Double
    description: controlpoint1[dimension], controlpoint2[dimension], ..., controlpoint n [dimension]
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ICurve.GetSplinePts
keywords:
  - igetsplineptssize
  - icurve
  - curve
  - spline
  - pts
  - size
  - prop
  - array
  - int32
  - knots
  - double
  - cntrl
  - pnt
  - coord
  - points
---

# ICurve.IGetSplinePtsSize

Gets the size of the array required by ICurve::IGetSplinePts.

## Signature

```csharp
System.Int32 IGetSplinePtsSize( 
   ref System.Int32
PropArray
,
   ref System.Double
KnotsArray
,
   ref System.Double
CntrlPntCoordArray
)
```
## Parameters

- `PropArray` (System.Int32): Array that includes dimension, order, number of control points, and periodicity
- `KnotsArray` (System.Double): knot1, knot2, ..., knot n
- `CntrlPntCoordArray` (System.Double): controlpoint1[dimension], controlpoint2[dimension], ..., controlpoint n [dimension]

## Return Value

Size of the data set returned by ICurve::IGetSplinePts

## Remarks

PropArray contains 4 integers:
Dimension
Order
Number of control points
Periodicity ( True or false )
KnotsArray is an array of doubles with (Number of control points + Order) elements.
The size of the CntrlPntCoordArray array is based on the curve dimension.
Dimension = 2 then each control point is an array of 2 doubles ( u, v )
Dimension = 3 then each control point is an array of 3 doubles ( x, y, z)
Dimension = 4 then each control point is an array of 4 doubles ( x, y, z, w ) where w = weight
Data passed into this method must satisfy the following requirements:
If the curve is periodic, it must not have any repeated knots.
If the curve is non-periodic, it must only have repeated knots at its ends.
The curve must be cubic or lower degree, non-rational and have continuous first and second derivatives.
NOTE:
For a linear or quadratic curve to satisfy these continuity requirements, it
must consist of a single segment.

## Examples

- Get Curve Spline Points (C++) (Get_Curve_Spline_Points_Example_CPlusPlus_COM.htm)

## See Also

- `ICurve.GetSplinePts`