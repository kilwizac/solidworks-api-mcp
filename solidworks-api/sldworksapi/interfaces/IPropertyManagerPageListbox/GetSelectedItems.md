---
type: property
interface: IPropertyManagerPageListbox
member: GetSelectedItems
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - selections
  - ui
related:
  - IPropertyManagerPageListbox.GetSelectedItemsCount
  - IPropertyManagerPageListbox.IGetSelectedItems
keywords:
  - getselecteditems
  - ipropertymanagerpagelistbox
  - manager
  - page
  - listbox
  - selected
  - items
  - object
readonly: null
---

# IPropertyManagerPageListbox.GetSelectedItems

Gets the items selected in a list box enabled for multiple selections.

## Signature

```csharp
System.Object GetSelectedItems()
```
## Parameters

None.

## Return Value

Array of shorts of the currently selected items in this list box

## Remarks

Each item is a 0-based index into the list of items.

## See Also

- `IPropertyManagerPageListbox.GetSelectedItemsCount`
- `IPropertyManagerPageListbox.IGetSelectedItems`