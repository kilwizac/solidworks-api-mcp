---
type: method
interface: IBody2
member: SetMaterialIdName2
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
related:
  - IBody2.GetMaterialIdName2
  - IBody2.GetMaterialUserName2
  - IBody2.SetMaterialProperty
keywords:
  - material
  - id
  - name
  - bodies
  - see
  - also
  - ibody2
  - setmaterialidname2
  - body2
  - name2
  - string
  - boolean
---

# IBody2.SetMaterialIdName2

Sets the material name for this body.

## Signature

```csharp
System.Boolean SetMaterialIdName2( 
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
- `IBody2.GetMaterialUserName2`
- `IBody2.SetMaterialProperty`