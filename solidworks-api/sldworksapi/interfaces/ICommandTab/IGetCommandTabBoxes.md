---
type: method
interface: ICommandTab
member: IGetCommandTabBoxes
returns: CommandTabBox
parameters:
  -
    name: TabBoxCount
    type: System.Int32
    description: Number of CommandManager tab boxes on this CommandManager tab
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - ICommandTab.AddCommandTabBox
  - ICommandTab.CommandTabBoxes
  - ICommandTab.RemoveCommandTabBox
keywords:
  - igetcommandtabboxes
  - icommandtab
  - command
  - tab
  - boxes
  - box
  - count
  - int32
---

# ICommandTab.IGetCommandTabBoxes

Gets the CommandManager tab boxes on this CommandManager tab.

## Signature

```csharp
CommandTabBox IGetCommandTabBoxes( 
   System.Int32
TabBoxCount
)
```
## Parameters

- `TabBoxCount` (System.Int32): Number of CommandManager tab boxes on this CommandManager tab

## Return Value

in-process, unmanaged C++: Pointer to an array of CommandManager tab boxes on this CommandManager tab VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
ICommandTab::GetCommandTabBoxCount
before calling this method to get the value of TabBoxCount.

## See Also

- `ICommandTab.AddCommandTabBox`
- `ICommandTab.CommandTabBoxes`
- `ICommandTab.RemoveCommandTabBox`