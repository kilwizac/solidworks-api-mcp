---
type: method
interface: IModelDoc2
member: GetSpotlightProperties
returns: System.Boolean
parameters:
  -
    name: Name
    type: System.String
    description: Light name used internally (returned by IModelDoc2::GetLightSourceName )
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
    description: True if a light is enabled, false if not
  -
    name: Fixed
    type: System.Boolean
    description: True if a light is fixed, false if not
  -
    name: X
    type: System.Double
    description: x location of the spot light
  -
    name: Y
    type: System.Double
    description: y location of the spot light
  -
    name: Z
    type: System.Double
    description: location of the spot light target
  -
    name: Targetx
    type: System.Double
    description: x location of the spot light target
  -
    name: Targety
    type: System.Double
    description: y location of the spot light target
  -
    name: Targetz
    type: System.Double
    description: z location of the spot light target
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
  - IModelDoc2.SetAmbientLightProperties
  - IModelDoc2.SetDirectionLightProperties
  - IModelDoc2.SetPointLightProperties
keywords:
  - lighting
  - properties
  - spot
  - lights
  - getspotlightproperties
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
  - targetx
  - targety
  - targetz
  - cone
  - angle
---

# IModelDoc2.GetSpotlightProperties

Gets the spotlight properties.

## Signature

```csharp
System.Boolean GetSpotlightProperties( 
   System.String
Name
,
   ref System.Double
Ambient
,
   ref System.Double
Diffuse
,
   ref System.Double
Specular
,
   ref System.Int32
Colour
,
   ref System.Boolean
Enabled
,
   ref System.Boolean
Fixed
,
   ref System.Double
X
,
   ref System.Double
Y
,
   ref System.Double
Z
,
   ref System.Double
Targetx
,
   ref System.Double
Targety
,
   ref System.Double
Targetz
,
   ref System.Double
ConeAngle
)
```
## Parameters

- `Name` (System.String): Light name used internally (returned by IModelDoc2::GetLightSourceName )
- `Ambient` (System.Double): Light source ambient value
- `Diffuse` (System.Double): Light source diffuse value
- `Specular` (System.Double): Light source specular value
- `Colour` (System.Int32): COLORREF color value
- `Enabled` (System.Boolean): True if a light is enabled, false if not
- `Fixed` (System.Boolean): True if a light is fixed, false if not
- `X` (System.Double): x location of the spot light
- `Y` (System.Double): y location of the spot light
- `Z` (System.Double): location of the spot light target
- `Targetx` (System.Double): x location of the spot light target
- `Targety` (System.Double): y location of the spot light target
- `Targetz` (System.Double): z location of the spot light target
- `ConeAngle` (System.Double): Cone angle through which the beam spreads in degrees

## Return Value

True if light properties determined without a problem, false if not

## See Also

- `IModelDoc2.GetAmbientLightProperties`
- `IModelDoc2.GetDirectionLightProperties`
- `IModelDoc2.GetPointLightProperties`
- `IModelDoc2.SetAmbientLightProperties`
- `IModelDoc2.SetDirectionLightProperties`
- `IModelDoc2.SetPointLightProperties`