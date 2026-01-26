---
type: method
interface: IModelDoc2
member: SelectedFaceProperties
returns: System.Boolean
parameters:
  -
    name: RgbColor
    type: System.Int32
    description: Face color (see Remarks )
  -
    name: Ambient
    type: System.Double
    description: 0.0 <= Face ambient light value <= 1.0
  -
    name: Diffuse
    type: System.Double
    description: 0.0 < Face diffuse value <= 1.0
  -
    name: Specular
    type: System.Double
    description: 0.0 < Face specular value <= 1.0
  -
    name: Shininess
    type: System.Double
    description: 0.0 < Face shininess value <= 1.0
  -
    name: Transparency
    type: System.Double
    description: 0.0 <= Face transparency value <= 1.0
  -
    name: Emission
    type: System.Double
    description: 0.0 <= Face emission value <= 1.0
  -
    name: UsePartProps
    type: System.Boolean
    description: True if the face inherits the Part properties, false if not
  -
    name: FaceName
    type: System.String
    description: Name of the face
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - geometry
  - selections
  - ui
related:
  - IFace2
  - IModelDoc2.EntityProperties
  - IModelDoc2.SelectedEdgeProperties
  - IModelDoc2.SelectedFeatureProperties
keywords:
  - face
  - see
  - also
  - iface2
  - properties
  - faces
  - selectedfaceproperties
  - imodeldoc2
  - model
  - doc2
  - selected
  - rgb
  - color
  - int32
  - ambient
  - double
  - diffuse
  - specular
  - shininess
  - transparency
  - emission
  - use
  - part
  - props
  - boolean
  - name
  - string
  - change
  - vba
---

# IModelDoc2.SelectedFaceProperties

Sets the material property values of the selected face.

## Signature

```csharp
System.Boolean SelectedFaceProperties( 
   System.Int32
RgbColor
,
   System.Double
Ambient
,
   System.Double
Diffuse
,
   System.Double
Specular
,
   System.Double
Shininess
,
   System.Double
Transparency
,
   System.Double
Emission
,
   System.Boolean
UsePartProps
,
   System.String
FaceName
)
```
## Parameters

- `RgbColor` (System.Int32): Face color (see Remarks )
- `Ambient` (System.Double): 0.0 <= Face ambient light value <= 1.0
- `Diffuse` (System.Double): 0.0 < Face diffuse value <= 1.0
- `Specular` (System.Double): 0.0 < Face specular value <= 1.0
- `Shininess` (System.Double): 0.0 < Face shininess value <= 1.0
- `Transparency` (System.Double): 0.0 <= Face transparency value <= 1.0
- `Emission` (System.Double): 0.0 <= Face emission value <= 1.0
- `UsePartProps` (System.Boolean): True if the face inherits the Part properties, false if not
- `FaceName` (System.String): Name of the face

## Return Value

True if face properties successfully changed, false if not

## Remarks

To see a color change, you must:
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
Refresh the graphics area after calling this method.
You can use the FaceName argument to set the name for this face.
If the face has a name, then this method does not change the name and returns false. This behavior is intended to prevent a program from renaming a face that is referenced in some other location.
For example, if an assembly contains a mate to a face on a part, then a name is automatically assigned to that face. If you change that name, then there is no guarantee that the mate will still be valid. Therefore, when using entity names, you should first check to see if the entity is already named, and, if so, use the existing name. If no name exists for the face, then you can assign the face a name.

## Examples

- Change Color of Face (VBA) (Change_Color_of_Face_Example_VB.htm)

## See Also

- `IFace2`
- `IModelDoc2.EntityProperties`
- `IModelDoc2.SelectedEdgeProperties`
- `IModelDoc2.SelectedFeatureProperties`