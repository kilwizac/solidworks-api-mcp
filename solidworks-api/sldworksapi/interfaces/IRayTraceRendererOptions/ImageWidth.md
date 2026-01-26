---
type: property
interface: IRayTraceRendererOptions
member: ImageWidth
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IRayTraceRendererOptions.DefaultImagePath
  - IRayTraceRendererOptions.ImageFormat
keywords:
  - imagewidth
  - iraytracerendereroptions
  - ray
  - trace
  - renderer
  - options
  - image
  - width
  - int32
  - render
  - model
  - vb
  - net
  - vba
readonly: null
---

# IRayTraceRendererOptions.ImageWidth

Gets or sets the width of the image.

## Signature

```csharp
System.Int32 ImageWidth {get; set;}
```
## Parameters

None.

## Return Value

Width, in pixels, of the image

## Remarks

You can override the values set in this property and
IRayTraceRendererOptions::ImageHeight
by specifying Width and Height in
IRayTraceRenderer::RenderToFile
.

## Examples

- Render Model (C#) (Render_Model_Example_CSharp.htm)
- Render Model (VB.NET) (Render_Model_Example_VBNET.htm)
- Render Model (VBA) (Render_Model_Example_VB.htm)

## See Also

- `IRayTraceRendererOptions.DefaultImagePath`
- `IRayTraceRendererOptions.ImageFormat`