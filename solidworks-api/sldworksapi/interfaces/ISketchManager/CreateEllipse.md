---
type: method
interface: ISketchManager
member: CreateEllipse
returns: SketchSegment
parameters:
  -
    name: XC
    type: System.Double
    description: X coordinate of the ellipse center point
  -
    name: YC
    type: System.Double
    description: Y coordinate of the ellipse center point
  -
    name: Zc
    type: System.Double
    description: Z coordinate of the ellipse center point
  -
    name: XMajor
    type: System.Double
    description: X coordinate of the point on the ellipse that is on the major axis
  -
    name: YMajor
    type: System.Double
    description: Y coordinate of the point on the ellipse that is on the major axis
  -
    name: ZMajor
    type: System.Double
    description: Z coordinate of the point on the ellipse that is on the major axis
  -
    name: XMinor
    type: System.Double
    description: X coordinate of the point on the ellipse that is on the minor axis
  -
    name: YMinor
    type: System.Double
    description: Y coordinate of the point on the ellipse that is on the minor axis
  -
    name: ZMinor
    type: System.Double
    description: Z coordinate of the point on the ellipse that is on the minor axis
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchManager.CreateConic
keywords:
  - sketch
  - entities
  - ellipses
  - see
  - also
  - isketch
  - createellipse
  - isketchmanager
  - manager
  - create
  - ellipse
  - xc
  - double
  - yc
  - zc
  - major
  - minor
  - segment
  - vba
  - vb
  - net
---

# ISketchManager.CreateEllipse

Creates an ellipse using the specified center, major-axis, and minor-axis points.

## Signature

```csharp
SketchSegment CreateEllipse( 
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
)
```
## Parameters

- `XC` (System.Double): X coordinate of the ellipse center point
- `YC` (System.Double): Y coordinate of the ellipse center point
- `Zc` (System.Double): Z coordinate of the ellipse center point
- `XMajor` (System.Double): X coordinate of the point on the ellipse that is on the major axis
- `YMajor` (System.Double): Y coordinate of the point on the ellipse that is on the major axis
- `ZMajor` (System.Double): Z coordinate of the point on the ellipse that is on the major axis
- `XMinor` (System.Double): X coordinate of the point on the ellipse that is on the minor axis
- `YMinor` (System.Double): Y coordinate of the point on the ellipse that is on the minor axis
- `ZMinor` (System.Double): Z coordinate of the point on the ellipse that is on the minor axis

## Return Value

Sketch segment for the ellipse

## Remarks

This method creates a full ellipse in the active 2D sketch. If a sketch is not active, then a new sketch is created. You can check for an active sketch using
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
To create a partial ellipse, use
ISketchManager::CreateEllipticalArc
.

## Examples

- Create Ellipse (VBA) (Create_Ellipse_Example_VB.htm)
- Create Ellipse (VB.NET) (Create_Ellipse_Example_VBNET.htm)
- Create Ellipse (C#) (Create_Ellipse_Example_CSharp.htm)

## See Also

- `ISketchManager.CreateConic`