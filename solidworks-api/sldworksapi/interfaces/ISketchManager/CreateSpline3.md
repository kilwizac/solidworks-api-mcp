---
type: method
interface: ISketchManager
member: CreateSpline3
returns: System.Object
parameters:
  -
    name: PointData
    type: System.Object
    description: Array of X,Y,Z coordinates of the spline points (see Remarks )
  -
    name: Surfs
    type: System.Object
    description: Array of ISurface objects; null or Nothing for 2D splines (see Remarks )
  -
    name: Direction
    type: System.Object
    description: Array of IMathVector objects; valid only for on-surface splines (see Remarks )
  -
    name: SimulateNaturalEnds
    type: System.Boolean
    description: True to simulate natural ends, false to not; valid only for 2D splines (see Remarks )
  -
    name: Status
    type: System.Object
    description: Array of boolean values; empty for 2D splines (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchManager.CreateSplineByEqnParams
  - ISketchManager.CreateSplinesByEqnParams2
keywords:
  - sketch
  - see
  - also
  - isketch
  - splines
  - entities
  - create
  - createspline3
  - isketchmanager
  - manager
  - spline3
  - point
  - data
  - object
  - surfs
  - direction
  - simulate
  - natural
  - ends
  - boolean
  - status
  - surface
  - spline
  - vba
  - vb
  - net
---

# ISketchManager.CreateSpline3

Creates either a 2D spline or a spline constrained to a surface.

## Signature

```csharp
System.Object CreateSpline3( 
   System.Object
PointData
,
   System.Object
Surfs
,
   System.Object
Direction
,
   System.Boolean
SimulateNaturalEnds
,
   out System.Object
Status
)
```
## Parameters

- `PointData` (System.Object): Array of X,Y,Z coordinates of the spline points (see Remarks )
- `Surfs` (System.Object): Array of ISurface objects; null or Nothing for 2D splines (see Remarks )
- `Direction` (System.Object): Array of IMathVector objects; valid only for on-surface splines (see Remarks )
- `SimulateNaturalEnds` (System.Boolean): True to simulate natural ends, false to not; valid only for 2D splines (see Remarks )
- `Status` (System.Object): Array of boolean values; empty for 2D splines (see Remarks )

## Return Value

ISketchSegment or null if an error

## Remarks

This method allows you to create:
2D splines.
On-surface splines as can also be created using
Tools > Sketch Entities > Spline on Surface
.
To create a 2D spline, specify:
PointData with at least six coordinates (for the start and end points of the spline):
[
start_pt_x, start_pt_y, start_pt_z, end_pt_x, end_pt_y, end_pt_z
]
For 2D sketches, SOLIDWORKS assumes PointData contains no Z values.
SimulateNaturalEnds with true for zero curvature end conditions or false to maintain curvature at the ends.
All other parameters with null or Nothing.
To create an on-surface spline, specify:
PointData with two or more points anywhere in 3D space. Each spline point will project onto a surface in the Surf array, depending on the direction vector specified for each point in the Direction array.
Surf with an array of surfaces onto which the PointData is projected.
Direction with an array of vectors, which are projection directions for every point in the PointData array. If Direction is Nothing or null, then the view vector for the current screen view is used to project each point onto a surface.
For on-surface splines only, Status contains an array of statuses, one for each point in PointArray. True indicates that the point successfully projects onto one of the surfaces. False indicates either:
the point does not "hit" any of the specified surfaces using the direction that the point is mapped to in the Direction array,
- or -
the spline cannot be continued at that point where the surfaces are no longer contiguous.
This method:
Creates the 2D spline in the active sketch. If a sketch is not active, then a new sketch is created. Use
ISketchManager::ActiveSketch
to check if the sketch active.
Creates a new 3D sketch to create the on-surface spline. Call
ISketchManager::InsertSketch
to finalize the sketch.
Does not work with
ISketchManager::AddToDB
or
ISketchManager::DisplayWhenAdded
. It always adds the spline directly to the database (as if ISketchManager::AddToDB(True) was in effect), and you must redraw your document window to see the entities that you added (as if ISketchManager::DisplayWhenAdded(False) was in effect).

## Examples

- Create On-surface Spline (VBA) (Create_On-surface_Spline_Example_VB.htm)
- Create On-surface Spline (VB.NET) (Create_On-surface_Spline_Example_VBNET.htm)
- Create On-surface Spline (C#) (Create_On-surface_Spline_Example_CSharp.htm)

## See Also

- `ISketchManager.CreateSplineByEqnParams`
- `ISketchManager.CreateSplinesByEqnParams2`