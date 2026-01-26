---
type: method
interface: IDatumTargetSym
member: SetDatumTargetHorizontal
returns: System.Boolean
parameters:
  -
    name: MoveableDatumDirection
    type: System.Int32
    description: Moveable datum direction as defined in swMoveableDatumDirection_e
  -
    name: LockLeader
    type: System.Boolean
    description: True to lock the leader, false to not
  -
    name: LockLeaderAngle
    type: System.Double
    description: Angle of locked leader; valid only if LockLeader is set to true
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDatumTargetSym.SetDatumTargetNotMoveable
  - IDatumTargetSym.SetDatumTargetRotational
keywords:
  - setdatumtargethorizontal
  - idatumtargetsym
  - datum
  - target
  - sym
  - horizontal
  - moveable
  - direction
  - int32
  - lock
  - leader
  - boolean
  - angle
  - double
---

# IDatumTargetSym.SetDatumTargetHorizontal

Sets this datum target to moveable horizontal.

## Signature

```csharp
System.Boolean SetDatumTargetHorizontal( 
   System.Int32
MoveableDatumDirection
,
   System.Boolean
LockLeader
,
   System.Double
LockLeaderAngle
)
```
## Parameters

- `MoveableDatumDirection` (System.Int32): Moveable datum direction as defined in swMoveableDatumDirection_e
- `LockLeader` (System.Boolean): True to lock the leader, false to not
- `LockLeaderAngle` (System.Double): Angle of locked leader; valid only if LockLeader is set to true

## Return Value

True if this datum target is successfully set, false if not

## See Also

- `IDatumTargetSym.SetDatumTargetNotMoveable`
- `IDatumTargetSym.SetDatumTargetRotational`