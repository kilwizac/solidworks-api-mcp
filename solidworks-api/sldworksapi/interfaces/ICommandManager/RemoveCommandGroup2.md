---
type: method
interface: ICommandManager
member: RemoveCommandGroup2
returns: System.Int32
parameters:
  -
    name: UserID
    type: System.Int32
    description: User-defined ID of the CommandGroup to remove
  -
    name: RuntimeOnly
    type: System.Boolean
    description: True to remove the CommandGroup , saving its toolbar information in the registry; false to remove both the CommandGroup and its toolbar information in the registry
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - removecommandgroup2
  - icommandmanager
  - command
  - manager
  - remove
  - group2
  - user
  - id
  - int32
  - runtime
  - only
  - boolean
---

# ICommandManager.RemoveCommandGroup2

Removes the specified CommandGroup from the CommandManager.

## Signature

```csharp
System.Int32 RemoveCommandGroup2( 
   System.Int32
UserID
,
   System.Boolean
RuntimeOnly
)
```
## Parameters

- `UserID` (System.Int32): User-defined ID of the CommandGroup to remove
- `RuntimeOnly` (System.Boolean): True to remove the CommandGroup , saving its toolbar information in the registry; false to remove both the CommandGroup and its toolbar information in the registry

## Return Value

Error code as defined in swRemoveCommandGroupErrors

## Remarks

This method removes CommandGroups created using
ICommandManager::AddContextMenu
and
ICommandManager::CreateCommandGroup2
.