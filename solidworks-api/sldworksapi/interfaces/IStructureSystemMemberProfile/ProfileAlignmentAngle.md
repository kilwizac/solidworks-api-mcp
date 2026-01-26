---
type: property
interface: IStructureSystemMemberProfile
member: ProfileAlignmentAngle
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - profilealignmentangle
  - istructuresystemmemberprofile
  - structure
  - member
  - profile
  - alignment
  - angle
  - double
readonly: null
---

# IStructureSystemMemberProfile.ProfileAlignmentAngle

Gets and sets the angle of alignment between this member profile and a specified entity.

## Signature

```csharp
System.Double ProfileAlignmentAngle {get; set;}
```
## Parameters

None.

## Return Value

Alignment angle in radians

## Remarks

The angle is measured between an axis of the profile member as defined by
IStructureSystemMemberProfile::ProfileAlignmentType
and an entity specified by
IStructureSystemMemberProfile::ProfileAlignmentObject
.