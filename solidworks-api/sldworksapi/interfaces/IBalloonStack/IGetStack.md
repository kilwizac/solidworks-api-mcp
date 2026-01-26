---
type: method
interface: IBalloonStack
member: IGetStack
returns: Note
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of balloons
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IBalloonStack.Stack
keywords:
  - igetstack
  - iballoonstack
  - balloon
  - stack
  - count
  - int32
  - note
---

# IBalloonStack.IGetStack

Gets the stacked notes in this balloon stack, excluding the master balloon.

## Signature

```csharp
Note IGetStack( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of balloons

## Return Value

in-process, unmanaged C++: Pointer to an array of stacked notes of size Count in the balloon stack VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Use
IBalloonStack::Count
to get the number of balloons in the balloon stack.
This method does not return the master balloon in the stack, only the other stacked notes. Use
IBalloonStack::Master
to get the master balloon of the stack.

## See Also

- `IBalloonStack.Stack`