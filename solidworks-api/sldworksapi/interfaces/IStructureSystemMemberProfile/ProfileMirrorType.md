---
type: property
interface: IStructureSystemMemberProfile
member: ProfileMirrorType
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - profilemirrortype
  - istructuresystemmemberprofile
  - structure
  - member
  - profile
  - mirror
  - type
  - int32
readonly: null
---

# IStructureSystemMemberProfile.ProfileMirrorType

Gets and sets the axis about which to flip this member profile.

## Signature

```csharp
System.Int32 ProfileMirrorType {get; set;}
```
## Parameters

None.

## Return Value

Axis about which to flip this member profile as defined by swStructureProfileMirrorType_e

## Remarks

This property is valid only if
IStructureSystemMemberProfile::MirrorProfile
is true.