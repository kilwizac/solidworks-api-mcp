---
type: method
interface: ICurveDrivenPatternFeatureData
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
  - icurvedrivenpatternfeaturedata
  - curve
  - driven
  - pattern
  - feature
  - data
  - instance
  - int32
  - math
---

# ICurveDrivenPatternFeatureData.GetTransform

Gets the transform for the specified instance of this curve-driven pattern feature.

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

1 <=
Instance
<= (
ICurveDrivenPatternFeatureData::D1InstanceCount
+
ICurveDrivenPatternFeatureData::D2InstanceCount
)

## See Also

- `ICurveDrivenPatternFeatureData.SkippedItemArray`