---
type: property
interface: ICommandGroup
member: DockingState
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - ICommandGroup.HasToolbar
  - ICommandGroup.SetToolbarVisibility
  - ICommandGroup.ToolbarId
keywords:
  - dockingstate
  - icommandgroup
  - command
  - group
  - docking
  - state
  - int32
readonly: null
---

# ICommandGroup.DockingState

Gets or sets the docking state of the toolbar in the CommandGroup.

## Signature

```csharp
System.Int32 DockingState {get; set;}
```
## Parameters

None.

## Return Value

Docking state of the toolbar as defined in swToolbarDockStatePosition_e

## See Also

- `ICommandGroup.HasToolbar`
- `ICommandGroup.SetToolbarVisibility`
- `ICommandGroup.ToolbarId`