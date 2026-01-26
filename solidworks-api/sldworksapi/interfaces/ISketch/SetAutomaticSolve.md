---
type: method
interface: ISketch
member: SetAutomaticSolve
returns: System.Boolean
parameters:
  -
    name: SolveFlag
    type: System.Boolean
    description: True if solving is on, false if it is off
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - IModelDoc2.AutoSolveToggle
keywords:
  - automatic
  - solve
  - sketch
  - geometry
  - see
  - also
  - isketch
  - setautomaticsolve
  - flag
  - boolean
---

# ISketch.SetAutomaticSolve

Controls whether the computation to solve the sketch geometry of the part as modifications are automatically performed.

## Signature

```csharp
System.Boolean SetAutomaticSolve( 
   System.Boolean
SolveFlag
)
```
## Parameters

- `SolveFlag` (System.Boolean): True if solving is on, false if it is off

## Return Value

True if set, false if not

## Remarks

If an application is making many changes in a sketch, then the
Automatic Solve
option may be turned off temporarily. After changes are completed, this option should be restored to its previous value, which can be obtained by calling
ISketch::GetAutomaticSolve
before calling this method.

## See Also

- `IModelDoc2.AutoSolveToggle`