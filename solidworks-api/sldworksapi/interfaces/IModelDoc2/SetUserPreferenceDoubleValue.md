---
type: method
interface: IModelDoc2
member: SetUserPreferenceDoubleValue
returns: System.Boolean
parameters:
  -
    name: UserPreferenceValue
    type: System.Int32
    description: User preference value as defined in swUserPreferenceDoubleValue_e
  -
    name: Value
    type: System.Double
    description: Numeric value to give to the user preference specified in UserPreferenceValue
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - ui
related: []
keywords:
  - setuserpreferencedoublevalue
  - imodeldoc2
  - model
  - doc2
  - user
  - preference
  - double
  - value
  - int32
  - boolean
  - material
  - density
  - vba
  - excel
  - cell
---

# IModelDoc2.SetUserPreferenceDoubleValue

Obsolete. Superseded by IModelDocExtension::SetUserPreferenceDouble.

## Signature

```csharp
System.Boolean SetUserPreferenceDoubleValue( 
   System.Int32
UserPreferenceValue
,
   System.Double
Value
)
```
## Parameters

- `UserPreferenceValue` (System.Int32): User preference value as defined in swUserPreferenceDoubleValue_e
- `Value` (System.Double): Numeric value to give to the user preference specified in UserPreferenceValue

## Return Value

True if the user preference is set successfully, false if not

## Remarks

This method is equivalent to interactively setting document properties in the SOLIDWORKS Design software. See
System Options and Document Properties
for details.

## Examples

- Get and Set Material Density (VBA) (Get_and_Set_Material_Density_Example_VB.htm)
- Get Excel Cell Value for Density (VBA) (Get_Excel_Cell_Value_for_Density_Example_VB.htm)