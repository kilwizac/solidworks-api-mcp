---
type: method
interface: ISldWorks
member: EnableStereoDisplay
returns: System.Boolean
parameters:
  -
    name: BEnable
    type: System.Boolean
    description: Bitfield flags that control the application's stereo support status
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - ui
related: []
keywords:
  - enablestereodisplay
  - isldworks
  - sld
  - works
  - enable
  - stereo
  - display
  - boolean
---

# ISldWorks.EnableStereoDisplay

Obsolete and not superseded. Functionality no longer implemented.

## Signature

```csharp
System.Boolean EnableStereoDisplay( 
   System.Boolean
BEnable
)
```
## Parameters

- `BEnable` (System.Boolean): Bitfield flags that control the application's stereo support status

## Return Value

True if stereo attribute setting was successful, false if not

## Remarks

You must select the
Enable Quadbuffered Stereo API
check box for NVIDIA Quadro
4 OpenGL video cards before opening any windows.
Calling this method with bit #0, the low bit, of the flags field set (flags |= 0x01) sets up all subsequently opened document windows to be capable of displaying stereo; already opened document windows are not affected. If this method is not called, or if it is called with the low bit of flags cleared, the document windows are not be capable of displaying stereo.
Bit #1 controls whether or not3D scenes are displayed to separate left-eye and right-eye stereoscopic buffers. If bit #1 of the flags field is set (flags |= 0x02), separately buffered stereo pairs are rendered for all windows with 3D scenes that are capable of displaying stereo.
Thus, any plug-in that might need to display stereoscopically should, upon loading, immediately call this method, with the flags field set to 0x01. To actually activate stereo display, call this method with the flags field set to 0x03. To deactivate stereo display, call this method with the flags field set to 0x01. Finally, just before the plug-in uninstalls, restore SOLIDWORKS' default behavior by calling this method with the flags field set to 0x00.
For the stereo pair renderings to appear stereoscopic, call
IModelView::SetStereoSeparation
or
IModelView::ISetStereoSeparation
. By default, the stereo rendering-control attributes that are set by IModelView::SetStereoSeparation or IModelView::ISetStereoSeparation
are set for identical left-eye and right-eye renderings.