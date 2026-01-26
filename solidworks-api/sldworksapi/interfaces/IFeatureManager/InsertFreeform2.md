---
type: method
interface: IFeatureManager
member: InsertFreeform2
returns: Feature
parameters:
  -
    name: Nsided
    type: System.Boolean
    description: True to use the new Freeform algorithm, false to use the old one NOTE: Must be true for faces with three sides or more than four sides, or to enable rotation of UV lines
  -
    name: Symmetric0
    type: System.Boolean
    description: True if symmetry is on in Direction 0, false if not
  -
    name: Symmetric1
    type: System.Boolean
    description: True if symmetry is on in Direction 1, false if not
  -
    name: Angle
    type: System.Double
    description: Value by which to rotate the U,V lines (in radians)
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - feature
  - see
  - also
  - ifeature
  - freeform
  - insertfreeform2
  - ifeaturemanager
  - manager
  - insert
  - freeform2
  - nsided
  - boolean
  - symmetric0
  - symmetric1
  - angle
  - double
---

# IFeatureManager.InsertFreeform2

Inserts a Freeform feature.

## Signature

```csharp
Feature InsertFreeform2( 
   System.Boolean
Nsided
,
   System.Boolean
Symmetric0
,
   System.Boolean
Symmetric1
,
   System.Double
Angle
)
```
## Parameters

- `Nsided` (System.Boolean): True to use the new Freeform algorithm, false to use the old one NOTE: Must be true for faces with three sides or more than four sides, or to enable rotation of UV lines
- `Symmetric0` (System.Boolean): True if symmetry is on in Direction 0, false if not
- `Symmetric1` (System.Boolean): True if symmetry is on in Direction 1, false if not
- `Angle` (System.Double): Value by which to rotate the U,V lines (in radians)

## Return Value

Freeform feature

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
Specify boundary continuity. Corresponds to
IFeatureManager::SetFreeformBoundaryContinuity
.
Interactively pull or push the points to change the shape of the selected face.
Insert the Freeform feature. Corresponds to this method, IFeatureManager::InsertFreeform2.
Record a macro while interactively creating a Freeform feature, then examine the macro to see the order in which the Freeform-related methods are recorded.