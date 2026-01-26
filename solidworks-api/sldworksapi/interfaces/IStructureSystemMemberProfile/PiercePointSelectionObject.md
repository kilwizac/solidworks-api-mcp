---
type: property
interface: IStructureSystemMemberProfile
member: PiercePointSelectionObject
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related: []
keywords:
  - piercepointselectionobject
  - istructuresystemmemberprofile
  - structure
  - member
  - profile
  - pierce
  - point
  - selection
  - object
readonly: null
---

# IStructureSystemMemberProfile.PiercePointSelectionObject

Gets and sets the selected pierce point object for the sketch of this member profile.

## Signature

```csharp
System.Object PiercePointSelectionObject {get; set;}
```
## Parameters

None.

## Return Value

ISketchPoint

## Remarks

This property is valid only if
IStructureSystemMemberProfile::ProfilePiercePointType
is set to
swStructureProfilePiercePointType_e
.Selection.