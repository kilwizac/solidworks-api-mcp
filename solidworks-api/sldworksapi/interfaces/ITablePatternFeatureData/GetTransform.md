---
type: method
interface: ITablePatternFeatureData
member: GetTransform
returns: MathTransform
parameters:
  -
    name: Instance
    type: System.Int32
    description: Index of one repeating element in the pattern (see Remarks )
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
  - itablepatternfeaturedata
  - table
  - pattern
  - feature
  - data
  - instance
  - int32
  - math
---

# ITablePatternFeatureData.GetTransform

Gets the transform for the specified repeating element in this table-driven pattern feature.

## Signature

```csharp
MathTransform GetTransform( 
   System.Int32
Instance
)
```
## Parameters

- `Instance` (System.Int32): Index of one repeating element in the pattern (see Remarks )

## Return Value

Transform

## Remarks

1 <=
Instance
<=
ITablePatternFeatureData::GetPointCount