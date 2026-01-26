---
type: property
interface: ILocalLinearPatternFeatureData
member: SkippedItemArray
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILocalLinearPatternFeatureData.GetSkippedItemCount
  - ILocalLinearPatternFeatureData.IGetSkippedItemArray
  - ILocalLinearPatternFeatureData.ISetSkippedItemArray
keywords:
  - skippeditemarray
  - ilocallinearpatternfeaturedata
  - local
  - linear
  - pattern
  - feature
  - data
  - skipped
  - item
  - array
  - object
  - number
  - instances
  - driving
  - vb
  - net
  - vba
readonly: null
---

# ILocalLinearPatternFeatureData.SkippedItemArray

Gets or sets the skipped components in this linear component pattern feature.

## Signature

```csharp
System.Object SkippedItemArray {get; set;}
```
## Parameters

None.

## Return Value

Array of integers representing the skipped pattern components

## Remarks

This array is 0-based. If you skip the third and fifth components, then the array looks like ArrayOut[0]=3 and ArrayOut[1]=5.
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

## Examples

- Get Number of Instances Skipped in Driving Feature (C#) (Get_Number_of_Instances_Skipped_in_Driving_Feature_Example_CSharp.htm)
- Get Number of Instances Skipped in Driving Feature (VB.NET) (Get_Number_of_Instances_Skipped_in_Driving_Feature_Example_VBNET.htm)
- Get Number of Instances Skipped in Driving Feature (VBA) (Get_Number_of_Instances_Skipped_in_Driving_Feature_Example_VB.htm)

## See Also

- `ILocalLinearPatternFeatureData.GetSkippedItemCount`
- `ILocalLinearPatternFeatureData.IGetSkippedItemArray`
- `ILocalLinearPatternFeatureData.ISetSkippedItemArray`