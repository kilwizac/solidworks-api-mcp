---
type: method
interface: IModelDocExtension
member: SetUserPreferenceToggle
returns: System.Boolean
parameters:
  -
    name: UserPref
    type: System.Int32
    description: User preference as defined in swUserPreferenceToggle_e
  -
    name: UserPrefOption
    type: System.Int32
    description: User-preference option for customizing annotation and dimension drafting standards and as defined in swUserPreferenceOption_e ; if not needed, then specify swDetailingNoOptionSpecified
  -
    name: Value
    type: System.Boolean
    description: True to toggle UserPref on, false to toggle UserPref off
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
  - IModelDocExtension.SetUserPreferenceInteger
  - IModelDocExtension.SetUserPreferenceString
  - IModelDocExtension.SetUserPreferenceTextFormat
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
  - setuserpreferencetoggle
  - imodeldocextension
  - model
  - doc
  - extension
  - user
  - preference
  - toggle
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

# IModelDocExtension.SetUserPreferenceToggle

Sets document default user preference values. This method is intended for user preferences that can be toggled.

## Signature

```csharp
System.Boolean SetUserPreferenceToggle( 
   System.Int32
UserPref
,
   System.Int32
UserPrefOption
,
   System.Boolean
Value
)
```
## Parameters

- `UserPref` (System.Int32): User preference as defined in swUserPreferenceToggle_e
- `UserPrefOption` (System.Int32): User-preference option for customizing annotation and dimension drafting standards and as defined in swUserPreferenceOption_e ; if not needed, then specify swDetailingNoOptionSpecified
- `Value` (System.Boolean): True to toggle UserPref on, false to toggle UserPref off

## Return Value

True if UserPref is toggled on, false if UserPref is toggled off

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
- `IModelDocExtension.SetUserPreferenceInteger`
- `IModelDocExtension.SetUserPreferenceString`
- `IModelDocExtension.SetUserPreferenceTextFormat`
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