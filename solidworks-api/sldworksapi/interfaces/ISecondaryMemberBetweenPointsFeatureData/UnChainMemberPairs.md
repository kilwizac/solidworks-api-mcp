---
type: property
interface: ISecondaryMemberBetweenPointsFeatureData
member: UnChainMemberPairs
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - unchainmemberpairs
  - isecondarymemberbetweenpointsfeaturedata
  - secondary
  - member
  - between
  - points
  - feature
  - data
  - un
  - chain
  - pairs
  - boolean
readonly: null
---

# ISecondaryMemberBetweenPointsFeatureData.UnChainMemberPairs

Gets and sets whether to chain member pairs to create this secondary structure system member.

## Signature

```csharp
System.Boolean UnChainMemberPairs {get; set;}
```
## Parameters

None.

## Return Value

True to pair each member passed in ISecondaryMemberBetweenPointsFeatureData::SetMemberPairs to the previous member passed, false to pair consecutive members only

## Remarks

If this property is set to true, each primary member passed to ISecondaryMemberBetweenPointsFeatureData::SetMemberPairs pairs with the previous primary member to create a new member pair.
For the list of members A,B,C,D,E,F:
If this property is set to true, then 5 member pairs are created:
A -- B
B -- C
C -- D
D -- E
E -- F
If this property is set to false, then only 3 member pairs are created:
A -- B
C -- D
E -- F