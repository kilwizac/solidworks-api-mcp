---
type: method
interface: IFeatureManager
member: SetFreeformBoundaryContinuity
returns: void
parameters:
  -
    name: BoundaryIndex
    type: System.Int16
    description: 0-based index of the boundary to modify (i.e., a value ranging from 0 to (Number of face boundaries-1))
  -
    name: Continuity
    type: System.Int16
    description: -1 = Movaeable 0 = Contact 1 = Tangenet 2= Curvature
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - freeform
  - feature
  - see
  - also
  - ifeature
  - setfreeformboundarycontinuity
  - ifeaturemanager
  - manager
  - boundary
  - continuity
  - index
  - int16
  - void
---

# IFeatureManager.SetFreeformBoundaryContinuity

Sets the boundary continuity for this Freeform feature.

## Signature

```csharp
void SetFreeformBoundaryContinuity( 
   System.Int16
BoundaryIndex
,
   System.Int16
Continuity
)
```
## Parameters

- `BoundaryIndex` (System.Int16): 0-based index of the boundary to modify (i.e., a value ranging from 0 to (Number of face boundaries-1))
- `Continuity` (System.Int16): -1 = Movaeable 0 = Contact 1 = Tangenet 2= Curvature

## Return Value

Unknown.

## Remarks

The SOLIDWORKS API Freeform-related methods are intended to journal the actions performed by an interactive user while creating the feature. Because user interaction is required to create a Freeform feature, fully automating the creation of it is not possible using the SOLIDWORKS API.
The typical steps performed by an interactive user to create a Freeform feature are:
Select the face to form.
Add curves on the selected face. Corresponds to
IFeatureManager::SetFreeformCurveData
.
Add points on the curves. Corresponds to
IFeatureManager::SetFreeformPointData
.
Specify boundary continuity. Corresponds to IFeatureManager::SetFreeformBoundaryContinuity.
Interactively pull or push the points to change the shape of the selected face.
Insert the Freeform feature. Corresponds to this method,
IFeatureManager::InsertFreeform2
.
Record a macro while interactively creating a Freeform feature, then examine the macro to see the order in which the Freeform-related methods are recorded.