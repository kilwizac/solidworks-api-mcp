---
type: method
interface: IFeatureManager
member: InsertMirrorFeature
returns: Feature
parameters:
  -
    name: BMirrorBody
    type: System.Boolean
    description: True to mirror solid bodies; false to mirror a feature or face
  -
    name: BGeometryPattern
    type: System.Boolean
    description: True to mirror only the feature geometry, false to solve the entire feature; applies to mirroring features only
  -
    name: BMerge
    type: System.Boolean
    description: True to merge any mirrored solid bodies, false to not; applies to mirroring solid bodies only
  -
    name: BKnit
    type: System.Boolean
    description: True to knit surfaces, false to not; applies to mirroring surfaces only
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related:
  - IMirrorPatternFeatureData
  - IMirrorSolidFeatureData
keywords:
  - insertmirrorfeature
  - ifeaturemanager
  - feature
  - manager
  - insert
  - mirror
  - body
  - boolean
  - geometry
  - pattern
  - merge
  - knit
---

# IFeatureManager.InsertMirrorFeature

Obsolete. Superseded by IFeatureManager::InsertMirrorFeature2.

## Signature

```csharp
Feature InsertMirrorFeature( 
   System.Boolean
BMirrorBody
,
   System.Boolean
BGeometryPattern
,
   System.Boolean
BMerge
,
   System.Boolean
BKnit
)
```
## Parameters

- `BMirrorBody` (System.Boolean): True to mirror solid bodies; false to mirror a feature or face
- `BGeometryPattern` (System.Boolean): True to mirror only the feature geometry, false to solve the entire feature; applies to mirroring features only
- `BMerge` (System.Boolean): True to merge any mirrored solid bodies, false to not; applies to mirroring solid bodies only
- `BKnit` (System.Boolean): True to knit surfaces, false to not; applies to mirroring surfaces only

## Return Value

Pointer to the IFeature object

## Remarks

This method attempts to create the mirror feature without displaying a dialog box to get information from the user. It relies on preselected and marked entities, as well as arguments.
Any...
Must be preselected and marked with a value of...
Features to be mirrored
1
Faces to be mirrored
128
Bodies to be mirrored
256
Plane or planar face
2
For information on selecting and marking entities, see
IModelDocExtension::SelectByID2
.

## See Also

- `IMirrorPatternFeatureData`
- `IMirrorSolidFeatureData`