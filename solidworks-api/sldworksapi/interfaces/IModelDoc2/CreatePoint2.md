---
type: method
interface: IModelDoc2
member: CreatePoint2
returns: System.Object
parameters:
  -
    name: PointX
    type: System.Double
    description: X location of the point
  -
    name: PointY
    type: System.Double
    description: Y location of the point
  -
    name: PointZ
    type: System.Double
    description: Z location of the point; ignored for 2D sketches
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.ICreatePoint2
keywords:
  - createpoint2
  - imodeldoc2
  - model
  - doc2
  - create
  - point2
  - point
  - double
  - object
  - calculate
  - closest
  - distance
  - between
  - components
  - vba
  - plane
  - thru
  - points
  - context
  - intersecting
  - face
  - edge
  - length
  - spline
  - elliptical
---

# IModelDoc2.CreatePoint2

Obsolete. Superseded by ISketchManager::CreatePoint.

## Signature

```csharp
System.Object CreatePoint2( 
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
- `PointY` (System.Double): Y location of the point
- `PointZ` (System.Double): Z location of the point; ignored for 2D sketches

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

## Examples

- Calculate Closest Distance Between Model Components (VBA) (Calculate_Closest_Distance_Between_Model_Components_Example_VB.htm)
- Create Plane Thru 3 Points In-context (VBA) (Create_Plane_Thru_3_Points_In-context_Example_VB.htm)
- Get Intersecting Face and Edge (VBA) (Get_Intersecting_Face_and_Edge_Example_VB.htm)
- Get Length of Spline or Elliptical Edge (VBA) (Get_Length_of_Spline_or_Elliptical_Edge_Example_VB.htm)

## See Also

- `IModelDoc2.ICreatePoint2`