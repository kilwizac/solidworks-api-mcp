---
type: method
interface: ISketch
member: GetSketchContourCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketch.GetSketchContours
keywords:
  - sketch
  - see
  - also
  - isketch
  - contours
  - getsketchcontourcount
  - contour
  - count
  - int32
---

# ISketch.GetSketchContourCount

Gets the number of sketch contours in this sketch.

## Signature

```csharp
System.Int32 GetSketchContourCount()
```
## Parameters

None.

## Return Value

Number of sketch contours

## Remarks

Call this method before calling
ISketch::IGetSketchContours
to get the size of the array for that method.
This method works even if the sketch is suppressed.

## See Also

- `ISketch.GetSketchContours`