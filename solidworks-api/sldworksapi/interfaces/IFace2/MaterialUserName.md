---
type: property
interface: IFace2
member: MaterialUserName
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
  - ui
related:
  - IFace2.MaterialIdName
  - IModelDoc2.MaterialUserName
  - IPartDoc.MaterialUserName
keywords:
  - material
  - user
  - name
  - materialusername
  - iface2
  - face2
  - string
readonly: null
---

# IFace2.MaterialUserName

Gets or sets the material name, which is visible to the user.

## Signature

```csharp
System.String MaterialUserName {get; set;}
```
## Parameters

None.

## Return Value

Material user name property on the face

## Remarks

This property is not supported for faces obtained from reference surface bodies.

## See Also

- `IFace2.MaterialIdName`
- `IModelDoc2.MaterialUserName`
- `IPartDoc.MaterialUserName`