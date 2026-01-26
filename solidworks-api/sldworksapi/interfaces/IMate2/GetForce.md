---
type: method
interface: IMate2
member: GetForce
returns: MathVector
parameters:
  -
    name: Magnitude
    type: System.Double
    description: Magnitude
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IMate2.GetTorque
  - IMate2.SetForce
  - IMate2.SetTorque
keywords:
  - force
  - mates
  - see
  - also
  - imate2
  - motion
  - studies
  - getforce
  - mate2
  - magnitude
  - double
  - math
  - vector
---

# IMate2.GetForce

Gets the magnitude and direction of the force applied to this mate.

## Signature

```csharp
MathVector GetForce( 
   out System.Double
Magnitude
)
```
## Parameters

- `Magnitude` (System.Double): Magnitude

## Return Value

Direction

## See Also

- `IMate2.GetTorque`
- `IMate2.SetForce`
- `IMate2.SetTorque`