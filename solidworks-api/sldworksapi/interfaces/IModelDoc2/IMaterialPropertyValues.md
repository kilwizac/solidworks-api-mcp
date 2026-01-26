---
type: property
interface: IModelDoc2
member: IMaterialPropertyValues
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.MaterialIdName
  - IModelDoc2.MaterialPropertyValues
  - IModelDoc2.MaterialUserName
  - IModelDocExtension.GetMaterialPropertyValues
  - IModelDocExtension.IGetMaterialPropertyValues
  - IModelDocExtension.IRemoveMaterialProperty
  - IModelDocExtension.ISetMaterialPropertyValues
  - IModelDocExtension.RemoveMaterialProperty
  - IModelDocExtension.SetMaterialPropertyValues
keywords:
  - material
  - properties
  - imaterialpropertyvalues
  - imodeldoc2
  - model
  - doc2
  - values
  - double
readonly: null
---

# IModelDoc2.IMaterialPropertyValues

Gets or sets a material's properties in the active configuration.

## Signature

```csharp
System.Double IMaterialPropertyValues {get; set;}
```
## Parameters

None.

## Return Value

Array of 9 doubles describing the material's values (see Remarks )

## Remarks

The format of the return values is an array of doubles:
[
R, G, B, Ambient, Diffuse, Specular, Shininess, Transparency, Emission
]
To see a color change, you must:
Specify
R
,
G
, and
B
, each with a value between 0.0 and 1.0, inclusive. (These values are internally multiplied by 255.0 to determine the RGB color.)
Specify the reflectivity properties (
Diffuse
,
Specular
,
Shininess
(1.0 - Specular spread/Blurriness)), each with a value greater than 0.0 and less than or equal to 1.0.
Specify
Ambient
,
Transparency
and
Emission
, each with a value between 0.0 and 1.0, inclusive.
Refresh the graphics area after setting this property.

## See Also

- `IModelDoc2.MaterialIdName`
- `IModelDoc2.MaterialPropertyValues`
- `IModelDoc2.MaterialUserName`
- `IModelDocExtension.GetMaterialPropertyValues`
- `IModelDocExtension.IGetMaterialPropertyValues`
- `IModelDocExtension.IRemoveMaterialProperty`
- `IModelDocExtension.ISetMaterialPropertyValues`
- `IModelDocExtension.RemoveMaterialProperty`
- `IModelDocExtension.SetMaterialPropertyValues`