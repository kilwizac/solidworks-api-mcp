---
type: method
interface: ICommandManager
member: RemoveCommandGroup
returns: System.Boolean
parameters:
  -
    name: UserID
    type: System.Int32
    description: User-defined ID for this CommandGroup
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - ui
related:
  - ICommandManager.GetCommandGroup
  - ICommandManager.GetGroups
  - ICommandManager.IGetGroups
  - ICommandManager.NumberOfGroups
keywords:
  - removecommandgroup
  - icommandmanager
  - command
  - manager
  - remove
  - group
  - user
  - id
  - int32
  - boolean
---

# ICommandManager.RemoveCommandGroup

Obsolete. Superseded by ICommandManager::RemoveCommandGroup2.

## Signature

```csharp
System.Boolean RemoveCommandGroup( 
   System.Int32
UserID
)
```
## Parameters

- `UserID` (System.Int32): User-defined ID for this CommandGroup

## Return Value

True if the CommandGroup is removed, false if not

## Remarks

This method removes CommandGroups created using
ICommandManager::AddContextMenu
and
ICommandManager::CreateCommandGroup
.

## See Also

- `ICommandManager.GetCommandGroup`
- `ICommandManager.GetGroups`
- `ICommandManager.IGetGroups`
- `ICommandManager.NumberOfGroups`