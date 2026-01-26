---
type: property
interface: IRayTraceRendererOptions
member: OutputAmbientOcclusion
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - outputambientocclusion
  - iraytracerendereroptions
  - ray
  - trace
  - renderer
  - options
  - output
  - ambient
  - occlusion
  - boolean
readonly: null
---

# IRayTraceRendererOptions.OutputAmbientOcclusion

Gets or sets whether to render with ambient occlusion.

## Signature

```csharp
System.Boolean OutputAmbientOcclusion {get; set;}
```
## Parameters

None.

## Return Value

True to render with ambient occlusion, false to not

## Remarks

Ambient occlusion is a global lighting method that adds realism to models by controlling the attenuation of ambient light due to occluded areas. Objects appear as they would on an overcast day.