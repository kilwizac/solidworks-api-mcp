---
type: method
interface: ISketch
member: IGetContourEdges
returns: Edge
parameters:
  -
    name: Xform
    type: System.Double
    description: Sketch entities, edges
  -
    name: EdgeCount
    type: System.Int32
    description: Number of edges
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - geometry
  - sketches
related:
  - ISketch.GetContourEdges
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
  - igetcontouredges
  - contour
  - xform
  - double
  - count
  - int32
---

# ISketch.IGetContourEdges

Gets the edges for a sketch that has one contour.

## Signature

```csharp
Edge IGetContourEdges( 
   ref System.Double
Xform
,
   System.Int32
EdgeCount
)
```
## Parameters

- `Xform` (System.Double): Sketch entities, edges
- `EdgeCount` (System.Int32): Number of edges

## Return Value

in-process, unmanaged C++: Pointer to an array of edges VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

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
To get the number of edges, call
ISketch::GetContourEdgesCount
before calling this method.
Specifying the unit transform returns the edges in the space of the sketch.
If your application is expecting the returned edges to be in the context of the model's coordinate system, then xform should be the inverse of the transform returned by
ISketch::ModelToSketchTransform
.

## See Also

- `ISketch.GetContourEdges`
- `ISketchContour`