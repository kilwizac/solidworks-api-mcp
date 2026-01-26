---
type: property
interface: IStructureSystemSplitMember
member: NumberofSplitInstances
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - numberofsplitinstances
  - istructuresystemsplitmember
  - structure
  - split
  - member
  - numberof
  - instances
  - int32
readonly: null
---

# IStructureSystemSplitMember.NumberofSplitInstances

Gets the number of instances in this dimension split member.

## Signature

```csharp
System.Int32 NumberofSplitInstances {get; set;}
```
## Parameters

None.

## Return Value

Number of instances

## Remarks

This property is valid only for
IStructureSystemSplitMember::DimensionType
set to
swSplitMemberDimensionType_e
.swSplitMemberDimensionType_Instance.