---
type: method
interface: ICircularPatternFeatureData
member: IGetSkippedItemArray
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICircularPatternFeatureData.GetSkippedItemCount
  - ICircularPatternFeatureData.ISetSkippedItemArray
  - ICircularPatternFeatureData.SkippedItemArray
keywords:
  - igetskippeditemarray
  - icircularpatternfeaturedata
  - circular
  - pattern
  - feature
  - data
  - skipped
  - item
  - array
  - int32
---

# ICircularPatternFeatureData.IGetSkippedItemArray

Gets an array of integers that represent the skipped items in this circular feature.

## Signature

```csharp
System.Int32 IGetSkippedItemArray()
```
## Parameters

None.

## Return Value

in-process, unmanaged C++: Pointer to an array of integers that represent the skipped items in the pattern VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

This is a 0-based array, so if you skip the third and fifth items in the pattern, then:
Array[0] = 3
Array[1] = 5
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `ICircularPatternFeatureData.GetSkippedItemCount`
- `ICircularPatternFeatureData.ISetSkippedItemArray`
- `ICircularPatternFeatureData.SkippedItemArray`