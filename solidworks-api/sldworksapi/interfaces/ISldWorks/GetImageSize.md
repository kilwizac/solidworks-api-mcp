---
type: method
interface: ISldWorks
member: GetImageSize
returns: System.Int32
parameters:
  -
    name: Small
    type: System.Int32
    description: Small image size suitable for the current DPI setting of the display device
  -
    name: Medium
    type: System.Int32
    description: Medium image size suitable for the current DPI setting of the display device
  -
    name: Large
    type: System.Int32
    description: Large image size suitable for the current DPI setting of the display device
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ICommandGroup.IconList
  - ICommandGroup.MainIconList
  - ICommandManager.CreateFlyoutGroup2
  - IFlyoutGroup.IconList
  - IFlyoutGroup.MainIconList
  - IFrame.AddMenuPopupIcon3
  - IPropertyManagerPageBitmapButton.SetBitmapsByName3
  - ISldWorks.AddMenuItem5
  - ISldWorks.AddToolbar5
  - ISldWorks.CreateTaskpaneView3
  - ITaskpaneView.AddCustomButton2
keywords:
  - solidworks
  - image
  - sizes
  - getimagesize
  - isldworks
  - sld
  - works
  - size
  - small
  - int32
  - medium
  - large
  - create
  - flyouts
  - commandmanager
  - vb
  - net
---

# ISldWorks.GetImageSize

Gets:

## Signature

```csharp
System.Int32 GetImageSize( 
   out System.Int32
Small
,
   out System.Int32
Medium
,
   out System.Int32
Large
)
```
## Parameters

- `Small` (System.Int32): Small image size suitable for the current DPI setting of the display device
- `Medium` (System.Int32): Medium image size suitable for the current DPI setting of the display device
- `Large` (System.Int32): Large image size suitable for the current DPI setting of the display device

## Return Value

Default image size for the current DPI setting of the display device for images that are not based on the SOLIDWORKS icon size setting as defined in swImageSizeToUse_e

## Remarks

You can use this method to determine the correct size for:
buttons for your PropertyManager pages.
icons for your macro features.

## Examples

- Create Flyouts in the CommandManager (C#) (Create_Flyouts_in_the_CommandManager_Example_CSharp.htm)
- Create Flyouts in the CommandManager (VB.NET) (Create_Flyouts_in_the_CommandManager_Example_VBNET.htm)

## See Also

- `ICommandGroup.IconList`
- `ICommandGroup.MainIconList`
- `ICommandManager.CreateFlyoutGroup2`
- `IFlyoutGroup.IconList`
- `IFlyoutGroup.MainIconList`
- `IFrame.AddMenuPopupIcon3`
- `IPropertyManagerPageBitmapButton.SetBitmapsByName3`
- `ISldWorks.AddMenuItem5`
- `ISldWorks.AddToolbar5`
- `ISldWorks.CreateTaskpaneView3`
- `ITaskpaneView.AddCustomButton2`