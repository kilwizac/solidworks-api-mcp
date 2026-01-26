---
type: property
interface: IModelDoc2
member: SetLightSourcePropertyValuesVB
returns: System.Boolean
parameters:
  -
    name: IdName
    type: System.String
    description: Light source ID name
  -
    name: LType
    type: System.Int32
    description: Light source type; valid types are taken from openGL definitions (LIGHT_EYE, LIGHT_AMBIENT, LIGHT_SPOT, LIGHT_POINT, LIGHT_DISTANT)
  -
    name: Diff
    type: System.Double
    description: Light source diffuseness where values range from 0 to 1
  -
    name: RgbColor
    type: System.Int32
    description: Color value
  -
    name: Dist
    type: System.Double
    description: Distance between the light source position and the vertex
  -
    name: DirX
    type: System.Double
    description: X unit vector value describing the lights position
  -
    name: DirY
    type: System.Double
    description: Y unit vector value describing the lights po
  -
    name: DirZ
    type: System.Double
    description: Z unit vector value describing the lights position
  -
    name: SpotDirX
    type: System.Double
    description: Spot X direction
  -
    name: SpotDirY
    type: System.Double
    description: Spot Y direction
  -
    name: SpotDirZ
    type: System.Double
    description: Spot Z direction
  -
    name: SpotAngle
    type: System.Double
    description: Spot angle
  -
    name: FallOff0
    type: System.Double
    description: Light source falloff - constant attenuation NOTE: This parameter is not supported in SOLIDWORKS 2011 and later.
  -
    name: FallOff1
    type: System.Double
    description: Light source falloff - linear attenuation NOTE: This parameter is not supported in SOLIDWORKS 2011 and later.
  -
    name: FallOff2
    type: System.Double
    description: Light source falloff - quadratic attenuation NOTE: This parameter is not supported in SOLIDWORKS 2011 and later.
  -
    name: Ambient
    type: System.Double
    description: Light source ambient intensity
  -
    name: Specular
    type: System.Double
    description: Light source specular intensity
  -
    name: SpotExponent
    type: System.Double
    description: Spot exponent NOTE: This parameter is not supported in SOLIDWORKS 2011 and later.
  -
    name: BDisable
    type: System.Boolean
    description: Light source disabled
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
  - IModelDoc2.AddLightToScene
  - IModelDoc2.AddSceneExtProperty
  - IModelDoc2.DeleteLightSource
  - IModelDoc2.GetLightSourceCount
  - IModelDoc2.GetLightSourceExtProperty
  - IModelDoc2.GetLightSourceIdFromName
  - IModelDoc2.GetLightSourceName
  - IModelDoc2.Lights
  - IModelDoc2.ResetLightSourceExtProperty
  - IModelDoc2.ResetSceneExtProperty
  - IModelDoc2.SetLightSourceName
keywords:
  - lighting
  - properties
  - setlightsourcepropertyvaluesvb
  - imodeldoc2
  - model
  - doc2
  - light
  - source
  - values
  - vb
  - id
  - name
  - string
  - type
  - int32
  - diff
  - double
  - rgb
  - color
  - dist
  - dir
  - spot
  - angle
  - fall
  - off0
  - off1
  - off2
  - ambient
  - specular
  - exponent
  - disable
  - boolean
  - add
  - spotlight
  - feature
  - net
  - vba
readonly: null
---

# IModelDoc2.SetLightSourcePropertyValuesVB

Sets the light source property values.

## Signature

```csharp
System.Boolean SetLightSourcePropertyValuesVB( 
   System.String
IdName
,
   System.Int32
LType
,
   System.Double
Diff
,
   System.Int32
RgbColor
,
   System.Double
Dist
,
   System.Double
DirX
,
   System.Double
DirY
,
   System.Double
DirZ
,
   System.Double
SpotDirX
,
   System.Double
SpotDirY
,
   System.Double
SpotDirZ
,
   System.Double
SpotAngle
,
   System.Double
FallOff0
,
   System.Double
FallOff1
,
   System.Double
FallOff2
,
   System.Double
Ambient
,
   System.Double
Specular
,
   System.Double
SpotExponent
,
   System.Boolean
BDisable
)
```
## Parameters

- `IdName` (System.String): Light source ID name
- `LType` (System.Int32): Light source type; valid types are taken from openGL definitions (LIGHT_EYE, LIGHT_AMBIENT, LIGHT_SPOT, LIGHT_POINT, LIGHT_DISTANT)
- `Diff` (System.Double): Light source diffuseness where values range from 0 to 1
- `RgbColor` (System.Int32): Color value
- `Dist` (System.Double): Distance between the light source position and the vertex
- `DirX` (System.Double): X unit vector value describing the lights position
- `DirY` (System.Double): Y unit vector value describing the lights po
- `DirZ` (System.Double): Z unit vector value describing the lights position
- `SpotDirX` (System.Double): Spot X direction
- `SpotDirY` (System.Double): Spot Y direction
- `SpotDirZ` (System.Double): Spot Z direction
- `SpotAngle` (System.Double): Spot angle
- `FallOff0` (System.Double): Light source falloff - constant attenuation NOTE: This parameter is not supported in SOLIDWORKS 2011 and later.
- `FallOff1` (System.Double): Light source falloff - linear attenuation NOTE: This parameter is not supported in SOLIDWORKS 2011 and later.
- `FallOff2` (System.Double): Light source falloff - quadratic attenuation NOTE: This parameter is not supported in SOLIDWORKS 2011 and later.
- `Ambient` (System.Double): Light source ambient intensity
- `Specular` (System.Double): Light source specular intensity
- `SpotExponent` (System.Double): Spot exponent NOTE: This parameter is not supported in SOLIDWORKS 2011 and later.
- `BDisable` (System.Boolean): Light source disabled

## Return Value

True if setting the light source properties is successful, false if not

## Remarks

This method is similar to
IModelDoc2::LightSourcePropertyValues
and
IModelDoc2::ILightSourcePropertyValues
, except using this method you can pass each argument individually.

## Examples

- Add Spotlight and Get Light Feature (C#) (Add_Spotlight_and_Get_Light_Feature_Example_CSharp.htm)
- Add Spotlight and Get Light Feature (VB.NET) (Add_Spotlight_and_Get_Light_Feature_Example_VBNET.htm)
- Add Spotlight and Get Light Feature (VBA) (Add_Spotlight_and_Get_Light_Feature_Example_VB.htm)

## See Also

- `IModelDoc2.AddLightSource`
- `IModelDoc2.AddLightSourceExtProperty`
- `IModelDoc2.AddLightToScene`
- `IModelDoc2.AddSceneExtProperty`
- `IModelDoc2.DeleteLightSource`
- `IModelDoc2.GetLightSourceCount`
- `IModelDoc2.GetLightSourceExtProperty`
- `IModelDoc2.GetLightSourceIdFromName`
- `IModelDoc2.GetLightSourceName`
- `IModelDoc2.Lights`
- `IModelDoc2.ResetLightSourceExtProperty`
- `IModelDoc2.ResetSceneExtProperty`
- `IModelDoc2.SetLightSourceName`