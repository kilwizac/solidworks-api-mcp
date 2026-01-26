---
type: property
interface: ICircularPatternFeatureData
member: SkippedItemArray
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICircularPatternFeatureData.GetSkippedItemCount
  - ICircularPatternFeatureData.IGetSkippedItemArray
  - ICircularPatternFeatureData.ISetSkippedItemArray
keywords:
  - skippeditemarray
  - icircularpatternfeaturedata
  - circular
  - pattern
  - feature
  - data
  - skipped
  - item
  - array
  - object
readonly: null
---

# ICircularPatternFeatureData.SkippedItemArray

Gets or sets the list of items to skip in this circular pattern feature.

## Signature

```csharp
System.Object SkippedItemArray {get; set;}
```
## Parameters

None.

## Return Value

Array of integers representing the items to skip

## Remarks

This array is 0-based. If you skip the third and fifth items, then the array looks like ArrayOut[0]=3 and ArrayOut[1]=5.
To calculate the pattern instance numbers to skip:
Calculate:
For a bi-directional pattern:
I
=
n2
* (
i
- 1) + (
j
- 1)
For a uni-directional pattern:
I
=
i
- 1
where:
I
= pattern instance number
n2
= number of instances in Direction 2
i
= index for Direction 1
j
= index for Direction 2
In the pattern's PropertyManager, find
n2
in the
Direction 2
> Spacing and Instances > Number of instances
field and find [
i,j
] in the
Modified Instances
section.
See
Accessing Selections that Define Features
for additional details on using this property.

## See Also

- `ICircularPatternFeatureData.GetSkippedItemCount`
- `ICircularPatternFeatureData.IGetSkippedItemArray`
- `ICircularPatternFeatureData.ISetSkippedItemArray`