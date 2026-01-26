---
type: method
interface: IModelDoc2
member: ISetUserPreferenceTextFormat
returns: System.Boolean
parameters:
  -
    name: UserPreferenceValue
    type: System.Int32
    description: User preference to change as defined in swUserPreferenceTextFormat_e
  -
    name: Value
    type: TextFormat
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
  - isetuserpreferencetextformat
  - imodeldoc2
  - model
  - doc2
  - user
  - preference
  - text
  - format
  - value
  - int32
  - boolean
---

# IModelDoc2.ISetUserPreferenceTextFormat

Obsolete. Superseded by IModelDocExtension::SetUserPreferenceTextFormat.

## Signature

```csharp
System.Boolean ISetUserPreferenceTextFormat( 
   System.Int32
UserPreferenceValue
,
   TextFormat
Value
)
```
## Parameters

- `UserPreferenceValue` (System.Int32): User preference to change as defined in swUserPreferenceTextFormat_e
- `Value` (TextFormat): Text format to which to assign the user preference specified in UserPreferenceValue

## Return Value

True if the setting is changed successfully, false if not

## Remarks

This method is
intended for setting detailing text formats.
equivalent to interactively setting document options in the SOLIDWORKS Design software.
See
System Options and Document Properties
for details.