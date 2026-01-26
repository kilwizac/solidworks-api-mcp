---
type: property
interface: IPropertyManagerPageNumberbox
member: IAddItems
returns: void
parameters:
  -
    name: TextCount
    type: System.Int16
    description: Number of items to add
  -
    name: Texts
    type: System.String
    description: in-process, unmanaged C++: Pointer to an array of strings of items VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IPropertyManagerPageNumberbox.AddItems
keywords:
  - iadditems
  - ipropertymanagerpagenumberbox
  - manager
  - page
  - numberbox
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

# IPropertyManagerPageNumberbox.IAddItems

Adds items to the attached drop-down list of a number box.

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

- `TextCount` (System.Int16): Number of items to add
- `Texts` (System.String): in-process, unmanaged C++: Pointer to an array of strings of items VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## See Also

- `IPropertyManagerPageNumberbox.AddItems`