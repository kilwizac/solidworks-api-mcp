---
type: method
interface: IMate2
member: SetForce
returns: System.Boolean
parameters:
  -
    name: Magnitude
    type: System.Double
    description: Magnitude
  -
    name: Direction
    type: MathVector
    description: Direction
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IMate2.GetForce
  - IMate2.GetTorque
  - IMate2.SetTorque
keywords:
  - force
  - mates
  - see
  - also
  - imate2
  - motion
  - studies
  - setforce
  - mate2
  - magnitude
  - double
  - direction
  - math
  - vector
  - boolean
---

# IMate2.SetForce

Sets the magnitude and direction of the force to apply to this mate.

## Signature

```csharp
System.Boolean SetForce( 
   System.Double
Magnitude
,
   MathVector
Direction
)
```
## Parameters

- `Magnitude` (System.Double): Magnitude
- `Direction` (MathVector): Direction

## Return Value

True if the operation succeeds, false if not

## See Also

- `IMate2.GetForce`
- `IMate2.GetTorque`
- `IMate2.SetTorque`