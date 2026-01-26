---
type: method
interface: ISketchPicture
member: GetPointOnSketchFromPixel
returns: MathPoint
parameters:
  -
    name: Row
    type: System.Int32
    description: Row for this pixel
  -
    name: Column
    type: System.Int32
    description: Column for this pixel
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - sketches
related:
  - ISketchPicture.GetPixelmapSize
keywords:
  - getpointonsketchfrompixel
  - isketchpicture
  - sketch
  - picture
  - point
  - pixel
  - row
  - int32
  - column
  - math
---

# ISketchPicture.GetPointOnSketchFromPixel

Gets the sketch coordinate for the specified pixel.

## Signature

```csharp
MathPoint GetPointOnSketchFromPixel( 
   System.Int32
Row
,
   System.Int32
Column
)
```
## Parameters

- `Row` (System.Int32): Row for this pixel
- `Column` (System.Int32): Column for this pixel

## Return Value

Point in the sketch space

## Remarks

This method gets a point in the sketch space for the specified 0-based row and column indices from the pixel map. Because the bitmap data is raw data, this method helps determine where a point on the sketch is for the pixel after all of the transformation information has been applied. This method helps connect the raw data to its sketch.
See
ISketchPicture::GetPixelmap
or
ISketchPicture::IGetPixelmap
for more information about the pixel map.

## See Also

- `ISketchPicture.GetPixelmapSize`