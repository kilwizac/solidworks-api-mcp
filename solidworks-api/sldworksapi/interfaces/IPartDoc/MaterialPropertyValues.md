---
type: property
interface: IPartDoc
member: MaterialPropertyValues
returns: System.Object
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
  - IPartDoc.MaterialIdName
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
  - color
  - configurations
  - materialpropertyvalues
  - part
  - doc
  - values
  - object
readonly: null
---

# IPartDoc.MaterialPropertyValues

Gets or sets a material's properties in the active configuration.

## Signature

```csharp
System.Object MaterialPropertyValues {get; set;}
```
## Parameters

None.

## Return Value

Array of doubles describing the material's values (see Remarks )

## Remarks

The material values include the color (R,G,B values), reflectivity (ambient, diffuse, specular, shininess), transparency and emission.
The format of the parameters or return values is an array of doubles as follows:
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

- `IPartDoc.GetMaterialPropertyName2`
- `IPartDoc.GetMaterialVisualProperties`
- `IPartDoc.IMaterialPropertyValues`
- `IPartDoc.MaterialIdName`
- `IPartDoc.MaterialUserName`
- `IPartDoc.SetMaterialPropertyName2`
- `IPartDoc.SetMaterialVisualProperties`