---
type: method
interface: ISketchSpline
member: SetEquationParameters
returns: System.Boolean
parameters:
  -
    name: YExpression
    type: System.String
    description: Equation for y (see Remarks )
  -
    name: RangeStart
    type: System.Double
    description: Start value of x (see Remarks )
  -
    name: RangeEnd
    type: System.Double
    description: End value of x (see Remarks )
  -
    name: IsAngleRange
    type: System.Boolean
    description: True if the range and x value represent an angle (in radians), false if not
  -
    name: RotationAngle
    type: System.Double
    description: Rotation angle (in radians) for the curve
  -
    name: XOffset
    type: System.Double
    description: Offset in x for f(x), where x = 0 (see Remarks )
  -
    name: YOffset
    type: System.Double
    description: Offset in y for f(x), where x = 0 (see Remarks )
  -
    name: LockStart
    type: System.Boolean
    description: True to lock the start point (RangeStart) of the curve, false to not
  -
    name: LockEnd
    type: System.Boolean
    description: True to lock the end point (RangeEnd) of the curve, false to not
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - sketches
related:
  - ISketchManager.CreateEquationSpline
  - ISketchSpline.GetEquationParameters
keywords:
  - setequationparameters
  - isketchspline
  - sketch
  - spline
  - equation
  - parameters
  - expression
  - string
  - range
  - start
  - double
  - end
  - angle
  - boolean
  - rotation
  - offset
  - lock
  - create
  - driven
  - curve
  - vb
  - net
  - vba
---

# ISketchSpline.SetEquationParameters

Obsolete. Superseded by ISketchSpline::SetEquationParameters2.

## Signature

```csharp
System.Boolean SetEquationParameters( 
   System.String
YExpression
,
   System.Double
RangeStart
,
   System.Double
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

- `YExpression` (System.String): Equation for y (see Remarks )
- `RangeStart` (System.Double): Start value of x (see Remarks )
- `RangeEnd` (System.Double): End value of x (see Remarks )
- `IsAngleRange` (System.Boolean): True if the range and x value represent an angle (in radians), false if not
- `RotationAngle` (System.Double): Rotation angle (in radians) for the curve
- `XOffset` (System.Double): Offset in x for f(x), where x = 0 (see Remarks )
- `YOffset` (System.Double): Offset in y for f(x), where x = 0 (see Remarks )
- `LockStart` (System.Boolean): True to lock the start point (RangeStart) of the curve, false to not
- `LockEnd` (System.Boolean): True to lock the end point (RangeEnd) of the curve, false to not

## Return Value

True if the equation-driven curve's parameters are set, false if not

## Remarks

YExpression:
Any function that you can define as a 2D function in the following form:
y-in-the-sketch = f(x-in-the-sketch)
will appear as a curve in the sketch. For example:
y = sin(x)
RangeStart
and
RangeEnd
You cannot specify string values for RangeStart and RangeEnd; you must specify double values.
XOffset:
In the equation:
y = sin(x) [x=0 to 2Pi]
the start point (0,0) is moved by XOffset in the x direction.
YOffset:
In the equation:
y = sin(x) [x=0 to 2Pi]
the start point (0,0) is moved by YOffset in the y direction.

## Examples

- Create Equation-driven Curve (C#) (Create_Equation-driven_Curve_Example_CSharp.htm)
- Create Equation-driven Curve (VB.NET) (Create_Equation-driven_Curve_Example_VBNET.htm)
- Create Equation-driven Curve (VBA) (Create_Equation-driven_Curve_Example_VB.htm)

## See Also

- `ISketchManager.CreateEquationSpline`
- `ISketchSpline.GetEquationParameters`