---
type: property
interface: ISweepFeatureData
member: FeatureScopeBodies
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISweepFeatureData.AutoSelect
  - ISweepFeatureData.GetFeatureScopeBodiesCount
  - ISweepFeatureData.IGetFeatureScopeBodies
  - ISweepFeatureData.ISetFeatureScopeBodies
keywords:
  - featurescopebodies
  - isweepfeaturedata
  - sweep
  - feature
  - data
  - scope
  - bodies
  - object
readonly: null
---

# ISweepFeatureData.FeatureScopeBodies

Gets or sets the solid bodies in a multibody part affected by this sweep feature.

## Signature

```csharp
System.Object FeatureScopeBodies {get; set;}
```
## Parameters

None.

## Return Value

Array of solid bodies that the feature affects

## Remarks

This property is valid only if
ISweepFeatureData::FeatureScope
is set to true.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `ISweepFeatureData.AutoSelect`
- `ISweepFeatureData.GetFeatureScopeBodiesCount`
- `ISweepFeatureData.IGetFeatureScopeBodies`
- `ISweepFeatureData.ISetFeatureScopeBodies`