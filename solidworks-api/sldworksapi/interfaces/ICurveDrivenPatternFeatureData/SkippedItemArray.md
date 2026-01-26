---
type: property
interface: ICurveDrivenPatternFeatureData
member: SkippedItemArray
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICurveDrivenPatternFeatureData.GetSkippedItemCount
  - ICurveDrivenPatternFeatureData.IGetSkippedItemArray
  - ICurveDrivenPatternFeatureData.ISetSkippedItemArray
keywords:
  - skippeditemarray
  - icurvedrivenpatternfeaturedata
  - curve
  - driven
  - pattern
  - feature
  - data
  - skipped
  - item
  - array
  - object
readonly: null
---

# ICurveDrivenPatternFeatureData.SkippedItemArray

Gets or sets the skipped items for this curve-driven pattern feature.

## Signature

```csharp
System.Object SkippedItemArray {get; set;}
```
## Parameters

None.

## Return Value

Array of integers representing the skipped items

## Remarks

This array is 0-based. If you skip the third and fifth items, then the array looks like ArrayOut[0]=3 and ArrayOut[1]=5.
See
Accessing Selections that Define Features
for additional details on using this property.

## See Also

- `ICurveDrivenPatternFeatureData.GetSkippedItemCount`
- `ICurveDrivenPatternFeatureData.IGetSkippedItemArray`
- `ICurveDrivenPatternFeatureData.ISetSkippedItemArray`