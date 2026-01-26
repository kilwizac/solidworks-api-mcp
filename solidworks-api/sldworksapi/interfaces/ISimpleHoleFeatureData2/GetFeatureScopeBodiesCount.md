---
type: method
interface: ISimpleHoleFeatureData2
member: GetFeatureScopeBodiesCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISimpleHoleFeatureData2.AutoSelect
  - ISimpleHoleFeatureData2.FeatureScopeBodies
  - ISimpleHoleFeatureData2.ISetFeatureScopeBodies
keywords:
  - feature
  - scope
  - getfeaturescopebodiescount
  - isimpleholefeaturedata2
  - simple
  - hole
  - data2
  - bodies
  - count
  - int32
---

# ISimpleHoleFeatureData2.GetFeatureScopeBodiesCount

Gets the number of solid bodies affected by the simple hole feature in a multibody part.

## Signature

```csharp
System.Int32 GetFeatureScopeBodiesCount()
```
## Parameters

None.

## Return Value

Number of solid bodies affected

## Remarks

Call this method before calling
ISimpleHoleData2::IGetFeatureScopeBodies
to get the size of the array for that method.
If
ISimpleHoleFeatureData2::FeatureScope
is false, then count is 0.

## See Also

- `ISimpleHoleFeatureData2.AutoSelect`
- `ISimpleHoleFeatureData2.FeatureScopeBodies`
- `ISimpleHoleFeatureData2.ISetFeatureScopeBodies`