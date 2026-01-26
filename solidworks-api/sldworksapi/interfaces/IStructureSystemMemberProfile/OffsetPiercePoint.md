---
type: property
interface: IStructureSystemMemberProfile
member: OffsetPiercePoint
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - offsetpiercepoint
  - istructuresystemmemberprofile
  - structure
  - member
  - profile
  - offset
  - pierce
  - point
  - boolean
readonly: null
---

# IStructureSystemMemberProfile.OffsetPiercePoint

Gets and sets whether to offset the pierce point of this member profile.

## Signature

```csharp
System.Boolean OffsetPiercePoint {get; set;}
```
## Parameters

None.

## Return Value

True to offset the pierce point, false to not

## Remarks

If this property is true, use
IStructureSystemMemberProfile::OffsetPiercePointHorizontalAxis
and
IStructureSystemMemberProfile::OffsetPiercePointVerticalAxis
to specify the offsets.