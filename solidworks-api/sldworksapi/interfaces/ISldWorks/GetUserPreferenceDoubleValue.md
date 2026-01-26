---
type: method
interface: ISldWorks
member: GetUserPreferenceDoubleValue
returns: System.Double
parameters:
  -
    name: UserPreferenceValue
    type: System.Int32
    description: User preference as defined in swUserPreferenceDoubleValue_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
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
  - IModelDocExtension.SetUserPreferenceToggle
  - ISldWorks.GetUserPreferenceIntegerValue
  - ISldWorks.GetUserPreferenceStringListValue
  - ISldWorks.GetUserPreferenceStringValue
  - ISldWorks.GetUserPreferenceToggle
  - ISldWorks.SetUserPreferenceDoubleValue
  - ISldWorks.SetUserPreferenceIntegerValue
  - ISldWorks.SetUserPreferenceStringValue
  - ISldWorks.SetUserPreferenceToggle
keywords:
  - options
  - user
  - preferences
  - getuserpreferencedoublevalue
  - isldworks
  - sld
  - works
  - preference
  - double
  - value
  - int32
  - save
  - document
  - tiff
  - vba
  - drawing
  - dxf
  - sheets
  - vb
  - net
---

# ISldWorks.GetUserPreferenceDoubleValue

Gets system default user preference values.

## Signature

```csharp
System.Double GetUserPreferenceDoubleValue( 
   System.Int32
UserPreferenceValue
)
```
## Parameters

- `UserPreferenceValue` (System.Int32): User preference as defined in swUserPreferenceDoubleValue_e

## Return Value

Value of UserPreferenceValue

## Remarks

This method is intended for user preferences of type double and is equivalent to interactively getting system options in the SOLIDWORKS Design software. See
System Options and Document Properties
for details.

## Examples

- Save Document as TIFF (VBA) (Save_As_Tiff_Example_VB.htm)
- Save Drawing as DXF (VBA) (Save_Drawing_as_DXF_Example_VB.htm)
- Save Drawing Sheets as DXF (VBA) (Save_Drawing_Sheets_as_DXF_Example_VB.htm)
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
- `IModelDocExtension.SetUserPreferenceToggle`
- `ISldWorks.GetUserPreferenceIntegerValue`
- `ISldWorks.GetUserPreferenceStringListValue`
- `ISldWorks.GetUserPreferenceStringValue`
- `ISldWorks.GetUserPreferenceToggle`
- `ISldWorks.SetUserPreferenceDoubleValue`
- `ISldWorks.SetUserPreferenceIntegerValue`
- `ISldWorks.SetUserPreferenceStringValue`
- `ISldWorks.SetUserPreferenceToggle`