---
type: method
interface: IModelDoc2
member: GetPopupMenuMode
returns: System.Int32
parameters: []
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
  - shortcut
  - popup
  - getpopupmenumode
  - imodeldoc2
  - model
  - doc2
  - menu
  - mode
  - int32
---

# IModelDoc2.GetPopupMenuMode

Gets the current pop-up menu mode.

## Signature

```csharp
System.Int32 GetPopupMenuMode()
```
## Parameters

None.

## Return Value

Current pop-up menu mode: 0 - Default shortcut mode. This presents end users with options to Select Other , manipulate the view, access the properties dialog of the selected item, and so on. 1 - End users are presented with a limited set of choices including Select Other and Clear Selection . This mode is typically seen when a SOLIDWORKS dialog is active and the end user is restricted to entity selection.

## Remarks

When end users click the right-mouse button when the pointer is on an entity in the graphics window, they are presented with one of two distinct menu sets. These menu sets have been defined as mode 0 and mode 1.
Using
IModelDoc2::SetPopupMenuMode
, your application can simulate the same shortcut menu behavior as in the SOLIDWORKS Design user interface. If you have a dialog that requires end-user selection of entities, you can set the pop-up menu mode to 1 to simulate SOLIDWORKS behavior. Your application should always set the menu mode back to its previous value. You can determine the previous value by calling the IModelDoc2::GetPopupMenuMode before calling IModelDoc2::SetPopupMenuMode.