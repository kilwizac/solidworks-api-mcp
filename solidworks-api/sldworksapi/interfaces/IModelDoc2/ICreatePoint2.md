---
type: method
interface: IModelDoc2
member: ICreatePoint2
returns: SketchPoint
parameters:
  -
    name: PointX
    type: System.Double
    description: X location of the point
  -
    name: PointY
    type: System.Double
    description: X location of the point
  -
    name: PointZ
    type: System.Double
    description: Y location of the point
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.CreatePoint2
  - ISketchPoint
keywords:
  - icreatepoint2
  - imodeldoc2
  - model
  - doc2
  - create
  - point2
  - point
  - double
  - sketch
---

# IModelDoc2.ICreatePoint2

Obsolete. Superseded by ISketchManager::CreatePoint.

## Signature

```csharp
SketchPoint ICreatePoint2( 
   System.Double
PointX
,
   System.Double
PointY
,
   System.Double
PointZ
)
```
## Parameters

- `PointX` (System.Double): X location of the point
- `PointY` (System.Double): X location of the point
- `PointZ` (System.Double): Y location of the point

## Return Value

Newly created sketch point ; this value is NULL if the operation fails

## Remarks

This method creates a point in the active 2D or 3D sketch. If a sketch is not active, the point is not created and NULL is returned. Use
IModelDoc2::GetActiveSketch2
or
IModelDoc2::IGetActiveSketch2
to check to see if the sketch is active.
IModelDoc2::SetAddToDB
and
IModelDoc2::SetDisplayWhenAdded
increase performance during entity creation by adding entities directly to the SOLIDWORKS database. IModelDoc2::SetAddToDB also avoids inferencing.

## See Also

- `IModelDoc2.CreatePoint2`
- `ISketchPoint`