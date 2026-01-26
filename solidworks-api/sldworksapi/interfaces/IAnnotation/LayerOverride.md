---
type: property
interface: IAnnotation
member: LayerOverride
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - layeroverride
  - iannotation
  - annotation
  - layer
  - override
  - int32
readonly: null
---

# IAnnotation.LayerOverride

Gets or sets whether the annotation has properties that override the default properties of the layer.

## Signature

```csharp
System.Int32 LayerOverride {get; set;}
```
## Parameters

None.

## Return Value

Properties that have been overridden or should be overridden as defined in swLayerOverride_e (see Remarks )

## Remarks

Layers are currently supported only in SOLIDWORKS drawings.
You should set this property only when you want to reset specific visual properties to the default visual properties of the owning layer. If you want to change or set specific values for the visual property of this item, use
IAnnotation::Color
,
IAnnotation::Style
, and
IAnnotation::Width
.
In drawing documents, annotations can be created on a layer that has specific visual properties. By default, the annotation takes on the visual properties defined by the layer. However, for a specific annotation, you can override these visual properties (color, style, and width).
When the annotation is not on any layer, this property returns an undefined value. You can use the
IAnnotation::Layer
property to determine the name of the layer that this annotation is on. If an empty string is returned by the Annotation::Layer property, then this property is not used.
When you get this property, the returned bit value indicates which property or properties have been overridden. The bit indicators are:
color = 0x1
style = 0x2
width = 0x4
Therefore, if the value was returned as 3, you know color and style have been specifically set for this item and might not match the default values associated with this item's layer.
When you set this property, the input bit value indicates which property or properties should maintain their current override values. Therefore, if the value is passed as 0x4, we know width should keep its current override value, and that color and style should be reset to use the color and style settings for the item's layer. If you pass 0, all visual properties are reset to use the default settings of the item's layer.