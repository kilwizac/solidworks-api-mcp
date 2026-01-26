---
type: method
interface: ISketchManager
member: CreateEquationSpline2
returns: SketchSpline
parameters:
  -
    name: XExpression
    type: System.String
    description: For a parametric curve, equation for x in terms of t; for an explicit curve, an empty string (see Remarks )
  -
    name: YExpression
    type: System.String
    description: For a parametric curve, equation for y in terms of t; for an explicit curve, equation for y in terms of x (see Remarks )
  -
    name: ZExpression
    type: System.String
    description: Equation for z in terms of t (see Remarks )
  -
    name: RangeStart
    type: System.String
    description: Start value for x, if explicit; start value for t, if parametric (see Remarks )
  -
    name: RangeEnd
    type: System.String
    description: End value for x, if explicit; start value for t, if parametric (see Remarks )
  -
    name: IsAngleRange
    type: System.Boolean
    description: True if the range and x value represent an angle (in radians), false if not (see Remarks )
  -
    name: RotationAngle
    type: System.Double
    description: True if the range and x value represent an angle (in radians), false if not (see Remarks )
  -
    name: XOffset
    type: System.Double
    description: Rotation angle (in radians) for the curve (see Remarks )
  -
    name: YOffset
    type: System.Double
    description: Translation in the x direction of the curve (see Remarks )
  -
    name: LockStart
    type: System.Boolean
    description: Translation in the y direction of the curve (see Remarks )
  -
    name: LockEnd
    type: System.Boolean
    description: True to lock the start point (RangeStart) of the curve, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchSpline.GetEquationParameters2
  - ISketchSpline.SetEquationParameters2
keywords:
  - equation
  - see
  - also
  - iequationmgr
  - curves
  - splines
  - driven
  - curve
  - icurve
  - createequationspline2
  - isketchmanager
  - sketch
  - manager
  - create
  - spline2
  - expression
  - string
  - range
  - start
  - end
  - angle
  - boolean
  - rotation
  - double
  - offset
  - lock
  - spline
---

# ISketchManager.CreateEquationSpline2

Creates an equation-driven 2D explicit or parametric curve or a 3D parametric curve.

## Signature

```csharp
SketchSpline CreateEquationSpline2( 
   System.String
XExpression
,
   System.String
YExpression
,
   System.String
ZExpression
,
   System.String
RangeStart
,
   System.String
RangeEnd
,
   System.Boolean
IsAngleRange
,
   System.Double
RotationAngle
,
   System.Double
XOffset
,
   System.Double
YOffset
,
   System.Boolean
LockStart
,
   System.Boolean
LockEnd
)
```
## Parameters

- `XExpression` (System.String): For a parametric curve, equation for x in terms of t; for an explicit curve, an empty string (see Remarks )
- `YExpression` (System.String): For a parametric curve, equation for y in terms of t; for an explicit curve, equation for y in terms of x (see Remarks )
- `ZExpression` (System.String): Equation for z in terms of t (see Remarks )
- `RangeStart` (System.String): Start value for x, if explicit; start value for t, if parametric (see Remarks )
- `RangeEnd` (System.String): End value for x, if explicit; start value for t, if parametric (see Remarks )
- `IsAngleRange` (System.Boolean): True if the range and x value represent an angle (in radians), false if not (see Remarks )
- `RotationAngle` (System.Double): True if the range and x value represent an angle (in radians), false if not (see Remarks )
- `XOffset` (System.Double): Rotation angle (in radians) for the curve (see Remarks )
- `YOffset` (System.Double): Translation in the x direction of the curve (see Remarks )
- `LockStart` (System.Boolean): Translation in the y direction of the curve (see Remarks )
- `LockEnd` (System.Boolean): True to lock the start point (RangeStart) of the curve, false to not

## Return Value

Equation-driven curve

## Remarks

XExpression
If you want:
an explicit curve (only in 2D) of the form y=f(x), then this input should be "".
a parametric curve given in terms of the parameter t, then this input is the value of x given in terms of the parameter. For example:
x=sin(t)
YExpression
If you want:
an explicit curve (only in 2D) of the form y=f(x), then this input should be a function in terms of x to use to compute the value of y. For example:
y=exp(x)
a parametric curve given in terms of the parameter t, then this input is the value of y given in terms of the parameter. For example:
y=cos(t)
ZExpression
For 3D parametric curves, this input is the value of z given in terms of parameter t. For example:
z = t
RangeStart
and
RangeEnd
Strings so that you can input dimension names or pi; for example,
"10* width_dimension1"
or
"-pi/2"
.
XOffset
,
YOffset
,
IsAngleRange
, and
RotationAngle
In general, these parameters are not needed. They are for legacy support only. There are no equivalent 3D variables for positioning in 3D.

## See Also

- `ISketchSpline.GetEquationParameters2`
- `ISketchSpline.SetEquationParameters2`