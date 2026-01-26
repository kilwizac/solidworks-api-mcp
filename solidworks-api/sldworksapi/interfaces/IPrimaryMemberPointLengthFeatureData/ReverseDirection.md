---
type: property
interface: IPrimaryMemberPointLengthFeatureData
member: ReverseDirection
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - reversedirection
  - iprimarymemberpointlengthfeaturedata
  - primary
  - member
  - point
  - length
  - feature
  - data
  - reverse
  - direction
  - boolean
readonly: null
---

# IPrimaryMemberPointLengthFeatureData.ReverseDirection

Gets and sets whether to reverse the length of this structure system member.

## Signature

```csharp
System.Boolean ReverseDirection {get; set;}
```
## Parameters

None.

## Return Value

True to reverse the member direction, false to not

## Remarks

This property is valid only if
IPrimaryMemberPointLengthFeatureData::EndCondition
is
swPrimaryMemberPointLengthEndCondition_e
.swPrimaryMemberPointLengthEndCondition_Length.

## Examples

- IPrimaryMemberPointLengthFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IPrimaryMemberPointLengthFeatureData)