---
type: property
interface: ICommandGroup
member: CommandID
returns: System.Int32
parameters:
  -
    name: CommandIndex
    type: System.Int32
    description: Index of the item in the CommandGroup
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - ICommandGroup.NumberOfGroupItems
  - ISldWorks.GetCommandID
keywords:
  - id
  - command
  - commandid
  - icommandgroup
  - group
  - index
  - int32
  - create
  - flyouts
  - commandmanager
  - vb
  - net
readonly: true
---

# ICommandGroup.CommandID

Gets the command ID for the specified item in the CommandGroup.

## Signature

```csharp
System.Int32 CommandID( 
   System.Int32
CommandIndex
) {get;}
```
## Parameters

- `CommandIndex` (System.Int32): Index of the item in the CommandGroup

## Return Value

Command ID of the specified item

## Remarks

The value of CommandIndex is the value returned by
ICommandGroup::AddCommandItem2
.

## Examples

- Create Flyouts in the CommandManager (C#) (Create_Flyouts_in_the_CommandManager_Example_CSharp.htm)
- Create Flyouts in the CommandManager (VB.NET) (Create_Flyouts_in_the_CommandManager_Example_VBNET.htm)

## See Also

- `ICommandGroup.NumberOfGroupItems`
- `ISldWorks.GetCommandID`