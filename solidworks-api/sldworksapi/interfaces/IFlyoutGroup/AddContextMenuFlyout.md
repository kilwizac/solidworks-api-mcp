---
type: method
interface: IFlyoutGroup
member: AddContextMenuFlyout
returns: System.Boolean
parameters:
  -
    name: DocumentType
    type: System.Int32
    description: Type of document as defined in swDocumentTypes_e
  -
    name: SelectionType
    type: System.Int32
    description: Type of object as defined in swSelectType_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - addcontextmenuflyout
  - iflyoutgroup
  - flyout
  - group
  - add
  - context
  - menu
  - document
  - type
  - int32
  - selection
  - boolean
  - create
  - flyouts
  - commandmanager
  - vb
  - net
---

# IFlyoutGroup.AddContextMenuFlyout

Adds this flyout to the context menus of the specified documents and selections.

## Signature

```csharp
System.Boolean AddContextMenuFlyout( 
   System.Int32
DocumentType
,
   System.Int32
SelectionType
)
```
## Parameters

- `DocumentType` (System.Int32): Type of document as defined in swDocumentTypes_e
- `SelectionType` (System.Int32): Type of object as defined in swSelectType_e

## Return Value

True if successful, false if not

## Remarks

Call this method once for each set of DocumentType and SelectionType parameters.
Context-sensitive menus support only the standard flyout style (
swCommandFlyoutStyle_e
.swCommandFlyoutStyle_Simple), in which there is no immediate action on the main flyout button.

## Examples

- Create Flyouts in the CommandManager (C#) (Create_Flyouts_in_the_CommandManager_Example_CSharp.htm)
- Create Flyouts in the CommandManager (VB.NET) (Create_Flyouts_in_the_CommandManager_Example_VBNET.htm)