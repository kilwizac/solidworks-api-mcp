---
type: method
interface: IModelDoc2
member: ICreatePlaneAtOffset3
returns: RefPlane
parameters:
  -
    name: Val
    type: System.Double
    description: Offset distance from selected plane in meters
  -
    name: FlipDir
    type: System.Boolean
    description: True to flip the plane the other way for first direction, false to not
  -
    name: AutoSize
    type: System.Boolean
    description: True to automatically size the the plane, false to not
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.CreatePlaneAtAngle3
  - IModelDoc2.CreatePlaneAtSurface3
  - IModelDoc2.CreatePlaneFixed2
  - IModelDoc2.CreatePlanePerCurveAndPassPoint3
  - IModelDoc2.CreatePlaneThru3Points3
  - IModelDoc2.CreatePlaneThruLineAndPt
  - IModelDoc2.CreatePlaneThruPtParallelToPlane
  - IModelDoc2.GetVisibilityOfConstructPlanes
  - IModelDoc2.ICreatePlaneAtAngle3
  - IModelDoc2.ICreatePlaneAtSurface3
  - IModelDoc2.ICreatePlaneFixed2
  - IModelDoc2.ICreatePlanePerCurveAndPassPoint3
  - IModelDoc2.ICreatePlaneThru3Points3
  - IModelDoc2.ICreatePlaneThruLineAndPt
  - IModelDoc2.ICreatePlaneThruPtParallelToPlane
  - IModelDoc2.ViewDispRefplanes
keywords:
  - icreateplaneatoffset3
  - imodeldoc2
  - model
  - doc2
  - create
  - plane
  - offset3
  - val
  - double
  - flip
  - dir
  - boolean
  - auto
  - size
  - ref
---

# IModelDoc2.ICreatePlaneAtOffset3

Obsolete. Superseded by IFeatureManager::InsertRefPlane.

## Signature

```csharp
RefPlane ICreatePlaneAtOffset3( 
   System.Double
Val
,
   System.Boolean
FlipDir
,
   System.Boolean
AutoSize
)
```
## Parameters

- `Val` (System.Double): Offset distance from selected plane in meters
- `FlipDir` (System.Boolean): True to flip the plane the other way for first direction, false to not
- `AutoSize` (System.Boolean): True to automatically size the the plane, false to not

## Return Value

Newly created reference plane

## Remarks

This method uses the current document setting for displaying the reference plane. If display of reference planes is disabled, then you do not see the reference plane on the screen. If display of reference planes is enabled, then you see it.
IModelDocExtension::GetUserPreferenceToggle
swDisplayPlanes and
IModelDocExtension::SetUserPreferenceToggle
swDisplayPlanes get or set this display preference.
This method does not select the reference plane after it is created. Objects that are selected before running this method are still selected when the method completes, not the newly created reference plane.
This method returns an IRefPlane object. This object can then be used for subsequent operations on the reference plane feature. Having a IRefPlane object may not be useful, except that it is a feature, which is an entity, so methods available on those objects are available. For an OLE user, those functions are directly accessible; for a COM user, those functions are available via
QueryInterface. For example, to select the reference plane, use
IEntity::Select4
.

## See Also

- `IModelDoc2.CreatePlaneAtAngle3`
- `IModelDoc2.CreatePlaneAtSurface3`
- `IModelDoc2.CreatePlaneFixed2`
- `IModelDoc2.CreatePlanePerCurveAndPassPoint3`
- `IModelDoc2.CreatePlaneThru3Points3`
- `IModelDoc2.CreatePlaneThruLineAndPt`
- `IModelDoc2.CreatePlaneThruPtParallelToPlane`
- `IModelDoc2.GetVisibilityOfConstructPlanes`
- `IModelDoc2.ICreatePlaneAtAngle3`
- `IModelDoc2.ICreatePlaneAtSurface3`
- `IModelDoc2.ICreatePlaneFixed2`
- `IModelDoc2.ICreatePlanePerCurveAndPassPoint3`
- `IModelDoc2.ICreatePlaneThru3Points3`
- `IModelDoc2.ICreatePlaneThruLineAndPt`
- `IModelDoc2.ICreatePlaneThruPtParallelToPlane`
- `IModelDoc2.ViewDispRefplanes`