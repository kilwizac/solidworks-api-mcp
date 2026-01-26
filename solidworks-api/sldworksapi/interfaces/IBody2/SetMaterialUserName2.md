---
type: method
interface: IBody2
member: SetMaterialUserName2
returns: System.Boolean
parameters:
  -
    name: Name
    type: System.String
    description: Material name
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
  - ui
related:
  - IBody2.GetMaterialIdName2
  - IBody2.GetMaterialPropertyName
  - IBody2.GetMaterialUserName2
  - IBody2.IGetMaterialPropertyValuesForFace
  - IBody2.IMaterialPropertyValues2
  - IBody2.IRemoveMaterialProperty
  - IBody2.MaterialPropertyValues2
  - IBody2.RemoveMaterialProperty
  - IBody2.SetMaterialIdName2
  - IBody2.SetMaterialProperty
keywords:
  - material
  - user
  - name
  - bodies
  - see
  - also
  - ibody2
  - setmaterialusername2
  - body2
  - name2
  - string
  - boolean
---

# IBody2.SetMaterialUserName2

Sets the material name for this body. This material name is visible to the user.

## Signature

```csharp
System.Boolean SetMaterialUserName2( 
   System.String
Name
)
```
## Parameters

- `Name` (System.String): Material name

## Return Value

True if the material name is set successfully, false if not

## See Also

- `IBody2.GetMaterialIdName2`
- `IBody2.GetMaterialPropertyName`
- `IBody2.GetMaterialUserName2`
- `IBody2.IGetMaterialPropertyValuesForFace`
- `IBody2.IMaterialPropertyValues2`
- `IBody2.IRemoveMaterialProperty`
- `IBody2.MaterialPropertyValues2`
- `IBody2.RemoveMaterialProperty`
- `IBody2.SetMaterialIdName2`
- `IBody2.SetMaterialProperty`