---
type: method
interface: IModelDoc2
member: CreateEllipse2
returns: System.Object
parameters:
  -
    name: CenterX
    type: System.Double
    description: X values for the ellipse center point
  -
    name: CenterY
    type: System.Double
    description: Y values for the ellipse center point
  -
    name: CenterZ
    type: System.Double
    description: Z values for the ellipse center point
  -
    name: MajorX
    type: System.Double
    description: X values for a point on the ellipse and on the major axis
  -
    name: MajorY
    type: System.Double
    description: Y values for a point on the ellipse and on the major axis
  -
    name: MajorZ
    type: System.Double
    description: Z values for a point on the ellipse and on the major axis
  -
    name: MinorX
    type: System.Double
    description: X values for a point on the ellipse and on the minor axis
  -
    name: MinorY
    type: System.Double
    description: Y values for a point on the ellipse and on the minor axis
  -
    name: MinorZ
    type: System.Double
    description: Z values for a point on the ellipse and on the minor axis
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.CreateEllipticalArc2
  - IModelDoc2.ICreateEllipse2
  - IModelDoc2.ICreateEllipticalArc2
keywords:
  - createellipse2
  - imodeldoc2
  - model
  - doc2
  - create
  - ellipse2
  - center
  - double
  - major
  - minor
  - object
---

# IModelDoc2.CreateEllipse2

Obsolete. Superseded by ISketchManager::CreateEllipse.

## Signature

```csharp
System.Object CreateEllipse2( 
   System.Double
CenterX
,
   System.Double
CenterY
,
   System.Double
CenterZ
,
   System.Double
MajorX
,
   System.Double
MajorY
,
   System.Double
MajorZ
,
   System.Double
MinorX
,
   System.Double
MinorY
,
   System.Double
MinorZ
)
```
## Parameters

- `CenterX` (System.Double): X values for the ellipse center point
- `CenterY` (System.Double): Y values for the ellipse center point
- `CenterZ` (System.Double): Z values for the ellipse center point
- `MajorX` (System.Double): X values for a point on the ellipse and on the major axis
- `MajorY` (System.Double): Y values for a point on the ellipse and on the major axis
- `MajorZ` (System.Double): Z values for a point on the ellipse and on the major axis
- `MinorX` (System.Double): X values for a point on the ellipse and on the minor axis
- `MinorY` (System.Double): Y values for a point on the ellipse and on the minor axis
- `MinorZ` (System.Double): Z values for a point on the ellipse and on the minor axis

## Return Value

Newly created ellipse

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
To create a partial ellipse, use
IModelDoc2::CreateEllipticalArcByCenter
or
IModelDoc2::CreateEllipticalArcByCenterVB
or
IModelDoc2::ICreateEllipticalArcByCenter
.

## See Also

- `IModelDoc2.CreateEllipticalArc2`
- `IModelDoc2.ICreateEllipse2`
- `IModelDoc2.ICreateEllipticalArc2`