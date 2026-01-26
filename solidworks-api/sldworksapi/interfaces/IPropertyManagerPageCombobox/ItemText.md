---
type: property
interface: IPropertyManagerPageCombobox
member: ItemText
returns: System.String
parameters:
  -
    name: Item
    type: System.Int16
    description: Position of the item where to get the text in the 0-based list of items or -1 to get the text of the currently selected item
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - itemtext
  - ipropertymanagerpagecombobox
  - manager
  - page
  - combobox
  - item
  - text
  - int16
  - string
readonly: true
---

# IPropertyManagerPageCombobox.ItemText

Gets the text from the attached drop-down list for this combo box.

## Signature

```csharp
System.String ItemText( 
   System.Int16
Item
) {get;}
```
## Parameters

- `Item` (System.Int16): Position of the item where to get the text in the 0-based list of items or -1 to get the text of the currently selected item

## Return Value

Text of the specified item