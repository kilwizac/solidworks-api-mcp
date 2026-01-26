---
type: property
interface: IRayTraceRendererOptions
member: CausticQuality
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IRayTraceRendererOptions.CausticAmount
  - IRayTraceRendererOptions.DirectCaustics
keywords:
  - causticquality
  - iraytracerendereroptions
  - ray
  - trace
  - renderer
  - options
  - caustic
  - quality
  - int32
readonly: null
---

# IRayTraceRendererOptions.CausticQuality

Gets or sets the number of photons sampled at each pixel, which controls the quality of the caustics.

## Signature

```csharp
System.Int32 CausticQuality {get; set;}
```
## Parameters

None.

## Return Value

Number of photons sampled at each pixel

## Remarks

Increasing the number of photons sampled at each pixel creates a smoother caustic effect at the expense of detail. Decreasing the number of photons results in a sharper caustic effect with increasing graininess.

## See Also

- `IRayTraceRendererOptions.CausticAmount`
- `IRayTraceRendererOptions.DirectCaustics`