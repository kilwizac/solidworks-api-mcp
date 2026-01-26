---
type: method
interface: ISketch
member: IGetSketchContours
returns: SketchContour
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of sketch contours
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketch.GetSketchContours
keywords:
  - contours
  - sketch
  - entities
  - see
  - also
  - isketch
  - isketchcontour
  - segments
  - isketchsegment
  - sketchcontour
  - igetsketchcontours
  - count
  - int32
  - contour
---

# ISketch.IGetSketchContours

Gets the sketch contours in this sketch.

## Signature

```csharp
SketchContour IGetSketchContours( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of sketch contours

## Return Value

in-process, unmanaged C++: Pointer to an array of sketch contours VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
ISketch::GetSketchContourCount
before calling this method to get Count.
This method works even if the sketch is suppressed.

## See Also

- `ISketch.GetSketchContours`