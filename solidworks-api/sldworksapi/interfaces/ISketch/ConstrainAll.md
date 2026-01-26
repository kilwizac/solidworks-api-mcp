---
type: method
interface: ISketch
member: ConstrainAll
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketch.GetConstrainedStatus
keywords:
  - constraints
  - sketch
  - see
  - also
  - isketch
  - constrainall
  - constrain
  - all
  - int32
---

# ISketch.ConstrainAll

Attempts to solve all of the apparent relations in the sketch and returns the number of constraints that were added to the sketch.

## Signature

```csharp
System.Int32 ConstrainAll()
```
## Parameters

None.

## Return Value

Number of constraints added

## Remarks

f the sketch already has constraints, then no constraints are added (in the same
way that the user-interface button
Constrain All
can only be pressed once for a sketch.)

## See Also

- `ISketch.GetConstrainedStatus`