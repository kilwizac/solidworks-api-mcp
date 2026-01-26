---
type: method
interface: ISketchContour
member: IGetSketchSegments
returns: SketchSegment
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of sketch segments
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchContour.GetSketchSegments
keywords:
  - sketch
  - segments
  - see
  - also
  - isketchsegment
  - contours
  - igetsketchsegments
  - isketchcontour
  - contour
  - count
  - int32
  - segment
---

# ISketchContour.IGetSketchSegments

Gets the sketch segments for this sketch contour.

## Signature

```csharp
SketchSegment IGetSketchSegments( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of sketch segments

## Return Value

in-process, unmanaged C++: Pointer to an array of sketch segments VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
ISketchContour::GetSketchSegmentsCount
to get the value for Count.

## See Also

- `ISketchContour.GetSketchSegments`