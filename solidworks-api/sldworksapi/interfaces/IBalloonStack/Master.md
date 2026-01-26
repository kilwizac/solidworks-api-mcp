---
type: property
interface: IBalloonStack
member: Master
returns: Note
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - master
  - iballoonstack
  - balloon
  - stack
  - note
readonly: true
---

# IBalloonStack.Master

Gets the master note in this balloon stack.

## Signature

```csharp
Note Master {get;}
```
## Parameters

None.

## Return Value

Master note in this balloon stack

## Remarks

Use
IBalloonStack::Stack
or
IBalloonStack::IGetStack
to get all of the other balloons in this balloon stack.