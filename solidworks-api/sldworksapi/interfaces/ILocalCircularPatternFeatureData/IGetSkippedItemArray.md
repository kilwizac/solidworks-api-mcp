---
type: method
interface: ILocalCircularPatternFeatureData
member: IGetSkippedItemArray
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILocalCircularPatternFeatureData.GetSkippedItemCount
  - ILocalCircularPatternFeatureData.ISetSkippedItemArray
  - ILocalCircularPatternFeatureData.SkippedItemArray
keywords:
  - igetskippeditemarray
  - ilocalcircularpatternfeaturedata
  - local
  - circular
  - pattern
  - feature
  - data
  - skipped
  - item
  - array
  - int32
---

# ILocalCircularPatternFeatureData.IGetSkippedItemArray

Gets the list of skipped items in this circular component pattern feature.

## Signature

```csharp
System.Int32 IGetSkippedItemArray()
```
## Parameters

None.

## Return Value

in-process, unmanaged C++: Pointer to an array of long values that represent the skipped items in the pattern VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

This is a 0-based array, so if you skipped the third feature and the fifth feature in the pattern, then:
Array[0] = 3
Array[1] = 5
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `ILocalCircularPatternFeatureData.GetSkippedItemCount`
- `ILocalCircularPatternFeatureData.ISetSkippedItemArray`
- `ILocalCircularPatternFeatureData.SkippedItemArray`