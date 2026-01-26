---
type: property
interface: IRuledSurfaceFeatureData
member: Connect
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - connect
  - iruledsurfacefeaturedata
  - ruled
  - surface
  - feature
  - data
  - boolean
readonly: null
---

# IRuledSurfaceFeatureData.Connect

Gets or sets whether or not to connect the surfaces of this ruled-surface feature.

## Signature

```csharp
System.Boolean Connect {get; set;}
```
## Parameters

None.

## Return Value

True to connect surfaces, false to remove connecting surfaces EndOLEPropertyRow

## Remarks

Connecting surfaces are usually created between sharp corners.