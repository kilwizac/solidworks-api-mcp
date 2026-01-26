---
type: method
interface: ICommandManager
member: AddCommandTab
returns: CommandTab
parameters:
  -
    name: DocumentType
    type: System.Int32
    description: Document type as defined in swDocumentTypes_e
  -
    name: TabName
    type: System.String
    description: Name of CommandManager tab (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - ICommandManager.CommandTabs
  - ICommandManager.GetCommandTab
  - ICommandManager.GetCommandTabCount
  - ICommandManager.IGetCommandTabs
  - ICommandManager.RemoveCommandTab
keywords:
  - addcommandtab
  - icommandmanager
  - command
  - manager
  - add
  - tab
  - document
  - type
  - int32
  - name
  - string
  - create
  - commandmanager
  - boxes
  - vb
  - net
---

# ICommandManager.AddCommandTab

Adds a tab to the CommandManager for the specified document type.

## Signature

```csharp
CommandTab AddCommandTab( 
   System.Int32
DocumentType
,
   System.String
TabName
)
```
## Parameters

- `DocumentType` (System.Int32): Document type as defined in swDocumentTypes_e
- `TabName` (System.String): Name of CommandManager tab (see Remarks )

## Return Value

CommandManager tab

## Remarks

The CommandManager tab is always created in the last position on the CommandManager. If another CommandManager tab exists with the same name, then another CommandManager tab is still created because CommandManager tab names are not unique.

## Examples

- Create CommandManager Tab and Tab Boxes (VB.NET) (Create_CommandManager_Tab_and_Tab_Boxes_Example_VB.NET.htm)

## See Also

- `ICommandManager.CommandTabs`
- `ICommandManager.GetCommandTab`
- `ICommandManager.GetCommandTabCount`
- `ICommandManager.IGetCommandTabs`
- `ICommandManager.RemoveCommandTab`