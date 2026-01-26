---
type: method
interface: IPropertyManagerPageBitmap
member: SetBitmapByName
returns: System.Boolean
parameters:
  -
    name: ColorBitmap
    type: System.String
    description: Full path and filename of the bitmap on disk
  -
    name: MaskBitmap
    type: System.String
    description: Full path and filename of the alpha mask bitmap on disk
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - setbitmapbyname
  - ipropertymanagerpagebitmap
  - manager
  - page
  - bitmap
  - name
  - color
  - string
  - mask
  - boolean
---

# IPropertyManagerPageBitmap.SetBitmapByName

Sets the bitmap for this control.

## Signature

```csharp
System.Boolean SetBitmapByName( 
   System.String
ColorBitmap
,
   System.String
MaskBitmap
)
```
## Parameters

- `ColorBitmap` (System.String): Full path and filename of the bitmap on disk
- `MaskBitmap` (System.String): Full path and filename of the alpha mask bitmap on disk

## Return Value

True if the bitmap is set for this control, false if not

## Remarks

If you are creating a PropertyManager page add-in and ColorBitmap is either invalid or has the wrong path, this method displays an alternative image and returns false.
The typical image format for the two SOLIDWORKS bitmaps is 18 x 18 pixels x 256 colors. Using this method, you can specify a bigger bitmap, e.g., 24 x 24 pixels, to get extra detail. The pixels in MaskBitmap specify transparency through shades of grey with boundaries of black pixels = 100% opaque and white pixels = 100% transparent.
Use
IPropertyManagerPageControl::Top
to set the top of the control and use
IPropertyManagerPageControl::Tip
to set the ToolTip.
You can use this method before, during, or after the PropertyManager page is displayed or closed. If you use this method when the PropertyManager page is displayed, use bitmaps that are the same size.