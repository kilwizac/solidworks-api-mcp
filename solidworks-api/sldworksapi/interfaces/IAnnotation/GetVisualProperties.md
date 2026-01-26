---
type: method
interface: IAnnotation
member: GetVisualProperties
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IAnnotation.IGetVisualProperties
keywords:
  - annotation
  - see
  - also
  - iannotation
  - properties
  - getvisualproperties
  - visual
  - object
---

# IAnnotation.GetVisualProperties

Gets the visual properties of this annotation.

## Signature

```csharp
System.Object GetVisualProperties()
```
## Parameters

None.

## Return Value

Array of five longs or five integers (see Long vs. Integer and see Remarks )

## Remarks

The return value is the following array:
[
color, style, width, layerID, layerOverride
]
where:
color
COLORREF returned as an integer. Return value can be 0 or -1 for default color.
style
Line style as defined in
swLineStyles_e
.
width
Line width as defined in
swLineWeights_e
.
layerID
Integer value indicating which layer holds this entity. The Layer object can be obtained
by passing this integer value to
ILayerMgr::GetLayerById
or
ILayerMgr::IGetLayerById
.
layerOverride
Integer with bit flags set to determine which properties, if any, have been overridden
with respect to the layer default properties. If the bit value is set, then the specific
property or properties have been overridden. The bit indicators are: color = 0x1,
style = 0x2, and width = 0x4. Therefore, if
layerOverride
was returned as 3, we know
the color and style have been specifically set for this annotation and might not
match the default values associated with this annotations layer.

## See Also

- `IAnnotation.IGetVisualProperties`