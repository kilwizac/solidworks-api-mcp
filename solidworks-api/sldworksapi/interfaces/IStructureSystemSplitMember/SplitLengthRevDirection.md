---
type: property
interface: IStructureSystemSplitMember
member: SplitLengthRevDirection
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - splitlengthrevdirection
  - istructuresystemsplitmember
  - structure
  - split
  - member
  - length
  - rev
  - direction
  - boolean
readonly: null
---

# IStructureSystemSplitMember.SplitLengthRevDirection

Gets and sets whether to reverse the direction of the length of this dimension split member.

## Signature

```csharp
System.Boolean SplitLengthRevDirection {get; set;}
```
## Parameters

None.

## Return Value

True to reverse the direction of the length, false to not

## Remarks

This property is valid only for
IStructureSystemSplitMember::DimensionType
set to
swSplitMemberDimensionType_e
.swSplitMemberDimensionType_SplitLength.