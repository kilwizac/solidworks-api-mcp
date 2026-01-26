---
type: method
interface: ILoftFeatureData
member: IGetFeatureScopeBodies
returns: Body2
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of solid bodies to affect
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILoftFeatureData.AutoSelect
  - ILoftFeatureData.FeatureScope
  - ILoftFeatureData.FeatureScopeBodies
  - ILoftFeatureData.ISetFeatureScopeBodies
keywords:
  - feature
  - scope
  - igetfeaturescopebodies
  - iloftfeaturedata
  - loft
  - data
  - bodies
  - count
  - int32
  - body2
---

# ILoftFeatureData.IGetFeatureScopeBodies

Gets the solid bodies that the loft feature affects in a multibody part.

## Signature

```csharp
Body2 IGetFeatureScopeBodies( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of solid bodies to affect

## Return Value

in-process, unmanaged C++: Pointer to an array of solid bodies of size count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
ILoftFeatureData::GetFeatureScopeBodiesCount
to get the size of Count.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `ILoftFeatureData.AutoSelect`
- `ILoftFeatureData.FeatureScope`
- `ILoftFeatureData.FeatureScopeBodies`
- `ILoftFeatureData.ISetFeatureScopeBodies`