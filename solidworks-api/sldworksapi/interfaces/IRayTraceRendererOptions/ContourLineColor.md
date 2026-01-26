---
type: property
interface: IRayTraceRendererOptions
member: ContourLineColor
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IRayTraceRendererOptions.ContourLineThickness
keywords:
  - contourlinecolor
  - iraytracerendereroptions
  - ray
  - trace
  - renderer
  - options
  - contour
  - line
  - color
  - int32
  - render
  - model
  - vb
  - net
  - vba
readonly: null
---

# IRayTraceRendererOptions.ContourLineColor

Gets or sets the color of the contour lines.

## Signature

```csharp
System.Int32 ContourLineColor {get; set;}
```
## Parameters

None.

## Return Value

RGB value for color of contour lines

## Remarks

This property is only available when
IRayTraceRendererOptions::ContourCartoonRenderingEnabled
is true.

## Examples

- Render Model (C#) (Render_Model_Example_CSharp.htm)
- Render Model (VB.NET) (Render_Model_Example_VBNET.htm)
- Render Model (VBA) (Render_Model_Example_VB.htm)

## See Also

- `IRayTraceRendererOptions.ContourLineThickness`