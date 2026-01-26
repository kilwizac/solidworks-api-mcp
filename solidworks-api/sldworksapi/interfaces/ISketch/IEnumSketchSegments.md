---
type: method
interface: ISketch
member: IEnumSketchSegments
returns: EnumSketchSegments
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketch.GetSketchSegments
  - ISketch.GetSketchTextSegments
  - ISketch.IEnumSketchTextSegments
keywords:
  - sketch
  - entities
  - segments
  - see
  - also
  - isketch
  - isketchsegment
  - enumerations
  - ienumsketchsegments
  - select
  - all
---

# ISketch.IEnumSketchSegments

Gets the sketch segments enumeration in this sketch.

## Signature

```csharp
EnumSketchSegments IEnumSketchSegments()
```
## Parameters

None.

## Return Value

Sketch segments enumeration

## Remarks

Sketch segments include line, arc, spline, parabola, and ellipse entities.

## Examples

- Select All Sketch Segments (C++) (Select_All_Sketch_Segments_Example_CPlusPlus_COM.htm)

## See Also

- `ISketch.GetSketchSegments`
- `ISketch.GetSketchTextSegments`
- `ISketch.IEnumSketchTextSegments`