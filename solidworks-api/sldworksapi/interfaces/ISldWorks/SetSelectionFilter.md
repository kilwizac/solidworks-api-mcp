---
type: method
interface: ISldWorks
member: SetSelectionFilter
returns: void
parameters:
  -
    name: SelType
    type: System.Int32
    description: Selection type enable or disable as defined in swSelectType_e
  -
    name: State
    type: System.Boolean
    description: True to enable selection of the specified type, false to disable the end-user's ability to select the item
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
  - ISldWorks.GetSelectionFilter
  - ISldWorks.GetSelectionFilters
  - ISldWorks.IGetSelectionFilters
  - ISldWorks.IGetSelectionFiltersCount
  - ISldWorks.ISetSelectionFilters
  - ISldWorks.SetApplySelectionFilter
  - ISldWorks.SetSelectionFilters
keywords:
  - selection
  - filters
  - see
  - also
  - iselectionmgr
  - setselectionfilter
  - isldworks
  - sld
  - works
  - filter
  - sel
  - type
  - int32
  - state
  - boolean
  - void
---

# ISldWorks.SetSelectionFilter

Sets the current selection filter values for the specified item type.

## Signature

```csharp
void SetSelectionFilter( 
   System.Int32
SelType
,
   System.Boolean
State
)
```
## Parameters

- `SelType` (System.Int32): Selection type enable or disable as defined in swSelectType_e
- `State` (System.Boolean): True to enable selection of the specified type, false to disable the end-user's ability to select the item

## Return Value

Unknown.

## See Also

- `ISldWorks.GetApplySelectionFilter`
- `ISldWorks.GetSelectionFilter`
- `ISldWorks.GetSelectionFilters`
- `ISldWorks.IGetSelectionFilters`
- `ISldWorks.IGetSelectionFiltersCount`
- `ISldWorks.ISetSelectionFilters`
- `ISldWorks.SetApplySelectionFilter`
- `ISldWorks.SetSelectionFilters`