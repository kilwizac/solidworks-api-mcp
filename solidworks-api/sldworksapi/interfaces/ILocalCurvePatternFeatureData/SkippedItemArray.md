---
type: property
interface: ILocalCurvePatternFeatureData
member: SkippedItemArray
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILocalCurvePatternFeatureData.GetSkippedItemCount
keywords:
  - skippeditemarray
  - ilocalcurvepatternfeaturedata
  - local
  - curve
  - pattern
  - feature
  - data
  - skipped
  - item
  - array
  - object
readonly: null
---

# ILocalCurvePatternFeatureData.SkippedItemArray

Gets or sets the array of skipped components in this curve-driven component pattern feature.

## Signature

```csharp
System.Object SkippedItemArray {get; set;}
```
## Parameters

None.

## Return Value

Array of integers representing the skipped components

## Remarks

This array is 0-based. If you skip the third and fifth components, then the array looks like ArrayOut[0]=3 and ArrayOut[1]=5.
See
Accessing Selections that Define Features
for additional details on using this property.

## See Also

- `ILocalCurvePatternFeatureData.GetSkippedItemCount`