---
type: method
interface: ILocalLinearPatternFeatureData
member: IGetSkippedItemArray
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILocalLinearPatternFeatureData.GetSkippedItemCount
  - ILocalLinearPatternFeatureData.ISetSkippedItemArray
  - ILocalLinearPatternFeatureData.SkippedItemArray
keywords:
  - igetskippeditemarray
  - ilocallinearpatternfeaturedata
  - local
  - linear
  - pattern
  - feature
  - data
  - skipped
  - item
  - array
  - int32
---

# ILocalLinearPatternFeatureData.IGetSkippedItemArray

Gets the skipped components in this linear component pattern feature.

## Signature

```csharp
System.Int32 IGetSkippedItemArray()
```
## Parameters

None.

## Return Value

in-process, unmanaged C++: Pointer to an array of skipped pattern instances VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

This array is 0-based. If you skip the 3rd and 5th components in the pattern, then the array looks like ArrayOut[0] = 3 and ArrayOut[1] = 5.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `ILocalLinearPatternFeatureData.GetSkippedItemCount`
- `ILocalLinearPatternFeatureData.ISetSkippedItemArray`
- `ILocalLinearPatternFeatureData.SkippedItemArray`