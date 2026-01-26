---
type: method
interface: IPropertyManagerPageNumberbox
member: SetSliderParameters
returns: void
parameters:
  -
    name: PositionCount
    type: System.Int32
    description: Number of discreet positions on the slider
  -
    name: DivisionCount
    type: System.Int32
    description: Number of regions separated by tick marks on the slider
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IPropertyManagerPageNumberbox.SetRange2
keywords:
  - setsliderparameters
  - ipropertymanagerpagenumberbox
  - manager
  - page
  - numberbox
  - slider
  - parameters
  - position
  - count
  - int32
  - division
  - void
---

# IPropertyManagerPageNumberbox.SetSliderParameters

Sets the parameters for the slider.

## Signature

```csharp
void SetSliderParameters( 
   System.Int32
PositionCount
,
   System.Int32
DivisionCount
)
```
## Parameters

- `PositionCount` (System.Int32): Number of discreet positions on the slider
- `DivisionCount` (System.Int32): Number of regions separated by tick marks on the slider

## Return Value

Unknown.

## Remarks

When a user drags the slider, PositionCount defines how sensitive the slider is. Not all of the specified discreet points are displayed if the PropertyManager page is not wide enough to show them. However, if the user widens the PropertyManager page, then more points are displayed.
When a user drags the slider, the user-interface tends to snap to the nearest tick mark when the drag is nearby, making it easier for the user to set whole values.

## See Also

- `IPropertyManagerPageNumberbox.SetRange2`