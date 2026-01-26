---
type: method
interface: IMate2
member: SetTorque
returns: System.Boolean
parameters:
  -
    name: Angle
    type: System.Double
    description: Angle
  -
    name: Axis
    type: MathVector
    description: Axis
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IMate2.GetForce
  - IMate2.GetTorque
  - IMate2.SetForce
keywords:
  - torque
  - mates
  - see
  - also
  - imate2
  - motion
  - studies
  - settorque
  - mate2
  - angle
  - double
  - axis
  - math
  - vector
  - boolean
---

# IMate2.SetTorque

Sets the angle and the axis of the torque to apply to this mate.

## Signature

```csharp
System.Boolean SetTorque( 
   System.Double
Angle
,
   MathVector
Axis
)
```
## Parameters

- `Angle` (System.Double): Angle
- `Axis` (MathVector): Axis

## Return Value

True if the operation succeeds, false if not

## See Also

- `IMate2.GetForce`
- `IMate2.GetTorque`
- `IMate2.SetForce`