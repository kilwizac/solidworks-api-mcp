---
type: method
interface: IModelDocExtension
member: SelectByRay
returns: System.Boolean
parameters:
  -
    name: WorldX
    type: System.Double
    description: x coordinate of ray start point
  -
    name: WorldY
    type: System.Double
    description: y coordinate of ray start point
  -
    name: WorldZ
    type: System.Double
    description: z coordinate of ray start point
  -
    name: RayVecX
    type: System.Double
    description: x coordinate of ray direction vector
  -
    name: RayVecY
    type: System.Double
    description: y coordinate of ray direction vector
  -
    name: RayVecZ
    type: System.Double
    description: z coordinate of ray direction vector
  -
    name: RayRadius
    type: System.Double
    description: Radius <= 2.9 m
  -
    name: TypeWanted
    type: System.Int32
    description: Type of entities to select as defined in swSelectType_e
  -
    name: Append
    type: System.Boolean
    description: If... And if entity is... Then... True Not already selected Entity is appended to the current selection list Already selected Entity is removed from the current selection list False Not already selected Current selection is cleared and then the entity is put on the list Already selected Current selection list remains the same
  -
    name: Mark
    type: System.Int32
    description: Value to use as a mark; this value is used by other functions that require ordered selection
  -
    name: Option
    type: System.Int32
    description: Selection option as defined in swSelectOption_e (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - selections
  - ui
related:
  - IModelDoc2.GetRayIntersectionsPoints
  - IModelDoc2.GetRayIntersectionsTopology
  - IModelDoc2.MultiSelectByRay
  - IModelDoc2.RayIntersections
keywords:
  - ray
  - intersections
  - selectbyray
  - imodeldocextension
  - model
  - doc
  - extension
  - select
  - world
  - double
  - vec
  - radius
  - type
  - wanted
  - int32
  - append
  - boolean
  - mark
  - option
  - face
  - using
  - intersecting
  - vb
  - net
  - vba
---

# IModelDocExtension.SelectByRay

Selects the first entity of the specified type that is intersected by a ray that starts at the specified point and runs parallel to the specified direction vector within the specified radius.

## Signature

```csharp
System.Boolean SelectByRay( 
   System.Double
WorldX
,
   System.Double
WorldY
,
   System.Double
WorldZ
,
   System.Double
RayVecX
,
   System.Double
RayVecY
,
   System.Double
RayVecZ
,
   System.Double
RayRadius
,
   System.Int32
TypeWanted
,
   System.Boolean
Append
,
   System.Int32
Mark
,
   System.Int32
Option
)
```
## Parameters

- `WorldX` (System.Double): x coordinate of ray start point
- `WorldY` (System.Double): y coordinate of ray start point
- `WorldZ` (System.Double): z coordinate of ray start point
- `RayVecX` (System.Double): x coordinate of ray direction vector
- `RayVecY` (System.Double): y coordinate of ray direction vector
- `RayVecZ` (System.Double): z coordinate of ray direction vector
- `RayRadius` (System.Double): Radius <= 2.9 m
- `TypeWanted` (System.Int32): Type of entities to select as defined in swSelectType_e
- `Append` (System.Boolean): If... And if entity is... Then... True Not already selected Entity is appended to the current selection list Already selected Entity is removed from the current selection list False Not already selected Current selection is cleared and then the entity is put on the list Already selected Current selection list remains the same
- `Mark` (System.Int32): Value to use as a mark; this value is used by other functions that require ordered selection
- `Option` (System.Int32): Selection option as defined in swSelectOption_e (see Remarks )

## Return Value

True if the entity is selected, false if not

## Remarks

This method:
Defines a cylindrical region of infinite length that starts at the specified point and runs parallel to the specified direction vector within the specified radius.
Only selects these entities: faces, edges, and vertices.
Does not support the selection of sketch entities, axes, center marks, center lines, section lines, etc.
Only a single entity is selected within the radius regardless if multiple entities existing within that radius. If selecting faces, then the RayRadius parameter is ignored and a cylinder of an infinitely small radius is used.
Use model space view to determine the selection vector in a drawing.
For the Option parameter, specify swSelectOption_e.swSelectOptionDefault to indicate that the Shift key is not used during selection or swSelectOption_e.swSelectOptionExtensive to indicate that the Shift key is used during selection.
NOTES:
This method is recorded when
IModelDocExtension::SelectByID2
relies on the selection coordinates and prone to failure if the model view is altered.
The difference between this method and the now obsolete
IModelDoc2::SelectByRay
method is that if you call IModelDocExtension::SelectByRay in a macro or application to select an entity by an intersecting ray and then rerun that macro or application, the original entity is successfully selected regardless of the viewing transform.

## Examples

- Select Face Using Intersecting Ray (C#) (Select_Face_Using_Intersecting_Ray_Example_CSharp.htm)
- Select Face Using Intersecting Ray (VB.NET) (Select_Face_Using_Intersecting_Ray_Example_VBNET.htm)
- Select Face Using Intersecting Ray (VBA) (Select_Face_Using_Intersecting_Ray_Example_VB.htm)

## See Also

- `IModelDoc2.GetRayIntersectionsPoints`
- `IModelDoc2.GetRayIntersectionsTopology`
- `IModelDoc2.MultiSelectByRay`
- `IModelDoc2.RayIntersections`