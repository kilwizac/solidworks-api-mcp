---
type: method
interface: IDerivedPatternFeatureData
member: ISetSkippedItemArray
returns: void
parameters:
  -
    name: FeatCount
    type: System.Int32
    description: Number of items to skip
  -
    name: ArrayDataIn
    type: System.Int32
    description: in-process, unmanaged C++: Pointer to an array of longs of the items to skip VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IDerivedPatternFeatureData.GetSkippedItemCount
  - IDerivedPatternFeatureData.IGetSkippedItemArray
  - IDerivedPatternFeatureData.SkippedItemArray
keywords:
  - isetskippeditemarray
  - iderivedpatternfeaturedata
  - derived
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

# IDerivedPatternFeatureData.ISetSkippedItemArray

Sets the list of items to skip for this derived pattern feature.

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

- `FeatCount` (System.Int32): Number of items to skip
- `ArrayDataIn` (System.Int32): in-process, unmanaged C++: Pointer to an array of longs of the items to skip VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IDerivedPatternFeatureData.GetSkippedItemCount`
- `IDerivedPatternFeatureData.IGetSkippedItemArray`
- `IDerivedPatternFeatureData.SkippedItemArray`