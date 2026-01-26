---
type: property
interface: IBalloonStack
member: Length
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - length
  - iballoonstack
  - balloon
  - stack
  - int32
readonly: null
---

# IBalloonStack.Length

Gets or sets the number of notes that can be stacked before another row is started.

## Signature

```csharp
System.Int32 Length {get; set;}
```
## Parameters

None.

## Return Value

Maximum number of balloons in one row of the stack; valid values are from 2 to 100

## Remarks

Valid values are from 2 to 100. If you specify an invalid value for Length, SOLIDWORKS oes not change the balloon stack.