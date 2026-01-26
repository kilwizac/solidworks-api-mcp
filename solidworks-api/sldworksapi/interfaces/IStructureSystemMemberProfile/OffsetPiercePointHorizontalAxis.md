---
type: property
interface: IStructureSystemMemberProfile
member: OffsetPiercePointHorizontalAxis
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - offsetpiercepointhorizontalaxis
  - istructuresystemmemberprofile
  - structure
  - member
  - profile
  - offset
  - pierce
  - point
  - horizontal
  - axis
  - double
readonly: null
---

# IStructureSystemMemberProfile.OffsetPiercePointHorizontalAxis

Gets and sets the offset value of the pierce point in the horizontal direction.

## Signature

```csharp
System.Double OffsetPiercePointHorizontalAxis {get; set;}
```
## Parameters

None.

## Return Value

Horizontal offset of the pierce point

## Remarks

This property is valid only if
IStructureSystemMemberProfile::OffsetPiercePoint
is set to true.