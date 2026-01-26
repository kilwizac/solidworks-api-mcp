---
type: method
interface: ICurveDrivenPatternFeatureData
member: ISetSkippedItemArray
returns: void
parameters:
  -
    name: FeatCount
    type: System.Int32
    description: Number of skipped features
  -
    name: ArrayDataIn
    type: System.Int32
    description: in-process, unmanaged C++: Pointer to an array of skipped items of size FeatCount VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICurveDrivenPatternFeatureData.GetSkippedItemCount
  - ICurveDrivenPatternFeatureData.IGetSkippedItemArray
  - ICurveDrivenPatternFeatureData.SkippedItemArray
keywords:
  - isetskippeditemarray
  - icurvedrivenpatternfeaturedata
  - curve
  - driven
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

# ICurveDrivenPatternFeatureData.ISetSkippedItemArray

Sets the list of skipped items for this curve-driven pattern feature.

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

- `FeatCount` (System.Int32): Number of skipped features
- `ArrayDataIn` (System.Int32): in-process, unmanaged C++: Pointer to an array of skipped items of size FeatCount VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `ICurveDrivenPatternFeatureData.GetSkippedItemCount`
- `ICurveDrivenPatternFeatureData.IGetSkippedItemArray`
- `ICurveDrivenPatternFeatureData.SkippedItemArray`