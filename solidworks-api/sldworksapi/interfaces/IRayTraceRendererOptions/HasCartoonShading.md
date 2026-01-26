---
type: property
interface: IRayTraceRendererOptions
member: HasCartoonShading
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IRayTraceRendererOptions.ContourLineColor
  - IRayTraceRendererOptions.ContourLineThickness
keywords:
  - hascartoonshading
  - iraytracerendereroptions
  - ray
  - trace
  - renderer
  - options
  - has
  - cartoon
  - shading
  - boolean
readonly: null
---

# IRayTraceRendererOptions.HasCartoonShading

Gets or sets whether to render with cartoon shading.

## Signature

```csharp
System.Boolean HasCartoonShading {get; set;}
```
## Parameters

None.

## Return Value

True to render with cartoon shading, false to not

## Remarks

This property is only available when
IRayTraceRendererOptions::ContourCartoonRenderingEnabled
is true and
IRayTraceRendererOptions::RenderType
is swRayTraceRenderingType_e.swRayTraceCartoon.
To set cartoon...
Set
IRayTraceRendererOptions::HasCartoonEdges
to...
Set IRayTraceRendererOptions::HasCartoonShading to...
Edges
True
False
Shading
False
True
Edges and shading
True
True

## See Also

- `IRayTraceRendererOptions.ContourLineColor`
- `IRayTraceRendererOptions.ContourLineThickness`