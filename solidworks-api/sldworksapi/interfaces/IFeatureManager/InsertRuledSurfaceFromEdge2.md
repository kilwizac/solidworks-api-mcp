---
type: method
interface: IFeatureManager
member: InsertRuledSurfaceFromEdge2
returns: Feature
parameters:
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
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IModeler.CreateRuledSurface
  - IModeler.CreateRuledSurfaceFromEdge
  - IModeler.ICreateRuledSurface
  - IModeler.ICreateRuledSurfaceFromEdge
  - IRuledSurfaceFeatureData
keywords:
  - feature
  - see
  - also
  - ifeature
  - ruled
  - surface
  - surfaces
  - iruledsurfacefeaturedata
  - isurface
  - insertruledsurfacefromedge2
  - ifeaturemanager
  - manager
  - insert
  - edge2
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
---

# IFeatureManager.InsertRuledSurfaceFromEdge2

Inserts a ruled surface from the selected edge on this feature.

## Signature

```csharp
Feature InsertRuledSurfaceFromEdge2( 
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
)
```
## Parameters

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

## Return Value

Pointer to the IFeature object

## Remarks

If you
select
an edge with a selection mark of 4, the default face is used.
If you select an edge with a selection mark of 6, the alternate face is used.

## See Also

- `IModeler.CreateRuledSurface`
- `IModeler.CreateRuledSurfaceFromEdge`
- `IModeler.ICreateRuledSurface`
- `IModeler.ICreateRuledSurfaceFromEdge`
- `IRuledSurfaceFeatureData`