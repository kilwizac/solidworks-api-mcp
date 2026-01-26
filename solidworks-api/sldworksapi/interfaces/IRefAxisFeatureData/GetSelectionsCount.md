---
type: method
interface: IRefAxisFeatureData
member: GetSelectionsCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related:
  - IRefAxisFeatureData.GetSelections
  - IRefAxisFeatureData.ISetSelections
  - IRefAxisFeatureData.SetSelections
keywords:
  - getselectionscount
  - irefaxisfeaturedata
  - ref
  - axis
  - feature
  - data
  - selections
  - count
  - int32
---

# IRefAxisFeatureData.GetSelectionsCount

Gets the number of selections that define this reference axis feature.

## Signature

```csharp
System.Int32 GetSelectionsCount()
```
## Parameters

None.

## Return Value

Number of selections that define this reference axis featu

## Remarks

Call this method before calling
IRefAxisFeatureData::IGetSelections
.

## See Also

- `IRefAxisFeatureData.GetSelections`
- `IRefAxisFeatureData.ISetSelections`
- `IRefAxisFeatureData.SetSelections`