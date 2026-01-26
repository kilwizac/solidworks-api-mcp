---
type: method
interface: ISketchPicture
member: IGetPixelmap
returns: System.Int16
parameters:
  -
    name: Count
    type: System.Int32
    description: Size of the array
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - sketches
related:
  - ISketchPicture.GetPixelmap
keywords:
  - igetpixelmap
  - isketchpicture
  - sketch
  - picture
  - pixelmap
  - count
  - int32
  - int16
---

# ISketchPicture.IGetPixelmap

Gets the picture pixels.

## Signature

```csharp
System.Int16 IGetPixelmap( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Size of the array

## Return Value

in-process, unmanaged C++: Pointer to an array containing groups of 3 or 4 values (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

The array contains groups of three, the Red, Green, Blue (RGB) components of pixel color, and optionally, a fourth value that indicates the transparency of the pixel, which can be a value from 0 (transparent) to 255 (opaque).
Before calling this method, call
ISketchPicture::GetPixelmapSize
to get the value of Count.
To determine the format of the data, you need the information returned by ISketchPicture::GetPixelmapSize:
Number of items per pixel = size / (rows * columns)
Each group of three or four goes across each pixel in a row of the bitmap. The next row follows in the array.
This raw data does not include translation, scaling, rotation, and flipping. SOLIDWORKS Design applies these properties to the raw bitmap data to draw it in the sketch.

## See Also

- `ISketchPicture.GetPixelmap`