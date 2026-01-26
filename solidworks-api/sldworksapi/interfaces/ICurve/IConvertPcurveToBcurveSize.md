---
type: method
interface: ICurve
member: IConvertPcurveToBcurveSize
returns: System.Int32
parameters:
  -
    name: Dim
    type: System.Int32
    description: Dimension of the curve: 3 = nonrational 4 = rational
  -
    name: Order
    type: System.Int32
    description: Order of the curve; minimum is 2 (linear)
  -
    name: Nsegs
    type: System.Int32
    description: Number of segments in the curve; must be at least 1
  -
    name: Coeffs
    type: System.Double
    description: Array of coefficients
  -
    name: Basis
    type: System.Int32
    description: 0; not currently used
  -
    name: Xform
    type: System.Double
    description: Transformation matrix to apply after conversion to b-curve
  -
    name: ScaleFactor
    type: System.Double
    description: Units conversion factor to apply after conversion to b-curve
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ICurve.ConvertArcToBcurve
  - ICurve.ConvertLineToBcurve
  - ICurve.ExtentCurve
  - ICurve.GetBCurveParams
  - ICurve.IConvertArcToBcurveSize
  - ICurve.IConvertLineToBcurveSize
  - ICurve.IGetBCurveParams
  - ICurve.IGetBCurveParamsSize2
  - ICurve.IsBcurve
  - ICurve.MakeBsplineCurve
  - ICurve.SimplifyBCurve
keywords:
  - iconvertpcurvetobcurvesize
  - icurve
  - curve
  - convert
  - pcurve
  - bcurve
  - size
  - dim
  - int32
  - order
  - nsegs
  - coeffs
  - double
  - basis
  - xform
  - scale
  - factor
---

# ICurve.IConvertPcurveToBcurveSize

Creates a b-curve from piecewise data.

## Signature

```csharp
System.Int32 IConvertPcurveToBcurveSize( 
   System.Int32
Dim
,
   System.Int32
Order
,
   System.Int32
Nsegs
,
   ref System.Double
Coeffs
,
   System.Int32
Basis
,
   ref System.Double
Xform
,
   System.Double
ScaleFactor
)
```
## Parameters

- `Dim` (System.Int32): Dimension of the curve: 3 = nonrational 4 = rational
- `Order` (System.Int32): Order of the curve; minimum is 2 (linear)
- `Nsegs` (System.Int32): Number of segments in the curve; must be at least 1
- `Coeffs` (System.Double): Array of coefficients
- `Basis` (System.Int32): 0; not currently used
- `Xform` (System.Double): Transformation matrix to apply after conversion to b-curve
- `ScaleFactor` (System.Double): Units conversion factor to apply after conversion to b-curve

## Return Value

Indicates that conversion succeeded or failed

## Remarks

Dimension of coefficient vectors dim:
For rational curves dim = 4.
For non-rational curves dim = 3.
Order of each segment of the curve order:
The order of the curve = degree + 1.
The minimum order is 2.
Number of segments in the curve nseg:
There must be at least one segment (nseg >= 1).
Adjacent segments must meet.
Coefficient data coeffs:
Contains order * nseg vectors of dimension dim. If dim = 3, then the vectors are 3-D vectors giving the x, y and z components. If dim = 4, then each vector has a weight (w) associated with it, and x, y, z and w components are supplied for each vector. The weights supplied must be greater than 0.
The coefficients are supplied in order, segment by segment.
The interpretation of the coefficients depends on the representation method chosen; this is determined by the value of the argument basis.
Representation method basis:
The expressions for each segment of the B-curve P(t) in the various representations are shown next. For generality, the rational form is given.
The simplification to the non-rational form can be obtained by setting both the weights and the denominator equal to 1.0
Polynomial coefficients:
The curve equation is given by a rational polynomial of order 'order':
n
n
--
i
/ --
i
P(t)
=
>
w
A
t
/
>
w
t
--
i
i
/
--
i
i=0
i=0
where n = order-1
A = polynomial coefficient
i
w = weight for A
i
i
The polynomial coefficients are supplied starting with the constant
term and ending with the term of highest degree.

## See Also

- `ICurve.ConvertArcToBcurve`
- `ICurve.ConvertLineToBcurve`
- `ICurve.ExtentCurve`
- `ICurve.GetBCurveParams`
- `ICurve.IConvertArcToBcurveSize`
- `ICurve.IConvertLineToBcurveSize`
- `ICurve.IGetBCurveParams`
- `ICurve.IGetBCurveParamsSize2`
- `ICurve.IsBcurve`
- `ICurve.MakeBsplineCurve`
- `ICurve.SimplifyBCurve`