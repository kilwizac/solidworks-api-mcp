---
type: method
interface: ILoftFeatureData
member: GetFeatureScopeBodiesCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILoftFeatureData.AutoSelect
  - ILoftFeatureData.FeatureScopeBodies
  - ILoftFeatureData.ISetFeatureScopeBodies
keywords:
  - feature
  - scope
  - getfeaturescopebodiescount
  - iloftfeaturedata
  - loft
  - data
  - bodies
  - count
  - int32
---

# ILoftFeatureData.GetFeatureScopeBodiesCount

Gets the number of solid bodies affected by the loft feature in a multibody part.

## Signature

```csharp
System.Int32 GetFeatureScopeBodiesCount()
```
## Parameters

None.

## Return Value

Number of solid bodies affected by the loft feature in a multibody part

## Remarks

Call this method before calling
ILoftFeatureData::IGetFeatureScopeBodies
to determine the size of the array for that method.
If
ILoftFeatureData::FeatureScope
is false, then the return value will be 0.

## See Also

- `ILoftFeatureData.AutoSelect`
- `ILoftFeatureData.FeatureScopeBodies`
- `ILoftFeatureData.ISetFeatureScopeBodies`