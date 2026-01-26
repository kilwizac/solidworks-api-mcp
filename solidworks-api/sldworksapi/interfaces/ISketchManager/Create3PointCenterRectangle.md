---
type: method
interface: ISketchManager
member: Create3PointCenterRectangle
returns: System.Object
parameters:
  -
    name: X1
    type: System.Double
    description: X coordinate of point 1
  -
    name: Y1
    type: System.Double
    description: Y coordinate of point 1
  -
    name: Z1
    type: System.Double
    description: Z coordinate of point 1
  -
    name: X2
    type: System.Double
    description: X coordinate of point 2
  -
    name: Y2
    type: System.Double
    description: Y coordinate of point 2
  -
    name: Z2
    type: System.Double
    description: Z coordinate of point 2
  -
    name: X3
    type: System.Double
    description: X coordinate of point 3
  -
    name: Y3
    type: System.Double
    description: Y coordinate of point 3
  -
    name: Z3
    type: System.Double
    description: Z coordinate of point 3
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchManager.Create3PointCornerRectangle
  - ISketchManager.CreateCenterRectangle
keywords:
  - point
  - center
  - rectangle
  - rectangles
  - sketch
  - entities
  - see
  - also
  - isketch
  - arcs
  - create3pointcenterrectangle
  - isketchmanager
  - manager
  - create3
  - x1
  - double
  - y1
  - z1
  - x2
  - y2
  - z2
  - x3
  - y3
  - z3
  - object
---

# ISketchManager.Create3PointCenterRectangle

Creates a 3-point center rectangle at any angle.

## Signature

```csharp
System.Object Create3PointCenterRectangle( 
   System.Double
X1
,
   System.Double
Y1
,
   System.Double
Z1
,
   System.Double
X2
,
   System.Double
Y2
,
   System.Double
Z2
,
   System.Double
X3
,
   System.Double
Y3
,
   System.Double
Z3
)
```
## Parameters

- `X1` (System.Double): X coordinate of point 1
- `Y1` (System.Double): Y coordinate of point 1
- `Z1` (System.Double): Z coordinate of point 1
- `X2` (System.Double): X coordinate of point 2
- `Y2` (System.Double): Y coordinate of point 2
- `Z2` (System.Double): Z coordinate of point 2
- `X3` (System.Double): X coordinate of point 3
- `Y3` (System.Double): Y coordinate of point 3
- `Z3` (System.Double): Z coordinate of point 3

## Return Value

Array of sketch segments that represent the edges and diagonals created for this center rectangle

## See Also

- `ISketchManager.Create3PointCornerRectangle`
- `ISketchManager.CreateCenterRectangle`