---
type: method
interface: ISldWorks
member: SetApplySelectionFilter
returns: void
parameters:
  -
    name: State
    type: System.Boolean
    description: True to activate the selection filter, false to not
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
  - ISldWorks.IGetSelectionFiltersCount
  - ISldWorks.ISetSelectionFilters
  - ISldWorks.SetSelectionFilter
  - ISldWorks.SetSelectionFilters
keywords:
  - selection
  - filters
  - see
  - also
  - iselectionmgr
  - setapplyselectionfilter
  - isldworks
  - sld
  - works
  - apply
  - filter
  - state
  - boolean
  - void
---

# ISldWorks.SetApplySelectionFilter

Sets the current state of the selection filter.

## Signature

```csharp
void SetApplySelectionFilter( 
   System.Boolean
State
)
```
## Parameters

- `State` (System.Boolean): True to activate the selection filter, false to not

## Return Value

Unknown.

## Remarks

If the selection filter is active, then the settings found in
ISldWorks::GetSelectionFilter
and
ISldWorks::GetSelectionFilters
or
ISldworks::IGetSelectionFilters
apply.

## See Also

- `ISldWorks.GetApplySelectionFilter`
- `ISldWorks.IGetSelectionFiltersCount`
- `ISldWorks.ISetSelectionFilters`
- `ISldWorks.SetSelectionFilter`
- `ISldWorks.SetSelectionFilters`