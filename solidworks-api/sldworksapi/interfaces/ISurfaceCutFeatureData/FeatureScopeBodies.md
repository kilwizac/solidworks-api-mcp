---
type: property
interface: ISurfaceCutFeatureData
member: FeatureScopeBodies
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISurfaceCutFeatureData.AutoSelect
  - ISurfaceCutFeatureData.FeatureScope
  - ISurfaceCutFeatureData.GetFeatureScopeBodiesCount
  - ISurfaceCutFeatureData.IGetFeatureScopeBodies
  - ISurfaceCutFeatureData.ISetFeatureScopeBodies
keywords:
  - feature
  - scope
  - featurescopebodies
  - isurfacecutfeaturedata
  - surface
  - cut
  - data
  - bodies
  - object
readonly: null
---

# ISurfaceCutFeatureData.FeatureScopeBodies

Gets or sets the solid bodies that the surface-cut feature affects in a multibody part.

## Signature

```csharp
System.Object FeatureScopeBodies {get; set;}
```
## Parameters

None.

## Return Value

Array of solid bodies that the surface-cut feature affects

## Remarks

To access this interface, you must declare it as SurfCutFeatureData or ISurfCutFeatureData.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `ISurfaceCutFeatureData.AutoSelect`
- `ISurfaceCutFeatureData.FeatureScope`
- `ISurfaceCutFeatureData.GetFeatureScopeBodiesCount`
- `ISurfaceCutFeatureData.IGetFeatureScopeBodies`
- `ISurfaceCutFeatureData.ISetFeatureScopeBodies`