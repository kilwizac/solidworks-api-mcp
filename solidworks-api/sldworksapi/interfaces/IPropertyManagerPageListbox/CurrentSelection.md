---
type: property
interface: IPropertyManagerPageListbox
member: CurrentSelection
returns: System.Int16
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - selections
  - ui
related: []
keywords:
  - currentselection
  - ipropertymanagerpagelistbox
  - manager
  - page
  - listbox
  - current
  - selection
  - int16
readonly: null
---

# IPropertyManagerPageListbox.CurrentSelection

Gets and sets the item that is currently selected in this list box.

## Signature

```csharp
System.Int16 CurrentSelection {get; set;}
```
## Parameters

None.

## Return Value

Index number of the item in the 0-based list

## Remarks

If you use this property with a list box enabled for
multiple selections
, then this method returns -1 and does not affect the list box.