---
type: method
interface: ICommandTab
member: GetCommandTabBoxCount
returns: System.Int32
parameters: []
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
  - getcommandtabboxcount
  - icommandtab
  - command
  - tab
  - box
  - count
  - int32
---

# ICommandTab.GetCommandTabBoxCount

Gets the number of tab boxes on this CommandManager tab.

## Signature

```csharp
System.Int32 GetCommandTabBoxCount()
```
## Parameters

None.

## Return Value

Number of CommandManager tab boxes on this CommandManager tab

## Remarks

Call this method before calling
ICommandTab::IGetCommandTabBoxes
to get the size of the array for that method.

## See Also

- `ICommandTab.AddCommandTabBox`
- `ICommandTab.CommandTabBoxes`
- `ICommandTab.RemoveCommandTabBox`