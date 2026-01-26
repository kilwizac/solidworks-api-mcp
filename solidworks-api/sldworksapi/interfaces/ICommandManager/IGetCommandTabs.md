---
type: method
interface: ICommandManager
member: IGetCommandTabs
returns: CommandTab
parameters:
  -
    name: DocumentType
    type: System.Int32
    description: Document type as defined in swDocumentTypes_e
  -
    name: CommandTabCount
    type: System.Int32
    description: Number of CommandManager tabs for DocumentType
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - ICommandManager.AddCommandTab
  - ICommandManager.CommandTabs
  - ICommandManager.GetCommandTab
  - ICommandManager.RemoveCommandTab
keywords:
  - igetcommandtabs
  - icommandmanager
  - command
  - manager
  - tabs
  - document
  - type
  - int32
  - tab
  - count
---

# ICommandManager.IGetCommandTabs

Gets the CommandManager tabs for the specified document type.

## Signature

```csharp
CommandTab IGetCommandTabs( 
   System.Int32
DocumentType
,
   System.Int32
CommandTabCount
)
```
## Parameters

- `DocumentType` (System.Int32): Document type as defined in swDocumentTypes_e
- `CommandTabCount` (System.Int32): Number of CommandManager tabs for DocumentType

## Return Value

in-process, unmanaged C++: Pointer to an array of CommandManager tabs VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
ICommandManager::GetCommandTabCount
to get the size of the array for this method.

## See Also

- `ICommandManager.AddCommandTab`
- `ICommandManager.CommandTabs`
- `ICommandManager.GetCommandTab`
- `ICommandManager.RemoveCommandTab`