---
type: method
interface: IFeatureManager
member: InsertMirrorFeature2
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
  -
    name: ScopeOptions
    type: System.Int32
    description: Feature scope as defined by swFeatureScope_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IMirrorPatternFeatureData
keywords:
  - feature
  - see
  - also
  - ifeature
  - mirror
  - features
  - pattern
  - insertmirrorfeature2
  - ifeaturemanager
  - manager
  - insert
  - feature2
  - body
  - boolean
  - geometry
  - merge
  - knit
  - scope
  - options
  - int32
  - imirrorsolidfeaturedata
  - structuresystemtopatternarray
---

# IFeatureManager.InsertMirrorFeature2

Mirrors selected features, faces, bodies, and structure systems about a selected plane or planar face.

## Signature

```csharp
Feature InsertMirrorFeature2( 
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
,
   System.Int32
ScopeOptions
)
```
## Parameters

- `BMirrorBody` (System.Boolean): True to mirror solid bodies; false to mirror a feature or face
- `BGeometryPattern` (System.Boolean): True to mirror only the feature geometry, false to solve the entire feature; applies to mirroring features only
- `BMerge` (System.Boolean): True to merge any mirrored solid bodies, false to not; applies to mirroring solid bodies only
- `BKnit` (System.Boolean): True to knit surfaces, false to not; applies to mirroring surfaces only
- `ScopeOptions` (System.Int32): Feature scope as defined by swFeatureScope_e

## Return Value

Feature

## Remarks

This method attempts to create the mirror feature without displaying a dialog box to get information from the user. It relies on preselected and marked entities and arguments.
Structure systems 134217728
Any of these entities to be mirrored...
Must be preselected and marked with a value of...
Features
1
Faces
128
Bodies
256
Structure systems
134217728
Planes or planar faces
2
For information on selecting and marking entities, see
IModelDocExtension::SelectByID2
.

## Examples

- IMirrorSolidFeatureData::StructureSystemToPatternArray (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IMirrorSolidFeatureData~StructureSystemToPatternArray)

## See Also

- `IMirrorPatternFeatureData`