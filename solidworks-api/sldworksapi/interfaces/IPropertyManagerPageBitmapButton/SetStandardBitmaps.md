---
type: method
interface: IPropertyManagerPageBitmapButton
member: SetStandardBitmaps
returns: System.Boolean
parameters:
  -
    name: Bitmap
    type: System.Int32
    description: Standard images as defined by swPropertyManagerPageBitmapButtons_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - setstandardbitmaps
  - ipropertymanagerpagebitmapbutton
  - manager
  - page
  - bitmap
  - button
  - standard
  - bitmaps
  - int32
  - boolean
---

# IPropertyManagerPageBitmapButton.SetStandardBitmaps

Sets the standard images for this button.

## Signature

```csharp
System.Boolean SetStandardBitmaps( 
   System.Int32
Bitmap
)
```
## Parameters

- `Bitmap` (System.Int32): Standard images as defined by swPropertyManagerPageBitmapButtons_e

## Return Value

True if standard images are set, false if not

## Remarks

This is the quickest and easiest way to set images on a bitmap button control after the control is created. The not-clicked, clicked, and disabled states for the control are automatically set by the SOLIDWORKS Design application.
You must call this method after calling either of the following methods to create the bitmap button control:
IPropertyManagerPage2::AddControl
or
IPropertyManagerPage2::IAddControl
IPropertyManagerPageGroup::AddControl
or
IPropertyManagerPageGroup::IAddControl

## Examples

- IPropertyManagerPageBitmapButton (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IPropertyManagerPageBitmapButton)