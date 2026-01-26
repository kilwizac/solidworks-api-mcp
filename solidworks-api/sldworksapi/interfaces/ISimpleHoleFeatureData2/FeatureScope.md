---
type: property
interface: ISimpleHoleFeatureData2
member: FeatureScope
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISimpleHoleFeatureData2.AutoSelect
  - ISimpleHoleFeatureData2.FeatureScopeBodies
  - ISimpleHoleFeatureData2.GetFeatureScopeBodiesCount
  - ISimpleHoleFeatureData2.IGetFeatureScopeBodies
  - ISimpleHoleFeatureData2.ISetFeatureScopeBodies
keywords:
  - feature
  - scope
  - featurescope
  - isimpleholefeaturedata2
  - simple
  - hole
  - data2
  - boolean
readonly: null
---

# ISimpleHoleFeatureData2.FeatureScope

Gets or sets whether to use scope for the simple hole feature in a multibody part.

## Signature

```csharp
System.Boolean FeatureScope {get; set;}
```
## Parameters

None.

## Return Value

True only the specified bodies in the multibody part are affected by the feature, false all of the bodies in the multibody part are affected by the feature

## See Also

- `ISimpleHoleFeatureData2.AutoSelect`
- `ISimpleHoleFeatureData2.FeatureScopeBodies`
- `ISimpleHoleFeatureData2.GetFeatureScopeBodiesCount`
- `ISimpleHoleFeatureData2.IGetFeatureScopeBodies`
- `ISimpleHoleFeatureData2.ISetFeatureScopeBodies`