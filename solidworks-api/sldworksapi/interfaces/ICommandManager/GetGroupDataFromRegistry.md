---
type: method
interface: ICommandManager
member: GetGroupDataFromRegistry
returns: System.Boolean
parameters:
  -
    name: UserGroupId
    type: System.Int32
    description: User-defined ID of a command group
  -
    name: UserIDs
    type: System.Object
    description: Array of command IDs for the given command group
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - ICommandManager.IGetGroupDataFromRegistry
keywords:
  - getgroupdatafromregistry
  - icommandmanager
  - command
  - manager
  - group
  - data
  - registry
  - user
  - id
  - int32
  - ds
  - object
  - boolean
  - create
  - flyouts
  - commandmanager
  - vb
  - net
---

# ICommandManager.GetGroupDataFromRegistry

Gets the command IDs of the given command group from the registry.

## Signature

```csharp
System.Boolean GetGroupDataFromRegistry( 
   System.Int32
UserGroupId
,
   out System.Object
UserIDs
)
```
## Parameters

- `UserGroupId` (System.Int32): User-defined ID of a command group
- `UserIDs` (System.Object): Array of command IDs for the given command group

## Return Value

True if successful, false if not

## Remarks

Call this API before calling
ICommandManager::CreateCommandGroup2
. The array of command IDs returned by this method helps you decide how to set the IgnorePreviousVersion parameter of ICommandManager::CreateCommandGroup2.

## Examples

- Create Flyouts in the CommandManager (VB.NET) (Create_Flyouts_in_the_CommandManager_Example_VBNET.htm)
- Create Flyouts in the CommandManager (C#) (Create_Flyouts_in_the_CommandManager_Example_CSharp.htm)

## See Also

- `ICommandManager.IGetGroupDataFromRegistry`