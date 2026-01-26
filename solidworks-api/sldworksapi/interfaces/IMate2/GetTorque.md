---
type: method
interface: IMate2
member: GetTorque
returns: MathVector
parameters:
  -
    name: Angle
    type: System.Double
    description: Angle
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IMate2.GetForce
  - IMate2.SetForce
  - IMate2.SetTorque
keywords:
  - torque
  - mates
  - see
  - also
  - imate2
  - motion
  - studies
  - gettorque
  - mate2
  - angle
  - double
  - math
  - vector
---

# IMate2.GetTorque

Gets the angle and the axis of the torque applied to this mate.

## Signature

```csharp
MathVector GetTorque( 
   out System.Double
Angle
)
```
## Parameters

- `Angle` (System.Double): Angle

## Return Value

Axis

## See Also

- `IMate2.GetForce`
- `IMate2.SetForce`
- `IMate2.SetTorque`