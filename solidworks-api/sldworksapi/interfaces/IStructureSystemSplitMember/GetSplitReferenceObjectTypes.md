---
type: method
interface: IStructureSystemSplitMember
member: GetSplitReferenceObjectTypes
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - getsplitreferenceobjecttypes
  - istructuresystemsplitmember
  - structure
  - split
  - member
  - reference
  - object
  - types
---

# IStructureSystemSplitMember.GetSplitReferenceObjectTypes

Gets the types of split member references.

## Signature

```csharp
System.Object GetSplitReferenceObjectTypes()
```
## Parameters

None.

## Return Value

Array of types of split member references as defined by swSelectType_e : swSelFACES swSelDATUMPLANES swSelADVSTRUCTMEMBER

## Remarks

This method is valid only if
IStructureSystemSplitMember::MemberType
is set to
swStructureSplitMemberType_e
.swStructureSplitMember_Reference.
The array returned by this method maps one-to-one and onto with the array returned by
IStructureSystemSplitMember::GetSplitReferences
.