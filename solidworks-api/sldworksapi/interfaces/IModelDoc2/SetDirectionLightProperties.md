---
type: method
interface: IModelDoc2
member: SetDirectionLightProperties
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
    description: True to enable the light, false to not
  -
    name: Fixed
    type: System.Boolean
    description: True to fix the light, false to not
  -
    name: X
    type: System.Double
    description: x component of the light direction ve
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
  - IModelDoc2.GetDirectionLightProperties
  - IModelDoc2.ILightSourcePropertyValues
  - IModelDoc2.LightSourcePropertyValues
keywords:
  - directional
  - lights
  - lighting
  - properties
  - setdirectionlightproperties
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

# IModelDoc2.SetDirectionLightProperties

Sets direction light properties.

## Signature

```csharp
System.Boolean SetDirectionLightProperties( 
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
- `Diffuse` (System.Double): Light source diffuse value
- `Specular` (System.Double): Light source specular value
- `Colour` (System.Int32): COLORREF color value
- `Enabled` (System.Boolean): True to enable the light, false to not
- `Fixed` (System.Boolean): True to fix the light, false to not
- `X` (System.Double): x component of the light direction ve
- `Y` (System.Double): y component of the light direction vector
- `Z` (System.Double): z component of the light direction vector

## Return Value

True if light properties change successfully, false if not

## See Also

- `IModelDoc2.GetDirectionLightProperties`
- `IModelDoc2.ILightSourcePropertyValues`
- `IModelDoc2.LightSourcePropertyValues`