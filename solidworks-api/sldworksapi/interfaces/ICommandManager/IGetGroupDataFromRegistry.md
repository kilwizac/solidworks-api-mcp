---
type: method
interface: ICommandManager
member: IGetGroupDataFromRegistry
returns: System.Boolean
parameters:
  -
    name: UserGroupId
    type: System.Int32
    description: User-defined ID of a command group
  -
    name: Count
    type: System.Int32
    description: Number of command IDs in the given command group
  -
    name: UserIDs
    type: System.Int32
    description: in-process, unmanaged C++: Pointer to an array of integer IDs VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - ICommandManager.GetGroupDataFromRegistry
keywords:
  - igetgroupdatafromregistry
  - icommandmanager
  - command
  - manager
  - group
  - data
  - registry
  - user
  - id
  - int32
  - count
  - ds
  - boolean
---

# ICommandManager.IGetGroupDataFromRegistry

Gets the command IDs of the given command group from the registry.

## Signature

```csharp
System.Boolean IGetGroupDataFromRegistry( 
   System.Int32
UserGroupId
,
   System.Int32
Count
,
   out System.Int32
UserIDs
)
```
## Parameters

- `UserGroupId` (System.Int32): User-defined ID of a command group
- `Count` (System.Int32): Number of command IDs in the given command group
- `UserIDs` (System.Int32): in-process, unmanaged C++: Pointer to an array of integer IDs VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

True if successful, false if not

## Remarks

Before calling this method call
ICommandManager::GetCommandIDsCount
to populate Count.
Use this method to compare command group IDs obtained through the user interface with those stored in the registry.

## See Also

- `ICommandManager.GetGroupDataFromRegistry`