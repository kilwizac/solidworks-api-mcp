---
type: method
interface: IModelDocExtension
member: SetUserPreferenceInteger
returns: System.Boolean
parameters:
  -
    name: UserPref
    type: System.Int32
    description: User preference as defined in swUserPreferenceIntegerValue_e
  -
    name: UserPrefOption
    type: System.Int32
    description: User-preference option for customizing annotation and dimension drafting standards and as defined in swUserPreferenceOption_e ; if not needed, then specify swDetailingNoOptionSpecified
  -
    name: Value
    type: System.Int32
    description: Value to assign to the user preference specified in UserPref
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.GetUserPreferenceDouble
  - IModelDocExtension.GetUserPreferenceDoubleValueRange
  - IModelDocExtension.GetUserPreferenceInteger
  - IModelDocExtension.GetUserPreferenceString
  - IModelDocExtension.GetUserPreferenceTextFormat
  - IModelDocExtension.GetUserPreferenceToggle
  - IModelDocExtension.SetUserPreferenceDouble
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
  - setuserpreferenceinteger
  - imodeldocextension
  - model
  - doc
  - extension
  - user
  - preference
  - integer
  - pref
  - int32
  - option
  - value
  - boolean
  - preferences
  - vba
  - vb
  - net
---

# IModelDocExtension.SetUserPreferenceInteger

Sets document default user preference values. This method is intended for user preferences of type integer.

## Signature

```csharp
System.Boolean SetUserPreferenceInteger( 
   System.Int32
UserPref
,
   System.Int32
UserPrefOption
,
   System.Int32
Value
)
```
## Parameters

- `UserPref` (System.Int32): User preference as defined in swUserPreferenceIntegerValue_e
- `UserPrefOption` (System.Int32): User-preference option for customizing annotation and dimension drafting standards and as defined in swUserPreferenceOption_e ; if not needed, then specify swDetailingNoOptionSpecified
- `Value` (System.Int32): Value to assign to the user preference specified in UserPref

## Return Value

True if the user preference is set, false if not

## Remarks

This method is equivalent to interactively setting document properties in the SOLIDWORKS Design software. See
System Options and Document Properties
for details.

## Examples

- Get and Set User Preferences (VBA) (Get_and_Set_User_Preferences_Example_VB.htm)
- Get and Set User Preferences (VB.NET) (Get_and_Set_User_Preferences_Example_VBNET.htm)
- Get and Set User Preferences (C#) (Get_and_Set_User_Preferences_Example_CSharp.htm)

## See Also

- `IModelDocExtension.GetUserPreferenceDouble`
- `IModelDocExtension.GetUserPreferenceDoubleValueRange`
- `IModelDocExtension.GetUserPreferenceInteger`
- `IModelDocExtension.GetUserPreferenceString`
- `IModelDocExtension.GetUserPreferenceTextFormat`
- `IModelDocExtension.GetUserPreferenceToggle`
- `IModelDocExtension.SetUserPreferenceDouble`
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