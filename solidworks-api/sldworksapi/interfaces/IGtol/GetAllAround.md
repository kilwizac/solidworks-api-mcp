---
type: method
interface: IGtol
member: GetAllAround
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IGtol.GetAllAroundThisSide
  - IGtol.GetAllOverThisSide
keywords:
  - getallaround
  - igtol
  - gtol
  - all
  - around
  - boolean
---

# IGtol.GetAllAround

Gets whether this GTol uses an All Around leader.

## Signature

```csharp
System.Boolean GetAllAround()
```
## Parameters

None.

## Return Value

True if this GTol uses an All Around leader, false if not

## Remarks

This property is valid only for bent, perpendicular, and multi-jog leaders. Call
IGtol::GetLeaderAtIndex2
to determine which type of leader is set for this GTol.
Use:
IGtol::IsAttached
to determine whether this symbol is currently using a leader.
IGtol::HasExtraLeader
to determine whether this symbol is using a bent leader.
IGtol::GetLeaderSide
to determine where the leader is attached to the symbol.
IGtol::SetLeader
to set the characteristics of the leader on this symbol.

## See Also

- `IGtol.GetAllAroundThisSide`
- `IGtol.GetAllOverThisSide`