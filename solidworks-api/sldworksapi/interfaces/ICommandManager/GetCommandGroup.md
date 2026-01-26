---
type: method
interface: ICommandManager
member: GetCommandGroup
returns: CommandGroup
parameters:
  -
    name: UserID
    type: System.Int32
    description: User-defined ID for this CommandGroup
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - ICommandManager.GetGroups
  - ICommandManager.IGetGroups
  - ICommandManager.NumberOfGroups
  - ICommandManager.RemoveCommandGroup
keywords:
  - getcommandgroup
  - icommandmanager
  - command
  - manager
  - group
  - user
  - id
  - int32
---

# ICommandManager.GetCommandGroup

Gets the CommandGroup using the specified ID.

## Signature

```csharp
CommandGroup GetCommandGroup( 
   System.Int32
UserID
)
```
## Parameters

- `UserID` (System.Int32): User-defined ID for this CommandGroup

## Return Value

Pointer to ICommandGroup object

## See Also

- `ICommandManager.GetGroups`
- `ICommandManager.IGetGroups`
- `ICommandManager.NumberOfGroups`
- `ICommandManager.RemoveCommandGroup`