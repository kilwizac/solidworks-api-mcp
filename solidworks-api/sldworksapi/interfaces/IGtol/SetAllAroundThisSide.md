---
type: method
interface: IGtol
member: SetAllAroundThisSide
returns: void
parameters:
  -
    name: AllAroundTS
    type: System.Boolean
    description: True to use an All Around This Side leader, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IGtol.GetAllAroundThisSide
  - IGtol.SetAllOverThisSide
keywords:
  - setallaroundthisside
  - igtol
  - gtol
  - all
  - around
  - side
  - ts
  - boolean
  - void
---

# IGtol.SetAllAroundThisSide

Sets whether this GTol uses an All Around This Side leader.

## Signature

```csharp
void SetAllAroundThisSide( 
   System.Boolean
AllAroundTS
)
```
## Parameters

- `AllAroundTS` (System.Boolean): True to use an All Around This Side leader, false to not

## Return Value

Unknown.

## Remarks

This property is valid only for bent, perpendicular, and multi-jog leaders. To create bent, perpendicular, and multi-jog leaders, use
IAnnotation::SetLeader3
.
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
- `IGtol.SetAllOverThisSide`