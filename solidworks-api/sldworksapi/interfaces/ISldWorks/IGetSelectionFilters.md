---
type: method
interface: ISldWorks
member: IGetSelectionFilters
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
  - igetselectionfilters
  - isldworks
  - sld
  - works
  - int32
---

# ISldWorks.IGetSelectionFilters

Gets all active selection filters.

## Signature

```csharp
System.Int32 IGetSelectionFilters()
```
## Parameters

None.

## Return Value

in-process, unmanaged C++: Ponter ot an array of long values representing the swSelectType_e enumeration VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

To determine...
Call...
Size of the array to pass
ISldWorks::IGetSelectionFiltersCount
If the selection filter is active or not
ISldWorks::GetApplySelectionFilter

## See Also

- `ISldWorks.GetSelectionFilter`
- `ISldWorks.GetSelectionFilters`
- `ISldWorks.ISetSelectionFilters`
- `ISldWorks.SetApplySelectionFilter`
- `ISldWorks.SetSelectionFilter`
- `ISldWorks.SetSelectionFilters`