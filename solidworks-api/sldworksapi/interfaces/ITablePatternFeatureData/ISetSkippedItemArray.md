---
type: method
interface: ITablePatternFeatureData
member: ISetSkippedItemArray
returns: void
parameters:
  -
    name: Count
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
  - ITablePatternFeatureData.GetSkippedItemCount
  - ITablePatternFeatureData.IGetSkippedItemArray
  - ITablePatternFeatureData.SkippedItemArray
keywords:
  - isetskippeditemarray
  - itablepatternfeaturedata
  - table
  - pattern
  - feature
  - data
  - skipped
  - item
  - array
  - count
  - int32
  - void
---

# ITablePatternFeatureData.ISetSkippedItemArray

Sets the skipped items in this table-driven pattern feature.

## Signature

```csharp
void ISetSkippedItemArray( 
   System.Int32
Count
,
   ref System.Int32
ArrayDataIn
)
```
## Parameters

- `Count` (System.Int32): Number of skipped items
- `ArrayDataIn` (System.Int32): in-process, unmanaged C++: Pointer to an array of skipped items VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details.

## See Also

- `ITablePatternFeatureData.GetSkippedItemCount`
- `ITablePatternFeatureData.IGetSkippedItemArray`
- `ITablePatternFeatureData.SkippedItemArray`