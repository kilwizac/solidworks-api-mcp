---
type: method
interface: IModelDoc2
member: SelectedFeatureProperties
returns: System.Boolean
parameters:
  -
    name: RgbColor
    type: System.Int32
    description: Color of feature (see Remarks )
  -
    name: Ambient
    type: System.Double
    description: 0.0 <= Ambient value <= 1.0
  -
    name: Diffuse
    type: System.Double
    description: 0.0 < Diffuse value <= 1.0
  -
    name: Specular
    type: System.Double
    description: 0.0 < Specular value <= 1.0
  -
    name: Shininess
    type: System.Double
    description: 0.0 < Shininess value <= 1.0
  -
    name: Transparency
    type: System.Double
    description: 0.0 <= Transparency value <= 1.0
  -
    name: Emission
    type: System.Double
    description: 0.0 <= Emission value <= 1.0
  -
    name: UsePartProps
    type: System.Boolean
    description: True if the feature inherits the properties from the part, false if not
  -
    name: Suppressed
    type: System.Boolean
    description: True if the feature is suppressed, false if not
  -
    name: FeatureName
    type: System.String
    description: Name of the feature
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - features
  - selections
  - ui
related:
  - IFeature
keywords:
  - properties
  - features
  - feature
  - see
  - also
  - ifeature
  - selectedfeatureproperties
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
  - suppressed
  - name
  - string
  - create
  - thicken
  - vba
---

# IModelDoc2.SelectedFeatureProperties

Sets the property values of the selected feature.

## Signature

```csharp
System.Boolean SelectedFeatureProperties( 
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
   System.Boolean
Suppressed
,
   System.String
FeatureName
)
```
## Parameters

- `RgbColor` (System.Int32): Color of feature (see Remarks )
- `Ambient` (System.Double): 0.0 <= Ambient value <= 1.0
- `Diffuse` (System.Double): 0.0 < Diffuse value <= 1.0
- `Specular` (System.Double): 0.0 < Specular value <= 1.0
- `Shininess` (System.Double): 0.0 < Shininess value <= 1.0
- `Transparency` (System.Double): 0.0 <= Transparency value <= 1.0
- `Emission` (System.Double): 0.0 <= Emission value <= 1.0
- `UsePartProps` (System.Boolean): True if the feature inherits the properties from the part, false if not
- `Suppressed` (System.Boolean): True if the feature is suppressed, false if not
- `FeatureName` (System.String): Name of the feature

## Return Value

True if feature's properties are successfully set, false if not

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
This method is different from
IModelDodc2::SelectedEdgeProperties
and
IModelDoc2::SelectedFaceProperties
in that it allows you to change the name of this feature. All features have names; however, a face or edge typically has a name only if it is being referenced. Because it is dangerous to change the name of a referenced object, you cannot programmatically change the names of faces or edges. See
IFeature::Name
and
IPartDoc::SetEntityName
for additional information.
This method requires that the feature to be selected. To select the feature programmatically, you can use
IModelDocExtension::SelectByID2
and pass in the feature name and the appropriate object type (for example, "BODYFEATURE", "ATTRIBUTE", "PLANE", "SKETCH", and so on) and the selection coordinates 0,0,0. To determine the feature name and object type, use the
IFeature::Name
and
IFeature::GetTypeName
methods, respectively.

## Examples

- Create Thicken Feature (VBA) (Create_Thicken_Feature_Example_VB.htm)

## See Also

- `IFeature`