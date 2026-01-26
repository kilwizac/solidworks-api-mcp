---
type: method
interface: IModelDocExtension
member: RayIntersections
returns: System.Int32
parameters:
  -
    name: BodiesIn
    type: System.Object
    description: Array of bodies that are hit by the rays (see Remarks )
  -
    name: BasePointsIn
    type: System.Object
    description: Array of doubles containing the x,y,z base points of each ray
  -
    name: VectorsIn
    type: System.Object
    description: Array of doubles containing the direction vectors of each ray
  -
    name: Options
    type: System.Int32
    description: Options as defined in swRayPtsOpts_e (see Remarks )
  -
    name: HitRadius
    type: System.Double
    description: Radius of hit cylinder; this is used mainly in grazing cases to establish a hit (see Remarks )
  -
    name: Offset
    type: System.Double
    description: Length tolerance to use to establish whether a hit on a face represents the entry or exit of the ray from the body (see Remarks )
  -
    name: HighPrecision
    type: System.Boolean
    description: True to use maximum precision when evaluating intersections close to the ray boundary, false to use dynamic precision based on the ray radius (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDoc2.MultiSelectByRay
  - IModelDoc2.SelectByRay
keywords:
  - ray
  - intersections
  - rayintersections
  - imodeldocextension
  - model
  - doc
  - extension
  - bodies
  - object
  - base
  - points
  - vectors
  - options
  - int32
  - hit
  - radius
  - double
  - offset
  - high
  - precision
  - boolean
---

# IModelDocExtension.RayIntersections

Finds the intersections between the specified set of rays and the specified set of bodies.

## Signature

```csharp
System.Int32 RayIntersections( 
   System.Object
BodiesIn
,
   System.Object
BasePointsIn
,
   System.Object
VectorsIn
,
   System.Int32
Options
,
   System.Double
HitRadius
,
   System.Double
Offset
,
   System.Boolean
HighPrecision
)
```
## Parameters

- `BodiesIn` (System.Object): Array of bodies that are hit by the rays (see Remarks )
- `BasePointsIn` (System.Object): Array of doubles containing the x,y,z base points of each ray
- `VectorsIn` (System.Object): Array of doubles containing the direction vectors of each ray
- `Options` (System.Int32): Options as defined in swRayPtsOpts_e (see Remarks )
- `HitRadius` (System.Double): Radius of hit cylinder; this is used mainly in grazing cases to establish a hit (see Remarks )
- `Offset` (System.Double): Length tolerance to use to establish whether a hit on a face represents the entry or exit of the ray from the body (see Remarks )
- `HighPrecision` (System.Boolean): True to use maximum precision when evaluating intersections close to the ray boundary, false to use dynamic precision based on the ray radius (see Remarks )

## Return Value

Number of intersections

## Remarks

The method performs intersection operations between the specified bodies and the specified ray vectors. To get the results (a set of intersection points, intersection normals, and the bodies from your BodiesIn array that were hit), you must call
IModelDoc2::GetRayIntersectionsPoints
and
IModelDoc2::GetRayIntersectionTopology
.
Information returned by IModelDoc2::GetRayIntersectionsPoints and IModelDoc2::GetRayIntersectionTopology depends partially on the value of the Options parameter. Valid Option values can be combined using bitwise operations. See IModelDoc2::GetRayIntersectionsPoints to determine which data is always output regardless of the values specified by Options.
For each ray that hits an edge or a vertex, the Offset value is added in both the positive and negative directions along the ray, and the points computed are tested for spatial inclusion in the hit body. This determines whether the ray was entering, leaving, or just grazing the body at the hit point. Entry and exit for faces can be computed and does not require an offset.
The difference between this method and the now obsolete IModelDoc2::RayIntersections and IModelDoc2::IRayIntersections is the HighPrecision parameter. Setting HighPrecision to true forces use of the highest possible precision when evaluating intersections close to ray profile boundaries. Setting HighPrecision to false forces use of a dynamic tolerance that is based on the HitRadius, which is the behavior of the obsolete methods.
The actual ray profile is polygonal, approximating an ideal circular ray profile of HitRadius. Evaluating intersections very close to the ray profile boundary may produce unexpected results due to this polygonal approximation. Experimentation with HighPrecision is recommended.

## See Also

- `IModelDoc2.MultiSelectByRay`
- `IModelDoc2.SelectByRay`