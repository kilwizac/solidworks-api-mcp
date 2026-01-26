---
type: method
interface: IFacet
member: Select
returns: System.Boolean
parameters:
  -
    name: Append
    type: System.Boolean
    description: True to append this selection to the selection list, false to replace the selection list with this selection
  -
    name: Data
    type: System.Object
    description: Pointer to the ISelectData object
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
  - selections
related: []
keywords:
  - select
  - ifacet
  - facet
  - append
  - boolean
  - data
  - object
---

# IFacet.Select

Selects the specified facet.

## Signature

```csharp
System.Boolean Select( 
   System.Boolean
Append
,
   System.Object
Data
)
```
## Parameters

- `Append` (System.Boolean): True to append this selection to the selection list, false to replace the selection list with this selection
- `Data` (System.Object): Pointer to the ISelectData object

## Return Value

True if the facet is selected, false if not

## Examples

- IFacet (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IFacet)