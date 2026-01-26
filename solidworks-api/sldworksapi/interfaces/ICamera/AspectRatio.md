---
type: property
interface: ICamera
member: AspectRatio
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - aspectratio
  - icamera
  - camera
  - aspect
  - ratio
  - double
readonly: null
---

# ICamera.AspectRatio

Gets the aspect ratio (width/height) of the field of view rectangle for the camera.

## Signature

```csharp
System.Double AspectRatio {get; set;}
```
## Parameters

None.

## Return Value

Width/height ratio of the view rectangle for the camera

## Remarks

The rectangle is best-fit into a rendering window to determine the actual composition.