---
type: property
interface: ISweepFeatureData
member: FeatureScope
returns: System.Boolean
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
  - feature
  - scope
  - sweeps
  - see
  - also
  - isweepfeaturedata
  - featurescope
  - sweep
  - data
  - boolean
readonly: null
---

# ISweepFeatureData.FeatureScope

Gets or sets whether to use scope in a multibody part for this sweep feature.

## Signature

```csharp
System.Boolean FeatureScope {get; set;}
```
## Parameters

None.

## Return Value

When: true (default), only specified bodies in the multibody part are affected by the sweep feature false, all of the bodies in the multibody part are affected by the sweep feature

## Remarks

The sweep feature is expanded along the plane on which the feature is created and affects all or only the specified bodies it intersects. Use
ISweepFeatureData::FeatureScopeBodies
to specify the bodies.
See
Accessing Selections that Define Features
for additional details.

## Examples

- ISweepFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISweepFeatureData)

## See Also

- `ISweepFeatureData.AutoSelect`
- `ISweepFeatureData.GetFeatureScopeBodiesCount`
- `ISweepFeatureData.IGetFeatureScopeBodies`
- `ISweepFeatureData.ISetFeatureScopeBodies`