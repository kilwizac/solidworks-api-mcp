---
type: method
interface: IModelDoc2
member: GetUserPreferenceIntegerValue
returns: System.Int32
parameters:
  -
    name: UserPreferenceValue
    type: System.Int32
    description: Value as defined in swUserPreferenceIntegerValue_e
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - ui
related: []
keywords:
  - getuserpreferenceintegervalue
  - imodeldoc2
  - model
  - doc2
  - user
  - preference
  - integer
  - value
  - int32
  - material
  - properties
  - vba
  - make
  - part
  - transparent
  - save
  - document
  - tiff
  - grid
  - lines
---

# IModelDoc2.GetUserPreferenceIntegerValue

Obsolete. Superseded by IModelDocExtension::GetUserPreferenceInteger.

## Signature

```csharp
System.Int32 GetUserPreferenceIntegerValue( 
   System.Int32
UserPreferenceValue
)
```
## Parameters

- `UserPreferenceValue` (System.Int32): Value as defined in swUserPreferenceIntegerValue_e

## Return Value

Numeric value associated with the specified UserPreferenceValue

## Remarks

This method is equivalent to interactively getting document properties in the SOLIDWORKS Design software. See
System Options and Document Properties
for details.

## Examples

- Get Material Properties (VBA) (Get_Material_Properties_Example_VB.htm)
- Make Part Transparent (VBA) (Make_Part_Transparent_Example_VB.htm)
- Save Document as TIFF (VBA) (Save_As_Tiff_Example_VB.htm)
- Set Grid Lines (VBA) (Set_Grid_Lines_Example_VB.htm)