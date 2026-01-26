---
type: property
interface: ISketchSegment
member: LayerOverride
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related: []
keywords:
  - layeroverride
  - isketchsegment
  - sketch
  - segment
  - layer
  - override
  - int32
readonly: null
---

# ISketchSegment.LayerOverride

Gets or sets whether the sketch segment has properties that override the default properties of the layer.

## Signature

```csharp
System.Int32 LayerOverride {get; set;}
```
## Parameters

None.

## Return Value

Properties that have been overridden or should be overridden as defined in swLayerOverride_e (see Remarks )

## Remarks

Layers are only supported in drawing documents.
Sketch segments can be created on a layer that has specific visual properties. By default, the sketch segment takes on the visual properties defined by the layer. However, for a specific sketch segment, these visual properties can be overridden (see
ISketchSegment::Color
,
ISketchSegment::Style
, and
ISketchSegment::Width
). This
property gets or sets whether the default visual properties of the layer are used by this sketch segment.
When the sketch segment is not on any layer, the value this property returns is undefined. You can use the
ISketchSegment::Layer
property to determine the name of the layer, if any, that this sketch segment is on. If an empty string is returned by the ISketchSegment::Layer property, then this property is not used.
If getting properties that override the default properties of the layer, the returned bit value indicates which properties have been overridden. The bit indicators are:
color = 0x1
style = 0x2
width = 0x4
Therefore, if the return value is 3, then you know the color and style have been specifically set for this item and may not match the default values associated with this item's layer.
If setting properties that override the default properties of the layer, the input bit value indicates which properties should maintain their current override values. The bit indicators are:
color = 0x1
style = 0x2
width = 0x4
Therefore, if the value is passed is 0x4, then you know the width should keep its current override value and that the color and style visual properties for this sketch segment should be reset to use the color and style settings of the item's layer. If you pass 0, then all visual properties are reset to use the default settings of the item's layer.
Only set this to reset specific visual properties back to the default visual properties of the owning layer. If you want to change or set specific values for the visual property for this item, use
ISketchSegment::Color
,
ISketchSegment::Style
, and
ISketchSegment::Width
.