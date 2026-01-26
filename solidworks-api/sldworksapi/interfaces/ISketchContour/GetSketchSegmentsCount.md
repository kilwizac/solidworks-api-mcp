---
type: method
interface: ISketchContour
member: GetSketchSegmentsCount
returns: System.Int32
parameters: []
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
  - getsketchsegmentscount
  - isketchcontour
  - contour
  - count
  - int32
---

# ISketchContour.GetSketchSegmentsCount

Gets the number of sketch segments for this sketch contour.

## Signature

```csharp
System.Int32 GetSketchSegmentsCount()
```
## Parameters

None.

## Return Value

Number of sketch segments

## Remarks

Call this method before calling
ISketchContour::IGetSketchSegments
to get the size of the array for that method.

## See Also

- `ISketchContour.GetSketchSegments`