---
type: method
interface: IModeler
member: CreateRuledSurfaceFromEdge
returns: System.Int32
parameters:
  -
    name: ModDoc
    type: ModelDoc2
    description: Model document in which to create surface body
  -
    name: Edges
    type: System.Object
    description: Array of edges on which to create ruled surface NOTE: Currently only a single edge is supported.
  -
    name: Type
    type: System.Int32
    description: 0 = Tangent to Surface 1 = Normal to Surface 2 = Tapered to Vector 3 = Perpendicular to Vector 4 = Sweep
  -
    name: Length
    type: System.Double
    description: Distance at which to create the surface; valid for Tangent to Surface, Tapered to Vector, Perpendicular to Vector, and Sweep types only
  -
    name: FlipPullDir
    type: System.Boolean
    description: True to flip the pull direction, false to not; valid for Normal to Surface and Tapered to Vector types only
  -
    name: FlipDir
    type: System.Boolean
    description: True to flip the direction, false to not; valid for Perpendicular to Vector type only
  -
    name: TrimAndSew
    type: System.Boolean
    description: True to trim and knit the surface, false to not
  -
    name: Angle
    type: System.Double
    description: Angle for Tapered to Vector type only
  -
    name: CoordInput
    type: System.Boolean
    description: True to enable coordinate input, false if not; for Sweep type only
  -
    name: X
    type: System.Double
    description: x coordinate
  -
    name: Y
    type: System.Double
    description: y coordinate
  -
    name: Z
    type: System.Double
    description: z coordinate
  -
    name: BConnectSurface
    type: System.Boolean
    description: True to remove any connecting surfaces, false to not
  -
    name: RuledSurface
    type: System.Object
    description: Ruled surface body
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IModeler.CreateRuledSurface
  - IModeler.ICreateRuledSurface
  - IModeler.ICreateRuledSurfaceFromEdge
keywords:
  - ruled
  - surfaces
  - see
  - iruledsurfacefeaturedata
  - surface
  - also
  - isurface
  - bodies
  - ibody2
  - createruledsurfacefromedge
  - imodeler
  - modeler
  - create
  - edge
  - mod
  - doc
  - model
  - doc2
  - edges
  - object
  - type
  - int32
  - length
  - double
  - flip
  - pull
  - dir
  - boolean
  - trim
  - sew
  - angle
  - coord
  - input
  - connect
  - body
  - vba
---

# IModeler.CreateRuledSurfaceFromEdge

Creates a ruled surface using the specified edges and returns a surface body.

## Signature

```csharp
System.Int32 CreateRuledSurfaceFromEdge( 
   ModelDoc2
ModDoc
,
   System.Object
Edges
,
   System.Int32
Type
,
   System.Double
Length
,
   System.Boolean
FlipPullDir
,
   System.Boolean
FlipDir
,
   System.Boolean
TrimAndSew
,
   System.Double
Angle
,
   System.Boolean
CoordInput
,
   System.Double
X
,
   System.Double
Y
,
   System.Double
Z
,
   System.Boolean
BConnectSurface
,
   out System.Object
RuledSurface
)
```
## Parameters

- `ModDoc` (ModelDoc2): Model document in which to create surface body
- `Edges` (System.Object): Array of edges on which to create ruled surface NOTE: Currently only a single edge is supported.
- `Type` (System.Int32): 0 = Tangent to Surface 1 = Normal to Surface 2 = Tapered to Vector 3 = Perpendicular to Vector 4 = Sweep
- `Length` (System.Double): Distance at which to create the surface; valid for Tangent to Surface, Tapered to Vector, Perpendicular to Vector, and Sweep types only
- `FlipPullDir` (System.Boolean): True to flip the pull direction, false to not; valid for Normal to Surface and Tapered to Vector types only
- `FlipDir` (System.Boolean): True to flip the direction, false to not; valid for Perpendicular to Vector type only
- `TrimAndSew` (System.Boolean): True to trim and knit the surface, false to not
- `Angle` (System.Double): Angle for Tapered to Vector type only
- `CoordInput` (System.Boolean): True to enable coordinate input, false if not; for Sweep type only
- `X` (System.Double): x coordinate
- `Y` (System.Double): y coordinate
- `Z` (System.Double): z coordinate
- `BConnectSurface` (System.Boolean): True to remove any connecting surfaces, false to not
- `RuledSurface` (System.Object): Ruled surface body

## Return Value

0 if ruled surface body created, -1 if not

## Remarks

This method returns a surface body, unlike
IFeatureManager::InsertRuledSurfaceFromEdge2
, which returns a feature.
If you
select
an edge with a selection mark of 4, the default face is used.
If you select an edge with a selection mark of 6, the alternate face is used.

## Examples

- Create Ruled Surface Body From Edge (VBA) (Create_Ruled_Surface_From_Edge_Example_VB.htm)

## See Also

- `IModeler.CreateRuledSurface`
- `IModeler.ICreateRuledSurface`
- `IModeler.ICreateRuledSurfaceFromEdge`