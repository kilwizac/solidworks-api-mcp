---
type: method
interface: IModelDoc2
member: GetAmbientLightProperties
returns: System.Boolean
parameters:
  -
    name: Name
    type: System.String
    description: Light name
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
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.GetDirectionLightProperties
  - IModelDoc2.GetPointLightProperties
  - IModelDoc2.GetSpotlightProperties
  - IModelDoc2.SetAmbientLightProperties
  - IModelDoc2.SetDirectionLightProperties
  - IModelDoc2.SetPointLightProperties
  - IModelDoc2.SetSpotlightProperties
keywords:
  - ambient
  - light
  - lighting
  - properties
  - getambientlightproperties
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

# IModelDoc2.GetAmbientLightProperties

Gets the ambient light properties for this model document.

## Signature

```csharp
System.Boolean GetAmbientLightProperties( 
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
)
```
## Parameters

- `Name` (System.String): Light name
- `Ambient` (System.Double): Light source ambient value
- `Diffuse` (System.Double): Light source diffuse value
- `Specular` (System.Double): Light source specular value
- `Colour` (System.Int32): COLORREF color value
- `Enabled` (System.Boolean): True if a light is enabled, false if not
- `Fixed` (System.Boolean): True if a light is fixed, false if not

## Return Value

True if light properties determined without a problem, false if not

## See Also

- `IModelDoc2.GetDirectionLightProperties`
- `IModelDoc2.GetPointLightProperties`
- `IModelDoc2.GetSpotlightProperties`
- `IModelDoc2.SetAmbientLightProperties`
- `IModelDoc2.SetDirectionLightProperties`
- `IModelDoc2.SetPointLightProperties`
- `IModelDoc2.SetSpotlightProperties`