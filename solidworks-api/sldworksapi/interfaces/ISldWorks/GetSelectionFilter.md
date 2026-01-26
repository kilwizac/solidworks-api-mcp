---
type: method
interface: ISldWorks
member: GetSelectionFilter
returns: System.Boolean
parameters:
  -
    name: SelType
    type: System.Int32
    description: Selection type to verify as defined in swSelelectType_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - selections
  - ui
related:
  - ISldWorks.GetApplySelectionFilter
  - ISldWorks.GetSelectionFilters
  - ISldWorks.IGetSelectionFilters
  - ISldWorks.IGetSelectionFiltersCount
  - ISldWorks.ISetSelectionFilters
  - ISldWorks.SetApplySelectionFilter
  - ISldWorks.SetSelectionFilter
  - ISldWorks.SetSelectionFilters
keywords:
  - selection
  - filters
  - see
  - also
  - iselectionmgr
  - getselectionfilter
  - isldworks
  - sld
  - works
  - filter
  - sel
  - type
  - int32
  - boolean
---

# ISldWorks.GetSelectionFilter

Gets the current selection filter settings for the specified item type.

## Signature

```csharp
System.Boolean GetSelectionFilter( 
   System.Int32
SelType
)
```
## Parameters

- `SelType` (System.Int32): Selection type to verify as defined in swSelelectType_e

## Return Value

True if selection of the specified type is allowed, false if selection of the specified type is disabled

## See Also

- `ISldWorks.GetApplySelectionFilter`
- `ISldWorks.GetSelectionFilters`
- `ISldWorks.IGetSelectionFilters`
- `ISldWorks.IGetSelectionFiltersCount`
- `ISldWorks.ISetSelectionFilters`
- `ISldWorks.SetApplySelectionFilter`
- `ISldWorks.SetSelectionFilter`
- `ISldWorks.SetSelectionFilters`