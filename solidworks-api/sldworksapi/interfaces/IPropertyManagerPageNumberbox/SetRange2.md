---
type: method
interface: IPropertyManagerPageNumberbox
member: SetRange2
returns: void
parameters:
  -
    name: Units
    type: System.Int32
    description: Number box units as defined in swNumberboxUnitType_e (see Remarks )
  -
    name: Minimum
    type: System.Double
    description: Minimum value
  -
    name: Maximum
    type: System.Double
    description: Maximum value
  -
    name: Inclusive
    type: System.Boolean
    description: True sets the range as inclusive, false sets it as exclusive
  -
    name: Increment
    type: System.Double
    description: Increment value
  -
    name: FastIncr
    type: System.Double
    description: Fast increment value for scrolling and mouse-wheel
  -
    name: SlowIncr
    type: System.Double
    description: Slow increment value for scrolling and mouse-wheel
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IPropertyManagerPageNumberbox.DisplayedUnit
  - IPropertyManagerPageNumberbox.SetSliderParameters
keywords:
  - setrange2
  - ipropertymanagerpagenumberbox
  - manager
  - page
  - numberbox
  - range2
  - units
  - int32
  - minimum
  - double
  - maximum
  - inclusive
  - boolean
  - increment
  - fast
  - incr
  - slow
  - void
  - create
  - propertymanager
  - many
  - controls
  - vba
---

# IPropertyManagerPageNumberbox.SetRange2

Sets the range and increment for the slider.

## Signature

```csharp
void SetRange2( 
   System.Int32
Units
,
   System.Double
Minimum
,
   System.Double
Maximum
,
   System.Boolean
Inclusive
,
   System.Double
Increment
,
   System.Double
FastIncr
,
   System.Double
SlowIncr
)
```
## Parameters

- `Units` (System.Int32): Number box units as defined in swNumberboxUnitType_e (see Remarks )
- `Minimum` (System.Double): Minimum value
- `Maximum` (System.Double): Maximum value
- `Inclusive` (System.Boolean): True sets the range as inclusive, false sets it as exclusive
- `Increment` (System.Double): Increment value
- `FastIncr` (System.Double): Fast increment value for scrolling and mouse-wheel
- `SlowIncr` (System.Double): Slow increment value for scrolling and mouse-wheel

## Return Value

Unknown.

## Remarks

This method works while a PropertyManager page is displayed with these restrictions:
You cannot change Units once the page is displayed. The Units parameter is ignored if specified while the page is displayed.
If the range is changed to an invalid value by this method, then you must immediately call
IPropertyManagerPageNumberbox::Value
and set a valid value to prevent displaying the dialog that requests the user to enter a valid value.

## Examples

- Create PropertyManager Page With Many Controls (VBA) (Create_PropertyManager_Page_With_Many_Controls_Example_VB.htm)

## See Also

- `IPropertyManagerPageNumberbox.DisplayedUnit`
- `IPropertyManagerPageNumberbox.SetSliderParameters`