---
type: method
interface: ISldWorks
member: SetMouseDragMode
returns: System.Boolean
parameters:
  -
    name: Command
    type: System.Int32
    description: Command mode that you want to check as defined in swMouseDragMode_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.GetMouseDragMode
keywords:
  - mouse
  - see
  - also
  - imouse
  - mode
  - setmousedragmode
  - isldworks
  - sld
  - works
  - drag
  - command
  - int32
  - boolean
---

# ISldWorks.SetMouseDragMode

Sets the command-mouse mode.

## Signature

```csharp
System.Boolean SetMouseDragMode( 
   System.Int32
Command
)
```
## Parameters

- `Command` (System.Int32): Command mode that you want to check as defined in swMouseDragMode_e

## Return Value

True if the specified command mode was set, false if not

## See Also

- `ISldWorks.GetMouseDragMode`