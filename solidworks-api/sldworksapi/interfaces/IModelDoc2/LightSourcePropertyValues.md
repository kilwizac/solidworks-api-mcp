---
type: property
interface: IModelDoc2
member: LightSourcePropertyValues
returns: System.Object
parameters:
  -
    name: ID
    type: System.Int32
    description: Light source ID
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.AddLightSource
  - IModelDoc2.AddLightSourceExtProperty
  - IModelDoc2.DeleteLightSource
  - IModelDoc2.GetLightSourceExtProperty
  - IModelDoc2.GetLightSourceIdFromName
  - IModelDoc2.GetLightSourceName
  - IModelDoc2.ILightSourcePropertyValues
  - IModelDoc2.LightSourceUserName
  - IModelDoc2.ResetLightSourceExtProperty
  - IModelDoc2.SetLightSourceName
  - IModelDoc2.SetLightSourcePropertyValuesVB
  - IModelDocExtension.GetSunLightSourcePropertyValues
  - IModelDocExtension.SetSunLightSourcePropertyValues
keywords:
  - lighting
  - source
  - properties
  - lightsourcepropertyvalues
  - imodeldoc2
  - model
  - doc2
  - light
  - values
  - id
  - int32
  - object
  - redirect
  - spotlight
  - vba
  - turn
  - lights
readonly: null
---

# IModelDoc2.LightSourcePropertyValues

Gets and sets the light source property values.

## Signature

```csharp
System.Object LightSourcePropertyValues( 
   System.Int32
ID
) {get; set;}
```
## Parameters

- `ID` (System.Int32): Light source ID

## Return Value

Array of 19 doubles containing the light source properties (see Remarks )

## Remarks

The light source ID ranges from 0 to
n
, where
n
= (the total number of light sources - 1). To get the total number of light sources, use
IModelDoc2::GetLightSourceCount
.
The return values for this property is the following array of 19 doubles:
[
type, Intensity, Color[3], Position[3], Direction[3], coneAngle, falloff[3], Ambient, Specular, isDisabled, SpotExponent
]
where:
type
=  an integer packed into a double that represents the light source type where valid types are taken from openGL definitions (LIGHT_EYE, LIGHT_AMBIENT, LIGHT_SPOT, LIGHT_POINT, LIGHT_DISTANT)
Intensity
= Light-source intensity (diffuseness) where values range from 0 to 1.
Color[3] =
Light-source color in the form of an array of 3 doubles (R, G, B) where values range from 0 to 1.
Position[3] =
Light-source position for spot lights in the form of an array of 3 doubles (X, Y, Z) in model space.
Direction[3] =
Light-source direction in the form of an array of 3 doubles (i, j, k)
coneAngle
= Light-source cone half angle in degrees where valid values are from 0 to 90 and 180.
falloff[3] =
Light-source falloff in the form of an array of 3 doubles (Kc, Kl, Kq). These values result in changes in light intensity as the distance between the light position and the vertex change.
NOTE:
The falloff[3] values are not supported in SOLIDWORKS 2011 and later.
The result is driven by the following equation:
[ 1 / (Kc + D*Kl + D*D*Kq ) ]
where:
D =
the distance.between the light's position and the vertex
Kc = constant attenuation
Kl = linear attenuation
Kq = quadratic attenuation
Ambient =
light-source ambient Intensity
Specular =
light-source specular Intensity
isDisabled
= an integer packed into a double. True means that the light is disabled and false means the light is not disabled.
SpotExponent =
spot exponent
NOTE:
The SpotExponent value is not supported in SOLIDWORKS 2011 and later.

## Examples

- Redirect Spotlight (VBA) (Redirect_Spotlight_Example_VB.htm)
- Turn Lights On (VBA) (Turn_Lights_On_Example_VB.htm)

## See Also

- `IModelDoc2.AddLightSource`
- `IModelDoc2.AddLightSourceExtProperty`
- `IModelDoc2.DeleteLightSource`
- `IModelDoc2.GetLightSourceExtProperty`
- `IModelDoc2.GetLightSourceIdFromName`
- `IModelDoc2.GetLightSourceName`
- `IModelDoc2.ILightSourcePropertyValues`
- `IModelDoc2.LightSourceUserName`
- `IModelDoc2.ResetLightSourceExtProperty`
- `IModelDoc2.SetLightSourceName`
- `IModelDoc2.SetLightSourcePropertyValuesVB`
- `IModelDocExtension.GetSunLightSourcePropertyValues`
- `IModelDocExtension.SetSunLightSourcePropertyValues`