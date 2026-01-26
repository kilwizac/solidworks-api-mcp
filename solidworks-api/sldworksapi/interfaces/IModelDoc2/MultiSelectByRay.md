---
type: method
interface: IModelDoc2
member: MultiSelectByRay
returns: System.Boolean
parameters:
  -
    name: DoubleInfoIn
    type: System.Object
    description: Array of 7 doubles:3 for the start point of the ray, 3 for the direction of the ray, and 1 for the radius
  -
    name: TypeWanted
    type: System.Int32
    description: Type of objects to select as defined in swSelectType_e
  -
    name: Append
    type: System.Boolean
    description: True to append the selections to the current selection list, false to not
docset: sldworksapi
deprecated: false
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
  - IModelDoc2.RayIntersections
  - IModelDoc2.SelectByRay
keywords:
  - ray
  - intersections
  - multiselectbyray
  - imodeldoc2
  - model
  - doc2
  - multi
  - select
  - double
  - info
  - object
  - type
  - wanted
  - int32
  - append
  - boolean
---

# IModelDoc2.MultiSelectByRay

Selects multiple objects of the specified type that are intersected by a ray from point (x,y,z in meters) in direction vector (x,y,z) within a distance radius.

## Signature

```csharp
System.Boolean MultiSelectByRay( 
   System.Object
DoubleInfoIn
,
   System.Int32
TypeWanted
,
   System.Boolean
Append
)
```
## Parameters

- `DoubleInfoIn` (System.Object): Array of 7 doubles:3 for the start point of the ray, 3 for the direction of the ray, and 1 for the radius
- `TypeWanted` (System.Int32): Type of objects to select as defined in swSelectType_e
- `Append` (System.Boolean): True to append the selections to the current selection list, false to not

## Return Value

True if an object is selected, false if not

## Remarks

This method:
Defines a cylindrical region of infinite length that begins at pointIn, runs parallel to VectorIn, and has a radius of RadiusIn. If you specified edges or vertices, then any edge or vertex found within the selection cylinder is selected.
Selects only entity objects, which include faces, edges, and vertices. You cannot use this function to select
ISketch
objects.
When selecting face entities, RadiusIn is ignored and a cylinder of infinitely small radius is used.

## See Also

- `IModelDoc2.GetRayIntersectionsPoints`
- `IModelDoc2.GetRayIntersectionsTopology`
- `IModelDoc2.IGetRayIntersectionsPoints`
- `IModelDoc2.IGetRayIntersectionsTopology`
- `IModelDoc2.IMultiSelectByRay`
- `IModelDoc2.IRayIntersections`
- `IModelDoc2.ISelectByRay`
- `IModelDoc2.RayIntersections`
- `IModelDoc2.SelectByRay`