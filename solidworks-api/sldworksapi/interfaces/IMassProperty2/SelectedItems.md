---
type: property
interface: IMassProperty2
member: SelectedItems
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - selections
related:
  - IMassProperty2.IncludeHiddenBodiesOrComponents
keywords:
  - selecteditems
  - imassproperty2
  - mass
  - property2
  - selected
  - items
  - object
readonly: null
---

# IMassProperty2.SelectedItems

Gets or sets the list of bodies/components for which to calculate mass properties.

## Signature

```csharp
System.Object SelectedItems {get; set;}
```
## Parameters

None.

## Return Value

Array of bodies for the part or components for the assembly

## Remarks

Pre-selected bodies/components are included in the returned array.

## See Also

- `IMassProperty2.IncludeHiddenBodiesOrComponents`