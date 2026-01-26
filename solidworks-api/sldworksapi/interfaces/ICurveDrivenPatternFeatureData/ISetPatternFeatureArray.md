---
type: method
interface: ICurveDrivenPatternFeatureData
member: ISetPatternFeatureArray
returns: void
parameters:
  -
    name: FeatCount
    type: System.Int32
    description: Number of pattern features
  -
    name: ArrayDataIn
    type: System.Object
    description: in-process, unmanaged C++: Pointer to an array of pattern features of size FeatCount VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICurveDrivenPatternFeatureData.BodyPattern
  - ICurveDrivenPatternFeatureData.GetPatternFeatureCount
  - ICurveDrivenPatternFeatureData.IGetPatternFeatureArray
  - ICurveDrivenPatternFeatureData.PatternFeatureArray
keywords:
  - isetpatternfeaturearray
  - icurvedrivenpatternfeaturedata
  - curve
  - driven
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

# ICurveDrivenPatternFeatureData.ISetPatternFeatureArray

Sets the list of pattern features for this curve-driven pattern feature.

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

- `FeatCount` (System.Int32): Number of pattern features
- `ArrayDataIn` (System.Object): in-process, unmanaged C++: Pointer to an array of pattern features of size FeatCount VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `ICurveDrivenPatternFeatureData.BodyPattern`
- `ICurveDrivenPatternFeatureData.GetPatternFeatureCount`
- `ICurveDrivenPatternFeatureData.IGetPatternFeatureArray`
- `ICurveDrivenPatternFeatureData.PatternFeatureArray`