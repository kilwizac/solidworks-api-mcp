---
type: property
interface: ISketchSegment
member: Width
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
  - ISketchSegment.Style
keywords:
  - width
  - isketchsegment
  - sketch
  - segment
  - int32
  - entities
  - visual
  - properties
  - vba
  - temporary
  - axes
  - each
  - drawing
  - view
readonly: null
---

# ISketchSegment.Width

Gets or sets the line width for this sketch segment.

## Signature

```csharp
System.Int32 Width {get; set;}
```
## Parameters

None.

## Return Value

Line width used for this sketch segment as defined in swLineWeights_e

## Remarks

This property is only supported in drawing documents.
Sketch segments can be created on a layer that has specific visual properties. By default, the sketch segment takes on the visual properties defined by the layer. The line width value specified with this property overrides the default layer width.
Use the
ISketchSegment::LayerOverride
to determine if this sketch segment is currently using its default layer line width.

## Examples

- Get Sketch Entities with Visual Properties (VBA) (Create_Sketch_Line_with_Visual_Properties_Example_VB.htm)
- Get Temporary Axes in Each Drawing View (VBA) (Get_Temporary_Axes_in_Each_Drawing_View_Example_VB.htm)

## See Also

- `ISketchSegment.Color`
- `ISketchSegment.Layer`
- `ISketchSegment.Style`