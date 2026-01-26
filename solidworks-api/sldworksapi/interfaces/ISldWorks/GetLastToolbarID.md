---
type: method
interface: ISldWorks
member: GetLastToolbarID
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ICommandGroup
  - ISldWorks.GetCommandID
  - ISldWorks.GetCommandManager
keywords:
  - toolbars
  - getlasttoolbarid
  - isldworks
  - sld
  - works
  - last
  - toolbar
  - id
  - int32
---

# ISldWorks.GetLastToolbarID

Gets the ID of the last toolbar added to the CommandManager.

## Signature

```csharp
System.Int32 GetLastToolbarID()
```
## Parameters

None.

## Return Value

ID of the last toolbar added to the CommandManager

## Remarks

See
CommandManager and CommandGroups
to learn how to create a CommandManager and add and remove CommandGroups.

## See Also

- `ICommandGroup`
- `ISldWorks.GetCommandID`
- `ISldWorks.GetCommandManager`