---
type: property
interface: IBalloonStack
member: Stack
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IBalloonStack.IGetStack
keywords:
  - stack
  - iballoonstack
  - balloon
  - object
readonly: true
---

# IBalloonStack.Stack

Gets the stacked notes in this balloon stack, excluding the master balloon.

## Signature

```csharp
System.Object Stack {get;}
```
## Parameters

None.

## Return Value

Array notes in the balloon stack

## Remarks

This method does not return the master balloon in the stack, only the other stacked notes. Use
IBalloonStack::Master
to get the master balloon of the stack.

## See Also

- `IBalloonStack.IGetStack`