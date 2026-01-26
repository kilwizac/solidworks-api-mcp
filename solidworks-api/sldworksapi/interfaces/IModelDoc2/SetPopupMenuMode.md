---
type: method
interface: IModelDoc2
member: SetPopupMenuMode
returns: void
parameters:
  -
    name: ModeIn
    type: System.Int32
    description: Pop-up menu mode (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related: []
keywords:
  - popup
  - menus
  - shortcut
  - setpopupmenumode
  - imodeldoc2
  - model
  - doc2
  - menu
  - mode
  - int32
  - void
---

# IModelDoc2.SetPopupMenuMode

Sets the pop-up menu mode.

## Signature

```csharp
void SetPopupMenuMode( 
   System.Int32
ModeIn
)
```
## Parameters

- `ModeIn` (System.Int32): Pop-up menu mode (see Remarks )

## Return Value

Unknown.

## Remarks

When end users press the right-mouse button on an entity in the graphics window, they are be presented with one of two menu sets. These menu sets are defined as mode 0 and mode 1.
Mode
0 - Default shortcut mode. This mode presents the end user with options to
Select Other
, manipulate the view, access the properties dialog of the selected item, and so on.
1 - The end-user is presented with a limited set of choices including
Select Other
and
Clear Selection
. This mode is typically seen when a SOLIDWORKS dialog is active and the user is restricted to entity selection.
Using this method, you can simulate the same shortcut menu behavior as in the SOLIDWORKS Design user interface. If you have a dialog that requires user selection of entities, you can set the pop-up menu mode to 1 to simulate SOLIDWORKS behavior. Your application should always set the menu mode back to its previous value. To determine the previous behavior, call
IModelDoc2::GetPopupMenuMode
prior to calling to this method.