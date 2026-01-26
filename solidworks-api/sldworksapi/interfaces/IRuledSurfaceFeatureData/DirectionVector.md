---
type: property
interface: IRuledSurfaceFeatureData
member: DirectionVector
returns: MathVector
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IRuledSurfaceFeatureData.UseVector
keywords:
  - directionvector
  - iruledsurfacefeaturedata
  - ruled
  - surface
  - feature
  - data
  - direction
  - vector
  - math
readonly: null
---

# IRuledSurfaceFeatureData.DirectionVector

Gets or sets the reference vector for this ruled-surface feature.

## Signature

```csharp
MathVector DirectionVector {get; set;}
```
## Parameters

None.

## Return Value

Reference vector

## Remarks

This property is only available when
IRuledSurfaceFeatureData::Type
is set to swRuledSurfaceType_Sweep.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IRuledSurfaceFeatureData.UseVector`