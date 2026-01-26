---
type: method
interface: ILinearPatternFeatureData
member: ISetPatternFeatureArray
returns: void
parameters:
  -
    name: FeatCount
    type: System.Int32
    description: Number of features
  -
    name: ArrayDataIn
    type: System.Object
    description: in-process, unmanaged C++: Pointer to an array features of size FeatCount VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILinearPatternFeatureData.BodyPattern
  - ILinearPatternFeatureData.GetPatternFeatureCount
  - ILinearPatternFeatureData.PatternFeatureArray
keywords:
  - isetpatternfeaturearray
  - ilinearpatternfeaturedata
  - linear
  - pattern
  - feature
  - data
  - array
  - feat
  - count
  - int32
  - object
  - void
---

# ILinearPatternFeatureData.ISetPatternFeatureArray

Sets a list of pattern features for this linear pattern feature.

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

- `FeatCount` (System.Int32): Number of features
- `ArrayDataIn` (System.Object): in-process, unmanaged C++: Pointer to an array features of size FeatCount VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `ILinearPatternFeatureData.BodyPattern`
- `ILinearPatternFeatureData.GetPatternFeatureCount`
- `ILinearPatternFeatureData.PatternFeatureArray`