---
type: property
interface: IStructureSystemMemberFeatureData
member: IsSplit
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - issplit
  - istructuresystemmemberfeaturedata
  - structure
  - member
  - feature
  - data
  - split
  - boolean
  - iprimarymemberpathsegmentfeaturedata
readonly: null
---

# IStructureSystemMemberFeatureData.IsSplit

Gets and sets whether this structure system member is split.

## Signature

```csharp
System.Boolean IsSplit {get; set;}
```
## Parameters

None.

## Return Value

True if this structure system member is split, false if not

## Remarks

If this property is true, then use
IStructureSystemMemberFeatureData::GetSplitMember
to access the split member.

## Examples

- IPrimaryMemberPathSegmentFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IPrimaryMemberPathSegmentFeatureData)