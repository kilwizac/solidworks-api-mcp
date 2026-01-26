---
type: method
interface: IModelDoc2
member: IRayIntersections
returns: System.Int32
parameters:
  -
    name: BodiesIn
    type: Body2
    description: Array bodies that are hit by the rays (see Remarks )
  -
    name: NumBodies
    type: System.Int32
    description: Number of bodies in the BodiesIn array
  -
    name: BasePointsIn
    type: System.Double
    description: Array containing the x,y,z base points of each ray
  -
    name: VectorsIn
    type: System.Double
    description: Array containing the direction vectors of each ray
  -
    name: NumRays
    type: System.Int32
    description: Number of rays specified; this should be equal to the number of elements in the (basePointsIn / 3) or (vectorsIn / 3) arrays
  -
    name: Options
    type: System.Int32
    description: Number of options as defined in swRayPtsOpts_e
  -
    name: HitRadius
    type: System.Double
    description: Radius of hit cylinder used mainly in grazing cases to establish a hit
  -
    name: Offset
    type: System.Double
    description: Length tolerance to use to establish whether a hit on a face represents the entry or exit of the ray from the body (see Remarks )
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.IMultiSelectByRay
  - IModelDoc2.ISelectByRay
  - IModelDoc2.MultiSelectByRay
  - IModelDoc2.RayIntersections
  - IModelDoc2.SelectByRay
keywords:
  - irayintersections
  - imodeldoc2
  - model
  - doc2
  - ray
  - intersections
  - bodies
  - body2
  - num
  - int32
  - base
  - points
  - double
  - vectors
  - rays
  - options
  - hit
  - radius
  - offset
---

# IModelDoc2.IRayIntersections

Obsolete. Superseded by IModelDocExtension::RayIntersections.

## Signature

```csharp
System.Int32 IRayIntersections( 
   ref Body2
BodiesIn
,
   System.Int32
NumBodies
,
   ref System.Double
BasePointsIn
,
   ref System.Double
VectorsIn
,
   System.Int32
NumRays
,
   System.Int32
Options
,
   System.Double
HitRadius
,
   System.Double
Offset
)
```
## Parameters

- `BodiesIn` (Body2): Array bodies that are hit by the rays (see Remarks )
- `NumBodies` (System.Int32): Number of bodies in the BodiesIn array
- `BasePointsIn` (System.Double): Array containing the x,y,z base points of each ray
- `VectorsIn` (System.Double): Array containing the direction vectors of each ray
- `NumRays` (System.Int32): Number of rays specified; this should be equal to the number of elements in the (basePointsIn / 3) or (vectorsIn / 3) arrays
- `Options` (System.Int32): Number of options as defined in swRayPtsOpts_e
- `HitRadius` (System.Double): Radius of hit cylinder used mainly in grazing cases to establish a hit
- `Offset` (System.Double): Length tolerance to use to establish whether a hit on a face represents the entry or exit of the ray from the body (see Remarks )

## Return Value

Number of intersections found

## Remarks

The method performs the intersection operations between the specified bodies and the ray vectors. To get the results (a set of intersection points, intersection normals, and the bodies that were hit from your bodiesIn array) of the intersection operations, you must call
IModelDoc2::GetRayIntersectionsPoints
or
IModelDoc2::IGetRayIntersectionPoints
and
IModelDoc2::GetRayIntersectionTopology
or
IModelDoc2::IGetRayIntersectionsTopology
.
Information returned by IModelDoc2::GetRayIntersectionsPoints, IModelDoc2::IGetRayIntersectionPoints, IModelDoc2::GetRayIntersectionTopology, and IModelDoc2::IGetRayIntersectionsTopology depends partially on the value of the options argument. Valid values can be concatenated together using bitwise operations. See IModelDoc2::GetRayIntersectionsPoints or IModelDoc2::IGetRayIntersectionPoints to see which data is always output regardless of the values specified in the options argument.
For the COM interface, the return value, the intersection count, must be used in determining the size of arrays to allocate for return values from IModelDoc2::IGetRayIntersectionsPoints and IModelDoc2::IGetRayIntersectionsTopology.
For each ray that hits an edge or a vertex, the offset distance is added in both the positive and negative directions along the ray and the points computed are tested for spatial inclusion in the hit body. This determines if the ray was entering, leaving, or just grazing the body at the hit point. Entry and exit onto faces can be computed does not require such an offset.

## See Also

- `IModelDoc2.IMultiSelectByRay`
- `IModelDoc2.ISelectByRay`
- `IModelDoc2.MultiSelectByRay`
- `IModelDoc2.RayIntersections`
- `IModelDoc2.SelectByRay`