---
type: property
interface: IPartingSurfaceFeatureData
member: TransitionDistance
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - parts
related: []
keywords:
  - transitiondistance
  - ipartingsurfacefeaturedata
  - parting
  - surface
  - feature
  - data
  - transition
  - distance
  - double
readonly: null
---

# IPartingSurfaceFeatureData.TransitionDistance

Gets or sets the distance to set between adjacent edges for this parting surface feature.

## Signature

```csharp
System.Double TransitionDistance {get; set;}
```
## Parameters

None.

## Return Value

Distance

## Remarks

This property is only available when
IPartingSurfaceFeatureData::TransitionType
is set to swPartingSurfaceSmoothngType_e.swPartingSurfaceSmooth.