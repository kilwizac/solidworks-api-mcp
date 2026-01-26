---
type: property
interface: ISweepFeatureData
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
  - ISweepFeatureData.GetFeatureScopeBodiesCount
  - ISweepFeatureData.IGetFeatureScopeBodies
  - ISweepFeatureData.ISetFeatureScopeBodies
keywords:
  - feature
  - scope
  - sweeps
  - see
  - also
  - isweepfeaturedata
  - autoselect
  - sweep
  - data
  - auto
  - select
  - boolean
readonly: null
---

# ISweepFeatureData.AutoSelect

Gets or sets whether to automatically select all bodies in a multibody part to be affected by this sweep feature.

## Signature

```csharp
System.Boolean AutoSelect {get; set;}
```
## Parameters

None.

## Return Value

True to automatically select all bodies (default for swept-boss and swept-surface), false to select specific bodies using ISweepFeatureData::FeatureScopeBodies (default for swept-cut)

## Remarks

This property is only available when the
ISweepFeatureData::FeatureScope
property is true. The sweep feature is expanded along the plane on which the feature is created and selects all or only the specified bodies it intersects.
See
Accessing Selections that Define Features
for additional details.

## Examples

- ISweepFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISweepFeatureData)

## See Also

- `ISweepFeatureData.GetFeatureScopeBodiesCount`
- `ISweepFeatureData.IGetFeatureScopeBodies`
- `ISweepFeatureData.ISetFeatureScopeBodies`