---
type: property
interface: IFlyoutGroup
member: IconList
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - ISldWorks.GetImageSize
keywords:
  - iconlist
  - iflyoutgroup
  - flyout
  - group
  - icon
  - list
  - object
  - create
  - flyouts
  - commandmanager
  - vb
  - net
readonly: null
---

# IFlyoutGroup.IconList

Gets or sets the paths for the icons for the toolbar buttons for this flyout.

## Signature

```csharp
System.Object IconList {get; set;}
```
## Parameters

None.

## Return Value

Array of strings of the paths for the icons for the toolbar buttons for this flyout (see Remarks )

## Remarks

This property supports scaling for high resolution screens with high resolution operating system scaling options.
The array of strings for the paths to the image files can contain icons of the following sizes:
20 x 20 pixels
32 x 32 pixels
40 x 40 pixels
64 x 64 pixels
96 x 96 pixels
128 x128 pixels
Each image file (
.bmp
or
.png
) should contain all of the same-size icons for all of the buttons. For example:
Each icon strip should use a 256-color palette.
The order in which you specify the icons must be the same for this property and
IFlyoutGroup::MainIconList
. For example, if you specify an array of paths to 20 x 20 pixels, 32 x 32 pixels, and 40 x 40 pixels icons for this property, then you must specify an array of paths to 20 x 20 pixels, 32 x 32 pixels, and 40 x 40 pixels icons for IFlyoutGroup::MainIconList.

## Examples

- Create Flyouts in the CommandManager (C#) (Create_Flyouts_in_the_CommandManager_Example_CSharp.htm)
- Create Flyouts in the CommandManager (VB.NET) (Create_Flyouts_in_the_CommandManager_Example_VBNET.htm)

## See Also

- `ISldWorks.GetImageSize`