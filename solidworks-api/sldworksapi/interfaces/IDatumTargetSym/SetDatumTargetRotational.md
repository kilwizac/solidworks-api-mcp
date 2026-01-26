---
type: method
interface: IDatumTargetSym
member: SetDatumTargetRotational
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
  -
    name: GeometryRef
    type: System.Boolean
    description: True to use a geometry reference, false to not; true is valid only if MoveableDatumDirection is set to swMoveableDatumDirection_e.swMoveableDatumDirectionBySelection
  -
    name: RefGeometryError
    type: System.Int32
    description: Reference geometry error as defined in swRefGeometryError_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDatumTargetSym.SetDatumTargetHorizontal
  - IDatumTargetSym.SetDatumTargetNotMoveable
keywords:
  - setdatumtargetrotational
  - idatumtargetsym
  - datum
  - target
  - sym
  - rotational
  - moveable
  - direction
  - int32
  - lock
  - leader
  - boolean
  - angle
  - double
  - geometry
  - ref
  - error
---

# IDatumTargetSym.SetDatumTargetRotational

Sets this datum target to moveable rotational.

## Signature

```csharp
System.Boolean SetDatumTargetRotational( 
   System.Int32
MoveableDatumDirection
,
   System.Boolean
LockLeader
,
   System.Double
LockLeaderAngle
,
   System.Boolean
GeometryRef
,
   out System.Int32
RefGeometryError
)
```
## Parameters

- `MoveableDatumDirection` (System.Int32): Moveable datum direction as defined in swMoveableDatumDirection_e
- `LockLeader` (System.Boolean): True to lock the leader, false to not
- `LockLeaderAngle` (System.Double): Angle of locked leader; valid only if LockLeader is set to true
- `GeometryRef` (System.Boolean): True to use a geometry reference, false to not; true is valid only if MoveableDatumDirection is set to swMoveableDatumDirection_e.swMoveableDatumDirectionBySelection
- `RefGeometryError` (System.Int32): Reference geometry error as defined in swRefGeometryError_e

## Return Value

True if datum target successfully set, false if errors

## Remarks

If GeometryRef is set to true, then select a geometry reference before calling this method.

## See Also

- `IDatumTargetSym.SetDatumTargetHorizontal`
- `IDatumTargetSym.SetDatumTargetNotMoveable`