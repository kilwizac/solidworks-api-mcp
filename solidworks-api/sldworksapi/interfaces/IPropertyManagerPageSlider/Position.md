---
type: property
interface: IPropertyManagerPageSlider
member: Position
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - position
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

# IPropertyManagerPageSlider.Position

Gets or sets the current position of the slider.

## Signature

```csharp
System.Int32 Position {get; set;}
```
## Parameters

None.

## Return Value

Current position of slider

## Remarks

Position must be a value within the specified range. To get the range, use
IPropertyManagerPageSlider::GetRange
; to set the range, use
IPropertyManagerPageSlider::SetRange
.
If you do not set the initial position of a slider, then the value defaults to a position of 5.

## Examples

- Set Up PropertyManager Page Slider Control (C++) (Set_Up_PropertyManager_Page_Slider_Control_Example_CPlusPlus_COM.htm)