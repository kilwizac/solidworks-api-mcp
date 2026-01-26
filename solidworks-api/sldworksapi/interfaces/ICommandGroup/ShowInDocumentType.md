---
type: property
interface: ICommandGroup
member: ShowInDocumentType
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - showindocumenttype
  - icommandgroup
  - command
  - group
  - show
  - document
  - type
  - int32
  - create
  - submenus
  - commandmanager
readonly: null
---

# ICommandGroup.ShowInDocumentType

Gets or sets the types of documents to show this CommandGroup.

## Signature

```csharp
System.Int32 ShowInDocumentType {get; set;}
```
## Parameters

None.

## Return Value

Types of documents in which to show this CommandGroup as defined in swDocTemplateTypes_e

## Remarks

This method only affects menus. The toolbar for the CommandGroup will be visible in every context, i.e., none, part, assembly, or drawing.

## Examples

- Create Submenus in the CommandManager (C#) (Create_Submenus_in_the_CommandManager_Example_CSharp.htm)