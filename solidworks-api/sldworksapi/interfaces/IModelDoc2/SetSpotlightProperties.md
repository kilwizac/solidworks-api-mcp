---
type: method
interface: IModelDoc2
member: SetSpotlightProperties
returns: System.Boolean
parameters:
  -
    name: Name
    type: System.String
    description: Light name to modify
  -
    name: Ambient
    type: System.Double
    description: Light source ambient value
  -
    name: Diffuse
    type: System.Double
    description: Light source diffuse value
  -
    name: Specular
    type: System.Double
    description: Light source specular value
  -
    name: Colour
    type: System.Int32
    description: COLORREF color value
  -
    name: Enabled
    type: System.Boolean
    description: True to enable light, false to not
  -
    name: Fixed
    type: System.Boolean
    description: True to fix light, false to not
  -
    name: Posx
    type: System.Double
    description: x location of the spotlight
  -
    name: Posy
    type: System.Double
    description: y location of the spotlight
  -
    name: Posz
    type: System.Double
    description: z location of the spotlight
  -
    name: Targetx
    type: System.Double
    description: x location of the spotlight target
  -
    name: Targety
    type: System.Double
    description: y location of the spotlight target
  -
    name: Targetz
    type: System.Double
    description: z location of the spotlight target
  -
    name: ConeAngle
    type: System.Double
    description: Cone angle through which the beam spreads in degrees
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.GetAmbientLightProperties
  - IModelDoc2.GetDirectionLightProperties
  - IModelDoc2.GetPointLightProperties
  - IModelDoc2.GetSpotlightProperties
  - IModelDoc2.SetAmbientLightProperties
  - IModelDoc2.SetDirectionLightProperties
  - IModelDoc2.SetPointLightProperties
keywords:
  - lighting
  - properties
  - spot
  - lights
  - setspotlightproperties
  - imodeldoc2
  - model
  - doc2
  - spotlight
  - name
  - string
  - ambient
  - double
  - diffuse
  - specular
  - colour
  - int32
  - enabled
  - boolean
  - fixed
  - posx
  - posy
  - posz
  - targetx
  - targety
  - targetz
  - cone
  - angle
---

# IModelDoc2.SetSpotlightProperties

Sets the spotlight properties.

## Signature

```csharp
System.Boolean SetSpotlightProperties( 
   System.String
Name
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
   System.Int32
Colour
,
   System.Boolean
Enabled
,
   System.Boolean
Fixed
,
   System.Double
Posx
,
   System.Double
Posy
,
   System.Double
Posz
,
   System.Double
Targetx
,
   System.Double
Targety
,
   System.Double
Targetz
,
   System.Double
ConeAngle
)
```
## Parameters

- `Name` (System.String): Light name to modify
- `Ambient` (System.Double): Light source ambient value
- `Diffuse` (System.Double): Light source diffuse value
- `Specular` (System.Double): Light source specular value
- `Colour` (System.Int32): COLORREF color value
- `Enabled` (System.Boolean): True to enable light, false to not
- `Fixed` (System.Boolean): True to fix light, false to not
- `Posx` (System.Double): x location of the spotlight
- `Posy` (System.Double): y location of the spotlight
- `Posz` (System.Double): z location of the spotlight
- `Targetx` (System.Double): x location of the spotlight target
- `Targety` (System.Double): y location of the spotlight target
- `Targetz` (System.Double): z location of the spotlight target
- `ConeAngle` (System.Double): Cone angle through which the beam spreads in degrees

## Return Value

True if light properties are modified, false if not

## See Also

- `IModelDoc2.GetAmbientLightProperties`
- `IModelDoc2.GetDirectionLightProperties`
- `IModelDoc2.GetPointLightProperties`
- `IModelDoc2.GetSpotlightProperties`
- `IModelDoc2.SetAmbientLightProperties`
- `IModelDoc2.SetDirectionLightProperties`
- `IModelDoc2.SetPointLightProperties`