---
type: method
interface: ILocalCircularPatternFeatureData
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
related: []
keywords:
  - transform
  - patterns
  - gettransform
  - ilocalcircularpatternfeaturedata
  - local
  - circular
  - pattern
  - feature
  - data
  - instance
  - int32
  - math
---

# ILocalCircularPatternFeatureData.GetTransform

Gets the transform for the specified instance of this circular component pattern feature.

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
<=
ILocalCircularPatternFeatureData::TotalInstances