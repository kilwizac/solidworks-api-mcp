---
type: method
interface: ICommandManager
member: RemoveFlyoutGroup
returns: System.Boolean
parameters:
  -
    name: UserID
    type: System.Int32
    description: User-defined ID of the flyout to remove
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - ICommandManager.CreateFlyoutGroup
  - ICommandManager.GetFlyoutGroup
  - ICommandManager.GetFlyoutGroups
  - ICommandManager.NumberOfFlyoutGroups
keywords:
  - removeflyoutgroup
  - icommandmanager
  - command
  - manager
  - remove
  - flyout
  - group
  - user
  - id
  - int32
  - boolean
  - create
  - flyouts
  - commandmanager
  - vb
  - net
---

# ICommandManager.RemoveFlyoutGroup

Removes the specified flyout from the CommandManager.

## Signature

```csharp
System.Boolean RemoveFlyoutGroup( 
   System.Int32
UserID
)
```
## Parameters

- `UserID` (System.Int32): User-defined ID of the flyout to remove

## Return Value

True if removal successful, false if not

## Examples

- Create Flyouts in the CommandManager (C#) (Create_Flyouts_in_the_CommandManager_Example_CSharp.htm)
- Create Flyouts in the CommandManager (VB.NET) (Create_Flyouts_in_the_CommandManager_Example_VBNET.htm)

## See Also

- `ICommandManager.CreateFlyoutGroup`
- `ICommandManager.GetFlyoutGroup`
- `ICommandManager.GetFlyoutGroups`
- `ICommandManager.NumberOfFlyoutGroups`