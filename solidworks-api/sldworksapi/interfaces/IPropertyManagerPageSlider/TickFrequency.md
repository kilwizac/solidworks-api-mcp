---
type: property
interface: IPropertyManagerPageSlider
member: TickFrequency
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - tickfrequency
  - ipropertymanagerpageslider
  - manager
  - page
  - slider
  - tick
  - frequency
  - int32
readonly: null
---

# IPropertyManagerPageSlider.TickFrequency

Gets or sets the frequency of tick marks on a slider.

## Signature

```csharp
System.Int32 TickFrequency {get; set;}
```
## Parameters

None.

## Return Value

Frequency of tick marks on slider

## Remarks

If you set the frequency to 1, then a tick mark appears on every increment in the
range
. A value of 10 means that a tick mark appears every 10 increments in the range. If you do not set a frequency, then the frequency of tick marks default to 1.
IPropertyManagerPageSlider::Style
must be set to swPropMgrPageSliderStyle_AutoTicks to set IPropertyManagerPageSlider::TickFrequency.