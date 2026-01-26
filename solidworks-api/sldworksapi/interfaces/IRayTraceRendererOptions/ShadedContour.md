---
type: property
interface: IRayTraceRendererOptions
member: ShadedContour
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
  - shadedcontour
  - iraytracerendereroptions
  - ray
  - trace
  - renderer
  - options
  - shaded
  - contour
  - boolean
  - render
  - model
  - vb
  - net
  - vba
readonly: null
---

# IRayTraceRendererOptions.ShadedContour

Gets or sets whether to shade the contours lines.

## Signature

```csharp
System.Boolean ShadedContour {get; set;}
```
## Parameters

None.

## Return Value

True to shade the contour lines, false to not

## Remarks

This property is only available when
IRayTraceRendererOptions::ContourCartoonRenderingEnabled
is true and
IRayTraceRendererOptions::RenderType
is swRayTraceRenderingType_e.swRayTraceContour.

## Examples

- Render Model (C#) (Render_Model_Example_CSharp.htm)
- Render Model (VB.NET) (Render_Model_Example_VBNET.htm)
- Render Model (VBA) (Render_Model_Example_VB.htm)

## See Also

- `IRayTraceRendererOptions.ContourLineColor`
- `IRayTraceRendererOptions.ContourLineThickness`