---
type: property
interface: IPropertyManagerPageSlider
member: Style
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - style
  - ipropertymanagerpageslider
  - manager
  - page
  - slider
  - int32
  - up
  - propertymanager
  - control
readonly: null
---

# IPropertyManagerPageSlider.Style

Gets or sets the display properties of a slider control.

## Signature

```csharp
System.Int32 Style {get; set;}
```
## Parameters

None.

## Return Value

Display properties of slider control as defined in swPropMgrPageSliderStyle_e

## Remarks

If you do not set the any display properties, then the value is set to 0, which means:
Slider is horizontal.
Slider has not ticks.
Your application is only notified when the user is done dragging the slider to move it.

## Examples

- Set Up PropertyManager Page Slider Control (C++) (Set_Up_PropertyManager_Page_Slider_Control_Example_CPlusPlus_COM.htm)