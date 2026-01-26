---
type: method
interface: IModelDoc2
member: Sketch3DIntersections
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - sketches
  - ui
related:
  - ISurface.GetIntersectCurveCount2
  - ISurface.IIntersectCurve2
  - ISurface.IntersectCurve2
keywords:
  - sketch
  - segments
  - see
  - also
  - isketchsegment
  - 3d
  - intersections
  - intersection
  - curves
  - sketch3dintersections
  - imodeldoc2
  - model
  - doc2
  - sketch3
  - void
---

# IModelDoc2.Sketch3DIntersections

Creates new sketch segments based on the selected surfaces.

## Signature

```csharp
void Sketch3DIntersections()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

The new sketch segments are added either to the active sketch or to an appropriate new sketch.
If the active sketch is a 2D sketch and the intersection curves are not in that plane, then the resulting sketch segments are projected onto the plane of the sketch.

## See Also

- `ISurface.GetIntersectCurveCount2`
- `ISurface.IIntersectCurve2`
- `ISurface.IntersectCurve2`