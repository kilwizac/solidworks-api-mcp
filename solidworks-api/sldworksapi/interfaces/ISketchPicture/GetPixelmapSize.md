---
type: method
interface: ISketchPicture
member: GetPixelmapSize
returns: System.Int32
parameters:
  -
    name: Width
    type: System.Int32
    description: Number of columns in the pixel map
  -
    name: Height
    type: System.Int32
    description: Number of rows in the pixel map
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - sketches
related:
  - ISketchPicture.GetPixelmap
  - ISketchPicture.GetPointOnSketchFromPixel
keywords:
  - getpixelmapsize
  - isketchpicture
  - sketch
  - picture
  - pixelmap
  - size
  - width
  - int32
  - height
---

# ISketchPicture.GetPixelmapSize

Gets the size of the array for the picture pixels.

## Signature

```csharp
System.Int32 GetPixelmapSize( 
   out System.Int32
Width
,
   out System.Int32
Height
)
```
## Parameters

- `Width` (System.Int32): Number of columns in the pixel map
- `Height` (System.Int32): Number of rows in the pixel map

## Return Value

Size of the array of the picture pixels

## Remarks

Call this method before calling
ISketchPicture::IGetPixelmap
to get the size of the array for that method.

## See Also

- `ISketchPicture.GetPixelmap`
- `ISketchPicture.GetPointOnSketchFromPixel`