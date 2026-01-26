---
type: method
interface: ISplitBodyFeatureData
member: GetTrimToolsCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - ISplitBodyFeatureData.ISetTrimTools
  - ISplitBodyFeatureData.TrimTools
keywords:
  - gettrimtoolscount
  - isplitbodyfeaturedata
  - split
  - body
  - feature
  - data
  - trim
  - tools
  - count
  - int32
---

# ISplitBodyFeatureData.GetTrimToolsCount

Gets the number of trimming surfaces used as trim tools in this Split feature.

## Signature

```csharp
System.Int32 GetTrimToolsCount()
```
## Parameters

None.

## Return Value

Number of trimming surfaces used as trim tools in this Split feature

## Remarks

Call this method before calling
ISplitBodyFeatureData::IGetTrimTools
to determine the size of the array for that method.

## See Also

- `ISplitBodyFeatureData.ISetTrimTools`
- `ISplitBodyFeatureData.TrimTools`