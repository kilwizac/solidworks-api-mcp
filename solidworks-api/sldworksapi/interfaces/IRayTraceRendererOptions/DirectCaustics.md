---
type: property
interface: IRayTraceRendererOptions
member: DirectCaustics
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IRayTraceRendererOptions.CausticAmount
  - IRayTraceRendererOptions.CausticQuality
  - IRayTraceRendererOptions.FinalRenderQuality
  - IRayTraceRendererOptions.PreviewRenderQuality
keywords:
  - directcaustics
  - iraytracerendereroptions
  - ray
  - trace
  - renderer
  - options
  - direct
  - caustics
  - boolean
readonly: null
---

# IRayTraceRendererOptions.DirectCaustics

Gets or sets whether to enable direct caustics in the final render.

## Signature

```csharp
System.Boolean DirectCaustics {get; set;}
```
## Parameters

None.

## Return Value

True to enable direct caustics in the final render, false to not

## Remarks

Direct caustics are only visible in the final render and only when reflected off a floor appearance or physical geometry using a spot or point light. The light bounces off or filters through the model creating a bright pattern on the floor.

## See Also

- `IRayTraceRendererOptions.CausticAmount`
- `IRayTraceRendererOptions.CausticQuality`
- `IRayTraceRendererOptions.FinalRenderQuality`
- `IRayTraceRendererOptions.PreviewRenderQuality`