---
type: method
interface: IComponent2
member: SetMaterialUserName
returns: System.Boolean
parameters:
  -
    name: Name
    type: System.String
    description: Material user name property
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - ui
related:
  - IComponent2.GetMaterialUserName
keywords:
  - material
  - user
  - name
  - setmaterialusername
  - icomponent2
  - component2
  - string
  - boolean
---

# IComponent2.SetMaterialUserName

Sets the material user name for this component.

## Signature

```csharp
System.Boolean SetMaterialUserName( 
   System.String
Name
)
```
## Parameters

- `Name` (System.String): Material user name property

## Return Value

True if the material user name was set, false if not

## Remarks

This material name is visible to the user.

## See Also

- `IComponent2.GetMaterialUserName`