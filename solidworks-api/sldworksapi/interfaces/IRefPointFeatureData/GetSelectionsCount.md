---
type: method
interface: IRefPointFeatureData
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
  - IRefPointFeatureData.ISetSelections
  - IRefPointFeatureData.Selections
keywords:
  - getselectionscount
  - irefpointfeaturedata
  - ref
  - point
  - feature
  - data
  - selections
  - count
  - int32
---

# IRefPointFeatureData.GetSelectionsCount

Gets the number of entities selected to use to create the reference point.

## Signature

```csharp
System.Int32 GetSelectionsCount()
```
## Parameters

None.

## Return Value

Number of selected entities

## Remarks

Call this method before calling
IRefPointFeatureData::IGetSelections
.

## See Also

- `IRefPointFeatureData.ISetSelections`
- `IRefPointFeatureData.Selections`