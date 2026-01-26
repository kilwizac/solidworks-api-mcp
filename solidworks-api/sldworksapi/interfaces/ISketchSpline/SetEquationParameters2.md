---
type: method
interface: ISketchSpline
member: SetEquationParameters2
returns: System.Boolean
parameters:
  -
    name: XExpression
    type: System.String
    description: Equation for x
  -
    name: YExpression
    type: System.String
    description: Equation for y
  -
    name: ZExpression
    type: System.String
    description: Equation for z
  -
    name: RangeStart
    type: System.Double
    description: Start value of x
  -
    name: RangeEnd
    type: System.Double
    description: End value of x
  -
    name: IsAngleRange
    type: System.Boolean
    description: True if the range and x value represent an angle (in radians), false if not
  -
    name: RotationAngle
    type: System.Double
    description: True if the range and x value represent an angle (in radians), false if not
  -
    name: XOffset
    type: System.Double
    description: Rotation angle (in radians) for the curve
  -
    name: YOffset
    type: System.Double
    description: Offset in x for f(x), where x = 0
  -
    name: LockStart
    type: System.Boolean
    description: Offset in y for f(x), where x = 0
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
  - ISketchManager.CreateEquationSpline2
  - ISketchSpline.GetEquationParameters2
keywords:
  - curve
  - see
  - also
  - icurve
  - equation
  - driven
  - iequationmgr
  - curves
  - splines
  - setequationparameters2
  - isketchspline
  - sketch
  - spline
  - parameters2
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
---

# ISketchSpline.SetEquationParameters2

Sets an equation-driven curve's parameters.

## Signature

```csharp
System.Boolean SetEquationParameters2( 
   System.String
XExpression
,
   System.String
YExpression
,
   System.String
ZExpression
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

- `XExpression` (System.String): Equation for x
- `YExpression` (System.String): Equation for y
- `ZExpression` (System.String): Equation for z
- `RangeStart` (System.Double): Start value of x
- `RangeEnd` (System.Double): End value of x
- `IsAngleRange` (System.Boolean): True if the range and x value represent an angle (in radians), false if not
- `RotationAngle` (System.Double): True if the range and x value represent an angle (in radians), false if not
- `XOffset` (System.Double): Rotation angle (in radians) for the curve
- `YOffset` (System.Double): Offset in x for f(x), where x = 0
- `LockStart` (System.Boolean): Offset in y for f(x), where x = 0
- `LockEnd` (System.Boolean): True to lock the start point (RangeStart) of the curve, false to not

## Return Value

True if the equation-driven curve's parameters are set, false if not

## See Also

- `ISketchManager.CreateEquationSpline2`
- `ISketchSpline.GetEquationParameters2`