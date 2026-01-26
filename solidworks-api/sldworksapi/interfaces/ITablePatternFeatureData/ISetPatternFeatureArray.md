---
type: method
interface: ITablePatternFeatureData
member: ISetPatternFeatureArray
returns: void
parameters:
  -
    name: FeatCount
    type: System.Int32
    description: Number of seed features that to use to create this table-driven pattern feature
  -
    name: ArrayDataIn
    type: System.Object
    description: in-process, unmanaged C++: Pointer to an array of seed features to use to create the table-driven pattern feature VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ITablePatternFeatureData.GetPatternFeatureCount
  - ITablePatternFeatureData.IGetPatternFeatureArray
  - ITablePatternFeatureData.PatternFeatureArray
keywords:
  - pattern
  - seed
  - features
  - isetpatternfeaturearray
  - itablepatternfeaturedata
  - table
  - feature
  - data
  - array
  - feat
  - count
  - int32
  - object
  - void
---

# ITablePatternFeatureData.ISetPatternFeatureArray

Sets the seed features used to create the table-driven pattern feature.

## Signature

```csharp
void ISetPatternFeatureArray( 
   System.Int32
FeatCount
,
   ref System.Object
ArrayDataIn
)
```
## Parameters

- `FeatCount` (System.Int32): Number of seed features that to use to create this table-driven pattern feature
- `ArrayDataIn` (System.Object): in-process, unmanaged C++: Pointer to an array of seed features to use to create the table-driven pattern feature VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details.

## See Also

- `ITablePatternFeatureData.GetPatternFeatureCount`
- `ITablePatternFeatureData.IGetPatternFeatureArray`
- `ITablePatternFeatureData.PatternFeatureArray`