---
type: method
interface: IModelDoc2
member: ICreatePlaneFixed2
returns: RefPlane
parameters:
  -
    name: P1
    type: System.Double
    description: Array of 3 doubles (x, y, z) in meters; this is the first of three model-space points used to define the plane orientation; it is also used as the origin for the plane coordinate system
  -
    name: P2
    type: System.Double
    description: Array of 3 doubles (x, y, z) in meters; this is the second of three model-space points used to define the plane orientation; the planes X-axis is directed from P1 to P2 unless useGlobal is set to True
  -
    name: P3
    type: System.Double
    description: Array of 3 doubles (x, y, z) in meters; this is the second of three model-space points used to define the plane orientation; the planes X-axis is directed from P1 to P2 unless useGlobal is set to True
  -
    name: UseGlobal
    type: System.Boolean
    description: Array of 3 doubles (x, y, z) in meters; this is the final model-space point used to define the plane orientation
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
  - IModelDoc2.CreatePlaneThru3Points3
  - IModelDoc2.CreatePlaneThruLineAndPt
  - IModelDoc2.CreatePlaneThruPtParallelToPlane
  - IModelDoc2.GetVisibilityOfConstructPlanes
  - IModelDoc2.ICreatePlaneAtAngle3
  - IModelDoc2.ICreatePlaneAtOffset3
  - IModelDoc2.ICreatePlaneAtSurface3
  - IModelDoc2.ICreatePlanePerCurveAndPassPoint3
  - IModelDoc2.ICreatePlaneThru3Points3
  - IModelDoc2.ICreatePlaneThruLineAndPt
  - IModelDoc2.ICreatePlaneThruPtParallelToPlane
  - IModelDoc2.ViewDispRefplanes
keywords:
  - icreateplanefixed2
  - imodeldoc2
  - model
  - doc2
  - create
  - plane
  - fixed2
  - p1
  - double
  - p2
  - p3
  - use
  - global
  - boolean
  - ref
---

# IModelDoc2.ICreatePlaneFixed2

Obsolete. Superseded by IFeatureManager::InsertRefPlane.

## Signature

```csharp
RefPlane ICreatePlaneFixed2( 
   ref System.Double
P1
,
   ref System.Double
P2
,
   ref System.Double
P3
,
   System.Boolean
UseGlobal
)
```
## Parameters

- `P1` (System.Double): Array of 3 doubles (x, y, z) in meters; this is the first of three model-space points used to define the plane orientation; it is also used as the origin for the plane coordinate system
- `P2` (System.Double): Array of 3 doubles (x, y, z) in meters; this is the second of three model-space points used to define the plane orientation; the planes X-axis is directed from P1 to P2 unless useGlobal is set to True
- `P3` (System.Double): Array of 3 doubles (x, y, z) in meters; this is the second of three model-space points used to define the plane orientation; the planes X-axis is directed from P1 to P2 unless useGlobal is set to True
- `UseGlobal` (System.Boolean): Array of 3 doubles (x, y, z) in meters; this is the final model-space point used to define the plane orientation

## Return Value

Newly created reference plane or NULL if the creation of the plan fails

## Remarks

The resulting plane is not parametric.
The planes normal vector is calculated using the cross product of the vectors (P2 - P1) and (P3 - P1), respectively.
The x-axis of the planes' coordinate system are a vector from P1 to P2 or a vector projected from the x-axis of the global coordinate system onto the plane.
The useGlobal argument denotes whether to align the x-axis of the plane with global orientation.
If useGlobal...
Then x-axis of the...
True
global (model) coordinate system is projected onto the plane. That vector is used to determine the direction of the plane's x-axis. This does not reorient the plane. Instead, it rotates the plane coordinate system about P1 until the x-axis of the plane aligns with the projected vector.
P1, P2, and P3 are still required because they define the plane.
false
plane is aligned based on your input points, P1 and P2.
This method creates the plane in the model that is currently being edited. This behavior is consistent with the other plane creation APIs, but it is different from the original IModelDoc2::ICreatePlaneFixed, which created the plane in this model, regardless of whether a component was currently being edited.

## See Also

- `IModelDoc2.CreatePlaneAtAngle3`
- `IModelDoc2.CreatePlaneAtOffset3`
- `IModelDoc2.CreatePlaneAtSurface3`
- `IModelDoc2.CreatePlaneFixed2`
- `IModelDoc2.CreatePlaneThru3Points3`
- `IModelDoc2.CreatePlaneThruLineAndPt`
- `IModelDoc2.CreatePlaneThruPtParallelToPlane`
- `IModelDoc2.GetVisibilityOfConstructPlanes`
- `IModelDoc2.ICreatePlaneAtAngle3`
- `IModelDoc2.ICreatePlaneAtOffset3`
- `IModelDoc2.ICreatePlaneAtSurface3`
- `IModelDoc2.ICreatePlanePerCurveAndPassPoint3`
- `IModelDoc2.ICreatePlaneThru3Points3`
- `IModelDoc2.ICreatePlaneThruLineAndPt`
- `IModelDoc2.ICreatePlaneThruPtParallelToPlane`
- `IModelDoc2.ViewDispRefplanes`