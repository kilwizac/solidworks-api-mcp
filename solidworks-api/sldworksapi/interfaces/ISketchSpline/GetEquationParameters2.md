---
type: method
interface: ISketchSpline
member: GetEquationParameters2
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
    description: Start value of y
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
    description: Offset in x for f(x), where x = 0
  -
    name: YOffset
    type: System.Double
    description: Offset in y for f(x), where x = 0
  -
    name: LockStart
    type: System.Boolean
    description: True to lock the start point (RangeStart) of the curve, false to not
  -
    name: LockEnd
    type: System.Boolean
    description: True to lock the end point (RangeEnd) of the curve, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchManager.CreateEquationSpline2
  - ISketchSpline.SetEquationParameters2
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
  - getequationparameters2
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

# ISketchSpline.GetEquationParameters2

Gets an equation-driven curve's parameters.

## Signature

```csharp
System.Boolean GetEquationParameters2( 
   out System.String
XExpression
,
   out System.String
YExpression
,
   out System.String
ZExpression
,
   out System.Double
RangeStart
,
   out System.Double
RangeEnd
,
   out System.Boolean
IsAngleRange
,
   out System.Double
RotationAngle
,
   out System.Double
XOffset
,
   out System.Double
YOffset
,
   out System.Boolean
LockStart
,
   out System.Boolean
LockEnd
)
```
## Parameters

- `XExpression` (System.String): Equation for x
- `YExpression` (System.String): Equation for y
- `ZExpression` (System.String): Equation for z
- `RangeStart` (System.Double): Start value of x
- `RangeEnd` (System.Double): Start value of y
- `IsAngleRange` (System.Boolean): True if the range and x value represent an angle (in radians), false if not
- `RotationAngle` (System.Double): Rotation angle (in radians) for the curve
- `XOffset` (System.Double): Offset in x for f(x), where x = 0
- `YOffset` (System.Double): Offset in y for f(x), where x = 0
- `LockStart` (System.Boolean): True to lock the start point (RangeStart) of the curve, false to not
- `LockEnd` (System.Boolean): True to lock the end point (RangeEnd) of the curve, false to not

## Return Value

True if the equation-driven curve's parameters are returned, false if not

## See Also

- `ISketchManager.CreateEquationSpline2`
- `ISketchSpline.SetEquationParameters2`