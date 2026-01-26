---
type: method
interface: ISldWorks
member: GetUserPreferenceToggle
returns: System.Boolean
parameters:
  -
    name: UserPreferenceToggle
    type: System.Int32
    description: User preference as defined in swUserPreferenceToggle_e
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
  - ISldWorks.GetUserPreferenceDoubleValue
  - ISldWorks.GetUserPreferenceIntegerValue
  - ISldWorks.GetUserPreferenceStringListValue
  - ISldWorks.GetUserPreferenceStringValue
  - ISldWorks.SetUserPreferenceDoubleValue
  - ISldWorks.SetUserPreferenceIntegerValue
  - ISldWorks.SetUserPreferenceStringListValue
  - ISldWorks.SetUserPreferenceStringValue
  - ISldWorks.SetUserPreferenceToggle
keywords:
  - options
  - user
  - preferences
  - getuserpreferencetoggle
  - isldworks
  - sld
  - works
  - preference
  - toggle
  - int32
  - boolean
  - rename
  - assembly
  - components
  - vba
  - save
  - document
  - tiff
  - drawing
  - dxf
  - sheets
  - suppress
  - rebuild
  - error
  - dialogs
  - vb
  - net
---

# ISldWorks.GetUserPreferenceToggle

Gets document default user preference values.

## Signature

```csharp
System.Boolean GetUserPreferenceToggle( 
   System.Int32
UserPreferenceToggle
)
```
## Parameters

- `UserPreferenceToggle` (System.Int32): User preference as defined in swUserPreferenceToggle_e

## Return Value

True if UserPreferenceToggle is toggled on; false if toggled off

## Remarks

This method is intended for user preferences that can be toggled and is equivalent to interactively getting system options in the SOLIDWORKS Design software.
For example:
boolean curState = swapp.GetUserPreferenceToggle( swUseFolderSearchRules)
See
System Options and Document Properties
for details.

## Examples

- Rename Assembly Components (VBA) (Rename_Assembly_Components_Example_VB.htm)
- Save Document as TIFF (VBA) (Save_As_Tiff_Example_VB.htm)
- Save Drawing as DXF (VBA) (Save_Drawing_as_DXF_Example_VB.htm)
- Save Drawing Sheets as DXF (VBA) (Save_Drawing_Sheets_as_DXF_Example_VB.htm)
- Suppress Rebuild Error Dialogs (VBA) (Suppress_Rebuild_Error_Dialogs_Example_VB.htm)
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
- `ISldWorks.GetUserPreferenceDoubleValue`
- `ISldWorks.GetUserPreferenceIntegerValue`
- `ISldWorks.GetUserPreferenceStringListValue`
- `ISldWorks.GetUserPreferenceStringValue`
- `ISldWorks.SetUserPreferenceDoubleValue`
- `ISldWorks.SetUserPreferenceIntegerValue`
- `ISldWorks.SetUserPreferenceStringListValue`
- `ISldWorks.SetUserPreferenceStringValue`
- `ISldWorks.SetUserPreferenceToggle`