---
type: property
interface: ISimulation
member: Duration
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - documents
related: []
keywords:
  - duration
  - isimulation
  - simulation
  - double
readonly: true
---

# ISimulation.Duration

Obsolete. Not superseded.

## Signature

```csharp
System.Double Duration {get;}
```
## Parameters

None.

## Return Value

Elapsed time in seconds

## Remarks

If the Physical Simulation has not yet been calculated, then the return value is 0.0.
The return value represents the length of time that the simulation is expected to last. This means that if a bouncing ball takes 15 seconds to come to a stop, then this property returns a value of 15.