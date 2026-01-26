---
type: method
interface: IModelDocExtension
member: GetUserPreferenceDoubleValueRange
returns: System.Int32
parameters:
  -
    name: UserPref
    type: System.Int32
    description: User preference as defined in swUserPreferenceDoubleValue_e
  -
    name: Value
    type: System.Double
    description: Current value of UserPref; if the return value >= 0, see Remarks
  -
    name: MinValue
    type: System.Double
    description: Minimum value of UserPref; if the return value = 0, see Remarks
  -
    name: MaxValue
    type: System.Double
    description: Maximum value of UserPref; if the return value= 0, see Remarks
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.GetUserPreferenceDouble
  - IModelDocExtension.GetUserPreferenceInteger
  - IModelDocExtension.GetUserPreferenceString
  - IModelDocExtension.GetUserPreferenceTextFormat
  - IModelDocExtension.GetUserPreferenceToggle
  - IModelDocExtension.SetUserPreferenceDouble
  - IModelDocExtension.SetUserPreferenceInteger
  - IModelDocExtension.SetUserPreferenceString
  - IModelDocExtension.SetUserPreferenceTextFormat
  - IModelDocExtension.SetUserPreferenceToggle
  - ISldWorks.GetUserPreferenceDoubleValue
  - ISldWorks.GetUserPreferenceIntegerValue
  - ISldWorks.GetUserPreferenceStringListValue
  - ISldWorks.GetUserPreferenceStringValue
  - ISldWorks.GetUserPreferenceToggle
  - ISldWorks.SetUserPreferenceDoubleValue
  - ISldWorks.SetUserPreferenceIntegerValue
  - ISldWorks.SetUserPreferenceStringListValue
  - ISldWorks.SetUserPreferenceStringValue
  - ISldWorks.SetUserPreferenceToggle
keywords:
  - document
  - properties
  - getuserpreferencedoublevaluerange
  - imodeldocextension
  - model
  - doc
  - extension
  - user
  - preference
  - double
  - value
  - range
  - pref
  - int32
  - min
  - max
---

# IModelDocExtension.GetUserPreferenceDoubleValueRange

Gets the current document default user preference value, and the minimum and maximum valid document user preference values.

## Signature

```csharp
System.Int32 GetUserPreferenceDoubleValueRange( 
   System.Int32
UserPref
,
   out System.Double
Value
,
   out System.Double
MinValue
,
   out System.Double
MaxValue
)
```
## Parameters

- `UserPref` (System.Int32): User preference as defined in swUserPreferenceDoubleValue_e
- `Value` (System.Double): Current value of UserPref; if the return value >= 0, see Remarks
- `MinValue` (System.Double): Minimum value of UserPref; if the return value = 0, see Remarks
- `MaxValue` (System.Double): Maximum value of UserPref; if the return value= 0, see Remarks

## Return Value

Status upon return from this method; see Remarks

## Remarks

This method is equivalent to interactively getting document properties in the SOLIDWORKS Design software.
The return value indicates the status upon return from this method:
0 indicates that the current, minimum, and maximum user preference values were retrieved.
1 indicates that the current user preference value was retrieved, but the minimum and maximum user preference values were not.
This most likely occurred because the SOLIDWORKS API code was not implemented to retrieve the minimum and maximum allowed values, so the return value is warning you that not all information was returned. It does not indicate a fatal error. The SOLIDWORKS API code is only implemented for returning the minimum and maximum value in cases where those values are not obvious to the user, such as with user preference swImageQualityShadedDeviation.
-1 indicates that the current user preference value could not be retrieved.
This most likely occurred because UserPref was not recognized as a valid user preference value.
If you want to retrieve the current user preference value only (i.e., you do not want to retrieve the valid minimum and maximum user preference values), use
IModelDocExtension::GetUserPreferenceDouble
.

## See Also

- `IModelDocExtension.GetUserPreferenceDouble`
- `IModelDocExtension.GetUserPreferenceInteger`
- `IModelDocExtension.GetUserPreferenceString`
- `IModelDocExtension.GetUserPreferenceTextFormat`
- `IModelDocExtension.GetUserPreferenceToggle`
- `IModelDocExtension.SetUserPreferenceDouble`
- `IModelDocExtension.SetUserPreferenceInteger`
- `IModelDocExtension.SetUserPreferenceString`
- `IModelDocExtension.SetUserPreferenceTextFormat`
- `IModelDocExtension.SetUserPreferenceToggle`
- `ISldWorks.GetUserPreferenceDoubleValue`
- `ISldWorks.GetUserPreferenceIntegerValue`
- `ISldWorks.GetUserPreferenceStringListValue`
- `ISldWorks.GetUserPreferenceStringValue`
- `ISldWorks.GetUserPreferenceToggle`
- `ISldWorks.SetUserPreferenceDoubleValue`
- `ISldWorks.SetUserPreferenceIntegerValue`
- `ISldWorks.SetUserPreferenceStringListValue`
- `ISldWorks.SetUserPreferenceStringValue`
- `ISldWorks.SetUserPreferenceToggle`