---
type: property
interface: ISecondaryMemberSupportPlaneFeatureData
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
  - isecondarymembersupportplanefeaturedata
  - secondary
  - member
  - support
  - plane
  - feature
  - data
  - un
  - chain
  - pairs
  - boolean
readonly: null
---

# ISecondaryMemberSupportPlaneFeatureData.UnChainMemberPairs

Gets and sets whether to chain member pairs to create this secondary structure system member.

## Signature

```csharp
System.Boolean UnChainMemberPairs {get; set;}
```
## Parameters

None.

## Return Value

True to pair each member passed in ISecondaryMemberSupportPlaneFeatureData::SetMemberPairs to the previous member passed, false to pair consecutive members only

## Remarks

If this property is set to true, each primary member passed to ISecondaryMemberSupportPlaneFeatureData::SetMemberPairs pairs with the previous primary member in the list to create a new member pair.
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