---
type: property
interface: IFace2
member: IMaterialPropertyValues
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.IMaterialPropertyValues2
  - IBody2.MaterialPropertyValues2
  - IComponent2.IMaterialPropertyValues
  - IComponent2.MaterialPropertyValues
  - IFace2.IRemoveMaterialProperty2
  - IFace2.ISetMaterialPropertyValues2
  - IFace2.MaterialPropertyValues
  - IFace2.RemoveMaterialProperty2
  - IFace2.SetMaterialPropertyValues2
  - IModelDoc2.IMaterialPropertyValues
  - IModelDoc2.MaterialPropertyValues
  - IPartDoc.IMaterialPropertyValues
  - IPartDoc.MaterialPropertyValues
keywords:
  - material
  - properties
  - face
  - see
  - also
  - iface2
  - faces
  - color
  - imaterialpropertyvalues
  - face2
  - values
  - double
readonly: null
---

# IFace2.IMaterialPropertyValues

Gets or sets the material properties for the selected face in the active configuration.

## Signature

```csharp
System.Double IMaterialPropertyValues {get; set;}
```
## Parameters

None.

## Return Value

Array of doubles describing the material values on this face (see Remarks )

## Remarks

The material values include the face color (R,G,B values), reflectivity (ambient, diffuse, specular, shininess), transparency and emission. All values can be from 0 to 1.
This method returns a NULL VARIANT (or an S_false HRESULT for COM implementations) if this face has not been explicitly modified from the material property values of the body. If you create a body and change the body color to red, then
IFace2::IGetMaterialPropertyValues2
and
IFace2::GetMaterialPropertyValues2
return a NULL array because you did not specifically change the values of the face.
The format of the parameters or return values is an array of doubles as follows:
[
R, G, B, Ambient, Diffuse, Specular, Shininess, Transparency, Emission
]
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
To reset the face to use the default part material properties, use
IModelDoc2::SelectedFaceProperties
.
This method does not support faces obtained from reference surface bodies.

## See Also

- `IBody2.IMaterialPropertyValues2`
- `IBody2.MaterialPropertyValues2`
- `IComponent2.IMaterialPropertyValues`
- `IComponent2.MaterialPropertyValues`
- `IFace2.IRemoveMaterialProperty2`
- `IFace2.ISetMaterialPropertyValues2`
- `IFace2.MaterialPropertyValues`
- `IFace2.RemoveMaterialProperty2`
- `IFace2.SetMaterialPropertyValues2`
- `IModelDoc2.IMaterialPropertyValues`
- `IModelDoc2.MaterialPropertyValues`
- `IPartDoc.IMaterialPropertyValues`
- `IPartDoc.MaterialPropertyValues`