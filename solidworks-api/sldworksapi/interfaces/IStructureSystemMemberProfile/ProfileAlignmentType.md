---
type: property
interface: IStructureSystemMemberProfile
member: ProfileAlignmentType
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - profilealignmenttype
  - istructuresystemmemberprofile
  - structure
  - member
  - profile
  - alignment
  - type
  - int32
readonly: null
---

# IStructureSystemMemberProfile.ProfileAlignmentType

Gets and sets the axis of alignment for this member profile.

## Signature

```csharp
System.Int32 ProfileAlignmentType {get; set;}
```
## Parameters

None.

## Return Value

Profile alignment type as defined by swStructureProfileAlignmentType_e

## Remarks

This property is valid only if
IStructureSystemMemberProfile::ProfileAlignmentObject
is set.