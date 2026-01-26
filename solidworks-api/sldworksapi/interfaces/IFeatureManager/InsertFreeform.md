---
type: method
interface: IFeatureManager
member: InsertFreeform
returns: Feature
parameters:
  -
    name: Continuity0
    type: System.Int16
    description: Continuity of edge 1: -1 = Movable 0 = Contact 2 = Tangent 3 = Curvature
  -
    name: Continuity1
    type: System.Int16
    description: Continuity of edge 2: -1 = Movable 0 = Contact 2 = Tangent 3 = Curvature
  -
    name: Continuity2
    type: System.Int16
    description: Continuity of edge 3: -1 = Movable 0 = Contact 2 = Tangent 3 = Curvature
  -
    name: Continuity3
    type: System.Int16
    description: Continuity of edge 4: -1 = Movable 0 = Contact 2 = Tangent 3 = Curvature
  -
    name: Symmetric0
    type: System.Boolean
    description: True if symmetry is on in Direction 0, false if not
  -
    name: Symmetric1
    type: System.Boolean
    description: True if symmetry is on in Direction 1, false if not
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related: []
keywords:
  - insertfreeform
  - ifeaturemanager
  - feature
  - manager
  - insert
  - freeform
  - continuity0
  - int16
  - continuity1
  - continuity2
  - continuity3
  - symmetric0
  - boolean
  - symmetric1
---

# IFeatureManager.InsertFreeform

Obsolete. Superseded by IFeatureManager::InsertFreeform2.

## Signature

```csharp
Feature InsertFreeform( 
   System.Int16
Continuity0
,
   System.Int16
Continuity1
,
   System.Int16
Continuity2
,
   System.Int16
Continuity3
,
   System.Boolean
Symmetric0
,
   System.Boolean
Symmetric1
)
```
## Parameters

- `Continuity0` (System.Int16): Continuity of edge 1: -1 = Movable 0 = Contact 2 = Tangent 3 = Curvature
- `Continuity1` (System.Int16): Continuity of edge 2: -1 = Movable 0 = Contact 2 = Tangent 3 = Curvature
- `Continuity2` (System.Int16): Continuity of edge 3: -1 = Movable 0 = Contact 2 = Tangent 3 = Curvature
- `Continuity3` (System.Int16): Continuity of edge 4: -1 = Movable 0 = Contact 2 = Tangent 3 = Curvature
- `Symmetric0` (System.Boolean): True if symmetry is on in Direction 0, false if not
- `Symmetric1` (System.Boolean): True if symmetry is on in Direction 1, false if not

## Return Value

Pointer to the newly created freeform feature

## Remarks

The SOLIDWORKS API Freeform-related methods are intended to journal the actions performed by an interactive user while creating the feature. Because user interaction is required to create a Freeform feature, fully automating the creation of it is not possible using the SOLIDWORKS API.
The typical steps performed by an interactive user to create a Freeform feature are:
Select the face to form.
NOTE
: The face must have four sides.
Add curves on the selected face. Corresponds to
IFeatureManager::SetFreeformCurveData
.
Add points on the curves. Corresponds to
IFeatureManager::SetFreeformPointData
.
Interactively pull or push the points to change the shape of the selected face.
Insert the Freeform feature. Corresponds to this method, IFeatureManager::InsertFreeform.
Record a macro while interactively creating a Freeform feature, then examine the macro to see the order in which the Freeform-related methods are recorded.