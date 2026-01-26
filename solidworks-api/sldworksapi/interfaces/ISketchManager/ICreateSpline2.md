---
type: method
interface: ISketchManager
member: ICreateSpline2
returns: SketchSegment
parameters:
  -
    name: PointCount
    type: System.Int32
    description: Number of points in the spline
  -
    name: PointData
    type: System.Double
    description: Number of points in the spline
  -
    name: SimulateNaturalEnds
    type: System.Boolean
    description: in-process, unmanaged C++: Pointer to an array of X,Y,Z point coordinates to use in creating the spline (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchManager.CreateSpline2
  - ISketchManager.CreateSplineByEqnParams
  - ISketchManager.CreateSplinesByEqnParams
  - ISketchManager.ICreateSplineByEqnParams
  - ISketchManager.ICreateSplinesByEqnParams
keywords:
  - sketch
  - entities
  - splines
  - create
  - see
  - also
  - isketch
  - icreatespline2
  - isketchmanager
  - manager
  - spline2
  - point
  - count
  - int32
  - data
  - double
  - simulate
  - natural
  - ends
  - boolean
  - segment
---

# ISketchManager.ICreateSpline2

Creates a spline passing through the given points.

## Signature

```csharp
SketchSegment ICreateSpline2( 
   System.Int32
PointCount
,
   ref System.Double
PointData
,
   System.Boolean
SimulateNaturalEnds
)
```
## Parameters

- `PointCount` (System.Int32): Number of points in the spline
- `PointData` (System.Double): Number of points in the spline
- `SimulateNaturalEnds` (System.Boolean): in-process, unmanaged C++: Pointer to an array of X,Y,Z point coordinates to use in creating the spline (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

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

- `ISketchManager.CreateSpline2`
- `ISketchManager.CreateSplineByEqnParams`
- `ISketchManager.CreateSplinesByEqnParams`
- `ISketchManager.ICreateSplineByEqnParams`
- `ISketchManager.ICreateSplinesByEqnParams`