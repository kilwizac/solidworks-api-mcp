---
type: property
interface: ICommandGroup
member: ToolbarId
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - ICommandGroup.HasToolbar
keywords:
  - toolbarid
  - icommandgroup
  - command
  - group
  - toolbar
  - id
  - int32
  - create
  - flyouts
  - commandmanager
  - vb
  - net
readonly: true
---

# ICommandGroup.ToolbarId

Gets the toolbar ID of this CommandGroup.

## Signature

```csharp
System.Int32 ToolbarId {get;}
```
## Parameters

None.

## Return Value

Toolbar ID of this CommandGroup

## Remarks

Use this property when
dragging a toolbar button
from one toolbar (native SOLIDWORKS or a CommandGroup toolbar) to another toolbar (native SOLIDWORKS or a CommandGroup toolbar).

## Examples

- Create Flyouts in the CommandManager (VB.NET) (Create_Flyouts_in_the_CommandManager_Example_VBNET.htm)
- Create Flyouts in the CommandManager (C#) (Create_Flyouts_in_the_CommandManager_Example_CSharp.htm)

## See Also

- `ICommandGroup.HasToolbar`