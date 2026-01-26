---
type: property
interface: IBoundaryBossFeatureData
member: AutoSelect
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related:
  - IBoundaryBossFeatureData.FeatureScopeBodiesCount
keywords:
  - autoselect
  - iboundarybossfeaturedata
  - boundary
  - boss
  - feature
  - data
  - auto
  - select
  - boolean
readonly: null
---

# IBoundaryBossFeatureData.AutoSelect

Gets or sets whether to automatically select all or only specific bodies for the boundary feature to affect in the multibody part.

## Signature

```csharp
System.Boolean AutoSelect {get; set;}
```
## Parameters

None.

## Return Value

True to automatically select all bodies, false to select specific bodies

## Remarks

This property is only available when:
IBoundaryBossFeatureData::FeatureScope
property is true.
curves are
faces
or
edges
.
The boundary feature is expanded along the plane on which the feature is created and selects all or only the specified bodies it intersects.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `IBoundaryBossFeatureData.FeatureScopeBodiesCount`