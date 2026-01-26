---
type: method
interface: IPropertyManagerPageBitmapButton
member: SetBitmaps
returns: System.Boolean
parameters:
  -
    name: ModuleHandle
    type: System.Int32
    description: Module handle of the application instance that contains the image resource
  -
    name: BitmapUp
    type: System.Int32
    description: Resource ID of the not-clicked state image resource
  -
    name: BitmapDown
    type: System.Int32
    description: Resource ID of the clicked state image resource
  -
    name: BitmapDisabled
    type: System.Int32
    description: Resource ID of the disabled state image resource
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - setbitmaps
  - ipropertymanagerpagebitmapbutton
  - manager
  - page
  - bitmap
  - button
  - bitmaps
  - module
  - handle
  - int32
  - up
  - down
  - disabled
  - boolean
---

# IPropertyManagerPageBitmapButton.SetBitmaps

Sets the images for this button.

## Signature

```csharp
System.Boolean SetBitmaps( 
   System.Int32
ModuleHandle
,
   System.Int32
BitmapUp
,
   System.Int32
BitmapDown
,
   System.Int32
BitmapDisabled
)
```
## Parameters

- `ModuleHandle` (System.Int32): Module handle of the application instance that contains the image resource
- `BitmapUp` (System.Int32): Resource ID of the not-clicked state image resource
- `BitmapDown` (System.Int32): Resource ID of the clicked state image resource
- `BitmapDisabled` (System.Int32): Resource ID of the disabled state image resource

## Return Value

True if successful, false if not

## Remarks

If your application must be x64 compatible, then use
IPropertyManagerpageBitmapButton::SetBitmapsx64
.
The ModuleHandle argument for this method is the handle to the instance (HINSTANCE) of the user DLL, and the resource IDs for the not-clicked, clicked, and disabled states are the image resource integers. The SOLIDWORKS Design application loads the images from the user DLL and uses them on this bitmap button control.
You must call this method after calling either of the following methods to create the button control:
IPropertyManagerPage2::AddControl
or
IPropertyManagerPage2::IAddControl
IPropertyManagerPageGroup::AddControl
or
IPropertyManagerPageGroup::IAddControl