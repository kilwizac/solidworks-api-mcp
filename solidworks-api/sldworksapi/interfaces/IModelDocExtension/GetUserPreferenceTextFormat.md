---
type: method
interface: IModelDocExtension
member: GetUserPreferenceTextFormat
returns: TextFormat
parameters:
  -
    name: UserPref
    type: System.Int32
    description: User preference as defined in swUserPreferenceTextFormat_e
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
  - getuserpreferencetextformat
  - imodeldocextension
  - model
  - doc
  - extension
  - user
  - preference
  - text
  - format
  - pref
  - int32
  - option
  - preferences
  - vba
  - vb
  - net
---

# IModelDocExtension.GetUserPreferenceTextFormat

Gets document default user preference values. This method is intended for getting detailing text formats.

## Signature

```csharp
TextFormat GetUserPreferenceTextFormat( 
   System.Int32
UserPref
,
   System.Int32
UserPrefOption
)
```
## Parameters

- `UserPref` (System.Int32): User preference as defined in swUserPreferenceTextFormat_e
- `UserPrefOption` (System.Int32): User-preference option for customizing annotation and dimension drafting standards and as defined in swUserPreferenceOption_e ; if not needed, then specify swDetailingNoOptionSpecified

## Return Value

Text format associated with UserPref

## Remarks

This method is equivalent to interactively getting document properties in the SOLIDWORKS Design software. See
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