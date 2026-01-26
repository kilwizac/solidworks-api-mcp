---
type: property
interface: IPropertyManagerPageSelectionbox
member: ItemText
returns: System.String
parameters:
  -
    name: Item
    type: System.Int16
    description: Position of the item in the 0-based list; -1 to get the currently selected item
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - selections
  - ui
related: []
keywords:
  - itemtext
  - ipropertymanagerpageselectionbox
  - manager
  - page
  - selectionbox
  - item
  - text
  - int16
  - string
readonly: true
---

# IPropertyManagerPageSelectionbox.ItemText

Gets the specified item in this selection box.

## Signature

```csharp
System.String ItemText( 
   System.Int16
Item
) {get;}
```
## Parameters

- `Item` (System.Int16): Position of the item in the 0-based list; -1 to get the currently selected item

## Return Value

Text of the specified item