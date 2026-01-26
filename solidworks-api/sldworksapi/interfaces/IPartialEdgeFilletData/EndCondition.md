---
type: property
interface: IPartialEdgeFilletData
member: EndCondition
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
  - parts
related:
  - IPartialEdgeFilletData.DistanceOffsetEnd
  - IPartialEdgeFilletData.PercentOffsetEnd
  - IPartialEdgeFilletData.ReferenceOffsetEnd
  - IPartialEdgeFilletData.StartCondition
keywords:
  - endcondition
  - ipartialedgefilletdata
  - partial
  - edge
  - fillet
  - data
  - end
  - condition
  - int32
readonly: true
---

# IPartialEdgeFilletData.EndCondition

Gets the type of end condition for this partial edge fillet.

## Signature

```csharp
System.Int32 EndCondition {get;}
```
## Parameters

None.

## Return Value

End condition as defined in swSimpleFilletPartialEdgeCondition_e

## Remarks

To modify the end condition of the fillet after creation, you must call
IPartialEdgeFilletData::SetPartialFilletParameters
.

## See Also

- `IPartialEdgeFilletData.DistanceOffsetEnd`
- `IPartialEdgeFilletData.PercentOffsetEnd`
- `IPartialEdgeFilletData.ReferenceOffsetEnd`
- `IPartialEdgeFilletData.StartCondition`