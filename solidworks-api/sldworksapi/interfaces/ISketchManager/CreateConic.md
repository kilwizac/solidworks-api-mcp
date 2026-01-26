---
type: method
interface: ISketchManager
member: CreateConic
returns: SketchSegment
parameters:
  -
    name: XFocus
    type: System.Double
    description: X coordinate for the focus of the curve
  -
    name: YFocus
    type: System.Double
    description: Y coordinate for the focus of the curve
  -
    name: ZFocus
    type: System.Double
    description: Z coordinate for the focus of the curve
  -
    name: XApex
    type: System.Double
    description: X coordinate for the apex of the curve
  -
    name: YApex
    type: System.Double
    description: Y coordinate for the apex of the curve
  -
    name: ZApex
    type: System.Double
    description: Z coordinate for the apex of the curve
  -
    name: X1
    type: System.Double
    description: X coordinate for the start point of the curve
  -
    name: Y1
    type: System.Double
    description: Y coordinate for the start point of the curve
  -
    name: Z1
    type: System.Double
    description: Z coordinate for the start point of the curve
  -
    name: X2
    type: System.Double
    description: X coordinate for the end point of the curve
  -
    name: Y2
    type: System.Double
    description: Y coordinate for the end point of the curve
  -
    name: Z2
    type: System.Double
    description: Z coordinate for the end point of the curve
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchManager.CreateCircle
  - ISketchManager.CreateEllipse
  - ISketchManager.CreateParabola
keywords:
  - conic
  - curves
  - sketch
  - see
  - also
  - isketch
  - entities
  - createconic
  - isketchmanager
  - manager
  - create
  - focus
  - double
  - apex
  - x1
  - y1
  - z1
  - x2
  - y2
  - z2
  - segment
  - insert
  - curve
  - example
  - vba
  - vb
  - net
---

# ISketchManager.CreateConic

Creates a conic curve in the active sketch.

## Signature

```csharp
SketchSegment CreateConic( 
   System.Double
XFocus
,
   System.Double
YFocus
,
   System.Double
ZFocus
,
   System.Double
XApex
,
   System.Double
YApex
,
   System.Double
ZApex
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
)
```
## Parameters

- `XFocus` (System.Double): X coordinate for the focus of the curve
- `YFocus` (System.Double): Y coordinate for the focus of the curve
- `ZFocus` (System.Double): Z coordinate for the focus of the curve
- `XApex` (System.Double): X coordinate for the apex of the curve
- `YApex` (System.Double): Y coordinate for the apex of the curve
- `ZApex` (System.Double): Z coordinate for the apex of the curve
- `X1` (System.Double): X coordinate for the start point of the curve
- `Y1` (System.Double): Y coordinate for the start point of the curve
- `Z1` (System.Double): Z coordinate for the start point of the curve
- `X2` (System.Double): X coordinate for the end point of the curve
- `Y2` (System.Double): Y coordinate for the end point of the curve
- `Z2` (System.Double): Z coordinate for the end point of the curve

## Return Value

Sketch segment for the conic curve

## Remarks

This method creates a conic curve (circle, ellipse, parabola, or hyperbola) in the active 2D sketch. If a sketch is not active, then a new sketch is created. You can check for an active sketch using
ISketchManager::ActiveSketch
.
ISketchManager::AddToDB
and
ISketchManager::DisplayWhenAdded
increase performance during entity creation by adding entities directly to the SOLIDWORKS database.
ISketchManager::AddToDB also avoids some of the peculiarities involved with creating entities via the user interface, such as inferencing, automatic relations, and snapping to the grid. Adding entities directly to the database also significantly increases the performance of this method. When you are done creating entities, it is important to call ISketchManager::AddToDB(False), to restore SOLIDWORKS to its normal operating mode.
This method also works with ISketchManager::DisplayWhenAdded. If you have called ISketchManager::AddToDB(True), additional performance can be gained by calling ISketchManager::DisplayWhenAdded(False) to disable immediate display of entities as they are added to the database. When you are done creating all of your sketch entities, you must redraw your document window (see
IModelView::GraphicsRedraw
or
IModelView::IGraphicsRedraw
) to see the entities you added. You should also restore the original display settings by calling ISketchManager::DisplayWhenAdded(True).

## Examples

- Insert Conic Curve Example (VBA) (Insert_Conic_Curve_Example_VB.htm)
- Insert Conic Curve (VB.NET) (Insert_Conic_Curve_Example_VBNET.htm)
- Insert Conic Curve (C#) (Insert_Conic_Curve_Example_CSharp.htm)

## See Also

- `ISketchManager.CreateCircle`
- `ISketchManager.CreateEllipse`
- `ISketchManager.CreateParabola`