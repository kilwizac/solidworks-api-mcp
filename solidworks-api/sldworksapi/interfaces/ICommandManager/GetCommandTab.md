---
type: method
interface: ICommandManager
member: GetCommandTab
returns: CommandTab
parameters:
  -
    name: DocumentType
    type: System.Int32
    description: Document type as defined in swDocumentTypes_e
  -
    name: TabName
    type: System.String
    description: Name of CommandManager tab
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - ICommandManager.AddCommandTab
  - ICommandManager.CommandTabs
  - ICommandManager.GetCommandTabCount
  - ICommandManager.IGetCommandTabs
  - ICommandManager.RemoveCommandTab
keywords:
  - getcommandtab
  - icommandmanager
  - command
  - manager
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

# ICommandManager.GetCommandTab

Gets the specified CommandManager tab for the specified document type.

## Signature

```csharp
CommandTab GetCommandTab( 
   System.Int32
DocumentType
,
   System.String
TabName
)
```
## Parameters

- `DocumentType` (System.Int32): Document type as defined in swDocumentTypes_e
- `TabName` (System.String): Name of CommandManager tab

## Return Value

CommandManager tab

## Remarks

The names of CommandManager tabs are not unique. If multiple CommandManager tabs exists with the same name for the specified document type, then the first matching tab is returned. If no tabs match the specified name for the specified document type, then NULL is returned.

## Examples

- Create CommandManager Tab and Tab Boxes (VB.NET) (Create_CommandManager_Tab_and_Tab_Boxes_Example_VB.NET.htm)

## See Also

- `ICommandManager.AddCommandTab`
- `ICommandManager.CommandTabs`
- `ICommandManager.GetCommandTabCount`
- `ICommandManager.IGetCommandTabs`
- `ICommandManager.RemoveCommandTab`