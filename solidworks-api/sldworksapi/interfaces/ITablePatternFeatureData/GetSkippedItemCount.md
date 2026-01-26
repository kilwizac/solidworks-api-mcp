---
type: method
interface: ITablePatternFeatureData
member: GetSkippedItemCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ITablePatternFeatureData.IGetSkippedItemArray
  - ITablePatternFeatureData.ISetSkippedItemArray
  - ITablePatternFeatureData.SkippedItemArray
keywords:
  - getskippeditemcount
  - itablepatternfeaturedata
  - table
  - pattern
  - feature
  - data
  - skipped
  - item
  - count
  - int32
---

# ITablePatternFeatureData.GetSkippedItemCount

Gets the number of skipped items in this }}-->table-driven pattern feature.

## Signature

```csharp
System.Int32 GetSkippedItemCount()
```
## Parameters

None.

## Return Value

Number of skipped items

## Remarks

Call this method before calling
ITablePatternFeatureData::IGetSkippedItemArray
to get the size of the array.

## See Also

- `ITablePatternFeatureData.IGetSkippedItemArray`
- `ITablePatternFeatureData.ISetSkippedItemArray`
- `ITablePatternFeatureData.SkippedItemArray`