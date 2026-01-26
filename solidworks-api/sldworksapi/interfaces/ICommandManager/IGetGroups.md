---
type: method
interface: ICommandManager
member: IGetGroups
returns: System.Intptr
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of CommandGroups in this CommandManager
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - ICommandManager.GetCommandGroup
  - ICommandManager.GetGroups
  - ICommandManager.NumberOfGroups
  - ICommandManager.RemoveCommandGroup
keywords:
  - igetgroups
  - icommandmanager
  - command
  - manager
  - groups
  - count
  - int32
  - intptr
---

# ICommandManager.IGetGroups

Gets the CommandGroups in the CommandManager.

## Signature

```csharp
System.IntPtr IGetGroups( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of CommandGroups in this CommandManager

## Return Value

in-process, unmanaged C++: Pointer to an array of ICommandGroup objects in the CommandManager VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
ICommandManager::NumberOfGroups
to determine the size of the array.

## See Also

- `ICommandManager.GetCommandGroup`
- `ICommandManager.GetGroups`
- `ICommandManager.NumberOfGroups`
- `ICommandManager.RemoveCommandGroup`