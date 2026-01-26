---
type: method
interface: IPropertyManagerPageBitmap
member: SetStandardBitmap
returns: System.Boolean
parameters:
  -
    name: Bitmap
    type: System.Int32
    description: Control standard type as defined in swBitmapControlStandardTypes_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - setstandardbitmap
  - ipropertymanagerpagebitmap
  - manager
  - page
  - bitmap
  - standard
  - int32
  - boolean
---

# IPropertyManagerPageBitmap.SetStandardBitmap

Sets the bitmap or PNG image for this control.

## Signature

```csharp
System.Boolean SetStandardBitmap( 
   System.Int32
Bitmap
)
```
## Parameters

- `Bitmap` (System.Int32): Control standard type as defined in swBitmapControlStandardTypes_e

## Return Value

True if the bitmap or PNG image is set, false if not

## Remarks

You can use this method before, during, or after the PropertyManager page is displayed or closed. If you use this method when the PropertyManager page is displayed, use a bitmap or PNG image that is the same size.

## Examples

- IPropertyManagerPageBitmap (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IPropertyManagerPageBitmap)