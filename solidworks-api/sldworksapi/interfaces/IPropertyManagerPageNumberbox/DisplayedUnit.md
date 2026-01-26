---
type: property
interface: IPropertyManagerPageNumberbox
member: DisplayedUnit
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - displayedunit
  - ipropertymanagerpagenumberbox
  - manager
  - page
  - numberbox
  - displayed
  - unit
  - int32
readonly: null
---

# IPropertyManagerPageNumberbox.DisplayedUnit

Gets or sets the unit type to display in this PropertyManager page number box.

## Signature

```csharp
System.Int32 DisplayedUnit {get; set;}
```
## Parameters

None.

## Return Value

Unit type to display in this PropertyManager page number box (see Remarks )

## Remarks

This property depends on the unit type specified for the
IPropertyManagerPageNumberbox::SetRange2
's Units parameter, which is a value from
swNumberboxUnitType_e
.
If IPropertyManagerPageNumberbox::SetRange2's Units parameter is...
Then specifiy an enumerator from this enumeration for IPropertyManagerPageNumber::DisplayedUnit...
swNumberBox_Length
swLengthUnit_e
swNumberBox_Angle
swAngleUnit_e
swNumberBox_Force
swUnitsForce_e
swNumberBox_Time
swUnitsTimeUnit_e
For example, IPropertyManagerPageNumberbox::DisplayedUnit allows an add-in to have a number box that shows length values in inches, even though the system default units are meters. Remember that the values specified for both
IPropertyManagerPageNumberbox::Value
and IPropertyManagerPageNumberbox::SetRange2 are in system units; IPropertyManagerPageNumberbox::DisplayedUnits simply controls how that value is displayed in the PropertyManager page number box.
You can call IPropertyManagerPageNumberbox::DisplayedUnit and change the units displayed in a number box while a Propertymanager page is displayed.