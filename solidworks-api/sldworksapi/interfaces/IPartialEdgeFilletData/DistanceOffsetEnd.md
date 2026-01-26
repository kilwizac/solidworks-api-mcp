---
type: property
interface: IPartialEdgeFilletData
member: DistanceOffsetEnd
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
  - parts
related:
  - IPartialEdgeFilletData.DistanceOffsetStart
keywords:
  - distanceoffsetend
  - ipartialedgefilletdata
  - partial
  - edge
  - fillet
  - data
  - distance
  - offset
  - end
  - double
readonly: true
---

# IPartialEdgeFilletData.DistanceOffsetEnd

Gets the offset distance from the end point for this partial edge fillet.

## Signature

```csharp
System.Double DistanceOffsetEnd {get;}
```
## Parameters

None.

## Return Value

Distance offset from the end point

## Remarks

This property is valid only if
IPartialEdgeFilletData::EndCondition
is set to swSimpleFilletPartialEdgeCondition_e.PartialEdgeDistanceOffset.
To modify the end distance offset of the fillet after creation, you must call
IPartialEdgeFilletData::SetPartialFilletParameters
.

## See Also

- `IPartialEdgeFilletData.DistanceOffsetStart`