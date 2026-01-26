---
type: property
interface: IStructureSystemMemberProfile
member: OffsetPiercePointVerticalAxis
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - offsetpiercepointverticalaxis
  - istructuresystemmemberprofile
  - structure
  - member
  - profile
  - offset
  - pierce
  - point
  - vertical
  - axis
  - double
readonly: null
---

# IStructureSystemMemberProfile.OffsetPiercePointVerticalAxis

Gets and sets the offset value of the pierce point in the vertical direction.

## Signature

```csharp
System.Double OffsetPiercePointVerticalAxis {get; set;}
```
## Parameters

None.

## Return Value

Vertical offset of the pierce point

## Remarks

This property is valid only if
IStructureSystemMemberProfile::OffsetPiercePoint
is set to true.