---
type: method
interface: ISketchManager
member: CreateCircle
returns: SketchSegment
parameters:
  -
    name: XC
    type: System.Double
    description: X coordinate of the circle center point, in meters
  -
    name: YC
    type: System.Double
    description: Y coordinate of the circle center point, in meters
  -
    name: Zc
    type: System.Double
    description: Z coordinate of the circle center point, in meters
  -
    name: Xp
    type: System.Double
    description: X coordinate of the point on the circle, in meters
  -
    name: Yp
    type: System.Double
    description: Y coordinate of the point on the circle, in meters
  -
    name: Zp
    type: System.Double
    description: Z coordinate of the point on the circle, in meters
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchManager.CreateConic
keywords:
  - circles
  - sketch
  - entities
  - see
  - also
  - isketch
  - circle
  - createcircle
  - isketchmanager
  - manager
  - create
  - xc
  - double
  - yc
  - zc
  - xp
  - yp
  - zp
  - segment
  - edit
  - circular
  - pattern
  - vb
  - net
  - vba
  - detail
  - view
---

# ISketchManager.CreateCircle

Creates a circle based on a center point and a point on the circle.

## Signature

```csharp
SketchSegment CreateCircle( 
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
Xp
,
   System.Double
Yp
,
   System.Double
Zp
)
```
## Parameters

- `XC` (System.Double): X coordinate of the circle center point, in meters
- `YC` (System.Double): Y coordinate of the circle center point, in meters
- `Zc` (System.Double): Z coordinate of the circle center point, in meters
- `Xp` (System.Double): X coordinate of the point on the circle, in meters
- `Yp` (System.Double): Y coordinate of the point on the circle, in meters
- `Zp` (System.Double): Z coordinate of the point on the circle, in meters

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
To create a circle using a center point and radius, see
ISketchManager::CreateCircleByRadius
. To create a partial arc, see
ISketchManager::CreateArc
.

## Examples

- Create and Edit Circular Sketch Pattern (VB.NET) (Create_and_Edit_Circular_Sketch_Pattern_Example_VBNET.htm)
- Create and Edit Circular Sketch Pattern (VBA) (Create_and_Edit_Circular_Sketch_Pattern_Example_VB.htm)
- Create and Edit Circular Sketch Pattern (C#) (Create_and_Edit_Circular_Sketch_Pattern_Example_CSharp.htm)
- Create Detail Circle and Detail View (C#) (Create_Detail_Circle_and_Detail_View_Example_CSharp.htm)
- Create Detail Circle and Detail View (VB.NET) (Create_Detail_Circle_and_Detail_View_Example_VBNET.htm)
- Create Detail Circle and Detail View (VBA) (Create_Detail_Circle_and_Detail_View_Example_VB.htm)

## See Also

- `ISketchManager.CreateConic`