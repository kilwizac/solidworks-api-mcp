---
type: method
interface: IModelDoc2
member: SetUserPreferenceTextFormat
returns: System.Boolean
parameters:
  -
    name: UserPreferenceValue
    type: System.Int32
    description: User preference to change as defined in swUserPreferenceTextFormat_e
  -
    name: Value
    type: System.Object
    description: Text format to which to assign the user preference specified in UserPreferenceValue
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - ui
related: []
keywords:
  - setuserpreferencetextformat
  - imodeldoc2
  - model
  - doc2
  - user
  - preference
  - text
  - format
  - value
  - int32
  - object
  - boolean
---

# IModelDoc2.SetUserPreferenceTextFormat

Obsolete. Superseded by IModelDocExtension::SetUserPreferenceTextFormat.

## Signature

```csharp
System.Boolean SetUserPreferenceTextFormat( 
   System.Int32
UserPreferenceValue
,
   System.Object
Value
)
```
## Parameters

- `UserPreferenceValue` (System.Int32): User preference to change as defined in swUserPreferenceTextFormat_e
- `Value` (System.Object): Text format to which to assign the user preference specified in UserPreferenceValue

## Return Value

True if the setting is changed successfully, false if not

## Remarks

This method is equivalent to interactively setting document properties in the SOLIDWORKS Design software. See
System Options and Document Properties
for details.