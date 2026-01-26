---
type: property
interface: IBody2
member: MaterialPropertyValues2
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.Display3
  - IBody2.GetMaterialIdName2
  - IBody2.GetMaterialPropertyName
  - IBody2.GetMaterialUserName2
  - IBody2.HasMaterialPropertyValues
  - IBody2.IGetMaterialPropertyValuesForFace
  - IBody2.IMaterialPropertyValues2
  - IBody2.IRemoveMaterialProperty
  - IBody2.RemoveMaterialProperty
  - IBody2.SetMaterialIdName2
  - IBody2.SetMaterialProperty
  - IBody2.SetMaterialUserName2
  - IComponent2.MaterialPropertyValues
  - IFace2.MaterialPropertyValues
  - IModelDoc2.MaterialPropertyValues
  - IPartDoc.MaterialPropertyValues
keywords:
  - color
  - bodies
  - material
  - properties
  - see
  - also
  - ibody2
  - materialpropertyvalues2
  - body2
  - values2
  - object
  - values
  - vba
readonly: null
---

# IBody2.MaterialPropertyValues2

Gets or sets the material properties for a body other than the base body in the active configuration.

## Signature

```csharp
System.Object MaterialPropertyValues2 {get; set;}
```
## Parameters

None.

## Return Value

Array of doubles (see Remarks )

## Remarks

The material values include the face color (R,G,B values), reflectivity (ambient, diffuse, specular, shininess), transparency, and emission. Valid settings are from 0 to 1 for all values.
This property is intended to be used on bodies other than the base body and should follow a call to
IPartDoc::EnumRelatedBodies2
. The format of the parameters or return values is an array of 9 doubles as follows:
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

## Examples

- Get Material Property Values (VBA) (Get_Material_Property_Values_Example_VB.htm)

## See Also

- `IBody2.Display3`
- `IBody2.GetMaterialIdName2`
- `IBody2.GetMaterialPropertyName`
- `IBody2.GetMaterialUserName2`
- `IBody2.HasMaterialPropertyValues`
- `IBody2.IGetMaterialPropertyValuesForFace`
- `IBody2.IMaterialPropertyValues2`
- `IBody2.IRemoveMaterialProperty`
- `IBody2.RemoveMaterialProperty`
- `IBody2.SetMaterialIdName2`
- `IBody2.SetMaterialProperty`
- `IBody2.SetMaterialUserName2`
- `IComponent2.MaterialPropertyValues`
- `IFace2.MaterialPropertyValues`
- `IModelDoc2.MaterialPropertyValues`
- `IPartDoc.MaterialPropertyValues`