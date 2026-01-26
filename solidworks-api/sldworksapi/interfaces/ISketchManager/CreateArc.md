---
type: method
interface: ISketchManager
member: CreateArc
returns: SketchSegment
parameters:
  -
    name: XC
    type: System.Double
    description: X coordinate of the circle center point in meters
  -
    name: YC
    type: System.Double
    description: coordinate of the circle center point in meters
  -
    name: Zc
    type: System.Double
    description: Z coordinate of the circle center point in meters
  -
    name: X1
    type: System.Double
    description: X coordinate of the start point of the arc in meters
  -
    name: Y1
    type: System.Double
    description: coordinate of the start point of the arc in meters
  -
    name: Z1
    type: System.Double
    description: Z coordinate of the start point of the arc in meters
  -
    name: X2
    type: System.Double
    description: X coordinate of the end point of the arc in meters
  -
    name: Y2
    type: System.Double
    description: Y coordinate of the end point of the arc in meters
  -
    name: Z2
    type: System.Double
    description: coordinate of the end point of the arc in meters
  -
    name: Direction
    type: System.Int16
    description: +1 : Go from the start point to the end point in a counter-clockwise direction -1 : Go from the start point to the end point in a clockwise direction
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - IModelDoc2.CreateArcByCenter
  - ISketchManager.Create3PointArc
  - ISketchManager.CreateTangentArc
keywords:
  - arcs
  - create
  - sketch
  - entities
  - see
  - also
  - isketch
  - createarc
  - isketchmanager
  - manager
  - arc
  - xc
  - double
  - yc
  - zc
  - x1
  - y1
  - z1
  - x2
  - y2
  - z2
  - direction
  - int16
  - segment
  - data
  - vba
  - vb
  - net
---

# ISketchManager.CreateArc

Creates an arc based on a center point, a start point, an end point, and a direction.

## Signature

```csharp
SketchSegment CreateArc( 
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

- `XC` (System.Double): X coordinate of the circle center point in meters
- `YC` (System.Double): coordinate of the circle center point in meters
- `Zc` (System.Double): Z coordinate of the circle center point in meters
- `X1` (System.Double): X coordinate of the start point of the arc in meters
- `Y1` (System.Double): coordinate of the start point of the arc in meters
- `Z1` (System.Double): Z coordinate of the start point of the arc in meters
- `X2` (System.Double): X coordinate of the end point of the arc in meters
- `Y2` (System.Double): Y coordinate of the end point of the arc in meters
- `Z2` (System.Double): coordinate of the end point of the arc in meters
- `Direction` (System.Int16): +1 : Go from the start point to the end point in a counter-clockwise direction -1 : Go from the start point to the end point in a clockwise direction

## Return Value

ISketchArc

## Remarks

This method creates a partial arc in the active 2D sketch. If a sketch is not active, then a new sketch is
created. You can check for an active sketch using I
SketchManager::ActiveSketch
.
ISketchManager::AddToDB
and
ISketchManager::DisplayWhenAdded
increase performance during entity creation by adding entities directly to the SOLIDWORKS database.
ISketchManager::AddToDB also avoids some of the peculiarities involved with creating entities via the user interface, such as inferencing, automatic relations, and snapping to the grid. Adding entities directly to the database also increases the performance of this API. When you are done creating entities, it is important to call ISketchManager::AddToDB(False), to restore SOLIDWORKS to its normal operating mode.
This method also works with ISketchManager::DisplayWhenAdded. If you have called ISketchManager::AddToDB (True), additional performance can be gained by calling ISketchManager::DisplayWhenAdded(False) to disable immediate display of entities as they are added to the database. When you are done creating all of your sketch entities, you must redraw your document window (see
IModelView::GraphicsRedraw
or
IModelView::IGraphicsRedraw
) to see the entities that you added. You should also restore the original display settings by calling ISketchManager::DisplayWhenAdded(True).

## Examples

- Get Sketch Arc Data (VBA) (Get_Sketch_Arc_Data_Example_VB.htm)
- Get Sketch Arc Data (VB.NET) (Get_Sketch_Arc_Data_Example_VBNET.htm)
- Get Sketch Arc Data (C#) (Get_Sketch_Arc_Data_Example_CSharp.htm)

## See Also

- `IModelDoc2.CreateArcByCenter`
- `ISketchManager.Create3PointArc`
- `ISketchManager.CreateTangentArc`