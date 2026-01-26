---
type: property
interface: IStructureSystemMemberProfile
member: ProfileAlignmentObject
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - profilealignmentobject
  - istructuresystemmemberprofile
  - structure
  - member
  - profile
  - alignment
  - object
readonly: null
---

# IStructureSystemMemberProfile.ProfileAlignmentObject

Gets and sets the entity with which to align an axis of this member profile.

## Signature

```csharp
System.Object ProfileAlignmentObject {get; set;}
```
## Parameters

None.

## Return Value

Direction entity with which to align an axis of the member profile, e.g.: IBody2 IEdge IFace2 IRefAxis IRefPlane ISketchLine ISketchSegment ISurface

## Remarks

Use:
IStructureSystemMemberProfile::ProfileAlignmentObjectType
to specify the type of this entity.
IStructureSystemMemberProfile::ProfileAlignmentType
to specify to which axis of the member profile to align the entity specified by this property.
IStructureSystemMemberProfile::ProfileAlignmentAngle
to specify the angle of alignment with the specified entity and member axis.