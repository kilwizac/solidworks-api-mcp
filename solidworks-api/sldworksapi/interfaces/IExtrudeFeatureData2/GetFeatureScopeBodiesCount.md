---
type: method
interface: IExtrudeFeatureData2
member: GetFeatureScopeBodiesCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IExtrudeFeatureData2.AutoSelect
  - IExtrudeFeatureData2.FeatureScopeBodies
  - IExtrudeFeatureData2.ISetFeatureScopeBodies
keywords:
  - feature
  - scope
  - multibody
  - extrude
  - getfeaturescopebodiescount
  - iextrudefeaturedata2
  - data2
  - bodies
  - count
  - int32
---

# IExtrudeFeatureData2.GetFeatureScopeBodiesCount

Gets the number of solid bodies affected by the extrude feature in a multibody part.

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
IExtrudeFeatureData2::IGetFeatureScopeBodies
.
If
IExtrudeFeatureData2::FeatureScope
is false, then count will be 0.

## See Also

- `IExtrudeFeatureData2.AutoSelect`
- `IExtrudeFeatureData2.FeatureScopeBodies`
- `IExtrudeFeatureData2.ISetFeatureScopeBodies`