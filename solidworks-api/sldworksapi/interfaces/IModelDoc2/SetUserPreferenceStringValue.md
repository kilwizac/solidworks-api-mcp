---
type: method
interface: IModelDoc2
member: SetUserPreferenceStringValue
returns: System.Boolean
parameters:
  -
    name: UserPreference
    type: System.Int32
    description: User preference value as defined in swUserPreferenceStringValue_e
  -
    name: Value
    type: System.String
    description: Value of the user preference specified in UserPreference
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - ui
related: []
keywords:
  - setuserpreferencestringvalue
  - imodeldoc2
  - model
  - doc2
  - user
  - preference
  - string
  - value
  - int32
  - boolean
---

# IModelDoc2.SetUserPreferenceStringValue

Obsolete. Superseded by IModelDocExtension::SetUserPreferenceString.

## Signature

```csharp
System.Boolean SetUserPreferenceStringValue( 
   System.Int32
UserPreference
,
   System.String
Value
)
```
## Parameters

- `UserPreference` (System.Int32): User preference value as defined in swUserPreferenceStringValue_e
- `Value` (System.String): Value of the user preference specified in UserPreference

## Return Value

True if user preference value is changed, false if not

## Remarks

This method is equivalent to interactively setting document properties in the SOLIDWORKS Design software. See
System Options and Document Properties
for details.