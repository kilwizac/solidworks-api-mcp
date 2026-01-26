---
type: property
interface: IPartialEdgeFilletData
member: DistanceOffsetStart
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
  - IPartialEdgeFilletData.DistanceOffsetEnd
keywords:
  - distanceoffsetstart
  - ipartialedgefilletdata
  - partial
  - edge
  - fillet
  - data
  - distance
  - offset
  - start
  - double
readonly: true
---

# IPartialEdgeFilletData.DistanceOffsetStart

Gets the offset distance from the start point for this partial edge fillet.

## Signature

```csharp
System.Double DistanceOffsetStart {get;}
```
## Parameters

None.

## Return Value

Distance offset from the start point

## Remarks

This property is valid only if
IPartialEdgeFilletData::StartCondition
is set to swSimpleFilletPartialEdgeCondition_e.PartialEdgeDistanceOffset.
To modify the start distance offset of the fillet after creation, you must call
IPartialEdgeFilletData::SetPartialFilletParameters
.

## See Also

- `IPartialEdgeFilletData.DistanceOffsetEnd`