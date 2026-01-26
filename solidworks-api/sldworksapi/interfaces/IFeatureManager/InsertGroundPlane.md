---
type: method
interface: IFeatureManager
member: InsertGroundPlane
returns: Feature
parameters:
  -
    name: ReverseDirection
    type: System.Boolean
    description: True to reverse the alignment of ground faces relative to the ground plane, false to not
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related:
  - IAssemblyDoc.GetActiveGroundPlane
keywords:
  - insertgroundplane
  - ifeaturemanager
  - feature
  - manager
  - insert
  - ground
  - plane
  - reverse
  - direction
  - boolean
  - activate
  - vba
---

# IFeatureManager.InsertGroundPlane

Obsolete. See IFeatureManager::CreateDefinition and IGroundPlaneFeatureData.

## Signature

```csharp
Feature InsertGroundPlane( 
   System.Boolean
ReverseDirection
)
```
## Parameters

- `ReverseDirection` (System.Boolean): True to reverse the alignment of ground faces relative to the ground plane, false to not

## Return Value

IFeature

## Remarks

Before calling this method, select the entity to use as the ground plane using
IModelDocExtension::SelectByRay
or
IModelDocExtension::SelectByID2
.
Call this method to insert a ground plane at each level of a plant assembly. Ground planes are used as reference geometry when inserting published assets at each level.
Call
IAssemblyDoc::ActivateGroundPlane
to activate the ground plane on the level where you want to insert a published asset; the asset's ground face snaps to the assembly's activated ground plane. Components with magnetic mates snap only to components that are also on the active ground plane.
Only one ground plane can be active at a given time in each assembly configuration.
See
Large Assemblies > Facility Layout
in the SOLIDWORKS Design user-interface help.

## Examples

- Insert and Activate Ground Plane (VBA) (Insert_Ground_Plane_Example_VB.htm)

## See Also

- `IAssemblyDoc.GetActiveGroundPlane`