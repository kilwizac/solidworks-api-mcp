---
type: method
interface: ISketchManager
member: CreateSpline2
returns: SketchSegment
parameters:
  -
    name: PointData
    type: System.Object
    description: Array of X,Y,Z point coordinates to use in creating the spline (see Remarks )
  -
    name: SimulateNaturalEnds
    type: System.Boolean
    description: True to simulate natural ends, false to not simulate natural ends
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - sketches
related:
  - ISketchManager.CreateSplineByEqnParams
  - ISketchManager.CreateSplinesByEqnParams
  - ISketchManager.ICreateSpline2
  - ISketchManager.ICreateSplineByEqnParams
  - ISketchManager.ICreateSplinesByEqnParams
keywords:
  - createspline2
  - isketchmanager
  - sketch
  - manager
  - create
  - spline2
  - point
  - data
  - object
  - simulate
  - natural
  - ends
  - boolean
  - segment
  - insert
  - composite
  - curve
  - vb
  - net
  - vba
---

# ISketchManager.CreateSpline2

Obsolete. Superseded by ISketchManager::CreateSpline3.

## Signature

```csharp
SketchSegment CreateSpline2( 
   System.Object
PointData
,
   System.Boolean
SimulateNaturalEnds
)
```
## Parameters

- `PointData` (System.Object): Array of X,Y,Z point coordinates to use in creating the spline (see Remarks )
- `SimulateNaturalEnds` (System.Boolean): True to simulate natural ends, false to not simulate natural ends

## Return Value

Sketch segment for the spline

## Remarks

This method creates a spline in the active 2D sketch. If a sketch is not active, then a new sketch is created. Use
ISketchManager::ActiveSketch
to check if the sketch active.
The PointData array is a set of, at least, two X, Y, Z values. For example, in VBA and VB.NET, the X value for the start point of the spline is PointData[0], the Y value for the start point is PointData[1], and the Z value for the start point is PointData[2]. The X value for the next point is PointData[3], and so on.
This method does not work with
ISketchManager::AddToDB
or
ISketchManager::DisplayWhenAdded
. It always adds the spline directly to the database (as if ISketchManager::AddToDB(True) was in effect), and you must redraw your document window to see the entities that you added (as if ISketchManager::DisplayWhenAdded(False) was in effect).
In 2D sketches, SOLIDWORKS ignores the Z value in PointData.

## Examples

- Insert a Composite Curve (C#) (Insert_a_Composite_Curve_Example_CSharp.htm)
- Insert a Composite Curve (VB.NET) (Insert_a_Composite_Curve_Example_VBNET.htm)
- Insert a Composite Curve (VBA) (Insert_a_Composite_Curve_Example_VB.htm)

## See Also

- `ISketchManager.CreateSplineByEqnParams`
- `ISketchManager.CreateSplinesByEqnParams`
- `ISketchManager.ICreateSpline2`
- `ISketchManager.ICreateSplineByEqnParams`
- `ISketchManager.ICreateSplinesByEqnParams`