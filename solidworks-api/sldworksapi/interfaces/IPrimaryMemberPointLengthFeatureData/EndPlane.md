---
type: property
interface: IPrimaryMemberPointLengthFeatureData
member: EndPlane
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - endplane
  - iprimarymemberpointlengthfeaturedata
  - primary
  - member
  - point
  - length
  - feature
  - data
  - end
  - plane
  - object
readonly: null
---

# IPrimaryMemberPointLengthFeatureData.EndPlane

Gets and sets the end plane of this structure system member.

## Signature

```csharp
System.Object EndPlane {get; set;}
```
## Parameters

None.

## Return Value

IRefPlane

## Remarks

This property is valid only if
IPrimaryMemberPointLengthFeatureData::EndCondition
is
swPrimaryMemberPointLengthEndCondition_e
.swPrimaryMemberPointLengthEndCondition_UpToPlane.