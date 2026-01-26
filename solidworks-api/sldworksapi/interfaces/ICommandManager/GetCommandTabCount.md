---
type: method
interface: ICommandManager
member: GetCommandTabCount
returns: System.Int32
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
  - ICommandManager.CommandTabs
  - ICommandManager.GetCommandTab
  - ICommandManager.RemoveCommandTab
keywords:
  - getcommandtabcount
  - icommandmanager
  - command
  - manager
  - tab
  - count
  - document
  - type
  - int32
---

# ICommandManager.GetCommandTabCount

Gets the number of tabs on the CommandManager for the specified document type.

## Signature

```csharp
System.Int32 GetCommandTabCount( 
   System.Int32
DocumentType
)
```
## Parameters

- `DocumentType` (System.Int32): Document type as defined in swDocumentTypes_e

## Return Value

Number of tabs on the CommandManager

## Remarks

Call this method before
ICommandManager::IGetCommandTabs
to get the size of the array for that method.
All CommandManager tabs are returned. Some CommandManager tabs may not be active or visible.

## See Also

- `ICommandManager.AddCommandTab`
- `ICommandManager.CommandTabs`
- `ICommandManager.GetCommandTab`
- `ICommandManager.RemoveCommandTab`