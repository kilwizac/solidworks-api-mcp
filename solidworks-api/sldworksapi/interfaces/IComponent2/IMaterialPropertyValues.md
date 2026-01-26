---
type: property
interface: IComponent2
member: IMaterialPropertyValues
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IComponent2.GetMaterialPropertyValues2
  - IComponent2.IGetMaterialPropertyValues2
  - IComponent2.IRemoveMaterialProperty2
  - IComponent2.ISetMaterialPropertyValues2
  - IComponent2.RemoveMaterialProperty2
  - IComponent2.SetMaterialPropertyValues2
  - IFace2.MaterialPropertyValues
keywords:
  - components
  - see
  - also
  - icomponent2
  - properties
  - material
  - color
  - imaterialpropertyvalues
  - component2
  - values
  - double
readonly: null
---

# IComponent2.IMaterialPropertyValues

Gets or sets the material properties for the selected component in the active configuration.

## Signature

```csharp
System.Double IMaterialPropertyValues {get; set;}
```
## Parameters

None.

## Return Value

Array of doubles describing the material's values on this component (see Remarks )

## Remarks

The material values include the component color (R,G,B values), reflectivity (ambient, diffuse, specular, shininess), transparency, and emission. Valid values are from 0 to 1 for all values.
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
This method returns an S_false HRESULT for COM implementations if the user has not explicitly modified this component from the material property values of the underlying part document. For example, the user can right-click a component in the FeatureManager design tree and select
Component Properties
to change the color. If the user has not done this, then this method returns NULL color information.
The default component color can be obtained from the component's
IModelDoc2
object (
IComponent2::IGetModelDoc
) using IModelDoc2::MaterialPropertyValues.
You might also want to check for specific face colors using
IFace2::IMaterialPropertyValues
.

## See Also

- `IComponent2.GetMaterialPropertyValues2`
- `IComponent2.IGetMaterialPropertyValues2`
- `IComponent2.IRemoveMaterialProperty2`
- `IComponent2.ISetMaterialPropertyValues2`
- `IComponent2.RemoveMaterialProperty2`
- `IComponent2.SetMaterialPropertyValues2`
- `IFace2.MaterialPropertyValues`