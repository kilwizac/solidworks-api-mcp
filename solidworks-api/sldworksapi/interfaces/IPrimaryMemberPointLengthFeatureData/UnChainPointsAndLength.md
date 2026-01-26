---
type: property
interface: IPrimaryMemberPointLengthFeatureData
member: UnChainPointsAndLength
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - unchainpointsandlength
  - iprimarymemberpointlengthfeaturedata
  - primary
  - member
  - point
  - length
  - feature
  - data
  - un
  - chain
  - points
  - boolean
readonly: null
---

# IPrimaryMemberPointLengthFeatureData.UnChainPointsAndLength

Gets and sets whether to chain points to create this primary structure system member.

## Signature

```csharp
System.Boolean UnChainPointsAndLength {get; set;}
```
## Parameters

None.

## Return Value

True to pair each point passed in IPrimaryMemberPointLengthFeatureData::SetPoints to the previous point in the list, false to pair consecutive points only

## Remarks

This property is valid only if
IPrimaryMemberPointLengthFeatureData::EndCondition
is
swPrimaryMemberPointLengthEndCondition_e
.swPrimaryMemberPointLengthEndCondition_Point.
If this property is set to true, each point passed to
IPrimaryMemberPointLengthFeatureData::SetPoints
pairs with the previous point in the list to create a new member.
For the list of points A,B,C,D,E,F:
If this property is set to true, then 5 members are created:
A -- B
B -- C
C -- D
D -- E
E -- F
If this property is set to false, then only 3 members are created:
A -- B
C -- D
E -- F