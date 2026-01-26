---
type: method
interface: IModelDoc2
member: GetUserPreferenceDoubleValue
returns: System.Double
parameters:
  -
    name: UserPreferenceValue
    type: System.Int32
    description: Value as defined in swUserPreferenceDoubleValue_e
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - ui
related: []
keywords:
  - getuserpreferencedoublevalue
  - imodeldoc2
  - model
  - doc2
  - user
  - preference
  - double
  - value
  - int32
  - material
  - density
  - vba
  - mass
  - properties
  - assembly
  - component
---

# IModelDoc2.GetUserPreferenceDoubleValue

Obsolete. Superseded by IModelDocExtension::GetUserPreferenceDouble.

## Signature

```csharp
System.Double GetUserPreferenceDoubleValue( 
   System.Int32
UserPreferenceValue
)
```
## Parameters

- `UserPreferenceValue` (System.Int32): Value as defined in swUserPreferenceDoubleValue_e

## Return Value

Numeric value of the user preference specified in UserPreferenceValue

## Remarks

This method is equivalent to interactively getting document properties in the SOLIDWORKS Design software. See
System Options and Document Properties
for details.
If you want to retrieve the current, minimum, and maximum values for a document user preference, use
IModelDoc2::GetUserPreferenceDoubleValueRange
. Be sure to read that method's
Remarks
section because its implementation is limited.

## Examples

- Get and Set Material Density (VBA) (Get_and_Set_Material_Density_Example_VB.htm)
- Get Mass Properties of Assembly Component (VBA) (Get_Mass_Properties_of_Assembly_Component_Example_VB.htm)