---
type: property
interface: IPartDoc
member: MaterialIdName
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - parts
  - ui
related:
  - IPartDoc.GetMaterialPropertyName2
  - IPartDoc.GetMaterialVisualProperties
  - IPartDoc.IMaterialPropertyValues
  - IPartDoc.MaterialPropertyValues
  - IPartDoc.MaterialUserName
  - IPartDoc.SetMaterialPropertyName2
  - IPartDoc.SetMaterialVisualProperties
keywords:
  - material
  - properties
  - parts
  - see
  - also
  - ipartdoc
  - materials
  - id
  - materialidname
  - part
  - doc
  - name
  - string
  - names
  - vba
readonly: null
---

# IPartDoc.MaterialIdName

Gets or sets the material name.

## Signature

```csharp
System.String MaterialIdName {get; set;}
```
## Parameters

None.

## Return Value

Material name (see Remarks )

## Remarks

This property returns a string that contains three pieces of information separated by a pipe "|":
Database name
Material name
Database ID of material
Example:
MY MATERIALS|1.0038 (S235JR)|277

## Examples

- Get Material Property Names (VBA) (Get_Material_Property_Names_Example_VB.htm)
- Set Material Property Name (VBA) (Set_Material_Property_Name_Example_VB.htm)

## See Also

- `IPartDoc.GetMaterialPropertyName2`
- `IPartDoc.GetMaterialVisualProperties`
- `IPartDoc.IMaterialPropertyValues`
- `IPartDoc.MaterialPropertyValues`
- `IPartDoc.MaterialUserName`
- `IPartDoc.SetMaterialPropertyName2`
- `IPartDoc.SetMaterialVisualProperties`