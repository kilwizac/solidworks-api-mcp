---
type: property
interface: ICommandGroup
member: HasEnabledButton
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - ICommandGroup.AddCommandItem2
keywords:
  - hasenabledbutton
  - icommandgroup
  - command
  - group
  - has
  - enabled
  - button
  - boolean
  - create
  - flyouts
  - commandmanager
  - vb
  - net
readonly: true
---

# ICommandGroup.HasEnabledButton

Gets whether any buttons in this CommandGroup are enabled.

## Signature

```csharp
System.Boolean HasEnabledButton {get;}
```
## Parameters

None.

## Return Value

True if at least one CommandGroup button is enabled, false if not

## Remarks

Add-in applications can call this method to determine whether to disable flyout buttons in the CommandManager.

## Examples

- Create Flyouts in the CommandManager (C#) (Create_Flyouts_in_the_CommandManager_Example_CSharp.htm)
- Create Flyouts in the CommandManager (VB.NET) (Create_Flyouts_in_the_CommandManager_Example_VBNET.htm)

## See Also

- `ICommandGroup.AddCommandItem2`