---
type: property
interface: IThickenFeatureData
member: FeatureScope
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IThickenFeatureData.AutoSelect
  - IThickenFeatureData.FeatureScopeBodies
  - IThickenFeatureData.GetFeatureScopeBodiesCount
  - IThickenFeatureData.IGetFeatureScopeBodies
  - IThickenFeatureData.ISetFeatureScopeBodies
keywords:
  - feature
  - scope
  - featurescope
  - ithickenfeaturedata
  - thicken
  - data
  - boolean
readonly: null
---

# IThickenFeatureData.FeatureScope

Gets or sets whether to use scope for the thicken feature in a multibody part.

## Signature

```csharp
System.Boolean FeatureScope {get; set;}
```
## Parameters

None.

## Return Value

When: true, only the specified bodies in the multibody part are affected by the thicken feature false, all of the bodies in the multibody part are affected by the thicken feature

## Remarks

The thicken feature is expanded along the plane on which the feature is created and affects all or only the specified bodies it intersects.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `IThickenFeatureData.AutoSelect`
- `IThickenFeatureData.FeatureScopeBodies`
- `IThickenFeatureData.GetFeatureScopeBodiesCount`
- `IThickenFeatureData.IGetFeatureScopeBodies`
- `IThickenFeatureData.ISetFeatureScopeBodies`