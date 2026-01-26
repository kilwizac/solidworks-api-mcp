---
type: method
interface: ISketch
member: GetSketchPictureCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketch.GetSketchPictures
  - ISketchPicture
keywords:
  - sketch
  - see
  - also
  - isketch
  - pictures
  - getsketchpicturecount
  - picture
  - count
  - int32
---

# ISketch.GetSketchPictureCount

Gets the number of pictures on this sketch.

## Signature

```csharp
System.Int32 GetSketchPictureCount()
```
## Parameters

None.

## Return Value

Number of pictures on this sketch

## Remarks

Call this method before calling
ISketch::IGetSketchPcitures
to get the size of the array for that method.

## See Also

- `ISketch.GetSketchPictures`
- `ISketchPicture`