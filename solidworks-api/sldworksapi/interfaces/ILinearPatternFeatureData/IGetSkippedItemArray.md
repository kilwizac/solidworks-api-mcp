---
type: method
interface: ILinearPatternFeatureData
member: IGetSkippedItemArray
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILinearPatternFeatureData.GetSkippedItemCount
  - ILinearPatternFeatureData.ISetSkippedItemArray
  - ILinearPatternFeatureData.SkippedItemArray
keywords:
  - igetskippeditemarray
  - ilinearpatternfeaturedata
  - linear
  - pattern
  - feature
  - data
  - skipped
  - item
  - array
  - int32
---

# ILinearPatternFeatureData.IGetSkippedItemArray

Gets the items skipped in this linear pattern feature.

## Signature

```csharp
System.Int32 IGetSkippedItemArray()
```
## Parameters

None.

## Return Value

in-process, unmanaged C++: Pointer to an array of the skipped items VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

This array is 0-based, so if you skipped the third and fifth items in the pattern, then Array[0] = 3 and Array[1] = 5.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `ILinearPatternFeatureData.GetSkippedItemCount`
- `ILinearPatternFeatureData.ISetSkippedItemArray`
- `ILinearPatternFeatureData.SkippedItemArray`