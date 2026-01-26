---
type: method
interface: ILocalSketchPatternFeatureData
member: GetTransform
returns: MathTransform
parameters:
  -
    name: Instance
    type: System.Int32
    description: Index of one repeating element in this local sketch-driven pattern feature (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - sketches
related: []
keywords:
  - gettransform
  - ilocalsketchpatternfeaturedata
  - local
  - sketch
  - pattern
  - feature
  - data
  - transform
  - instance
  - int32
  - math
---

# ILocalSketchPatternFeatureData.GetTransform

Gets the transform for the specified instance in this sketch-driven component pattern feature.

## Signature

```csharp
MathTransform GetTransform( 
   System.Int32
Instance
)
```
## Parameters

- `Instance` (System.Int32): Index of one repeating element in this local sketch-driven pattern feature (see Remarks )

## Return Value

Transform

## Remarks

Valid values for Instance are 1 <= Instance <=
ILocalSketchPatternFeatureData::GetPatternComponentCount