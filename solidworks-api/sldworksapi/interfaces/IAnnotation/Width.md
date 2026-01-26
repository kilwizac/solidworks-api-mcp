---
type: property
interface: IAnnotation
member: Width
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - width
  - iannotation
  - annotation
  - int32
readonly: null
---

# IAnnotation.Width

Gets or sets the line width enumeration value for this annotation.

## Signature

```csharp
System.Int32 Width {get; set;}
```
## Parameters

None.

## Return Value

Line style as defined in swLineWeights_e

## Remarks

Annotation width is currently supported only in SOLIDWORKS drawings.
In drawing documents, you can create annotations on a layer that has specific visual properties. By default, the annotation takes on the visual properties defined by the layer. The line width value specified with this property allows you to override the default layer width.
Use the
IAnnotation::LayerOverride
to determine if this annotation is using its default layer line width.