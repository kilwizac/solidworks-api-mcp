---
type: method
interface: IAnnotation
member: IGetVisualProperties
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - annotation
  - see
  - also
  - iannotation
  - properties
  - igetvisualproperties
  - visual
  - int32
---

# IAnnotation.IGetVisualProperties

Gets the visual properties of this annotation.

## Signature

```csharp
System.Int32 IGetVisualProperties()
```
## Parameters

None.

## Return Value

in-process, unmanaged C++: Pointer to an array of 5 longs (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

The return value is the following array of longs:
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