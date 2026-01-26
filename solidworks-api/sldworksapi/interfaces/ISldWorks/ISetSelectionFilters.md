---
type: method
interface: ISldWorks
member: ISetSelectionFilters
returns: void
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of values in SelType
  -
    name: SelType
    type: System.Int32
    description: in-process, unmanaged C++: Pointer to an array of long values representing the swSelectType_e VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
  -
    name: State
    type: System.Boolean
    description: 
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
  - ISldWorks.SetApplySelectionFilter
  - ISldWorks.SetSelectionFilter
  - ISldWorks.SetSelectionFilters
keywords:
  - selection
  - see
  - also
  - iselectionmgr
  - filters
  - isetselectionfilters
  - isldworks
  - sld
  - works
  - count
  - int32
  - sel
  - type
  - state
  - boolean
  - void
---

# ISldWorks.ISetSelectionFilters

Sets the status for multiple selection filters.

## Signature

```csharp
void ISetSelectionFilters( 
   System.Int32
Count
,
   ref System.Int32
SelType
,
   System.Boolean
State
)
```
## Parameters

- `Count` (System.Int32): Number of values in SelType
- `SelType` (System.Int32): in-process, unmanaged C++: Pointer to an array of long values representing the swSelectType_e VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
- `State` (System.Boolean): 

## Return Value

Unknown.

## Remarks

The state is applied to all elements in the SelType array. To determine if the selection filter is active, use
ISldWorks::GetApplySelectionFilter
.

## See Also

- `ISldWorks.GetSelectionFilter`
- `ISldWorks.GetSelectionFilters`
- `ISldWorks.IGetSelectionFilters`
- `ISldWorks.IGetSelectionFiltersCount`
- `ISldWorks.SetApplySelectionFilter`
- `ISldWorks.SetSelectionFilter`
- `ISldWorks.SetSelectionFilters`