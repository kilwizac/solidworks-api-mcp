---
type: property
interface: IBalloonStack
member: Count
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - count
  - iballoonstack
  - balloon
  - stack
  - int32
readonly: true
---

# IBalloonStack.Count

Gets the number of stacked notes in this balloon stack, excluding the master balloon.

## Signature

```csharp
System.Int32 Count {get;}
```
## Parameters

None.

## Return Value

Number of balloons in this balloon stack, excluding the master balloon

## Remarks

This property does not count the master balloon in the stack, only the other stacked notes. Us
IBalloonStack::Master
to get the master balloon of the stack.