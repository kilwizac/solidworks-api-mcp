---
type: property
interface: IAnnotation
member: Style
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - style
  - iannotation
  - annotation
  - int32
readonly: null
---

# IAnnotation.Style

Gets or sets the line style for this annotation.

## Signature

```csharp
System.Int32 Style {get; set;}
```
## Parameters

None.

## Return Value

Line style as defined in swLineStyles_e

## Remarks

Annotation style is currently supported only in SOLIDWORKS drawings.
In drawing documents, annotations can be created on a layer that has specific visual properties. By default, the annotation takes on the visual properties defined by the layer. The style value specified with this property allows you to override the default layer style.
Use
IAnnotation::LayerOverride
to determine whether or not this annotation is currently using its default layer line style.