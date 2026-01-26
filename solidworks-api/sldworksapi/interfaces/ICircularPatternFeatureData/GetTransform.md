---
type: method
interface: ICircularPatternFeatureData
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
  - icircularpatternfeaturedata
  - circular
  - pattern
  - feature
  - data
  - instance
  - int32
  - math
  - each
  - vb
  - net
  - vba
---

# ICircularPatternFeatureData.GetTransform

Gets the transform for the specified instance of this circular-pattern feature.

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
ICircularPatternFeatureData::TotalInstances

## Examples

- Get Transform for Each Circular Pattern Instance (C#) (Get_Transform_for_Each_Circular_Pattern_Instance_Example_CSharp.htm)
- Get Transform for Each Circular Pattern Instance (VB.NET) (Get_Transform_for_Each_Circular_Pattern_Instance_Example_VBNET.htm)
- Get Transform for Each Circular Pattern Instance (VBA) (Get_Transform_for_Each_Circular_Pattern_Instance_Example_VB.htm)