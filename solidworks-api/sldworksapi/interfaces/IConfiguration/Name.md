---
type: property
interface: IConfiguration
member: Name
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IConfiguration.AlternateName
keywords:
  - name
  - configuration
  - iconfiguration
  - string
  - change
  - properties
  - vba
  - dimension
  - values
  - all
  - configurations
  - material
  - names
  - component
  - state
  - dimensions
  - mid
  - tolerance
  - traverse
  - hierarchy
  - id
  - active
  - current
  - drawing
  - sheet
  - vb
  - net
readonly: null
---

# IConfiguration.Name

Gets or sets the configuration name.

## Signature

```csharp
System.String Name {get; set;}
```
## Parameters

None.

## Return Value

Configuration name

## Remarks

The names of configurations should not contain any of the special characters reserved by SOLIDWORKS.

## Examples

- Change Configuration Properties (VBA) (Change_Configuration_Properties_Example_VB.htm)
- Get Dimension Values in All Configurations (VBA) (Get_Dimension_Values_in_All_Configurations_Example_VB.htm)
- Get Material Property Names (VBA) (Get_Material_Property_Names_Example_VB.htm)
- Set Component State (VBA) (Set_Component_State_Example_VB.htm)
- Set Dimensions to Mid-Tolerance (VBA) (Set_Dimensions_to_Mid-Tolerance_Example_VB.htm)
- Traverse Hierarchy of Configurations (VBA) (Traverse_Hierarchy_of_Configurations_Example_VB.htm)
- Get ID of Active Configuration or Current Drawing Sheet (VB.NET) (Get_ID_of_Active_Configuration_or_Current_Drawing_Sheet_Example_VBNET.htm)
- Get ID of Active Configuration or Current Drawing Sheet (C#) (Get_ID_of_Active_Configuration_or_Current_Drawing_Sheet_Example_CSharp.htm)

## See Also

- `IConfiguration.AlternateName`