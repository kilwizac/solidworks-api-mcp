---
type: method
interface: IModelDocExtension
member: GetUserPreferenceToggle
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
  - getuserpreferencetoggle
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
  - boolean
  - preferences
  - vba
  - vb
  - net
---

# IModelDocExtension.GetUserPreferenceToggle

Gets document default user preference values. This method is intended for user preferences that can be toggled.

## Signature

```csharp
System.Boolean GetUserPreferenceToggle( 
   System.Int32
UserPref
,
   System.Int32
UserPrefOption
)
```
## Parameters

- `UserPref` (System.Int32): User preference as defined in swUserPreferenceToggle_e
- `UserPrefOption` (System.Int32): User-preference option for customizing annotation and dimension drafting standards and as defined in swUserPreferenceOption_e ; if not needed, then specify swDetailingNoOptionSpecified

## Return Value

True if UserPref is toggled on, false if toggled off

## Remarks

See
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