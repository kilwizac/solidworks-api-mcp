---
type: method
interface: IModelDoc2
member: SetUserPreferenceIntegerValue
returns: System.Boolean
parameters:
  -
    name: UserPreferenceValue
    type: System.Int32
    description: User preference value as defined in swUserPreferenceIntegerValue_e
  -
    name: Value
    type: System.Int32
    description: Numeric value you give to the user preference specified in UserPreferenceValue
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - ui
related: []
keywords:
  - setuserpreferenceintegervalue
  - imodeldoc2
  - model
  - doc2
  - user
  - preference
  - integer
  - value
  - int32
  - boolean
  - grid
  - lines
  - vba
---

# IModelDoc2.SetUserPreferenceIntegerValue

Obsolete. Superseded by IModelDocExtension::SetUserPreferenceInteger.

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

- `UserPreferenceValue` (System.Int32): User preference value as defined in swUserPreferenceIntegerValue_e
- `Value` (System.Int32): Numeric value you give to the user preference specified in UserPreferenceValue

## Return Value

True if the setting is changed successfully, false if not

## Remarks

This method is equivalent to interactively setting document properties in the SOLIDWORKS Design software. See
System Options and Document Properties
for details.

## Examples

- Set Grid Lines (VBA) (Set_Grid_Lines_Example_VB.htm)