---
type: method
interface: ILinearPatternFeatureData
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
  - ILinearPatternFeatureData.SkippedItemArray
keywords:
  - transform
  - patterns
  - gettransform
  - ilinearpatternfeaturedata
  - linear
  - pattern
  - feature
  - data
  - instance
  - int32
  - math
---

# ILinearPatternFeatureData.GetTransform

Gets the transform for the specified instance of this linear pattern feature.

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
ILinearPatternFeatureData::D1TotalInstances
+
ILinearPatternFeatureData::D2TotalInstances
)

## See Also

- `ILinearPatternFeatureData.SkippedItemArray`