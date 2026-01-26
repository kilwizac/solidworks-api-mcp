---
type: method
interface: ILoop2
member: RevolvePlanarLoop
returns: System.Object
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
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ILoop2.IRevolvePlanarLoop
keywords:
  - revolveplanarloop
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
  - object
---

# ILoop2.RevolvePlanarLoop

Creates a body by revolving a planar loop around an axis.

## Signature

```csharp
System.Object RevolvePlanarLoop( 
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

## Return Value

Array containing new body (element 1) and two stop faces (elements 2 and 3)

## See Also

- `ILoop2.IRevolvePlanarLoop`