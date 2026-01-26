---
type: method
interface: IModelDoc2
member: SetPointLightProperties
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
    description: Light source specular value
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
    name: X
    type: System.Double
    description: x location of the point light
  -
    name: Y
    type: System.Double
    description: y location of the point light
  -
    name: Z
    type: System.Double
    description: z location of the point light
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
  - IModelDoc2.SetSpotlightProperties
keywords:
  - lighting
  - properties
  - point
  - lights
  - setpointlightproperties
  - imodeldoc2
  - model
  - doc2
  - light
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
---

# IModelDoc2.SetPointLightProperties

Sets point light properties.

## Signature

```csharp
System.Boolean SetPointLightProperties( 
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
X
,
   System.Double
Y
,
   System.Double
Z
)
```
## Parameters

- `Name` (System.String): Light name to modify
- `Ambient` (System.Double): Light source ambient value
- `Diffuse` (System.Double): Light source specular value
- `Specular` (System.Double): Light source specular value
- `Colour` (System.Int32): COLORREF color value
- `Enabled` (System.Boolean): True to enable light, false to not
- `Fixed` (System.Boolean): True to fix light, false to not
- `X` (System.Double): x location of the point light
- `Y` (System.Double): y location of the point light
- `Z` (System.Double): z location of the point light

## Return Value

True if the light properties change, false if not

## See Also

- `IModelDoc2.GetAmbientLightProperties`
- `IModelDoc2.GetDirectionLightProperties`
- `IModelDoc2.GetPointLightProperties`
- `IModelDoc2.GetSpotlightProperties`
- `IModelDoc2.SetAmbientLightProperties`
- `IModelDoc2.SetDirectionLightProperties`
- `IModelDoc2.SetSpotlightProperties`