---
type: method
interface: ICommandManager
member: CommandTabs
returns: System.Object
parameters:
  -
    name: DocumentType
    type: System.Int32
    description: Document type as defined in swDocumentTypes_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - ICommandManager.AddCommandTab
  - ICommandManager.GetCommandTab
  - ICommandManager.GetCommandTabCount
  - ICommandManager.IGetCommandTabs
  - ICommandManager.RemoveCommandTab
keywords:
  - commandtabs
  - icommandmanager
  - command
  - manager
  - tabs
  - document
  - type
  - int32
  - object
---

# ICommandManager.CommandTabs

Gets all of the add-in CommandManager tabs for the specified document type.

## Signature

```csharp
System.Object CommandTabs( 
   System.Int32
DocumentType
)
```
## Parameters

- `DocumentType` (System.Int32): Document type as defined in swDocumentTypes_e

## Return Value

Array of CommandManager tabs

## Remarks

To activate and query native SOLIDWORKS CommandManager tabs, call
IModelDocExtension::GetCommandTabs
.

## See Also

- `ICommandManager.AddCommandTab`
- `ICommandManager.GetCommandTab`
- `ICommandManager.GetCommandTabCount`
- `ICommandManager.IGetCommandTabs`
- `ICommandManager.RemoveCommandTab`