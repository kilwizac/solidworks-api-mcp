---
type: method
interface: IModelDoc2
member: GetDirectionLightProperties
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
  -
    name: X
    type: System.Double
    description: x component of the light direction vector
  -
    name: Y
    type: System.Double
    description: y component of the light direction vector
  -
    name: Z
    type: System.Double
    description: z component of the light direction vector
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.ILightSourcePropertyValues
  - IModelDoc2.LightSourcePropertyValues
  - IModelDoc2.SetDirectionLightProperties
keywords:
  - directional
  - lights
  - lighting
  - properties
  - getdirectionlightproperties
  - imodeldoc2
  - model
  - doc2
  - direction
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

# IModelDoc2.GetDirectionLightProperties

Gets the directional light properties.

## Signature

```csharp
System.Boolean GetDirectionLightProperties( 
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
- `X` (System.Double): x component of the light direction vector
- `Y` (System.Double): y component of the light direction vector
- `Z` (System.Double): z component of the light direction vector

## Return Value

True if light properties determined without a problem, false if not

## See Also

- `IModelDoc2.ILightSourcePropertyValues`
- `IModelDoc2.LightSourcePropertyValues`
- `IModelDoc2.SetDirectionLightProperties`