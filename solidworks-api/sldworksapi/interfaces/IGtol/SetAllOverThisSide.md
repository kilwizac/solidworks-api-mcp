---
type: method
interface: IGtol
member: SetAllOverThisSide
returns: void
parameters:
  -
    name: AllOverTS
    type: System.Boolean
    description: True to use an All Over This Side leader, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IGtol.GetAllOverThisSide
  - IGtol.SetAllAroundThisSide
keywords:
  - setalloverthisside
  - igtol
  - gtol
  - all
  - over
  - side
  - ts
  - boolean
  - void
---

# IGtol.SetAllOverThisSide

Sets whether this Gtol uses an All Over This Side leader.

## Signature

```csharp
void SetAllOverThisSide( 
   System.Boolean
AllOverTS
)
```
## Parameters

- `AllOverTS` (System.Boolean): True to use an All Over This Side leader, false to not

## Return Value

Unknown.

## Remarks

This property is valid only for bent, perpendicular, and multi-jog leaders.
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