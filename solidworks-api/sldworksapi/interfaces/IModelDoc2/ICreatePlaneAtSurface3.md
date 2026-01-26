---
type: method
interface: IModelDoc2
member: ICreatePlaneAtSurface3
returns: RefPlane
parameters:
  -
    name: InterIndex
    type: System.Int16
    description: Multiple intersections - other solutions may exist. a surface, plane, and edge - the intersection index is the intersection point to use when there are multiple intersections; when the intersection index input is more than the number of intersection points, the index of the last intersection point found will be used
  -
    name: ProjOpt
    type: System.Boolean
    description: True to project the sketch plane point along the sketch plane normal for a sketch point and a surface, false to project the sketch plane point normal to the surface
  -
    name: ReverseDir
    type: System.Boolean
    description: True to create the plane on the opposite side of the sketch plane, false to not
  -
    name: NormalPlane
    type: System.Boolean
    description: True to find the plane normal to the surface for a conical surface, false to find the plane tangent to the surface
  -
    name: Angle
    type: System.Double
    description: Value of the angular offset of the normal plane, relative to a chosen reference plane
  -
    name: AutoSize
    type: System.Boolean
    description: True to automatically size the plane, false to not
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.CreatePlaneAtAngle3
  - IModelDoc2.CreatePlaneAtOffset3
  - IModelDoc2.CreatePlaneAtSurface3
  - IModelDoc2.CreatePlaneFixed2
  - IModelDoc2.CreatePlanePerCurveAndPassPoint3
  - IModelDoc2.CreatePlaneThru3Points3
  - IModelDoc2.CreatePlaneThruLineAndPt
  - IModelDoc2.CreatePlaneThruPtParallelToPlane
  - IModelDoc2.GetVisibilityOfConstructPlanes
  - IModelDoc2.ICreatePlaneAtAngle3
  - IModelDoc2.ICreatePlaneAtOffset3
  - IModelDoc2.ICreatePlaneFixed2
  - IModelDoc2.ICreatePlanePerCurveAndPassPoint3
  - IModelDoc2.ICreatePlaneThru3Points3
  - IModelDoc2.ICreatePlaneThruLineAndPt
  - IModelDoc2.ICreatePlaneThruPtParallelToPlane
  - IModelDoc2.ViewDispRefplanes
keywords:
  - icreateplaneatsurface3
  - imodeldoc2
  - model
  - doc2
  - create
  - plane
  - surface3
  - inter
  - index
  - int16
  - proj
  - opt
  - boolean
  - reverse
  - dir
  - normal
  - angle
  - double
  - auto
  - size
  - ref
---

# IModelDoc2.ICreatePlaneAtSurface3

Obsolete. Superseded by IFeatureManager::InsertRefPlane.

## Signature

```csharp
RefPlane ICreatePlaneAtSurface3( 
   System.Int16
InterIndex
,
   System.Boolean
ProjOpt
,
   System.Boolean
ReverseDir
,
   System.Boolean
NormalPlane
,
   System.Double
Angle
,
   System.Boolean
AutoSize
)
```
## Parameters

- `InterIndex` (System.Int16): Multiple intersections - other solutions may exist. a surface, plane, and edge - the intersection index is the intersection point to use when there are multiple intersections; when the intersection index input is more than the number of intersection points, the index of the last intersection point found will be used
- `ProjOpt` (System.Boolean): True to project the sketch plane point along the sketch plane normal for a sketch point and a surface, false to project the sketch plane point normal to the surface
- `ReverseDir` (System.Boolean): True to create the plane on the opposite side of the sketch plane, false to not
- `NormalPlane` (System.Boolean): True to find the plane normal to the surface for a conical surface, false to find the plane tangent to the surface
- `Angle` (System.Double): Value of the angular offset of the normal plane, relative to a chosen reference plane
- `AutoSize` (System.Boolean): True to automatically size the plane, false to not

## Return Value

Newly created reference plane

## Remarks

This method uses the current document setting for displaying of the reference plane as it is created.
If display of reference planes is...
Then you ...
Enabled
See the reference plane on the screen as it is created
Disabled
Do not see the reference plane on the screen as it is created
The
IModelDocExtension::GetUserPreferenceToggle
and
IModelDocExtension::SetUserPreferenceToggle
methods, with swDisplayPlanes, get or set this display preference.
This method does not select the reference plane after it is created. Objects that are selected before running this method are still selected when the method completes, not the newly created reference plane.
This method returns a RefPlane object. You can use this object for further operations on the reference plane feature. Although just having a reference plane may not be useful, it is a feature, which is an entity, so methods available on those objects are available.
For this type of user...
Those functions are...
OLE
Directly accessible
COM
Available via use of a QueryInterface
For example, if the reference plane must be selected, use
IEntity::Select4
.

## See Also

- `IModelDoc2.CreatePlaneAtAngle3`
- `IModelDoc2.CreatePlaneAtOffset3`
- `IModelDoc2.CreatePlaneAtSurface3`
- `IModelDoc2.CreatePlaneFixed2`
- `IModelDoc2.CreatePlanePerCurveAndPassPoint3`
- `IModelDoc2.CreatePlaneThru3Points3`
- `IModelDoc2.CreatePlaneThruLineAndPt`
- `IModelDoc2.CreatePlaneThruPtParallelToPlane`
- `IModelDoc2.GetVisibilityOfConstructPlanes`
- `IModelDoc2.ICreatePlaneAtAngle3`
- `IModelDoc2.ICreatePlaneAtOffset3`
- `IModelDoc2.ICreatePlaneFixed2`
- `IModelDoc2.ICreatePlanePerCurveAndPassPoint3`
- `IModelDoc2.ICreatePlaneThru3Points3`
- `IModelDoc2.ICreatePlaneThruLineAndPt`
- `IModelDoc2.ICreatePlaneThruPtParallelToPlane`
- `IModelDoc2.ViewDispRefplanes`