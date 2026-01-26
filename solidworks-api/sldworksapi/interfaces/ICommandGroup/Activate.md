---
type: method
interface: ICommandGroup
member: Activate
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - ICommandGroup.MenuPosition
keywords:
  - activate
  - icommandgroup
  - command
  - group
  - boolean
  - create
  - flyouts
  - commandmanager
  - vb
  - net
  - submenus
---

# ICommandGroup.Activate

Activates the CommandGroup.

## Signature

```csharp
System.Boolean Activate()
```
## Parameters

None.

## Return Value

True if the CommandGroup is activated, false if not

## Remarks

After completely creating a CommandGroup, use this method to activate it.
You only need to activate the top-level group; you do not need to activate child groups.

## Examples

- Create Flyouts in the CommandManager (C#) (Create_Flyouts_in_the_CommandManager_Example_CSharp.htm)
- Create Flyouts in the CommandManager (VB.NET) (Create_Flyouts_in_the_CommandManager_Example_VBNET.htm)
- Create Submenus in the CommandManager (C#) (Create_Submenus_in_the_CommandManager_Example_CSharp.htm)

## See Also

- `ICommandGroup.MenuPosition`