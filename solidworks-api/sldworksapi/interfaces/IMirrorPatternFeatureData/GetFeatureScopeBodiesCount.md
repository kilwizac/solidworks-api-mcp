---
type: method
interface: IMirrorPatternFeatureData
member: GetFeatureScopeBodiesCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IMirrorPatternFeatureData.FeatureScope
  - IMirrorPatternFeatureData.FeatureScopeBodies
  - IMirrorPatternFeatureData.ISetFeatureScopeBodies
keywords:
  - feature
  - scope
  - getfeaturescopebodiescount
  - imirrorpatternfeaturedata
  - mirror
  - pattern
  - data
  - bodies
  - count
  - int32
---

# IMirrorPatternFeatureData.GetFeatureScopeBodiesCount

Gets the number of solid bodies affected by the mirror pattern feature in a multibody part.

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
IMirrorPatternFeatureData::IGetFeatureScopeBodies
to get the size of the array for that method.

## See Also

- `IMirrorPatternFeatureData.FeatureScope`
- `IMirrorPatternFeatureData.FeatureScopeBodies`
- `IMirrorPatternFeatureData.ISetFeatureScopeBodies`