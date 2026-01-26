---
type: method
interface: IComponent2
member: SetMaterialIdName
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
  - assemblies
related:
  - IComponent2.GetMaterialIdName
  - IComponent2.GetMaterialUserName
  - IComponent2.SetMaterialUserName
keywords:
  - material
  - id
  - name
  - setmaterialidname
  - icomponent2
  - component2
  - string
  - boolean
---

# IComponent2.SetMaterialIdName

Sets the material name for this component.

## Signature

```csharp
System.Boolean SetMaterialIdName( 
   System.String
Name
)
```
## Parameters

- `Name` (System.String): Material name

## Return Value

True if the material name was set, false if not

## See Also

- `IComponent2.GetMaterialIdName`
- `IComponent2.GetMaterialUserName`
- `IComponent2.SetMaterialUserName`