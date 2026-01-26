---
type: method
interface: IBeltChainFeatureData
member: GetMemberIndex
returns: System.Int32
parameters:
  -
    name: PulleyCompObject
    type: System.Object
    description: Pulley component
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - getmemberindex
  - ibeltchainfeaturedata
  - belt
  - chain
  - feature
  - data
  - member
  - index
  - pulley
  - comp
  - object
  - int32
---

# IBeltChainFeatureData.GetMemberIndex

Gets the index of the specified pulley member.

## Signature

```csharp
System.Int32 GetMemberIndex( 
   System.Object
PulleyCompObject
)
```
## Parameters

- `PulleyCompObject` (System.Object): Pulley component

## Return Value

Zero-based index value

## Remarks

To specify PulleyCompObject, use
IBeltChainFeatureData::PulleyComponents
.