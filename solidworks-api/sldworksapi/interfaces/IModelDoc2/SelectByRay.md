---
type: method
interface: IModelDoc2
member: SelectByRay
returns: System.Boolean
parameters:
  -
    name: DoubleInfoIn
    type: System.Object
    description: Array of 7 doubles: 3 for the start point of the ray, 3 for the direction of the ray, and 1 for the radius
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
  - IModelDoc2.IRayIntersections
  - IModelDoc2.ISelectByRay
  - IModelDoc2.MultiSelectByRay
  - IModelDoc2.RayIntersections
keywords:
  - selectbyray
  - imodeldoc2
  - model
  - doc2
  - select
  - ray
  - double
  - info
  - object
  - type
  - wanted
  - int32
  - boolean
---

# IModelDoc2.SelectByRay

Obsolete. Superseded by IModelDocExtension::SelectByRay.

## Signature

```csharp
System.Boolean SelectByRay( 
   System.Object
DoubleInfoIn
,
   System.Int32
TypeWanted
)
```
## Parameters

- `DoubleInfoIn` (System.Object): Array of 7 doubles: 3 for the start point of the ray, 3 for the direction of the ray, and 1 for the radius
- `TypeWanted` (System.Int32): Type of objects to select as defined in swSelectType_e

## Return Value

True if a selection is made, false if not

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
- `IModelDoc2.IRayIntersections`
- `IModelDoc2.ISelectByRay`
- `IModelDoc2.MultiSelectByRay`
- `IModelDoc2.RayIntersections`