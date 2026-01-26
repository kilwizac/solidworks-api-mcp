---
type: method
interface: IGtol
member: GetAllAroundThisSide
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IGtol.GetAllOverThisSide
  - IGtol.SetAllAroundThisSide
keywords:
  - getallaroundthisside
  - igtol
  - gtol
  - all
  - around
  - side
  - boolean
---

# IGtol.GetAllAroundThisSide

Gets whether this GTol uses an All Around This Side leader.

## Signature

```csharp
System.Boolean GetAllAroundThisSide()
```
## Parameters

None.

## Return Value

True if this GTol uses an All Around This Side leader, false if not

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

- `IGtol.GetAllOverThisSide`
- `IGtol.SetAllAroundThisSide`