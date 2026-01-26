---
type: property
interface: IBalloonStack
member: Direction
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - direction
  - iballoonstack
  - balloon
  - stack
  - int32
readonly: null
---

# IBalloonStack.Direction

Gets or sets the direction of this balloon stack.

## Signature

```csharp
System.Int32 Direction {get; set;}
```
## Parameters

None.

## Return Value

Balloon stacking direction as defined in swStackedBalloonDirection_e

## Remarks

f you specify an invalid valid for Direction, SOLIDWORKS does not change the balloon stack.