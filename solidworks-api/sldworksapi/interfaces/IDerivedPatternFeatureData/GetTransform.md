---
type: method
interface: IDerivedPatternFeatureData
member: GetTransform
returns: MathTransform
parameters:
  -
    name: Instance
    type: System.Int32
    description: Index of one repeating element in this pattern (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICurveDrivenPatternFeatureData.SkippedItemArray
keywords:
  - transform
  - patterns
  - gettransform
  - iderivedpatternfeaturedata
  - derived
  - pattern
  - feature
  - data
  - instance
  - int32
  - math
---

# IDerivedPatternFeatureData.GetTransform

Gets the transform for the specified instance of this derived-pattern feature.

## Signature

```csharp
MathTransform GetTransform( 
   System.Int32
Instance
)
```
## Parameters

- `Instance` (System.Int32): Index of one repeating element in this pattern (see Remarks )

## Return Value

Transform

## Remarks

To get the number of instances in this pattern, get the number of subfeatures of the pattern by traversing the FeatureManager design tree, getting the derived-pattern feature, getting the derived-pattern feature's subfeatures, and keeping count of the number of subfeatures. You can use
IModelDoc2::FirstFeature
,
IFeature::GetFirstSubFeature
, and
IFeature::GetNextSubFeature
to traverse the FeatureManager design tree and get the derived-pattern feature's subfeatures.
Transform each instance by calling this method, setting its parameter
Instance
as follows:
1 <=
Instance
<= total number of instances in this pattern

## See Also

- `ICurveDrivenPatternFeatureData.SkippedItemArray`