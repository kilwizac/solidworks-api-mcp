---
type: method
interface: IModelDoc2
member: CreateSpline
returns: System.Object
parameters:
  -
    name: PointData
    type: System.Object
    description: Set of X,Y,Z point coordinates to use in creating the spline (see Remarks )
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.CreateSplineByEqnParams
  - IModelDoc2.CreateSplinesByEqnParams
  - IModelDoc2.ICreateSpline
  - IModelDoc2.ICreateSplineByEqnParams
  - IModelDoc2.ICreateSplinesByEqnParams
  - IModelDoc2.InsertSplinePoint
keywords:
  - createspline
  - imodeldoc2
  - model
  - doc2
  - create
  - spline
  - point
  - data
  - object
  - 3d
  - vba
---

# IModelDoc2.CreateSpline

Obsolete. Superseded by ISketchManager::CreateSpline.

## Signature

```csharp
System.Object CreateSpline( 
   System.Object
PointData
)
```
## Parameters

- `PointData` (System.Object): Set of X,Y,Z point coordinates to use in creating the spline (see Remarks )

## Return Value

Newly created spline

## Remarks

This method creates a spline in the active 2D sketch. If a sketch is not active, then a new sketch is created. Use
IModelDoc2::GetActiveSketch2
or
IModelDoc2::IGetActiveSketch2
to check if the sketch active.
The PointData array is a set of, at least, two X, Y, Z values. The X value for the start point of the spline is PointData[0], the Y value for the start point is PointData[1], and the Z value for the start point is PointData[2]. The X value for the next point is PointData[3], and so on. For the COM interface, the total number of points in the array must be passed in. For the OLE interface, the total number of points are determined automatically, by taking the UBound of the PointData VARIANT and dividing by 3, so be careful to dimension that array correctly.
For COM applications, you can use the object pointer returned from this method to call any APIs on the
ISketchSegment
interface. You can obtain the underlying
ISketchSpline
object by using QueryInterface on the returned ISketchSegment object.
OLE applications can define a new ISketchSegment or ISketchSpline object using the returned Dispatch pointer. Visual Basic applications interpret the pointer for you automatically, so you can use the returned object to call SketchSegment or
ISketchEllipse
APIs.
This method does not work with
IModelDoc2::SetAddToDB
or
IModelDoc2::SetDisplayWhenAdded
. It always adds the spline directly to the database (as if IModelDoc2::SetAddToDB(True) was in effect), and you must redraw your document window to see the entities that you added (as if IModelDoc2::SetDisplayWhenAdded(false) was in effect).
In 2D sketches, SOLIDWORKS ignores the Z value in PointData.

## Examples

- Create 3D Spline (VBA) (Create_3D_Spline_Example_VB.htm)

## See Also

- `IModelDoc2.CreateSplineByEqnParams`
- `IModelDoc2.CreateSplinesByEqnParams`
- `IModelDoc2.ICreateSpline`
- `IModelDoc2.ICreateSplineByEqnParams`
- `IModelDoc2.ICreateSplinesByEqnParams`
- `IModelDoc2.InsertSplinePoint`