---
type: property
interface: IRayTraceRendererOptions
member: ImageHeight
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
  - imageheight
  - iraytracerendereroptions
  - ray
  - trace
  - renderer
  - options
  - image
  - height
  - int32
  - render
  - model
  - vb
  - net
  - vba
readonly: null
---

# IRayTraceRendererOptions.ImageHeight

Gets or sets the height of the image.

## Signature

```csharp
System.Int32 ImageHeight {get; set;}
```
## Parameters

None.

## Return Value

Height, in pixels, of the image

## Remarks

You can override the values set in this property and
IRayTraceRendererOptions::ImageWidth
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