---
type: method
interface: ITablePatternFeatureData
member: IGetSkippedItemArray
returns: System.Int32
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of skipped items
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ITablePatternFeatureData.ISetSkippedItemArray
  - ITablePatternFeatureData.SkippedItemArray
keywords:
  - igetskippeditemarray
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
---

# ITablePatternFeatureData.IGetSkippedItemArray

Gets the skipped items in this table-driven pattern feature.

## Signature

```csharp
System.Int32 IGetSkippedItemArray( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of skipped items

## Return Value

in-process, unmanaged C++: Pointer to an array of skipped items VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

See
Accessing Selections that Define Features
for additional details.
Call
ITablePatternFeatureData::GetSkippedItemCount
before calling this method to get the size of the array.
Because this is a 0-based array, if you skipped the third feature and fifth feature in the pattern, then:
0 = 3
1 = 5

## See Also

- `ITablePatternFeatureData.ISetSkippedItemArray`
- `ITablePatternFeatureData.SkippedItemArray`