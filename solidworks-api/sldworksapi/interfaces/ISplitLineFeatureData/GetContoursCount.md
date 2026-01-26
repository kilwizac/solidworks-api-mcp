---
type: method
interface: ISplitLineFeatureData
member: GetContoursCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISplitLineFeatureData.Contours
  - ISplitLineFeatureData.ISetContours
keywords:
  - getcontourscount
  - isplitlinefeaturedata
  - split
  - line
  - feature
  - data
  - contours
  - count
  - int32
---

# ISplitLineFeatureData.GetContoursCount

Gets the number of selected contours for this split line feature.

## Signature

```csharp
System.Int32 GetContoursCount()
```
## Parameters

None.

## Return Value

Number of selected contours

## Remarks

Call this method before calling
ISplitLineFeatureData::IGetContours
to determine the size of the array for that method.

## See Also

- `ISplitLineFeatureData.Contours`
- `ISplitLineFeatureData.ISetContours`