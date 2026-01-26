---
type: method
interface: IThickenFeatureData
member: GetFeatureScopeBodiesCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IThickenFeatureData.AutoSelect
  - IThickenFeatureData.FeatureScopeBodies
  - IThickenFeatureData.ISetFeatureScopeBodies
keywords:
  - feature
  - scope
  - getfeaturescopebodiescount
  - ithickenfeaturedata
  - thicken
  - data
  - bodies
  - count
  - int32
---

# IThickenFeatureData.GetFeatureScopeBodiesCount

Gets the number of solid bodies affected by the thicken feature in a multibody part.

## Signature

```csharp
System.Int32 GetFeatureScopeBodiesCount()
```
## Parameters

None.

## Return Value

Number of solid bodies affected by the thicken feature

## Remarks

COM users must call this method before calling the
IThickenFeatureData::IGetFeatureScopeBodies
method.
If
IThickenFeatureData::FeatureScope
is false, then count is 0.

## See Also

- `IThickenFeatureData.AutoSelect`
- `IThickenFeatureData.FeatureScopeBodies`
- `IThickenFeatureData.ISetFeatureScopeBodies`