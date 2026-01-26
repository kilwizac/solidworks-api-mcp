---
type: method
interface: IRayTraceRenderer
member: RenderToFile
returns: System.Boolean
parameters:
  -
    name: ImageFileName
    type: System.String
    description: File path and name (see Remarks )
  -
    name: Width
    type: System.Int32
    description: Width of image in pixels (see Remarks )
  -
    name: Height
    type: System.Int32
    description: Height of image in pixels (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - file-io
  - ui
related:
  - IRayTraceRenderer.InvokeFinalRender
  - IRayTraceRendererOptions.UpdateGraphics
keywords:
  - rendertofile
  - iraytracerenderer
  - ray
  - trace
  - renderer
  - render
  - file
  - image
  - name
  - string
  - width
  - int32
  - height
  - boolean
  - model
  - vb
  - net
  - vba
  - include
  - note
---

# IRayTraceRenderer.RenderToFile

Saves the current view of the rendered model as an image to the specified file.

## Signature

```csharp
System.Boolean RenderToFile( 
   System.String
ImageFileName
,
   System.Int32
Width
,
   System.Int32
Height
)
```
## Parameters

- `ImageFileName` (System.String): File path and name (see Remarks )
- `Width` (System.Int32): Width of image in pixels (see Remarks )
- `Height` (System.Int32): Height of image in pixels (see Remarks )

## Return Value

True if the current view of the rendered model is saved, false if not

## Remarks

Before calling this method:
you can call
IRayTraceRendererOptions::ImageFormat
to specify the image format in which to save the model and omit the file format extension when specifying ImageFileName.
set
IRayTraceRendererOptions::IncludeAnnotationsInRendering
to true to include annotations and dimensions visible in the model in the render file. You can also set
IRayTraceRendererOptions::RenderAnnotationsToSeparateImage
to true to render the annotations and dimensions visible in the model to a separate image file.
You can override the values set in
IRayTraceRendererOptions::ImageWidth
and
IRayTraceRendererOptions::ImageHeight
by calling this method with specific values for Width and Height. Set Width and Height to 0 to use values specified by IRayTraceRendererOptions::ImageWidth and IRayTraceRendererOptions::ImageHeight.
After calling this method, call
IRayTraceRenderer::CloseRayTraceRender
.

## Examples

- Render Model (C#) (Render_Model_Example_CSharp.htm)
- Render Model (VB.NET) (Render_Model_Example_VBNET.htm)
- Render Model (VBA) (Render_Model_Example_VB.htm)
- Include Note in Render File (C#) (Include_Note_in_Render_File_Example_CSharp.htm)
- Include Note in Render File (VB.NET) (Include_Note_in_Render_File_Example_VBNET.htm)
- Include Note in Render File (VBA) (Include_Note_in_Render_File_Example_VB.htm)

## See Also

- `IRayTraceRenderer.InvokeFinalRender`
- `IRayTraceRendererOptions.UpdateGraphics`