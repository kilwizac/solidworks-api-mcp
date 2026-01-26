---
type: method
interface: ISldWorks
member: IGetSelectionFiltersCount
returns: System.Int32
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
  - ISldWorks.GetApplySelectionFilter
  - ISldWorks.GetSelectionFilter
  - ISldWorks.GetSelectionFilters
  - ISldWorks.ISetSelectionFilters
  - ISldWorks.SetApplySelectionFilter
  - ISldWorks.SetSelectionFilter
  - ISldWorks.SetSelectionFilters
keywords:
  - selection
  - see
  - also
  - iselectionmgr
  - filters
  - igetselectionfilterscount
  - isldworks
  - sld
  - works
  - count
  - int32
---

# ISldWorks.IGetSelectionFiltersCount

Gets the number of active selection filters.

## Signature

```csharp
System.Int32 IGetSelectionFiltersCount()
```
## Parameters

None.

## Return Value

Number of all active selection filters

## Remarks

Call this method before calling
ISldWorks::IGetSelectionFilters
to determine the size of the array to pass that to that method.

## See Also

- `ISldWorks.GetApplySelectionFilter`
- `ISldWorks.GetSelectionFilter`
- `ISldWorks.GetSelectionFilters`
- `ISldWorks.ISetSelectionFilters`
- `ISldWorks.SetApplySelectionFilter`
- `ISldWorks.SetSelectionFilter`
- `ISldWorks.SetSelectionFilters`