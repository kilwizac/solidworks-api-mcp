---
type: property
interface: IPartialEdgeFilletData
member: StartCondition
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
  - IPartialEdgeFilletData.DistanceOffsetStart
  - IPartialEdgeFilletData.EndCondition
  - IPartialEdgeFilletData.PercentOffsetStart
  - IPartialEdgeFilletData.ReferenceOffsetStart
keywords:
  - startcondition
  - ipartialedgefilletdata
  - partial
  - edge
  - fillet
  - data
  - start
  - condition
  - int32
readonly: true
---

# IPartialEdgeFilletData.StartCondition

Gets the type of start condition for this partial edge fillet.

## Signature

```csharp
System.Int32 StartCondition {get;}
```
## Parameters

None.

## Return Value

Start condition as defined in swSimpleFilletPartialEdgeCondition_e

## Remarks

To modify the start condition of the fillet after creation, you must call
IPartialEdgeFilletData::SetPartialFilletParameters
.

## See Also

- `IPartialEdgeFilletData.DistanceOffsetStart`
- `IPartialEdgeFilletData.EndCondition`
- `IPartialEdgeFilletData.PercentOffsetStart`
- `IPartialEdgeFilletData.ReferenceOffsetStart`