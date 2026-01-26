---
type: method
interface: IModelDoc2
member: ISelectByRay
returns: System.Boolean
parameters:
  -
    name: PointIn
    type: System.Double
    description: Array containing 3 doubles that define the start point of the ray
  -
    name: VectorIn
    type: System.Double
    description: Array containing 3 doubles that define the direction of the ray
  -
    name: RadiusIn
    type: System.Double
    description: Radius of the ray in meters
  -
    name: TypeWanted
    type: System.Int32
    description: Type of objects to select as defined in swSelectType_e
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - selections
  - ui
related:
  - IModelDoc2.GetRayIntersectionsPoints
  - IModelDoc2.GetRayIntersectionsTopology
  - IModelDoc2.IGetRayIntersectionsPoints
  - IModelDoc2.IGetRayIntersectionsTopology
  - IModelDoc2.IMultiSelectByRay
  - IModelDoc2.MultiSelectByRay
  - IModelDoc2.RayIntersections
  - IModelDoc2.SelectByRay
keywords:
  - iselectbyray
  - imodeldoc2
  - model
  - doc2
  - select
  - ray
  - point
  - double
  - vector
  - radius
  - type
  - wanted
  - int32
  - boolean
---

# IModelDoc2.ISelectByRay

Obsolete. Superseded by IModelDocExtension::SelectByRay.

## Signature

```csharp
System.Boolean ISelectByRay( 
   ref System.Double
PointIn
,
   ref System.Double
VectorIn
,
   System.Double
RadiusIn
,
   System.Int32
TypeWanted
)
```
## Parameters

- `PointIn` (System.Double): Array containing 3 doubles that define the start point of the ray
- `VectorIn` (System.Double): Array containing 3 doubles that define the direction of the ray
- `RadiusIn` (System.Double): Radius of the ray in meters
- `TypeWanted` (System.Int32): Type of objects to select as defined in swSelectType_e

## Return Value

True if an object was selected, false if not

## Remarks

This method:
Defines a cylindrical region of infinite length that begins at pointIn, runs parallel to VectorIn, and has a radius of RadiusIn. If you specified edge or vertex entities, then the first edge or vertex found within the selection cylinder is selected.
Only selects entity objects, which include faces, edges, vertices, and so on. You cannot select sketch objects using this method.
Does not support the selection of silhouette edges.
Only a single entity is selected within the distance radius regardless of multiple entities existing within that radius. For selecting face entities, RadiusIn is ignored and a cylinder of infinitely small radius is used.
Use model space view to determine the selection vector in a drawing.

## See Also

- `IModelDoc2.GetRayIntersectionsPoints`
- `IModelDoc2.GetRayIntersectionsTopology`
- `IModelDoc2.IGetRayIntersectionsPoints`
- `IModelDoc2.IGetRayIntersectionsTopology`
- `IModelDoc2.IMultiSelectByRay`
- `IModelDoc2.MultiSelectByRay`
- `IModelDoc2.RayIntersections`
- `IModelDoc2.SelectByRay`