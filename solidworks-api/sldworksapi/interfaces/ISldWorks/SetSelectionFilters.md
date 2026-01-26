---
type: method
interface: ISldWorks
member: SetSelectionFilters
returns: void
parameters:
  -
    name: SelType
    type: System.Object
    description: Array of long values representing the swSelectType_e
  -
    name: State
    type: System.Boolean
    description: True to activate the selection filters, false to not
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
  - ISldWorks.GetSelectionFilters
  - ISldWorks.IGetSelectionFilters
  - ISldWorks.IGetSelectionFiltersCount
  - ISldWorks.ISetSelectionFilters
  - ISldWorks.SetApplySelectionFilter
  - ISldWorks.SetSelectionFilter
keywords:
  - selection
  - filters
  - see
  - also
  - iselectionmgr
  - setselectionfilters
  - isldworks
  - sld
  - works
  - sel
  - type
  - object
  - state
  - boolean
  - void
  - toggle
  - vba
---

# ISldWorks.SetSelectionFilters

Sets the status for multiple selection filters.

## Signature

```csharp
void SetSelectionFilters( 
   System.Object
SelType
,
   System.Boolean
State
)
```
## Parameters

- `SelType` (System.Object): Array of long values representing the swSelectType_e
- `State` (System.Boolean): True to activate the selection filters, false to not

## Return Value

Unknown.

## Remarks

The state is applied to all elements in the SelType array. To determine if the selection filter is active, use
ISldWorks::GetApplySelectionFilter
.

## Examples

- Set and Toggle Selection Filters (VBA) (Clear,_Set,_and_Toggle_Selection_Filters_Example_VB.htm)

## See Also

- `ISldWorks.GetSelectionFilter`
- `ISldWorks.GetSelectionFilters`
- `ISldWorks.IGetSelectionFilters`
- `ISldWorks.IGetSelectionFiltersCount`
- `ISldWorks.ISetSelectionFilters`
- `ISldWorks.SetApplySelectionFilter`
- `ISldWorks.SetSelectionFilter`