---
type: property
interface: IPropertyManagerPageSelectionbox
member: AddMenuPopupItem
returns: System.Boolean
parameters:
  -
    name: ID
    type: System.Int32
    description: Unique user-defined value for this pop-up menu item
  -
    name: ItemText
    type: System.String
    description: Text for pop-up menu item
  -
    name: DocumentType
    type: System.Int32
    description: Document types for which this pop-up menu item is displayed as defined in swDocumentTypes_e
  -
    name: HintText
    type: System.String
    description: Text displayed in the SOLIDWORKS status bar when the user moves the cursor over this pop-up menu item
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - selections
  - ui
related: []
keywords:
  - addmenupopupitem
  - ipropertymanagerpageselectionbox
  - manager
  - page
  - selectionbox
  - add
  - menu
  - popup
  - item
  - id
  - int32
  - text
  - string
  - document
  - type
  - hint
  - boolean
readonly: null
---

# IPropertyManagerPageSelectionbox.AddMenuPopupItem

Adds a menu item to the pop-up menu for this selection box of the PropertyManager page.

## Signature

```csharp
System.Boolean AddMenuPopupItem( 
   System.Int32
ID
,
   System.String
ItemText
,
   System.Int32
DocumentType
,
   System.String
HintText
)
```
## Parameters

- `ID` (System.Int32): Unique user-defined value for this pop-up menu item
- `ItemText` (System.String): Text for pop-up menu item
- `DocumentType` (System.Int32): Document types for which this pop-up menu item is displayed as defined in swDocumentTypes_e
- `HintText` (System.String): Text displayed in the SOLIDWORKS status bar when the user moves the cursor over this pop-up menu item

## Return Value

True if the pop-up menu item is added, false if not

## Remarks

This method requires that you implement these
IPropertyManagerPage2Handler5
methods:
IPropertyManagerPage2Handler5::OnPopupMenuItem
. When the user selects a pop-up menu item, this method determines which item was selected. The add-in should then perform the appropriate action.
IPropertyManagerPage2Handler5::OnPopupMenuItemUpdate
. When Windows attempts to select or deselect and enable or disable the pop-up menu item, SOLIDWORKS calls IPropertyManagerPage2Handler5::OnPopupMenuItemUpdate to get the state of the pop-up menu item from the add-in. Thus, IPropertyManagerPage2Handler5::OnPopupMenuItemUpdate:
Processes a request for the state of the specified pop-up menu item associated with the PropertyManager page.
Passes the state back to SOLIDWORKS.