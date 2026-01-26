---
type: method
interface: IModelDoc2
member: SetUserPreferenceToggle
returns: System.Boolean
parameters:
  -
    name: UserPreferenceValue
    type: System.Int32
    description: Value to toggle as defined in swUserPreferenceToggle_e
  -
    name: OnFlag
    type: System.Boolean
    description: True to toggle the value on, false to toggle the value off
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - ui
related: []
keywords:
  - setuserpreferencetoggle
  - imodeldoc2
  - model
  - doc2
  - user
  - preference
  - toggle
  - value
  - int32
  - flag
  - boolean
  - hide
  - show
  - all
  - types
  - vba
  - ignore
  - feature
  - colors
---

# IModelDoc2.SetUserPreferenceToggle

Obsolete. Superseded by IModelDocExtension::SetUserPreferenceToggle.

## Signature

```csharp
System.Boolean SetUserPreferenceToggle( 
   System.Int32
UserPreferenceValue
,
   System.Boolean
OnFlag
)
```
## Parameters

- `UserPreferenceValue` (System.Int32): Value to toggle as defined in swUserPreferenceToggle_e
- `OnFlag` (System.Boolean): True to toggle the value on, false to toggle the value off

## Return Value

True if the toggle is successful, false if not

## Remarks

This method is equivalent to interactively setting document properties in the SOLIDWORKS Design software. See
System Options and Document Properties
for details.

## Examples

- Hide or Show All Types (VBA) (Hide_or_Show_All_Types_Example_VB.htm)
- Ignore Feature Colors (VBA) (Ignore_Feature_Colors_Example_VB.htm)