---
type: property
interface: ILinearPatternFeatureData
member: SkippedItemArray
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILinearPatternFeatureData.GetSkippedItemCount
  - ILinearPatternFeatureData.IGetSkippedItemArray
  - ILinearPatternFeatureData.ISetSkippedItemArray
keywords:
  - skippeditemarray
  - ilinearpatternfeaturedata
  - linear
  - pattern
  - feature
  - data
  - skipped
  - item
  - array
  - object
readonly: null
---

# ILinearPatternFeatureData.SkippedItemArray

Gets or sets the items skipped in this linear pattern feature.

## Signature

```csharp
System.Object SkippedItemArray {get; set;}
```
## Parameters

None.

## Return Value

Array of integers representing skipped items

## Remarks

The array is 0-based. If you skip the third and fifth items, then the array looks like ArrayOut[0]=3 and ArrayOut[1]=5.
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
For more information, see the
Linear Patterns and the Linear Pattern PropertyManager
topic in the SOLIDWORKS Design user-interface help.

## See Also

- `ILinearPatternFeatureData.GetSkippedItemCount`
- `ILinearPatternFeatureData.IGetSkippedItemArray`
- `ILinearPatternFeatureData.ISetSkippedItemArray`