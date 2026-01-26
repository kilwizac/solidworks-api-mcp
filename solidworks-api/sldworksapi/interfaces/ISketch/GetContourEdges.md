---
type: method
interface: ISketch
member: GetContourEdges
returns: System.Object
parameters:
  -
    name: Xform
    type: System.Object
    description: Array of size 16 doubles representing the transform
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - geometry
  - sketches
related:
  - ISketch.GetContourEdgeCount
  - ISketch.IGetContourEdges
  - ISketchContour
keywords:
  - sketch
  - see
  - also
  - isketch
  - edges
  - edge
  - iedge
  - entities
  - getcontouredges
  - contour
  - xform
  - object
---

# ISketch.GetContourEdges

Gets the edges for a sketch that has one contour.

## Signature

```csharp
System.Object GetContourEdges( 
   System.Object
Xform
)
```
## Parameters

- `Xform` (System.Object): Array of size 16 doubles representing the transform

## Return Value

Array of edges

## Remarks

This method supports sketches with one contour only. For sketches with multiple contours, use
ISketch::GetSketchContours
or
ISketch::IGetSketchContours
and then
ISketchContour::GetEdges
or
ISketchContour::IGetEdges
.
Specifying the unit transform returns the edges in the space of the sketch.
If your application is expecting the returned edges to be in the context of the model's coordinate system, then xform should be the inverse of the transform returned by
ISketch::ModelToSketchTransform
.

## See Also

- `ISketch.GetContourEdgeCount`
- `ISketch.IGetContourEdges`
- `ISketchContour`