---
type: property
interface: IRayTraceRendererOptions
member: ContourLineThickness
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IRayTraceRendererOptions.ContourLineColor
keywords:
  - contourlinethickness
  - iraytracerendereroptions
  - ray
  - trace
  - renderer
  - options
  - contour
  - line
  - thickness
  - int32
  - render
  - model
  - vb
  - net
  - vba
readonly: null
---

# IRayTraceRendererOptions.ContourLineThickness

Gets or sets the thickness of contour lines.

## Signature

```csharp
System.Int32 ContourLineThickness {get; set;}
```
## Parameters

None.

## Return Value

Thickness, in pixels, of contour lines

## Remarks

This property is only available when
IRayTraceRendererOptions::ContourCartoonRenderingEnabled
is true.

## Examples

- Render Model (C#) (Render_Model_Example_CSharp.htm)
- Render Model (VB.NET) (Render_Model_Example_VBNET.htm)
- Render Model (VBA) (Render_Model_Example_VB.htm)

## See Also

- `IRayTraceRendererOptions.ContourLineColor`