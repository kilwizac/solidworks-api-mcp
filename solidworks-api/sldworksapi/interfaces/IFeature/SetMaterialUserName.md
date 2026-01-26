---
type: method
interface: IFeature
member: SetMaterialUserName
returns: System.Boolean
parameters:
  -
    name: Name
    type: System.String
    description: Material user name property for this feature
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - ui
related:
  - IFeature.GetMaterialIdName
  - IFeature.GetMaterialUserName
  - IFeature.SetMaterialIdName
keywords:
  - material
  - user
  - name
  - setmaterialusername
  - ifeature
  - feature
  - string
  - boolean
---

# IFeature.SetMaterialUserName

Sets the material user name for this feature, which is visible to the user.

## Signature

```csharp
System.Boolean SetMaterialUserName( 
   System.String
Name
)
```
## Parameters

- `Name` (System.String): Material user name property for this feature

## Return Value

True if the material user name was set successfully, false if not

## See Also

- `IFeature.GetMaterialIdName`
- `IFeature.GetMaterialUserName`
- `IFeature.SetMaterialIdName`