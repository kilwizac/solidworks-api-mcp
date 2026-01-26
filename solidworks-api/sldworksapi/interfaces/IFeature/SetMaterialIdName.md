---
type: method
interface: IFeature
member: SetMaterialIdName
returns: System.Boolean
parameters:
  -
    name: Name
    type: System.String
    description: Material name for this feature
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeature.GetMaterialIdName
  - IFeature.GetMaterialUserName
  - IFeature.SetMaterialUserName
keywords:
  - material
  - id
  - name
  - setmaterialidname
  - ifeature
  - feature
  - string
  - boolean
---

# IFeature.SetMaterialIdName

Sets the material name for this feature.

## Signature

```csharp
System.Boolean SetMaterialIdName( 
   System.String
Name
)
```
## Parameters

- `Name` (System.String): Material name for this feature

## Return Value

True if the material name was set successfully, false if not

## See Also

- `IFeature.GetMaterialIdName`
- `IFeature.GetMaterialUserName`
- `IFeature.SetMaterialUserName`