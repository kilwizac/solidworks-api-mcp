---
type: method
interface: IPropertyManagerPageControl
member: SetStandardPictureLabel
returns: System.Boolean
parameters:
  -
    name: Bitmap
    type: System.Int32
    description: Label type as defined in swControlBitmapLabelType_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - setstandardpicturelabel
  - ipropertymanagerpagecontrol
  - manager
  - page
  - control
  - standard
  - picture
  - label
  - bitmap
  - int32
  - boolean
  - cut
  - body
  - half
  - using
  - macro
  - feature
  - vba
---

# IPropertyManagerPageControl.SetStandardPictureLabel

Sets the bitmap's or PNG image's label for this control on a PropertyManager page.

## Signature

```csharp
System.Boolean SetStandardPictureLabel( 
   System.Int32
Bitmap
)
```
## Parameters

- `Bitmap` (System.Int32): Label type as defined in swControlBitmapLabelType_e

## Return Value

True if successful, false if not

## Remarks

You can only use this method on a PropertyManager page before the page is displayed, while it is displayed, or when it is closed.

## Examples

- Cut Body in Half Using Macro Feature (VBA) (Cut_Body_in_Half_using_Macro_Feature_Example_VB.htm)