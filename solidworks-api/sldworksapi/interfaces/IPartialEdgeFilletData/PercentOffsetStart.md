---
type: property
interface: IPartialEdgeFilletData
member: PercentOffsetStart
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
  - IPartialEdgeFilletData.PercentOffsetEnd
keywords:
  - percentoffsetstart
  - ipartialedgefilletdata
  - partial
  - edge
  - fillet
  - data
  - percent
  - offset
  - start
  - double
readonly: true
---

# IPartialEdgeFilletData.PercentOffsetStart

Gets the percentage offset from the start point for this partial edge fillet.

## Signature

```csharp
System.Double PercentOffsetStart {get;}
```
## Parameters

None.

## Return Value

0.0 <= percentage offset from the start point < 100.0

## Remarks

This property is valid only if
IPartialEdgeFilletData::StartCondition
is  swSimpleFilletPartialEdgeCondition_e.PartialEdgePercentOffset.
To modify the start percent offset of the fillet after creation, you must call
IPartialEdgeFilletData::SetPartialFilletParameters
.

## See Also

- `IPartialEdgeFilletData.PercentOffsetEnd`