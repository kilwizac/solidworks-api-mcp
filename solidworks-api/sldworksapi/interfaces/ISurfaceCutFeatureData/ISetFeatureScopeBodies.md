---
type: method
interface: ISurfaceCutFeatureData
member: ISetFeatureScopeBodies
returns: void
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of solid bodies to affect
  -
    name: BodyArr
    type: Body2
    description: Array of solid bodies of size Count
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISurfaceCutFeatureData.AutoSelect
  - ISurfaceCutFeatureData.FeatureScope
  - ISurfaceCutFeatureData.FeatureScopeBodies
  - ISurfaceCutFeatureData.GetFeatureScopeBodiesCount
  - ISurfaceCutFeatureData.IGetFeatureScopeBodies
keywords:
  - feature
  - scope
  - isetfeaturescopebodies
  - isurfacecutfeaturedata
  - surface
  - cut
  - data
  - bodies
  - count
  - int32
  - body
  - arr
  - body2
  - void
---

# ISurfaceCutFeatureData.ISetFeatureScopeBodies

Sets the solid bodies that this surface-cut feature affects in a multibody part.

## Signature

```csharp
void ISetFeatureScopeBodies( 
   System.Int32
Count
,
   ref Body2
BodyArr
)
```
## Parameters

- `Count` (System.Int32): Number of solid bodies to affect
- `BodyArr` (Body2): Array of solid bodies of size Count

## Return Value

Unknown.

## Remarks

To access this interface, you must declare it as SurfCutFeatureData or ISurfCutFeatureData.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `ISurfaceCutFeatureData.AutoSelect`
- `ISurfaceCutFeatureData.FeatureScope`
- `ISurfaceCutFeatureData.FeatureScopeBodies`
- `ISurfaceCutFeatureData.GetFeatureScopeBodiesCount`
- `ISurfaceCutFeatureData.IGetFeatureScopeBodies`