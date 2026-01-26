---
type: method
interface: ISketchPoint
member: SetCoords
returns: System.Boolean
parameters:
  -
    name: Xx
    type: System.Double
    description: X component of the direction vector
  -
    name: Yy
    type: System.Double
    description: Y component of the direction vector
  -
    name: Zz
    type: System.Double
    description: Z component of the direction vector
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchPoint.GetCoords
  - ISketchPoint.X
  - ISketchPoint.Y
  - ISketchPoint.Z
keywords:
  - setcoords
  - isketchpoint
  - sketch
  - point
  - coords
  - xx
  - double
  - yy
  - zz
  - boolean
---

# ISketchPoint.SetCoords

Sets the location of this sketch point.

## Signature

```csharp
System.Boolean SetCoords( 
   System.Double
Xx
,
   System.Double
Yy
,
   System.Double
Zz
)
```
## Parameters

- `Xx` (System.Double): X component of the direction vector
- `Yy` (System.Double): Y component of the direction vector
- `Zz` (System.Double): Z component of the direction vector

## Return Value

True if the coordinates are successfully set, false if not

## Remarks

When setting new coordinate values to a sketch point, this method adheres to any constraints that are active in the sketch. If the sketch point is an end point of a sketch line that is constrained to be horizontal, then the values are adjusted according to that constraint.
To set the coordinates of a sketch point on a spline, the location of the sketch point must already exist on the spline. You cannot use this method to create a new sketch point that is not on the spline.

## See Also

- `ISketchPoint.GetCoords`
- `ISketchPoint.X`
- `ISketchPoint.Y`
- `ISketchPoint.Z`