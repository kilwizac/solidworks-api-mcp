---
type: method
interface: ISketchManager
member: ICreateSpline
returns: SketchSegment
parameters:
  -
    name: PointCount
    type: System.Int32
    description: Number of points in the spline
  -
    name: PointData
    type: System.Double
    description: Array of X,Y,Z point coordinates to use in creating the spline (see Remarks )
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - sketches
related:
  - ISketchManager.CreateSpline
  - ISketchManager.CreateSplineByEqnParams
  - ISketchManager.CreateSplinesByEqnParams
  - ISketchManager.ICreateSplineByEqnParams
  - ISketchManager.ICreateSplinesByEqnParams
keywords:
  - icreatespline
  - isketchmanager
  - sketch
  - manager
  - create
  - spline
  - point
  - count
  - int32
  - data
  - double
  - segment
---

# ISketchManager.ICreateSpline

Obsolete. Superseded by ISketchManager::ICreateSpline2.

## Signature

```csharp
SketchSegment ICreateSpline( 
   System.Int32
PointCount
,
   ref System.Double
PointData
)
```
## Parameters

- `PointCount` (System.Int32): Number of points in the spline
- `PointData` (System.Double): Array of X,Y,Z point coordinates to use in creating the spline (see Remarks )

## Return Value

Sketch segment for the spline

## Remarks

This method creates a spline in the active 2D sketch. If a sketch is not active, then a new sketch is created. Use
ISketchManager::ActiveSketch
to check if the sketch active.
The PointData array is a set of, at least, two X, Y, Z values. The X value for the start point of the spline is PointData[0], the Y value for the start point is PointData[1], and the Z value for the start point is PointData[2]. The X value for the next point is PointData[3], and so on.
This method does not work with
ISketchManager::AddToDB
or
ISketchManager::DisplayWhenAdded
. It always adds the spline directly to the database (as if ISketchManager::AddToDB(True) was in effect), and you must redraw your document window to see the entities that you added (as if ISketchManager::DisplayWhenAdded(False) was in effect).
In 2D sketches, SOLIDWORKS ignores the Z value in PointData.

## See Also

- `ISketchManager.CreateSpline`
- `ISketchManager.CreateSplineByEqnParams`
- `ISketchManager.CreateSplinesByEqnParams`
- `ISketchManager.ICreateSplineByEqnParams`
- `ISketchManager.ICreateSplinesByEqnParams`