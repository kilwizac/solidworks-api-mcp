---
type: method
interface: IModelDoc2
member: CreateCircle2
returns: System.Object
parameters:
  -
    name: XC
    type: System.Double
    description: X value of the circle center point in meters
  -
    name: YC
    type: System.Double
    description: Y value of the circle center point in meters
  -
    name: Zc
    type: System.Double
    description: Z value of the circle center point in meters
  -
    name: Xp
    type: System.Double
    description: X value of the point on the circle in meters
  -
    name: Yp
    type: System.Double
    description: Y value of the point on the circle in meters
  -
    name: Zp
    type: System.Double
    description: Z value of the point on the circle in meters
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.ICreateCircle2
keywords:
  - createcircle2
  - imodeldoc2
  - model
  - doc2
  - create
  - circle2
  - xc
  - double
  - yc
  - zc
  - xp
  - yp
  - zp
  - object
  - detail
  - view
  - vba
  - revolve
  - features
---

# IModelDoc2.CreateCircle2

Obsolete. Superseded by SketchManager::CreateCircle.

## Signature

```csharp
System.Object CreateCircle2( 
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

- `XC` (System.Double): X value of the circle center point in meters
- `YC` (System.Double): Y value of the circle center point in meters
- `Zc` (System.Double): Z value of the circle center point in meters
- `Xp` (System.Double): X value of the point on the circle in meters
- `Yp` (System.Double): Y value of the point on the circle in meters
- `Zp` (System.Double): Z value of the point on the circle in meters

## Return Value

Newly created circle (see Remarks )

## Remarks

This method creates a partial arc in the active 2D sketch. If a sketch is not active, then a new sketch is
created. You can check for an active sketch using
IModelDoc2::GetActiveSketch2
or
IModelDoc2::IGetActiveSketch2
.
For COM applications, the object pointer returned from this method can be used to call any APIs on the
ISketchSegment
interface. The underlying
ISketchArc
object can be obtained using QueryInterface on the returned ISketchSegment object.
OLE applications can define a new ISketchSegment or ISketchArc object using the returned Dispatch pointer. Visual Basic applications interpret the pointer for you automatically, so you can use the returned object to call ISketchSegment or ISketchArc functions.
IModelDoc2::SetAddToDB
and
IModelDoc2::SetDisplayWhenAdded
increase performance during entity creation by adding entities directly to the SOLIDWORKS database.
IModelDoc2::SetAddToDB also avoids some of the peculiarities involved with creating entities via the user interface, such as inferencing, automatic relations, and snapping to the grid. Adding entities directly to the database also increases the performance of this API. When you are done creating entities, it is important to call IModelDoc2::SetAddToDB(false), to restore SOLIDWORKS to its normal operating mode.
This method also works with IModelDoc2::SetDisplayWhenAdded. If you have called IModelDoc2::SetAddToDB(True), additional performance can be gained by calling IModelDoc2::SetDisplayWhenAdded(false) to disable immediate display of entities as they are added to the database. When you are done creating all of your sketch entities, you must redraw your document window (see
IModelDoc2::GraphicsRedraw2
) to see the entities that you added. You should also restore the original display settings by calling IModelDoc2::SetDisplayWhenAdded(True).
To create a circle using a center point and radius, use
IModelDoc2::CreateCircleByRadius2
or
IModelDoc2::ICreateCircleByRadius2
. To create a partial arc, use
IModelDoc2::CreateArc2
or
IModelDoc2::ICreateArc2
.

## Examples

- Create Detail View (VBA) (Create_Detail_View_Example_VB.htm)
- Create Revolve Features (VBA) (Create_Revolve_Features_Example_VB.htm)

## See Also

- `IModelDoc2.ICreateCircle2`