---
type: method
interface: ICircularPatternFeatureData
member: ISetSkippedItemArray
returns: void
parameters:
  -
    name: FeatCount
    type: System.Int32
    description: Number of instances to skip
  -
    name: ArrayDataIn
    type: System.Int32
    description: in-process, unmanaged C++: Pointer to an array that represents the skipped items of size FeatCount VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICircularPatternFeatureData.GetSkippedItemCount
  - ICircularPatternFeatureData.IGetSkippedItemArray
  - ICircularPatternFeatureData.SkippedItemArray
keywords:
  - isetskippeditemarray
  - icircularpatternfeaturedata
  - circular
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

# ICircularPatternFeatureData.ISetSkippedItemArray

Sets the list of skipped items in this circular pattern.

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

- `FeatCount` (System.Int32): Number of instances to skip
- `ArrayDataIn` (System.Int32): in-process, unmanaged C++: Pointer to an array that represents the skipped items of size FeatCount VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `ICircularPatternFeatureData.GetSkippedItemCount`
- `ICircularPatternFeatureData.IGetSkippedItemArray`
- `ICircularPatternFeatureData.SkippedItemArray`