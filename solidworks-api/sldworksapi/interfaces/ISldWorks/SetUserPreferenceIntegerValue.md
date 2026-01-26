---
type: method
interface: ISldWorks
member: SetUserPreferenceIntegerValue
returns: System.Boolean
parameters:
  -
    name: UserPreferenceValue
    type: System.Int32
    description: User preference as defined in swUserPreferenceIntegerValue_e
  -
    name: Value
    type: System.Int32
    description: Value of UserPreferenceValue
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
  - ISldWorks.SetUserPreferenceStringListValue
  - ISldWorks.SetUserPreferenceStringValue
  - ISldWorks.SetUserPreferenceToggle
keywords:
  - options
  - user
  - preferences
  - setuserpreferenceintegervalue
  - isldworks
  - sld
  - works
  - preference
  - integer
  - value
  - int32
  - boolean
  - force
  - rebuild
  - vba
  - import
  - models
  - solids
  - open
  - all
  - external
  - references
  - save
  - rollbacked
  - part
  - parasolid
  - file
  - vb
  - net
---

# ISldWorks.SetUserPreferenceIntegerValue

Sets system default user preference values.

## Signature

```csharp
System.Boolean SetUserPreferenceIntegerValue( 
   System.Int32
UserPreferenceValue
,
   System.Int32
Value
)
```
## Parameters

- `UserPreferenceValue` (System.Int32): User preference as defined in swUserPreferenceIntegerValue_e
- `Value` (System.Int32): Value of UserPreferenceValue

## Return Value

True if UserPreferenceValue is set, false if not

## Remarks

This method is intended for user preferences of type integer.
This method is equivalent to interactively setting system options in the SOLIDWORKS Design software.
See
System Options and Document Properties
for details.

## Examples

- Force Rebuild (VBA) (Force_Rebuild_Example_VB.htm)
- Import Models As Solids (VBA) (Import_Models_as_Solids_Example_VB.htm)
- Open All External References (VBA) (Open_All_External_References_Example_VB.htm)
- Save Rollbacked Part As Parasolid File (VBA) (Save_Roll_Backed_Part_as_Parasolid_File_Example_VB.htm)
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
- `ISldWorks.SetUserPreferenceStringListValue`
- `ISldWorks.SetUserPreferenceStringValue`
- `ISldWorks.SetUserPreferenceToggle`