---
type: property
interface: IPropertyManagerPageListbox
member: GetSelectedItemsCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - selections
  - ui
related:
  - IPropertyManagerPageListbox.GetSelectedItems
keywords:
  - getselecteditemscount
  - ipropertymanagerpagelistbox
  - manager
  - page
  - listbox
  - selected
  - items
  - count
  - int32
readonly: null
---

# IPropertyManagerPageListbox.GetSelectedItemsCount

Gets the number of items currently selected in a list box enabled for multiple selection.

## Signature

```csharp
System.Int32 GetSelectedItemsCount()
```
## Parameters

None.

## Return Value

Number of items currently selected in this list box

## Remarks

Call this method before calling
IPropertyManagerPageListbox::IGetSelectedItems
to size the array of selected items.

## See Also

- `IPropertyManagerPageListbox.GetSelectedItems`