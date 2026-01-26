---
type: property
interface: IRayTraceRendererOptions
member: RenderType
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IRayTraceRendererOptions.HasCartoonEdges
  - IRayTraceRendererOptions.HasCartoonShading
  - IRayTraceRendererOptions.ShadedContour
keywords:
  - rendertype
  - iraytracerendereroptions
  - ray
  - trace
  - renderer
  - options
  - render
  - type
  - int32
  - model
  - vb
  - net
  - vba
  - update
  - graphics
  - area
  - after
  - changing
readonly: null
---

# IRayTraceRendererOptions.RenderType

Gets or sets whether to render with contour or cartoon lines.

## Signature

```csharp
System.Int32 RenderType {get; set;}
```
## Parameters

None.

## Return Value

Render type as defined by swRayTraceRenderingType_e

## Remarks

This property is only available when
IRayTraceRendererOptions::ContourCartoonRenderingEnabled
is true.

## Examples

- Render Model (C#) (Render_Model_Example_CSharp.htm)
- Render Model (VB.NET) (Render_Model_Example_VBNET.htm)
- Render Model (VBA) (Render_Model_Example_VB.htm)
- Update Graphics Area After Changing Render Options (C#) (Update_Graphics_After_Changing_Render_Options_Example_CSharp.htm)
- Update Graphics Area After Changing Render Options (VB.NET) (Update_Graphics_After_Changing_Render_Options_Example_VBNET.htm)
- Update Graphics Area After Changing Render Options (VBA) (Update_Graphics_After_Changing_Render_Options_Example_VB.htm)

## See Also

- `IRayTraceRendererOptions.HasCartoonEdges`
- `IRayTraceRendererOptions.HasCartoonShading`
- `IRayTraceRendererOptions.ShadedContour`