---
type: property
interface: IRevolveFeatureData2
member: FeatureScope
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IRevolveFeatureData2.AutoSelect
  - IRevolveFeatureData2.FeatureScopeBodies
  - IRevolveFeatureData2.GetFeatureScopeBodiesCount
  - IRevolveFeatureData2.IGetFeatureScopeBodies
  - IRevolveFeatureData2.ISetFeatureScopeBodies
keywords:
  - feature
  - scope
  - featurescope
  - irevolvefeaturedata2
  - revolve
  - data2
  - boolean
readonly: null
---

# IRevolveFeatureData2.FeatureScope

Gets or sets whether to use scope for the revolve feature in a multibody part.

## Signature

```csharp
System.Boolean FeatureScope {get; set;}
```
## Parameters

None.

## Return Value

True if only the specified bodies in the multibody part are affected by the feature, false if all of the bodies in the multibody part are affected by the revolve feature

## See Also

- `IRevolveFeatureData2.AutoSelect`
- `IRevolveFeatureData2.FeatureScopeBodies`
- `IRevolveFeatureData2.GetFeatureScopeBodiesCount`
- `IRevolveFeatureData2.IGetFeatureScopeBodies`
- `IRevolveFeatureData2.ISetFeatureScopeBodies`