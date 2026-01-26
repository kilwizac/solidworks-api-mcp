---
type: method
interface: ISldWorks
member: GetApplySelectionFilter
returns: System.Boolean
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
  - ISldWorks.IGetSelectionFiltersCount
  - ISldWorks.SetApplySelectionFilter
keywords:
  - selection
  - filters
  - see
  - also
  - iselectionmgr
  - getapplyselectionfilter
  - isldworks
  - sld
  - works
  - apply
  - filter
  - boolean
  - toggle
  - vba
---

# ISldWorks.GetApplySelectionFilter

Gets the current state of the selection filter.

## Signature

```csharp
System.Boolean GetApplySelectionFilter()
```
## Parameters

None.

## Return Value

True if the selection filter is active, false if not

## Remarks

If the selection filter is active, then the settings found in
ISldWorks::GetSelectionFilter
and
ISldWorks::GetSelectionFilters
or
ISldWorks::IGetSelectionFilters
apply.
Use...
To...
ISldWorks::SetApplySelectionFilter
Activate or deactivate the selection filter
ISldWorks::SetSelectionFilter
and
ISldWorks::SetSelectionFilters
or
ISldWorks::ISetSelectionFilters
Change the current filters in use

## Examples

- Set and Toggle Selection Filters (VBA) (Clear,_Set,_and_Toggle_Selection_Filters_Example_VB.htm)

## See Also

- `ISldWorks.IGetSelectionFiltersCount`
- `ISldWorks.SetApplySelectionFilter`