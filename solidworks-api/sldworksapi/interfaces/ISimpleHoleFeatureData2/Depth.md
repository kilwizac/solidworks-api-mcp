---
type: property
interface: ISimpleHoleFeatureData2
member: Depth
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - depth
  - isimpleholefeaturedata2
  - simple
  - hole
  - feature
  - data2
  - double
readonly: null
---

# ISimpleHoleFeatureData2.Depth

Gets or sets the depth of this simple hole feature.

## Signature

```csharp
System.Double Depth {get; set;}
```
## Parameters

None.

## Return Value

Hole depth

## Remarks

This property only supports getting the depth of a blind hole. To get the depth of holes with other types of end conditions, you could:
use
IExtrudeFeatureData2::GetDepth
to get the length of the extrusion.
analyze the curves and edges of the hole to get the depth or thickness of it at a specific point.
use
ISimpleHoleFeatureData2::SurfaceOffset
for a hole with a depth that is offset from the surface.