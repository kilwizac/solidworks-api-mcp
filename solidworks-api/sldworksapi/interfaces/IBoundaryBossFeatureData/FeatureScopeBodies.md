---
type: property
interface: IBoundaryBossFeatureData
member: FeatureScopeBodies
returns: System.Object
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
  - featurescopebodies
  - iboundarybossfeaturedata
  - boundary
  - boss
  - feature
  - data
  - scope
  - bodies
  - object
readonly: null
---

# IBoundaryBossFeatureData.FeatureScopeBodies

Gets or sets the bodies that this boundary feature affects in a multibody part.

## Signature

```csharp
System.Object FeatureScopeBodies {get; set;}
```
## Parameters

None.

## Return Value

Array of bodies that this boundary feature affects

## Remarks

This property is only available when:
IBoundaryBossFeatureData::FeatureScope
is true.
curves are
faces
or
edges
.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `IBoundaryBossFeatureData.AutoSelect`
- `IBoundaryBossFeatureData.FeatureScopeBodiesCount`