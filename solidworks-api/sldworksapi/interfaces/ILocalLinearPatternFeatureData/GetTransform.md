---
type: method
interface: ILocalLinearPatternFeatureData
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
  - ILocalLinearPatternFeatureData.SkippedItemArray
keywords:
  - transform
  - patterns
  - gettransform
  - ilocallinearpatternfeaturedata
  - local
  - linear
  - pattern
  - feature
  - data
  - instance
  - int32
  - math
---

# ILocalLinearPatternFeatureData.GetTransform

Gets the transform for the specified instance of this linear component pattern feature.

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
ILocalLinearPatternFeatureData::D1TotalInstances
+
ILocalLinearPatternFeatureData::D2TotalInstances
)

## See Also

- `ILocalLinearPatternFeatureData.SkippedItemArray`