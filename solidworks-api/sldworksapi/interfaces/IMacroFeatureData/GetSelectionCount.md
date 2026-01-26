---
type: method
interface: IMacroFeatureData
member: GetSelectionCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related:
  - IMacroFeatureData.GetSelections3
  - IMacroFeatureData.ISetSelections2
  - IMacroFeatureData.SetSelections2
keywords:
  - getselectioncount
  - imacrofeaturedata
  - macro
  - feature
  - data
  - selection
  - count
  - int32
---

# IMacroFeatureData.GetSelectionCount

Gets the number of selected objects for the macro feature.

## Signature

```csharp
System.Int32 GetSelectionCount()
```
## Parameters

None.

## Return Value

Number of selected objects

## Remarks

Call ths method before calling
IMacroFeatureData::IGetSelections3
to determine the size of the array for that method.

## See Also

- `IMacroFeatureData.GetSelections3`
- `IMacroFeatureData.ISetSelections2`
- `IMacroFeatureData.SetSelections2`