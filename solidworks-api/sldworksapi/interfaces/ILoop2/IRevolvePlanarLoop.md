---
type: method
interface: ILoop2
member: IRevolvePlanarLoop
returns: Body2
parameters:
  -
    name: X
    type: System.Double
    description: x coordinate of the axis point
  -
    name: Y
    type: System.Double
    description: y coordinate of the axis point
  -
    name: Z
    type: System.Double
    description: z coordinate of the axis point
  -
    name: Axisx
    type: System.Double
    description: Direction along x
  -
    name: Axisy
    type: System.Double
    description: Direction along y
  -
    name: Axisz
    type: System.Double
    description: Direction along z
  -
    name: RevAngle
    type: System.Double
    description: Angle of revolution in radians
  -
    name: StopFacesOut
    type: Face2
    description: Array of two stop faces
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ILoop2.RevolvePlanarLoop
keywords:
  - irevolveplanarloop
  - iloop2
  - loop2
  - revolve
  - planar
  - loop
  - double
  - axisx
  - axisy
  - axisz
  - rev
  - angle
  - stop
  - faces
  - out
  - face2
  - body2
---

# ILoop2.IRevolvePlanarLoop

Creates a body by revolving a planar loop around an axis.

## Signature

```csharp
Body2 IRevolvePlanarLoop( 
   System.Double
X
,
   System.Double
Y
,
   System.Double
Z
,
   System.Double
Axisx
,
   System.Double
Axisy
,
   System.Double
Axisz
,
   System.Double
RevAngle
,
   out Face2
StopFacesOut
)
```
## Parameters

- `X` (System.Double): x coordinate of the axis point
- `Y` (System.Double): y coordinate of the axis point
- `Z` (System.Double): z coordinate of the axis point
- `Axisx` (System.Double): Direction along x
- `Axisy` (System.Double): Direction along y
- `Axisz` (System.Double): Direction along z
- `RevAngle` (System.Double): Angle of revolution in radians
- `StopFacesOut` (Face2): Array of two stop faces

## Return Value

New body

## See Also

- `ILoop2.RevolvePlanarLoop`