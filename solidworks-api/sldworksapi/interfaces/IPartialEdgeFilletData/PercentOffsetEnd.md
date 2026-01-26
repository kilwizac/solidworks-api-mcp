---
type: property
interface: IPartialEdgeFilletData
member: PercentOffsetEnd
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
  - IPartialEdgeFilletData.PercentOffsetStart
keywords:
  - percentoffsetend
  - ipartialedgefilletdata
  - partial
  - edge
  - fillet
  - data
  - percent
  - offset
  - end
  - double
readonly: true
---

# IPartialEdgeFilletData.PercentOffsetEnd

Gets the percentage offset from the end point for this partial edge fillet.

## Signature

```csharp
System.Double PercentOffsetEnd {get;}
```
## Parameters

None.

## Return Value

0.0 <= percentage offset from the end point < 100.0

## Remarks

This property is valid only if
IPartialEdgeFilletData::EndCondition
is  swSimpleFilletPartialEdgeCondition_e.PartialEdgePercentOffset.
To modify the end percent offset of the fillet after creation, you must call
IPartialEdgeFilletData::SetPartialFilletParameters
.

## See Also

- `IPartialEdgeFilletData.PercentOffsetStart`