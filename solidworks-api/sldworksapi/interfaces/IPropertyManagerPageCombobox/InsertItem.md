---
type: property
interface: IPropertyManagerPageCombobox
member: InsertItem
returns: System.Int16
parameters:
  -
    name: Item
    type: System.Int16
    description: Position where to add the item in the 0-based list or -1 to put the item at the end of the list
  -
    name: Text
    type: System.String
    description: Text for item
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - insertitem
  - ipropertymanagerpagecombobox
  - manager
  - page
  - combobox
  - insert
  - item
  - int16
  - text
  - string
readonly: null
---

# IPropertyManagerPageCombobox.InsertItem

Inserts an item in the attached drop-down list of this combo box.

## Signature

```csharp
System.Int16 InsertItem( 
   System.Int16
Item
,
   System.String
Text
)
```
## Parameters

- `Item` (System.Int16): Position where to add the item in the 0-based list or -1 to put the item at the end of the list
- `Text` (System.String): Text for item

## Return Value

Position in the 0-based list where the item is added or -1 if the item is not added to the list