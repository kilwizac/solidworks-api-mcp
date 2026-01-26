---
type: property
interface: IPropertyManagerPageListbox
member: Style
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - style
  - ipropertymanagerpagelistbox
  - manager
  - page
  - listbox
  - int32
readonly: null
---

# IPropertyManagerPageListbox.Style

Gets or sets style for this list box.

## Signature

```csharp
System.Int32 Style {get; set;}
```
## Parameters

None.

## Return Value

Style as defined in swPropMgrPageListBoxStyle_e

## Remarks

By default, only one list item can be selected at a time. When another list item is selected, that item becomes the active item and the previously selected item is cleared. To enable multi-selection, use swPropMgrPageListBoxStyle_MultipleItemSelect with
IProperytManagerPageListbox:Style
.
These methods support multi-selection:
IPropertyManagerPageListbox::GetSelectedItems
or
IPropertyManagerPageListbox::IGetSelectedItems
IPropertyManagerPageListbox::GetSelectedItemsCount
IPropertyManagerPageListbox::SetSelectedItem

## Examples

- IPropertyManagerPageListbox (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IPropertyManagerPageListbox)