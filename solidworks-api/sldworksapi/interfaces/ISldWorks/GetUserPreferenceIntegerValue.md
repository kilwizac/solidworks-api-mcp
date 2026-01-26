---
type: method
interface: ISldWorks
member: GetUserPreferenceIntegerValue
returns: System.Int32
parameters:
  -
    name: UserPreferenceValue
    type: System.Int32
    description: User preference as defined in swUserPreferenceIntegerValue_e
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
  - ISldWorks.GetUserPreferenceStringListValue
  - ISldWorks.GetUserPreferenceStringValue
  - ISldWorks.GetUserPreferenceToggle
  - ISldWorks.SetUserPreferenceDoubleValue
  - ISldWorks.SetUserPreferenceIntegerValue
  - ISldWorks.SetUserPreferenceStringListValue
  - ISldWorks.SetUserPreferenceStringValue
  - ISldWorks.SetUserPreferenceToggle
keywords:
  - options
  - user
  - preferences
  - getuserpreferenceintegervalue
  - isldworks
  - sld
  - works
  - preference
  - integer
  - value
  - int32
  - dxf
  - settings
  - vba
  - import
  - models
  - solids
  - open
  - all
  - external
  - references
  - save
  - drawing
  - sheets
  - rollbacked
  - part
  - parasolid
  - file
  - vb
  - net
---

# ISldWorks.GetUserPreferenceIntegerValue

Gets system default user preference values.

## Signature

```csharp
System.Int32 GetUserPreferenceIntegerValue( 
   System.Int32
UserPreferenceValue
)
```
## Parameters

- `UserPreferenceValue` (System.Int32): User preference as defined in swUserPreferenceIntegerValue_e

## Return Value

Value of UserPreferenceValue

## Remarks

This method is intended for user preferences of type integer and is equivalent to interactively getting system options in the SOLIDWORKS Design software. See
System Options and Document Properties
for details.

## Examples

- Get DXF USer Preference Settings (VBA) (Get_DXF_User_Preference_Settings_Example_VB.htm)
- Import Models as Solids (VBA) (Import_Models_as_Solids_Example_VB.htm)
- Open All External References (VBA) (Open_All_External_References_Example_VB.htm)
- Save Drawing as DXF (VBA) (Save_Drawing_as_DXF_Example_VB.htm)
- Save Drawing Sheets as DXF (VBA) (Save_Drawing_Sheets_as_DXF_Example_VB.htm)
- Save Rollbacked Part as Parasolid File (VBA) (Save_Roll_Backed_Part_as_Parasolid_File_Example_VB.htm)
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
- `ISldWorks.GetUserPreferenceStringListValue`
- `ISldWorks.GetUserPreferenceStringValue`
- `ISldWorks.GetUserPreferenceToggle`
- `ISldWorks.SetUserPreferenceDoubleValue`
- `ISldWorks.SetUserPreferenceIntegerValue`
- `ISldWorks.SetUserPreferenceStringListValue`
- `ISldWorks.SetUserPreferenceStringValue`
- `ISldWorks.SetUserPreferenceToggle`