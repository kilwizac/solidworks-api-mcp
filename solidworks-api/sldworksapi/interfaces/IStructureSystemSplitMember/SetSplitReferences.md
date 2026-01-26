---
type: method
interface: IStructureSystemSplitMember
member: SetSplitReferences
returns: System.Boolean
parameters:
  -
    name: References
    type: System.Object
    description: Array of split member references, e.g.: Face2 IRefPlane Member
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - setsplitreferences
  - istructuresystemsplitmember
  - structure
  - split
  - member
  - references
  - object
  - boolean
  - iprimarymemberpathsegmentfeaturedata
---

# IStructureSystemSplitMember.SetSplitReferences

Sets the split member references.

## Signature

```csharp
System.Boolean SetSplitReferences( 
   System.Object
References
)
```
## Parameters

- `References` (System.Object): Array of split member references, e.g.: Face2 IRefPlane Member

## Return Value

True if split member references successfully set, false if not

## Remarks

This method is valid only if
IStructureSystemSplitMember::MemberType
is set to
swStructureSplitMemberType_e
.swStructureSplitMember_Reference.

## Examples

- IPrimaryMemberPathSegmentFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IPrimaryMemberPathSegmentFeatureData)