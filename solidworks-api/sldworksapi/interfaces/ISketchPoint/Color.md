---
type: property
interface: ISketchPoint
member: Color
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchPoint.Layer
keywords:
  - color
  - isketchpoint
  - sketch
  - point
  - int32
readonly: null
---

# ISketchPoint.Color

Gets or sets the color of this sketch point.

## Signature

```csharp
System.Int32 Color {get; set;}
```
## Parameters

None.

## Return Value

COLORREF value for this sketch point

## Remarks

Only drawing documents support layers.
Sketch points can be created on a layer that has specific visual properties. The color value specified with this property overrides the layer color.
Use the
ISketchPoint::LayerOverride
to determine if this sketch point is currently using its default layer color.

## See Also

- `ISketchPoint.Layer`