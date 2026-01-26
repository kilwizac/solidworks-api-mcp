---
type: method
interface: ISldWorks
member: SetUserPreferenceToggle
returns: void
parameters:
  -
    name: UserPreferenceValue
    type: System.Int32
    description: User preference as defined in swUserPreferenceToggle_e
  -
    name: OnFlag
    type: System.Boolean
    description: True to toggle UserPreferenceValue on, false to toggle UserPreferenceValue off
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
  - ISldWorks.GetUserPreferenceToggle
  - ISldWorks.SetUserPreferenceDoubleValue
  - ISldWorks.SetUserPreferenceIntegerValue
  - ISldWorks.SetUserPreferenceStringListValue
  - ISldWorks.SetUserPreferenceStringValue
keywords:
  - options
  - user
  - preferences
  - setuserpreferencetoggle
  - isldworks
  - sld
  - works
  - preference
  - toggle
  - value
  - int32
  - flag
  - boolean
  - void
  - display
  - shadows
  - shaded
  - mode
  - change
  - labels
  - solidworks
  - triad
  - vba
  - rename
  - assembly
  - components
  - save
  - drawing
  - sheets
  - dxf
  - suppress
  - rebuild
  - error
  - dialogs
  - vb
  - net
---

# ISldWorks.SetUserPreferenceToggle

Sets system default user preference values.

## Signature

```csharp
void SetUserPreferenceToggle( 
   System.Int32
UserPreferenceValue
,
   System.Boolean
OnFlag
)
```
## Parameters

- `UserPreferenceValue` (System.Int32): User preference as defined in swUserPreferenceToggle_e
- `OnFlag` (System.Boolean): True to toggle UserPreferenceValue on, false to toggle UserPreferenceValue off

## Return Value

Unknown.

## Remarks

This method is intended for user preferences that can be toggled.
This method is equivalent to interactively setting system options in the SOLIDWORKS Design software.
To use this method, choose one of the available items from the swUserPreferenceToggle_e enumeration
.
Pass true to turn the item on, and false to turn the item off.
For example, the following command forces the SOLIDWORKS Design application to use the Search Folders when loading files:
swapp.SetUserPreferenceToggle swUseFolderSearchRules, True
See
System Options and Document Properties
for details.

## Examples

- Display Shadows in Shaded Mode (C++) (Display_Shadows_in_Shaded_Mode_Example_CPlusPlus_COM.htm)
- Change Labels of SOLIDWORKS Triad (VBA) (Change_Labels_of_SOLIDWORKS_Triad_Example_VB.htm)
- Rename Assembly Components (VBA) (Rename_Assembly_Components_Example_VB.htm)
- Save Drawing Sheets As DXF (VBA) (Save_Drawing_Sheets_as_DXF_Example_VB.htm)
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
- `ISldWorks.GetUserPreferenceToggle`
- `ISldWorks.SetUserPreferenceDoubleValue`
- `ISldWorks.SetUserPreferenceIntegerValue`
- `ISldWorks.SetUserPreferenceStringListValue`
- `ISldWorks.SetUserPreferenceStringValue`