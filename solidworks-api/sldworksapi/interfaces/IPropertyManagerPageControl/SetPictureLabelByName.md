---
type: method
interface: IPropertyManagerPageControl
member: SetPictureLabelByName
returns: System.Boolean
parameters:
  -
    name: ColorBitmap
    type: System.String
    description: Fully qualified path to the location of the bitmap (i.e., the graphic to use) on disk
  -
    name: MaskBitmap
    type: System.String
    description: Fully qualified path to the location of the alpha mask bitmap on disk
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - setpicturelabelbyname
  - ipropertymanagerpagecontrol
  - manager
  - page
  - control
  - picture
  - label
  - name
  - color
  - bitmap
  - string
  - mask
  - boolean
---

# IPropertyManagerPageControl.SetPictureLabelByName

Sets the bitmap label for this control on a PropertyManager page.

## Signature

```csharp
System.Boolean SetPictureLabelByName( 
   System.String
ColorBitmap
,
   System.String
MaskBitmap
)
```
## Parameters

- `ColorBitmap` (System.String): Fully qualified path to the location of the bitmap (i.e., the graphic to use) on disk
- `MaskBitmap` (System.String): Fully qualified path to the location of the alpha mask bitmap on disk

## Return Value

True if successful, false if not

## Remarks

The image format for the two bitmaps is 18 x 18 pixels x 256 colors.
The pixels in MaskBitmap specify transparency through shades of grey with boundaries of black pixels = 100% opaque and white pixels = 100% transparent.
You can only use this method on a PropertyManager page before the page is displayed, while it is displayed, or when it is closed.