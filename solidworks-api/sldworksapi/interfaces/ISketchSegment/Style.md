---
type: property
interface: ISketchSegment
member: Style
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchSegment.Color
  - ISketchSegment.Layer
  - ISketchSegment.Width
keywords:
  - style
  - isketchsegment
  - sketch
  - segment
  - int32
  - temporary
  - axes
  - each
  - drawing
  - view
  - vba
readonly: null
---

# ISketchSegment.Style

Gets or sets the line style for this sketch segment.

## Signature

```csharp
System.Int32 Style {get; set;}
```
## Parameters

None.

## Return Value

Line style used for this sketch segment as defined in swLineStyles_e

## Remarks

This property is only supported in drawing documents.
Sketch segments can be created on a layer that has specific visual properties. By default, the sketch segment takes on the visual properties defined by the layer. The line style value specified with this property overrides the default layer style.
Use the
ISketchSegment::LayerOverride
to determine if this sketch segment is currently using its default layer line style.

## Examples

- Get Temporary Axes in Each Drawing View (VBA) (Get_Temporary_Axes_in_Each_Drawing_View_Example_VB.htm)

## See Also

- `ISketchSegment.Color`
- `ISketchSegment.Layer`
- `ISketchSegment.Width`