---
type: property
interface: IPropertyManagerPageListbox
member: ItemText
returns: System.String
parameters:
  -
    name: Item
    type: System.Int16
    description: Position of the item where to get the text in the 0-based list or -1 to get the text of the currently selected item
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - itemtext
  - ipropertymanagerpagelistbox
  - manager
  - page
  - listbox
  - item
  - text
  - int16
  - string
readonly: true
---

# IPropertyManagerPageListbox.ItemText

Gets the text for the specified item in this list box.

## Signature

```csharp
System.String ItemText( 
   System.Int16
Item
) {get;}
```
## Parameters

- `Item` (System.Int16): Position of the item where to get the text in the 0-based list or -1 to get the text of the currently selected item

## Return Value

Text for the specified item