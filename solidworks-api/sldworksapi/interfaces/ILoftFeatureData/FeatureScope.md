---
type: property
interface: ILoftFeatureData
member: FeatureScope
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILoftFeatureData.AutoSelect
  - ILoftFeatureData.FeatureScopeBodies
  - ILoftFeatureData.GetFeatureScopeBodiesCount
  - ILoftFeatureData.IGetFeatureScopeBodies
  - ILoftFeatureData.ISetFeatureScopeBodies
keywords:
  - feature
  - scope
  - featurescope
  - iloftfeaturedata
  - loft
  - data
  - boolean
readonly: null
---

# ILoftFeatureData.FeatureScope

Gets or sets whether to use scope for the loft feature in a multibody part.

## Signature

```csharp
System.Boolean FeatureScope {get; set;}
```
## Parameters

None.

## Return Value

When: true, only the specified bodies in the multibody part are affected by the loft feature false, all of the bodies in the multibody part are affected by the loft feature

## Remarks

The loft feature is expanded along the plane on which the feature is created and affects all or only the specified bodies it intersects.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `ILoftFeatureData.AutoSelect`
- `ILoftFeatureData.FeatureScopeBodies`
- `ILoftFeatureData.GetFeatureScopeBodiesCount`
- `ILoftFeatureData.IGetFeatureScopeBodies`
- `ILoftFeatureData.ISetFeatureScopeBodies`