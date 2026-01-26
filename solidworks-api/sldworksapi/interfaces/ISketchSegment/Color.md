---
type: property
interface: ISketchSegment
member: Color
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchSegment.Layer
  - ISketchSegment.Style
  - ISketchSegment.Width
keywords:
  - color
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

# ISketchSegment.Color

Gets or sets the color of this sketch segment. Sketch segment color is only supported in drawing documents.

## Signature

```csharp
System.Int32 Color {get; set;}
```
## Parameters

None.

## Return Value

COLORREF value for this sketch segment

## Remarks

Sketch segment color is only supported in drawing documents.
In drawing documents, sketch segments can be created on a layer that has specific visual properties. The color value specified with this property overrides the layer color.
Use the
ISketchSegment::LayerOverride
to determine if this sketch segment is currently using its default layer color.

## Examples

- Get Temporary Axes in Each Drawing View (VBA) (Get_Temporary_Axes_in_Each_Drawing_View_Example_VB.htm)

## See Also

- `ISketchSegment.Layer`
- `ISketchSegment.Style`
- `ISketchSegment.Width`