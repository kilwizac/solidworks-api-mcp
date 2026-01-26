---
type: method
interface: ICircularPatternFeatureData
member: ISetPatternFeatureArray
returns: void
parameters:
  -
    name: FeatCount
    type: System.Int32
    description: Number of seed features to use to create this circular pattern
  -
    name: ArrayDataIn
    type: System.Object
    description: in-process, unmanaged C++: Pointer to an array of seed features to use to create the circular pattern VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICircularPatternFeatureData.BodyPattern
  - ICircularPatternFeatureData.GetPatternFeatureCount
  - ICircularPatternFeatureData.IGetPatternFeatureArray
  - ICircularPatternFeatureData.PatternFeatureArray
keywords:
  - isetpatternfeaturearray
  - icircularpatternfeaturedata
  - circular
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

# ICircularPatternFeatureData.ISetPatternFeatureArray

Sets the seed features to use to create the circular pattern.

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

- `FeatCount` (System.Int32): Number of seed features to use to create this circular pattern
- `ArrayDataIn` (System.Object): in-process, unmanaged C++: Pointer to an array of seed features to use to create the circular pattern VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `ICircularPatternFeatureData.BodyPattern`
- `ICircularPatternFeatureData.GetPatternFeatureCount`
- `ICircularPatternFeatureData.IGetPatternFeatureArray`
- `ICircularPatternFeatureData.PatternFeatureArray`