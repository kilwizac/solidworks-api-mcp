---
type: property
interface: IBoundaryBossFeatureData
member: FeatureScope
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IBoundaryBossFeatureData.AutoSelect
  - IBoundaryBossFeatureData.FeatureScopeBodiesCount
keywords:
  - featurescope
  - iboundarybossfeaturedata
  - boundary
  - boss
  - feature
  - data
  - scope
  - boolean
readonly: null
---

# IBoundaryBossFeatureData.FeatureScope

Gets or sets whether to use scope for the boundary feature in a multibody part.

## Signature

```csharp
System.Boolean FeatureScope {get; set;}
```
## Parameters

None.

## Return Value

True if only the specified bodies in the multibody part are affected by the boundary feature, false if all of the bodies in the multibody part are affected by the boundary feature

## Remarks

This property is only available when the curves are
faces
or
edges
.
The boundary feature is expanded along the plane on which the feature is created and selects all or only the specified bodies it intersects.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `IBoundaryBossFeatureData.AutoSelect`
- `IBoundaryBossFeatureData.FeatureScopeBodiesCount`