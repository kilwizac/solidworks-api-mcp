---
type: method
interface: ISketchManager
member: CreateCenterRectangle
returns: System.Object
parameters:
  -
    name: X1
    type: System.Double
    description: X coordinate for point 1
  -
    name: Y1
    type: System.Double
    description: Y coordinate for point 1
  -
    name: Z1
    type: System.Double
    description: Z coordinate for point 1
  -
    name: X2
    type: System.Double
    description: X coordinate for point 2
  -
    name: Y2
    type: System.Double
    description: Y coordinate for point 2
  -
    name: Z2
    type: System.Double
    description: Z coordinate for point 2
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchManager.Create3PointCenterRectangle
  - ISketchManager.Create3PointCornerRectangle
keywords:
  - rectangles
  - sketch
  - entities
  - see
  - also
  - isketch
  - rectangle
  - createcenterrectangle
  - isketchmanager
  - manager
  - create
  - center
  - x1
  - double
  - y1
  - z1
  - x2
  - y2
  - z2
  - object
---

# ISketchManager.CreateCenterRectangle

Creates a center rectangle.

## Signature

```csharp
System.Object CreateCenterRectangle( 
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
)
```
## Parameters

- `X1` (System.Double): X coordinate for point 1
- `Y1` (System.Double): Y coordinate for point 1
- `Z1` (System.Double): Z coordinate for point 1
- `X2` (System.Double): X coordinate for point 2
- `Y2` (System.Double): Y coordinate for point 2
- `Z2` (System.Double): Z coordinate for point 2

## Return Value

Array of sketch segments that represent the edges and diagonals created for this center rectangle

## See Also

- `ISketchManager.Create3PointCenterRectangle`
- `ISketchManager.Create3PointCornerRectangle`