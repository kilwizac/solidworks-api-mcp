---
type: method
interface: IRevolveFeatureData2
member: GetFeatureScopeBodiesCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IRevolveFeatureData2.AutoSelect
  - IRevolveFeatureData2.FeatureScope
  - IRevolveFeatureData2.FeatureScopeBodies
  - IRevolveFeatureData2.ISetFeatureScopeBodies
keywords:
  - feature
  - scope
  - getfeaturescopebodiescount
  - irevolvefeaturedata2
  - revolve
  - data2
  - bodies
  - count
  - int32
---

# IRevolveFeatureData2.GetFeatureScopeBodiesCount

Gets the number of solid bodies affected by the revolve feature in a multibody part.

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
IRevolveFeatureData2::IGetFeatureScopeBodies
to get the size of the array for that method.

## See Also

- `IRevolveFeatureData2.AutoSelect`
- `IRevolveFeatureData2.FeatureScope`
- `IRevolveFeatureData2.FeatureScopeBodies`
- `IRevolveFeatureData2.ISetFeatureScopeBodies`