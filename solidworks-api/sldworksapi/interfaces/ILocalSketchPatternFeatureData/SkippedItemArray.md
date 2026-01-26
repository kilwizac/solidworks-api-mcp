---
type: property
interface: ILocalSketchPatternFeatureData
member: SkippedItemArray
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - sketches
related:
  - ILocalSketchPatternFeatureData.GetSkippedItemCount
keywords:
  - skippeditemarray
  - ilocalsketchpatternfeaturedata
  - local
  - sketch
  - pattern
  - feature
  - data
  - skipped
  - item
  - array
  - object
readonly: null
---

# ILocalSketchPatternFeatureData.SkippedItemArray

Gets or sets the array of skipped components in this sketch-driven component pattern feature.

## Signature

```csharp
System.Object SkippedItemArray {get; set;}
```
## Parameters

None.

## Return Value

Array of integers representing skipped components

## Remarks

This array is 0-based. If you skip the third and fifth components, then the array looks like ArrayOut[0]=3 and ArrayOut[1]=5.
See
Accessing Selections that Define Features
for additional details on using this property.

## See Also

- `ILocalSketchPatternFeatureData.GetSkippedItemCount`