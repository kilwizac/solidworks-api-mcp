---
type: property
interface: IRayTraceRendererOptions
member: RenderAnnotationsToSeparateImage
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - ui
related: []
keywords:
  - renderannotationstoseparateimage
  - iraytracerendereroptions
  - ray
  - trace
  - renderer
  - options
  - render
  - annotations
  - separate
  - image
  - boolean
  - file
  - vb
  - net
  - vba
readonly: null
---

# IRayTraceRendererOptions.RenderAnnotationsToSeparateImage

Gets or sets whether to render annotations and dimensions visible in the model to a separate image file.

## Signature

```csharp
System.Boolean RenderAnnotationsToSeparateImage {get; set;}
```
## Parameters

None.

## Return Value

True to render annotations and dimensions visible in the model to a separate image file, false to not

## Remarks

This property is only available when:
rendering to a file
. This property is not available when only
invoking the final render window
.
IRayTraceRendererOptions::IncludeAnnotationsInRendering
is set to true.
When this property is set to true, then SOLIDWORKS API appends
_1
to the name of the render file. For example, if you named the render file
abc.png
, then this property creates a file named
abc_1.png
that contains only the annotations and dimensions visible in the model.

## Examples

- Render Annotations to Separate Image File (C#) (Render_Annotations_to_Separate_Image_File_Example_CSharp.htm)
- Render Annotations to Separate Image File (VB.NET) (Render_Annotations_to_Separate_Image_File_Example_VBNET.htm)
- Render Annotations to Separate Image File (VBA) (Render_Annotations_to_Separate_Image_File_Example_VB.htm)