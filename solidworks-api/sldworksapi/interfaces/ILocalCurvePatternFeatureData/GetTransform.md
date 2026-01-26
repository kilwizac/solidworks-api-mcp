---
type: method
interface: ILocalCurvePatternFeatureData
member: GetTransform
returns: MathTransform
parameters:
  -
    name: Instance
    type: System.Int32
    description: Index of one repeating element in this sketch-driven component pattern feature (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - gettransform
  - ilocalcurvepatternfeaturedata
  - local
  - curve
  - pattern
  - feature
  - data
  - transform
  - instance
  - int32
  - math
---

# ILocalCurvePatternFeatureData.GetTransform

Gets the transform for the specified instance in this curve-driven component pattern feature.

## Signature

```csharp
MathTransform GetTransform( 
   System.Int32
Instance
)
```
## Parameters

- `Instance` (System.Int32): Index of one repeating element in this sketch-driven component pattern feature (see Remarks )

## Return Value

Transform

## Remarks

Valid values for Instance are 1 <= Instance <=
ILocalCurvePatternFeatureData::GetPatternComponentCount
.