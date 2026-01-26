---
type: method
interface: IAdvancedSelectionCriteria
member: GetItemCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - selections
related: []
keywords:
  - getitemcount
  - iadvancedselectioncriteria
  - advanced
  - selection
  - criteria
  - item
  - count
  - int32
---

# IAdvancedSelectionCriteria.GetItemCount

Gets the number of criteria in the advanced component selection criteria list.

## Signature

```csharp
System.Int32 GetItemCount()
```
## Parameters

None.

## Return Value

Number of criteria in the advanced component selection criteria list

## Remarks

Call this method before calling
IAdvancedSelectionCriteriaClass::GetItem
and
IAdvancedSelectionCriteriaClass::DeleteItem
to get the number of criteria in the advanced component selection criteria list.

## Examples

- IAdvancedSelectionCriteria (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAdvancedSelectionCriteria)