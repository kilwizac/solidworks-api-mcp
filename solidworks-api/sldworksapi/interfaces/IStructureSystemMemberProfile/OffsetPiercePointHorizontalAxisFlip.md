---
type: property
interface: IStructureSystemMemberProfile
member: OffsetPiercePointHorizontalAxisFlip
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - offsetpiercepointhorizontalaxisflip
  - istructuresystemmemberprofile
  - structure
  - member
  - profile
  - offset
  - pierce
  - point
  - horizontal
  - axis
  - flip
  - boolean
readonly: null
---

# IStructureSystemMemberProfile.OffsetPiercePointHorizontalAxisFlip

Gets and sets whether to reverse the offset value of the pierce point in the horizontal direction.

## Signature

```csharp
System.Boolean OffsetPiercePointHorizontalAxisFlip {get; set;}
```
## Parameters

None.

## Return Value

True to flip the horizontal offset, false to not

## Remarks

This property is valid only if
IStructureSystemMemberProfile::OffsetPiercePoint
is set to true.