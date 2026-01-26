---
type: property
interface: IPropertyManagerPageListbox
member: IAddItems
returns: void
parameters:
  -
    name: TextCount
    type: System.Int16
    description: Number of items to add to the listbox
  -
    name: Texts
    type: System.String
    description: in-process, unmanaged C++: Pointer to an array of strings of items of size TextCount VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IPropertyManagerPageListbox.AddItems
keywords:
  - iadditems
  - ipropertymanagerpagelistbox
  - manager
  - page
  - listbox
  - add
  - items
  - text
  - count
  - int16
  - texts
  - string
  - void
readonly: null
---

# IPropertyManagerPageListbox.IAddItems

Adds items to the attached drop-down list for this list box.

## Signature

```csharp
void IAddItems( 
   System.Int16
TextCount
,
   ref System.String
Texts
)
```
## Parameters

- `TextCount` (System.Int16): Number of items to add to the listbox
- `Texts` (System.String): in-process, unmanaged C++: Pointer to an array of strings of items of size TextCount VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## See Also

- `IPropertyManagerPageListbox.AddItems`