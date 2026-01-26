---
type: method
interface: ICurveDrivenPatternFeatureData
member: IGetSkippedItemArray
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICurveDrivenPatternFeatureData.GetSkippedItemCount
  - ICurveDrivenPatternFeatureData.ISetSkippedItemArray
  - ICurveDrivenPatternFeatureData.SkippedItemArray
keywords:
  - igetskippeditemarray
  - icurvedrivenpatternfeaturedata
  - curve
  - driven
  - pattern
  - feature
  - data
  - skipped
  - item
  - array
  - int32
---

# ICurveDrivenPatternFeatureData.IGetSkippedItemArray

Gets the array of integers representing the skipped items for this curve-driven pattern feature.

## Signature

```csharp
System.Int32 IGetSkippedItemArray()
```
## Parameters

None.

## Return Value

in-process, unmanaged C++: Pointer to an array of integers representing skipped items VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

This is a 0-based array, so if you skip the third and fifth items in the pattern, then:
Array[0] = 3
Array[1] = 5
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `ICurveDrivenPatternFeatureData.GetSkippedItemCount`
- `ICurveDrivenPatternFeatureData.ISetSkippedItemArray`
- `ICurveDrivenPatternFeatureData.SkippedItemArray`