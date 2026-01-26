---
type: property
interface: IRayTraceRendererOptions
member: IncludeAnnotationsInRendering
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
  - includeannotationsinrendering
  - iraytracerendereroptions
  - ray
  - trace
  - renderer
  - options
  - include
  - annotations
  - rendering
  - boolean
  - note
  - render
  - file
  - vb
  - net
  - vba
readonly: null
---

# IRayTraceRendererOptions.IncludeAnnotationsInRendering

Gets or sets whether to include annotations and dimensions visible in the model when rendering to a file.

## Signature

```csharp
System.Boolean IncludeAnnotationsInRendering {get; set;}
```
## Parameters

None.

## Return Value

True to include annotations and dimensions visible in the model when rendering to a file, false to not

## Remarks

This property is only available when rendering to a file; this property is not available when only
invoking the final render window
.
To render the annotations and dimensions visible in the model to a separate image file, call
IRayTraceRendererOptions::RenderAnnotationsToSeparateImage
.

## Examples

- Include Note in Render File (C#) (Include_Note_in_Render_File_Example_CSharp.htm)
- Include Note in Render File (VB.NET) (Include_Note_in_Render_File_Example_VBNET.htm)
- Include Note in Render File (VBA) (Include_Note_in_Render_File_Example_VB.htm)