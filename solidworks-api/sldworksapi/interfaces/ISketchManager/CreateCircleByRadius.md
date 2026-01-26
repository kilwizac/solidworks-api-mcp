---
type: method
interface: ISketchManager
member: CreateCircleByRadius
returns: SketchSegment
parameters:
  -
    name: XC
    type: System.Double
    description: X coordinate of the circle center point in meters
  -
    name: YC
    type: System.Double
    description: Y coordinate of the circle center point in meters
  -
    name: Zc
    type: System.Double
    description: Z coordinate of the circle center point in meters
  -
    name: Radius
    type: System.Double
    description: Radius of the circle in meters
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related: []
keywords:
  - circles
  - sketch
  - entities
  - see
  - also
  - isketch
  - circle
  - createcirclebyradius
  - isketchmanager
  - manager
  - create
  - radius
  - xc
  - double
  - yc
  - zc
  - segment
---

# ISketchManager.CreateCircleByRadius

Creates a circle based on a center point and a specified radius.

## Signature

```csharp
SketchSegment CreateCircleByRadius( 
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
Radius
)
```
## Parameters

- `XC` (System.Double): X coordinate of the circle center point in meters
- `YC` (System.Double): Y coordinate of the circle center point in meters
- `Zc` (System.Double): Z coordinate of the circle center point in meters
- `Radius` (System.Double): Radius of the circle in meters

## Return Value

Sketch segment for the circle

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
To create a circle using a center point and a point on the circle, see
ISketchManager::CreateCircle
. To create a partial arc, see
ISketchManager::CreateArc
.