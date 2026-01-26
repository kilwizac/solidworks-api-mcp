---
type: property
interface: IRayTraceRendererOptions
member: HasCartoonEdges
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - geometry
  - ui
related:
  - IRayTraceRendererOptions.ContourLineColor
  - IRayTraceRendererOptions.ContourLineThickness
keywords:
  - hascartoonedges
  - iraytracerendereroptions
  - ray
  - trace
  - renderer
  - options
  - has
  - cartoon
  - edges
  - boolean
  - update
  - graphics
  - area
  - after
  - changing
  - render
  - vb
  - net
  - vba
readonly: null
---

# IRayTraceRendererOptions.HasCartoonEdges

Gets or sets whether to render with cartoon edges.

## Signature

```csharp
System.Boolean HasCartoonEdges {get; set;}
```
## Parameters

None.

## Return Value

True to render with cartoon edges, false to not

## Remarks

This property is only available when
IRayTraceRendererOptions::ContourCartoonRenderingEnabled
is true and
IRayTraceRendererOptions::RenderType
is swRayTraceRenderingType_e.swRayTraceCartoon.
To set cartoon...
Set IRayTraceRendererOptions::HasCartoonEdges to...
Set
IRayTraceRendererOptions::HasCartoonShading
to...
Edges
True
False
Shading
False
True
Edges and shading
True
True

## Examples

- Update Graphics Area After Changing Render Options (C#) (Update_Graphics_After_Changing_Render_Options_Example_CSharp.htm)
- Update Graphics Area After Changing Render Options (VB.NET) (Update_Graphics_After_Changing_Render_Options_Example_VBNET.htm)
- Update Graphics Area After Changing Render Options (VBA) (Update_Graphics_After_Changing_Render_Options_Example_VB.htm)

## See Also

- `IRayTraceRendererOptions.ContourLineColor`
- `IRayTraceRendererOptions.ContourLineThickness`