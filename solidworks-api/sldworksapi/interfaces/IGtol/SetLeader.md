---
type: method
interface: IGtol
member: SetLeader
returns: void
parameters:
  -
    name: Leader
    type: System.Boolean
    description: True enables a leader on this symbol, false disables it
  -
    name: LeaderSide
    type: System.Int32
    description: Leader attachment information as defined in swLeaderSide_e
  -
    name: BentLeader
    type: System.Boolean
    description: True enables a bent leader on this symbol, false disables it
  -
    name: AllAround
    type: System.Boolean
    description: True enables the all around symbol on the leader, false disables it
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IGtol.GetLeaderAtIndex2
  - IGtol.GetLeaderCount
  - IGtol.GetLeaderInfo
  - IGtol.IGetLeaderAtIndex2
  - IGtol.IGetLeaderInfo
keywords:
  - leaders
  - geometric
  - tolerancing
  - setleader
  - igtol
  - gtol
  - leader
  - boolean
  - side
  - int32
  - bent
  - all
  - around
  - void
---

# IGtol.SetLeader

Sets the characteristics of the leader for this symbol.

## Signature

```csharp
void SetLeader( 
   System.Boolean
Leader
,
   System.Int32
LeaderSide
,
   System.Boolean
BentLeader
,
   System.Boolean
AllAround
)
```
## Parameters

- `Leader` (System.Boolean): True enables a leader on this symbol, false disables it
- `LeaderSide` (System.Int32): Leader attachment information as defined in swLeaderSide_e
- `BentLeader` (System.Boolean): True enables a bent leader on this symbol, false disables it
- `AllAround` (System.Boolean): True enables the all around symbol on the leader, false disables it

## Return Value

Unknown.

## Remarks

This method ignores:
LeaderSide, BentLeader, and AllAround values if the leader value is false. Use
IGtol::IsAttached
to determine if this symbol is currently using a leader.
AllAround value if the BentLeader value is false. Use
IGtol::HasExtraLeader
to determine if this symbol is using a bent leader.
Use:
IGtol::GetLeaderSide
to determine where the leader is attached to the symbol
IGtol::GetAllAround
to determine if this leader is using the all around symbol

## See Also

- `IGtol.GetLeaderAtIndex2`
- `IGtol.GetLeaderCount`
- `IGtol.GetLeaderInfo`
- `IGtol.IGetLeaderAtIndex2`
- `IGtol.IGetLeaderInfo`