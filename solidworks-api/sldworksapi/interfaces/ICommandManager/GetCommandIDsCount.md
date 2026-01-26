---
type: method
interface: ICommandManager
member: GetCommandIDsCount
returns: System.Int32
parameters:
  -
    name: UserGroupId
    type: System.Int32
    description: User-defined ID of a command group
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - getcommandidscount
  - icommandmanager
  - command
  - manager
  - ds
  - count
  - user
  - group
  - id
  - int32
---

# ICommandManager.GetCommandIDsCount

Gets the number of command IDs for the given command group.

## Signature

```csharp
System.Int32 GetCommandIDsCount( 
   System.Int32
UserGroupId
)
```
## Parameters

- `UserGroupId` (System.Int32): User-defined ID of a command group

## Return Value

Number of command IDs in the given command group

## Remarks

Call this method before calling
ICommandManager::IGetGroupDataFromRegistry
to determine the size of the array for that method.