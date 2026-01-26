---
type: property
interface: IPrimaryMemberPointLengthFeatureData
member: EndPoint
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - endpoint
  - iprimarymemberpointlengthfeaturedata
  - primary
  - member
  - point
  - length
  - feature
  - data
  - end
  - object
readonly: null
---

# IPrimaryMemberPointLengthFeatureData.EndPoint

Gets and sets the end point of this structure system member.

## Signature

```csharp
System.Object EndPoint {get; set;}
```
## Parameters

None.

## Return Value

ISketchPoint

## Remarks

This property is valid only if
IPrimaryMemberPointLengthFeatureData::EndCondition
is
swPrimaryMemberPointLengthEndCondition_e
.swPrimaryMemberPointLengthEndCondition_UpToPoint.