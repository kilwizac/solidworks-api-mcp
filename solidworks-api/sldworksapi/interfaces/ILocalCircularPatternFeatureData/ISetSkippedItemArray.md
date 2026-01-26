---
type: method
interface: ILocalCircularPatternFeatureData
member: ISetSkippedItemArray
returns: void
parameters:
  -
    name: FeatCount
    type: System.Int32
    description: Number of skipped items
  -
    name: ArrayDataIn
    type: System.Int32
    description: in-process, unmanaged C++: Pointer to an array of skipped items VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILocalCircularPatternFeatureData.GetSkippedItemCount
  - ILocalCircularPatternFeatureData.IGetSkippedItemArray
  - ILocalCircularPatternFeatureData.SkippedItemArray
keywords:
  - isetskippeditemarray
  - ilocalcircularpatternfeaturedata
  - local
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

# ILocalCircularPatternFeatureData.ISetSkippedItemArray

Sets the list of skipped items for this circular component pattern feature.

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

- `FeatCount` (System.Int32): Number of skipped items
- `ArrayDataIn` (System.Int32): in-process, unmanaged C++: Pointer to an array of skipped items VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `ILocalCircularPatternFeatureData.GetSkippedItemCount`
- `ILocalCircularPatternFeatureData.IGetSkippedItemArray`
- `ILocalCircularPatternFeatureData.SkippedItemArray`