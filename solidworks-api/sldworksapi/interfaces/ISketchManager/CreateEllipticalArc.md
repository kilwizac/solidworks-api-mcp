---
type: method
interface: ISketchManager
member: CreateEllipticalArc
returns: SketchSegment
parameters:
  -
    name: XC
    type: System.Double
    description: X coordinate for the ellipse center point
  -
    name: YC
    type: System.Double
    description: Y coordinate for the ellipse center point
  -
    name: Zc
    type: System.Double
    description: Z coordinate for the ellipse center point
  -
    name: XMajor
    type: System.Double
    description: X coordinate for a point on the ellipse and on the major axis
  -
    name: YMajor
    type: System.Double
    description: Y coordinate for a point on the ellipse and on the major axis
  -
    name: ZMajor
    type: System.Double
    description: Z coordinate for a point on the ellipse and on the major axis
  -
    name: XMinor
    type: System.Double
    description: X coordinate for a point on the ellipse and on the minor axis
  -
    name: YMinor
    type: System.Double
    description: Y coordinate for a point on the ellipse and on the minor axis
  -
    name: ZMinor
    type: System.Double
    description: Z coordinate for a point on the ellipse and on the minor axis
  -
    name: X1
    type: System.Double
    description: X coordinate for counter-clockwise elliptical arc start point
  -
    name: Y1
    type: System.Double
    description: Y coordinate for counter-clockwise elliptical arc start point
  -
    name: Z1
    type: System.Double
    description: Z coordinate for counter-clockwise elliptical arc start point
  -
    name: X2
    type: System.Double
    description: X coordinate for counter-clockwise elliptical arc end point
  -
    name: Y2
    type: System.Double
    description: Y coordinate for counter-clockwise elliptical arc end point
  -
    name: Z2
    type: System.Double
    description: Z coordinate for counter-clockwise elliptical arc end point
  -
    name: Direction
    type: System.Int16
    description: +1 : Go from the start point to the end point in a counter-clockwise direction -1 : Go from the start point to the end point in a clockwise direction
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related: []
keywords:
  - arcs
  - elliptical
  - ellipses
  - partial
  - sketch
  - entities
  - see
  - also
  - isketch
  - createellipticalarc
  - isketchmanager
  - manager
  - create
  - arc
  - xc
  - double
  - yc
  - zc
  - major
  - minor
  - x1
  - y1
  - z1
  - x2
  - y2
  - z2
  - direction
  - int16
  - segment
---

# ISketchManager.CreateEllipticalArc

Creates a partial ellipse given a center point, two points that specify the major and minor axis, and two points that define the elliptical start and end points.

## Signature

```csharp
SketchSegment CreateEllipticalArc( 
   System.Double
XC
,
   System.Double
YC
,
   System.Double
Zc
,
   System.Double
XMajor
,
   System.Double
YMajor
,
   System.Double
ZMajor
,
   System.Double
XMinor
,
   System.Double
YMinor
,
   System.Double
ZMinor
,
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
   System.Int16
Direction
)
```
## Parameters

- `XC` (System.Double): X coordinate for the ellipse center point
- `YC` (System.Double): Y coordinate for the ellipse center point
- `Zc` (System.Double): Z coordinate for the ellipse center point
- `XMajor` (System.Double): X coordinate for a point on the ellipse and on the major axis
- `YMajor` (System.Double): Y coordinate for a point on the ellipse and on the major axis
- `ZMajor` (System.Double): Z coordinate for a point on the ellipse and on the major axis
- `XMinor` (System.Double): X coordinate for a point on the ellipse and on the minor axis
- `YMinor` (System.Double): Y coordinate for a point on the ellipse and on the minor axis
- `ZMinor` (System.Double): Z coordinate for a point on the ellipse and on the minor axis
- `X1` (System.Double): X coordinate for counter-clockwise elliptical arc start point
- `Y1` (System.Double): Y coordinate for counter-clockwise elliptical arc start point
- `Z1` (System.Double): Z coordinate for counter-clockwise elliptical arc start point
- `X2` (System.Double): X coordinate for counter-clockwise elliptical arc end point
- `Y2` (System.Double): Y coordinate for counter-clockwise elliptical arc end point
- `Z2` (System.Double): Z coordinate for counter-clockwise elliptical arc end point
- `Direction` (System.Int16): +1 : Go from the start point to the end point in a counter-clockwise direction -1 : Go from the start point to the end point in a clockwise direction

## Return Value

Sketch segment for the elliptical arc

## Remarks

This method creates a full circle in the active 2D sketch. If a sketch is not active, then a new sketch is created. You can check for an active sketch using
ISketchManager::ActiveSketch
.
ISketchManager::AddToDB
and
ISketchManager::DisplayWhenAdded
increase performance during entity creation by adding entities directly to the SOLIDWORKS database.
ISketchManager::AddToDB also avoids some of the peculiarities involved with creating entities via the user interface, such as inferencing, automatic relations, and snapping to the grid. Adding entities directly to the database also significantly increases the performance of this method. When you are done creating entities, it is important to ISketchManager::AddToDB(False), to restore SOLIDWORKS to its normal operating mode.
This method also works with ISketchManager::DisplayWhenAdded. If you have called ISketchManager::AddToDB(True), additional performance can be gained by calling ISketchManager::DisplayWhenAdded(False) to disable immediate display of entities as they are added to the database. When you are done creating all of your sketch entities, you must redraw your document window (see
IModelView::GraphicsRedraw
or
IModelView::IGraphicsRedraw
) to see the entities you added. You should also restore the original display settings by calling ISketchManager::DisplayWhenAdded(True).
To create a complete ellipse, use
ISketchManager::CreateEllipse
.