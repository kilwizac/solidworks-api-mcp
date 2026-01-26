---
type: method
interface: ISplitLineFeatureData
member: GetSplitToolsCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISplitLineFeatureData.ISetSplitTools
  - ISplitLineFeatureData.SplitTools
keywords:
  - getsplittoolscount
  - isplitlinefeaturedata
  - split
  - line
  - feature
  - data
  - tools
  - count
  - int32
---

# ISplitLineFeatureData.GetSplitToolsCount

Gets the number of tools used to make the split.

## Signature

```csharp
System.Int32 GetSplitToolsCount()
```
## Parameters

None.

## Return Value

Number of tools used to make the split

## Remarks

Call this method before calling
ISplitLineFeatureData::IGetSplitTools
to determine the size of the array for that method.

## See Also

- `ISplitLineFeatureData.ISetSplitTools`
- `ISplitLineFeatureData.SplitTools`