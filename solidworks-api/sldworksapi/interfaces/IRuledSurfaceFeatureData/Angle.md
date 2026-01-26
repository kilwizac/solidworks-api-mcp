---
type: property
interface: IRuledSurfaceFeatureData
member: Angle
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - angle
  - iruledsurfacefeaturedata
  - ruled
  - surface
  - feature
  - data
  - double
readonly: null
---

# IRuledSurfaceFeatureData.Angle

Gets or sets the taper angle of this ruled-surface feature.

## Signature

```csharp
System.Double Angle {get; set;}
```
## Parameters

None.

## Return Value

Angle in radians

## Remarks

This property is only available when
IRuledSurfaceFeatureData::Type
is set to
swRuledSurfaceType_e
.swRuledSurfaceType_TaperedToVector.