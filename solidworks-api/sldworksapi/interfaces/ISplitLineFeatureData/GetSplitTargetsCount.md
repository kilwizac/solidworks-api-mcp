---
type: method
interface: ISplitLineFeatureData
member: GetSplitTargetsCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISplitLineFeatureData.ISetSplitTargets
  - ISplitLineFeatureData.SplitAll
  - ISplitLineFeatureData.SplitTargets
keywords:
  - getsplittargetscount
  - isplitlinefeaturedata
  - split
  - line
  - feature
  - data
  - targets
  - count
  - int32
---

# ISplitLineFeatureData.GetSplitTargetsCount

Gets the number of faces or bodies to split.

## Signature

```csharp
System.Int32 GetSplitTargetsCount()
```
## Parameters

None.

## Return Value

Number of faces or bodies to split

## Remarks

Call this method before calling
ISplitLineFeatureData::IGetSplitTargets
to get the size of the array for that method.

## See Also

- `ISplitLineFeatureData.ISetSplitTargets`
- `ISplitLineFeatureData.SplitAll`
- `ISplitLineFeatureData.SplitTargets`