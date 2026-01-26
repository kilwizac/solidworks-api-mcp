---
type: method
interface: ISldWorks
member: GetMenuStrings
returns: System.String
parameters:
  -
    name: CommandID
    type: System.Int32
    description: Command ID of the command whose parent menu's name you want
  -
    name: DocumentType
    type: System.Int32
    description: Document types in which this command exists as defined in swDocumentTypes_e
  -
    name: ParentMenuName
    type: System.String
    description: Name of the parent menu of the specified menu command
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related: []
keywords:
  - menus
  - items
  - names
  - getmenustrings
  - isldworks
  - sld
  - works
  - menu
  - strings
  - command
  - id
  - int32
  - document
  - type
  - parent
  - name
  - string
---

# ISldWorks.GetMenuStrings

Gets the name of the parent menu of the specified menu command.

## Signature

```csharp
System.String GetMenuStrings( 
   System.Int32
CommandID
,
   System.Int32
DocumentType
,
   out System.String
ParentMenuName
)
```
## Parameters

- `CommandID` (System.Int32): Command ID of the command whose parent menu's name you want
- `DocumentType` (System.Int32): Document types in which this command exists as defined in swDocumentTypes_e
- `ParentMenuName` (System.String): Name of the parent menu of the specified menu command

## Return Value

Menu string

## Remarks

Use this method with methods that require you to supply the name of the menu, such as
ISldWorks::RemoveMenu
,
IFrame::RenameMenu
and
IFrame::RemoveMenu
.