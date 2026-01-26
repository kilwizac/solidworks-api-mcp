---
type: method
interface: ISketch
member: GetAutomaticSolve
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchManager.AutoSolve
keywords:
  - automatic
  - solve
  - sketch
  - geometry
  - see
  - also
  - isketch
  - getautomaticsolve
  - boolean
---

# ISketch.GetAutomaticSolve

Checks whether the computation to solve the sketch geometry of the part as modifications are automatically performed.

## Signature

```csharp
System.Boolean GetAutomaticSolve()
```
## Parameters

None.

## Return Value

True if automatic solving is on, false if off

## Remarks

This method can be controlled with
ISketch::SetAutomaticSolve
.

## See Also

- `ISketchManager.AutoSolve`