---
type: method
interface: ILocalLinearPatternFeatureData
member: ISetSkippedItemArray
returns: void
parameters:
  -
    name: FeatCount
    type: System.Int32
    description: Number of components to skip
  -
    name: ArrayDataIn
    type: System.Int32
    description: in-process, unmanaged C++: Pointer to an array of skipped components VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILocalLinearPatternFeatureData.GetSkippedItemCount
  - ILocalLinearPatternFeatureData.IGetSkippedItemArray
  - ILocalLinearPatternFeatureData.SkippedItemArray
keywords:
  - isetskippeditemarray
  - ilocallinearpatternfeaturedata
  - local
  - linear
  - pattern
  - feature
  - data
  - skipped
  - item
  - array
  - feat
  - count
  - int32
  - void
---

# ILocalLinearPatternFeatureData.ISetSkippedItemArray

Sets the skipped components in this linear component pattern feature.

## Signature

```csharp
void ISetSkippedItemArray( 
   System.Int32
FeatCount
,
   ref System.Int32
ArrayDataIn
)
```
## Parameters

- `FeatCount` (System.Int32): Number of components to skip
- `ArrayDataIn` (System.Int32): in-process, unmanaged C++: Pointer to an array of skipped components VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

ArrayDataIn is 0-based. If you skip the 3rd and 5th components in the pattern, the array looks like ArrayDataIn[0] = 3 and ArrayDataIn[1] = 5.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `ILocalLinearPatternFeatureData.GetSkippedItemCount`
- `ILocalLinearPatternFeatureData.IGetSkippedItemArray`
- `ILocalLinearPatternFeatureData.SkippedItemArray`