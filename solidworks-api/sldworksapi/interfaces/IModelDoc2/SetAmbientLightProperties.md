---
type: method
interface: IModelDoc2
member: SetAmbientLightProperties
returns: System.Boolean
parameters:
  -
    name: Name
    type: System.String
    description: Light name whose settings to modify
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
    description: True to enable the light, false to not
  -
    name: Fixed
    type: System.Boolean
    description: True to fix light, false to not
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
  - IModelDoc2.SetDirectionLightProperties
  - IModelDoc2.SetPointLightProperties
  - IModelDoc2.SetSpotlightProperties
keywords:
  - ambient
  - light
  - lighting
  - properties
  - setambientlightproperties
  - imodeldoc2
  - model
  - doc2
  - name
  - string
  - double
  - diffuse
  - specular
  - colour
  - int32
  - enabled
  - boolean
  - fixed
---

# IModelDoc2.SetAmbientLightProperties

Sets ambient light properties.

## Signature

```csharp
System.Boolean SetAmbientLightProperties( 
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
)
```
## Parameters

- `Name` (System.String): Light name whose settings to modify
- `Ambient` (System.Double): Light source ambient value
- `Diffuse` (System.Double): Light source diffuse value
- `Specular` (System.Double): Light source specular value
- `Colour` (System.Int32): COLORREF color value
- `Enabled` (System.Boolean): True to enable the light, false to not
- `Fixed` (System.Boolean): True to fix light, false to not

## Return Value

True if light properties change successfully, false if not

## See Also

- `IModelDoc2.GetAmbientLightProperties`
- `IModelDoc2.GetDirectionLightProperties`
- `IModelDoc2.GetPointLightProperties`
- `IModelDoc2.GetSpotlightProperties`
- `IModelDoc2.SetDirectionLightProperties`
- `IModelDoc2.SetPointLightProperties`
- `IModelDoc2.SetSpotlightProperties`