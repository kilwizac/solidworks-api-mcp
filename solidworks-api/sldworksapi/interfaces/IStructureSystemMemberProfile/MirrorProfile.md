---
type: property
interface: IStructureSystemMemberProfile
member: MirrorProfile
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - mirrorprofile
  - istructuresystemmemberprofile
  - structure
  - member
  - profile
  - mirror
  - boolean
readonly: null
---

# IStructureSystemMemberProfile.MirrorProfile

Gets and sets whether to flip the profile of this member about an axis.

## Signature

```csharp
System.Boolean MirrorProfile {get; set;}
```
## Parameters

None.

## Return Value

True to flip the profile of the member about an axis, false to not

## Remarks

Use
IStructureSystemMemberProfile::ProfileMirrorType
to specify either the horizontal or vertical axis about which to flip the member profile.