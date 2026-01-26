---
type: method
interface: ISldWorks
member: GetSelectionFilters
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - selections
  - ui
related:
  - ISldWorks.GetSelectionFilter
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
  - getselectionfilters
  - isldworks
  - sld
  - works
  - object
  - toggle
  - vba
---

# ISldWorks.GetSelectionFilters

Gets all active selection filters.

## Signature

```csharp
System.Object GetSelectionFilters()
```
## Parameters

None.

## Return Value

Array of long values representing the swSelectType_e enumeration

## Remarks

To determine if the selection filter is active, call
ISldWorks::GetApplySelectionFilter
.

## Examples

- Set and Toggle Selection Filters (VBA) (Clear,_Set,_and_Toggle_Selection_Filters_Example_VB.htm)

## See Also

- `ISldWorks.GetSelectionFilter`
- `ISldWorks.IGetSelectionFilters`
- `ISldWorks.IGetSelectionFiltersCount`
- `ISldWorks.ISetSelectionFilters`
- `ISldWorks.SetApplySelectionFilter`
- `ISldWorks.SetSelectionFilter`
- `ISldWorks.SetSelectionFilters`