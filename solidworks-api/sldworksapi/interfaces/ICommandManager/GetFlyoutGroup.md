---
type: method
interface: ICommandManager
member: GetFlyoutGroup
returns: FlyoutGroup
parameters:
  -
    name: UserID
    type: System.Int32
    description: User-defined ID for the flyout
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - ICommandManager.CreateFlyoutGroup
  - ICommandManager.GetFlyoutGroups
  - ICommandManager.NumberOfFlyoutGroups
  - ICommandManager.RemoveFlyoutGroup
keywords:
  - getflyoutgroup
  - icommandmanager
  - command
  - manager
  - flyout
  - group
  - user
  - id
  - int32
  - create
  - flyouts
  - commandmanager
  - vb
  - net
---

# ICommandManager.GetFlyoutGroup

Gets the flyout with the specified ID.

## Signature

```csharp
FlyoutGroup GetFlyoutGroup( 
   System.Int32
UserID
)
```
## Parameters

- `UserID` (System.Int32): User-defined ID for the flyout

## Return Value

IFlyoutGroup

## Examples

- Create Flyouts in the CommandManager (C#) (Create_Flyouts_in_the_CommandManager_Example_CSharp.htm)
- Create Flyouts in the CommandManager (VB.NET) (Create_Flyouts_in_the_CommandManager_Example_VBNET.htm)

## See Also

- `ICommandManager.CreateFlyoutGroup`
- `ICommandManager.GetFlyoutGroups`
- `ICommandManager.NumberOfFlyoutGroups`
- `ICommandManager.RemoveFlyoutGroup`