---
type: property
interface: IBody2
member: IMaterialPropertyValues2
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.GetMaterialIdName2
  - IBody2.GetMaterialPropertyName
  - IBody2.GetMaterialUserName2
  - IBody2.IGetMaterialPropertyValuesForFace
  - IBody2.IRemoveMaterialProperty
  - IBody2.MaterialPropertyValues2
  - IBody2.RemoveMaterialProperty
  - IBody2.SetMaterialIdName2
  - IBody2.SetMaterialProperty
  - IBody2.SetMaterialUserName2
  - IComponent2.IMaterialPropertyValues
  - IFace2.IMaterialPropertyValues
  - IModelDoc2.IMaterialPropertyValues
  - IPartDoc.IMaterialPropertyValues
keywords:
  - color
  - bodies
  - material
  - properties
  - see
  - also
  - ibody2
  - imaterialpropertyvalues2
  - body2
  - values2
  - double
readonly: null
---

# IBody2.IMaterialPropertyValues2

Gets or sets the material properties for a body other than the base body in the active configuration.

## Signature

```csharp
System.Double IMaterialPropertyValues2 {get; set;}
```
## Parameters

None.

## Return Value

in-process, unmanaged C++: Pointer to array of doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

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

## See Also

- `IBody2.GetMaterialIdName2`
- `IBody2.GetMaterialPropertyName`
- `IBody2.GetMaterialUserName2`
- `IBody2.IGetMaterialPropertyValuesForFace`
- `IBody2.IRemoveMaterialProperty`
- `IBody2.MaterialPropertyValues2`
- `IBody2.RemoveMaterialProperty`
- `IBody2.SetMaterialIdName2`
- `IBody2.SetMaterialProperty`
- `IBody2.SetMaterialUserName2`
- `IComponent2.IMaterialPropertyValues`
- `IFace2.IMaterialPropertyValues`
- `IModelDoc2.IMaterialPropertyValues`
- `IPartDoc.IMaterialPropertyValues`