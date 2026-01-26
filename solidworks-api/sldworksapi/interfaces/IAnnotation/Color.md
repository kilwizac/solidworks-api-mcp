---
type: property
interface: IAnnotation
member: Color
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - color
  - annotations
  - iannotation
  - annotation
  - int32
readonly: null
---

# IAnnotation.Color

Gets or sets the color of this annotation. Annotation color is supported only in SOLIDWORKS drawings.

## Signature

```csharp
System.Int32 Color {get; set;}
```
## Parameters

None.

## Return Value

COLORREF value for the color of this annotation

## Remarks

In Drawing documents, you can create annotations on a layer that has specific visual properties. The color value specified with this property overrides the layer color.
Use
IAnnotation::LayerOverride
to determine whether this annotation is using its default layer color.