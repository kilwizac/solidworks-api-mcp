---
type: property
interface: IModelDocExtension
member: CommandTabVisible
returns: System.Boolean
parameters:
  -
    name: TabIndex
    type: System.Int32
    description: Index of the tab for which to get or set visibility
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.ActiveCommandTab
  - IModelDocExtension.ActiveCommandTabIndex
  - IModelDocExtension.GetCommandTabs
keywords:
  - command
  - manager
  - see
  - also
  - icommandmanager
  - tabs
  - commandtab
  - icommandtab
  - commandtabvisible
  - imodeldocextension
  - model
  - doc
  - extension
  - tab
  - visible
  - index
  - int32
  - boolean
  - activate
  - solidworks
  - commandmanager
  - vba
  - vb
  - net
readonly: null
---

# IModelDocExtension.CommandTabVisible

Gets and sets the visibility of the specified SOLIDWORKS CommandManager tab.

## Signature

```csharp
System.Boolean CommandTabVisible( 
   System.Int32
TabIndex
) {get; set;}
```
## Parameters

- `TabIndex` (System.Int32): Index of the tab for which to get or set visibility

## Return Value

True to make the tab visible, false to not

## Examples

- Activate SOLIDWORKS CommandManager Tab (VBA) (Activate_SOLIDWORKS_CommandManager_Tab_Example_VB.htm)
- Activate SOLIDWORKS CommandManager Tab (VB.NET) (Activate_SOLIDWORKS_CommandManager_Tab_Example_VBNET.htm)
- Activate SOLIDWORKS CommandManager Tab (C#) (Activate_SOLIDWORKS_CommandManager_Tab_Example_CSharp.htm)

## See Also

- `IModelDocExtension.ActiveCommandTab`
- `IModelDocExtension.ActiveCommandTabIndex`
- `IModelDocExtension.GetCommandTabs`