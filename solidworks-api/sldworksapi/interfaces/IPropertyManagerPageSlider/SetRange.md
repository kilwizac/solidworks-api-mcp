---
type: property
interface: IPropertyManagerPageSlider
member: SetRange
returns: System.Boolean
parameters:
  -
    name: Min
    type: System.Int32
    description: Minimum range of slider
  -
    name: Max
    type: System.Int32
    description: Maximum range of slider
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - setrange
  - ipropertymanagerpageslider
  - manager
  - page
  - slider
  - range
  - min
  - int32
  - max
  - boolean
  - up
  - propertymanager
  - control
readonly: null
---

# IPropertyManagerPageSlider.SetRange

Sets the range of a slider.

## Signature

```csharp
System.Boolean SetRange( 
   System.Int32
Min
,
   System.Int32
Max
)
```
## Parameters

- `Min` (System.Int32): Minimum range of slider
- `Max` (System.Int32): Maximum range of slider

## Return Value

True if range is set, false if not

## Remarks

If you do not use this method to specify the range, it will default to a range of 0 to 10. Use
IPropertyManagerPageStyle::GetRange
to get the current range of the slider.

## Examples

- Set Up PropertyManager Page Slider Control (C++) (Set_Up_PropertyManager_Page_Slider_Control_Example_CPlusPlus_COM.htm)