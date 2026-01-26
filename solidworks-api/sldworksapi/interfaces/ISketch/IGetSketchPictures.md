---
type: method
interface: ISketch
member: IGetSketchPictures
returns: SketchPicture
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of pictures on this sketch
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketch.GetSketchPictures
keywords:
  - sketch
  - see
  - also
  - isketch
  - pictures
  - igetsketchpictures
  - count
  - int32
  - picture
---

# ISketch.IGetSketchPictures

Gets the pictures on this sketch.

## Signature

```csharp
SketchPicture IGetSketchPictures( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of pictures on this sketch

## Return Value

in-process, unmanaged C++: Pointer to an array of pictures on this sketch VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
ISketch::GetSketchPictureCount
before calling this method to get the value of Count.

## See Also

- `ISketch.GetSketchPictures`