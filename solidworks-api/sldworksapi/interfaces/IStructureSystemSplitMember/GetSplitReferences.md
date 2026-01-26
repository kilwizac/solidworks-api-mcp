---
type: method
interface: IStructureSystemSplitMember
member: GetSplitReferences
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - getsplitreferences
  - istructuresystemsplitmember
  - structure
  - split
  - member
  - references
  - object
---

# IStructureSystemSplitMember.GetSplitReferences

Gets the entities used to split this structure system split member.

## Signature

```csharp
System.Object GetSplitReferences()
```
## Parameters

None.

## Return Value

Array of one or more references, e.g.: IFace2 IRefPlane IFeature (i.e., another structure system member)

## Remarks

This method is valid only if
IStructureSystemSplitMember::MemberType
is set to
swStructureSplitMemberType_e
.swStructureSplitMember_Reference.