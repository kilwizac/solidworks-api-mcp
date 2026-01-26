---
type: property
interface: IRayTraceRendererOptions
member: ContourCartoonRenderingEnabled
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
  - contourcartoonrenderingenabled
  - iraytracerendereroptions
  - ray
  - trace
  - renderer
  - options
  - contour
  - cartoon
  - rendering
  - enabled
  - boolean
  - render
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

# IRayTraceRendererOptions.ContourCartoonRenderingEnabled

Gets or sets whether to enable contour/cartoon rendering.

## Signature

```csharp
System.Boolean ContourCartoonRenderingEnabled {get; set;}
```
## Parameters

None.

## Return Value

True to enable contour/cartoon rendering, false to not

## Remarks

After setting this property, call
IRayTraceRendererOptions::RenderType
to set rendering to either contour or cartoon.

## Examples

- Render Model (C#) (Render_Model_Example_CSharp.htm)
- Render Model (VB.NET) (Render_Model_Example_VBNET.htm)
- Render Model (VBA) (Render_Model_Example_VB.htm)
- Update Graphics Area After Changing Render Options (C#) (Update_Graphics_After_Changing_Render_Options_Example_CSharp.htm)
- Update Graphics Area After Changing Render Options (VB.NET) (Update_Graphics_After_Changing_Render_Options_Example_VBNET.htm)
- Update Graphics Area After Changing Render Options (VBA) (Update_Graphics_After_Changing_Render_Options_Example_VB.htm)

## See Also

- `IRayTraceRendererOptions.ContourLineColor`
- `IRayTraceRendererOptions.ContourLineThickness`