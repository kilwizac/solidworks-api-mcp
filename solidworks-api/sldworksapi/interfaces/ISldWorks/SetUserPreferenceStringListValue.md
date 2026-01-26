---
type: method
interface: ISldWorks
member: SetUserPreferenceStringListValue
returns: void
parameters:
  -
    name: UserPreference
    type: System.Int32
    description: User preference as defined in swUserPreferenceStringValue_e
  -
    name: Value
    type: System.String
    description: Value of U serPreference
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
  - ISldWorks.SetUserPreferenceStringValue
  - ISldWorks.SetUserPreferenceToggle
keywords:
  - options
  - user
  - preferences
  - setuserpreferencestringlistvalue
  - isldworks
  - sld
  - works
  - preference
  - string
  - list
  - value
  - int32
  - void
---

# ISldWorks.SetUserPreferenceStringListValue

Sets the name of the DXF mapping files.

## Signature

```csharp
void SetUserPreferenceStringListValue( 
   System.Int32
UserPreference
,
   System.String
Value
)
```
## Parameters

- `UserPreference` (System.Int32): User preference as defined in swUserPreferenceStringValue_e
- `Value` (System.String): Value of U serPreference

## Return Value

Unknown.

## Remarks

Multiple strings in the value argument must be separated by new line characters (vbNewLine" or "VbLf in Visual Basic, \n in Visual C or Visual C++).
This method is equivalent to interactively setting system options in the SOLIDWORKS Design software.
See
System Options and Document Properties
for details.

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
- `ISldWorks.SetUserPreferenceStringValue`
- `ISldWorks.SetUserPreferenceToggle`