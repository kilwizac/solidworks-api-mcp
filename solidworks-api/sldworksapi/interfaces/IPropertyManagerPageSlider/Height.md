---
type: property
interface: IPropertyManagerPageSlider
member: Height
returns: System.Int16
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - height
  - ipropertymanagerpageslider
  - manager
  - page
  - slider
  - int16
  - up
  - propertymanager
  - control
readonly: null
---

# IPropertyManagerPageSlider.Height

Gets or sets the height of the slider control.

## Signature

```csharp
System.Int16 Height {get; set;}
```
## Parameters

None.

## Return Value

Height of slider control

## Remarks

You can only set this property before the PropertyManager page is displayed.
Normally you should not use this property because SOLIDWORKS will size the slider appropriately based on its orientation and display properties. However, the complexity of the PropertyManager page's layout may make it necessary to use this property with
IPropertyManagerPageControl::Left
,
IPropertyManagerPageControl::Top
, and
IPropertyManagerPageControl::Width
to get the desired look.
This property is also for creating a small slider by clearing the
IPropertyManagerPageSlider::Style
swPropMgrPageSliderStyle_AutoTicks bit and setting Height to a value less than the default. A horizontal slider without tick marks has a default height of 16. This height is in dialog-box units. You can convert this value to screen units (pixels) by using the Windows MapDialogRect function.

## Examples

- Set Up PropertyManager Page Slider Control (C++) (Set_Up_PropertyManager_Page_Slider_Control_Example_CPlusPlus_COM.htm)