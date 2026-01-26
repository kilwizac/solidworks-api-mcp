---
type: method
interface: IModelDocExtension
member: GetAdvancedSpotLightProperties
returns: void
parameters:
  -
    name: Name
    type: System.String
    description: SOLIDWORKS light source name
  -
    name: Exponent
    type: System.Double
    description: Attenuation exponent
  -
    name: AttenuationConst
    type: System.Double
    description: Constant attenuation factor
  -
    name: AttenuationLinear
    type: System.Double
    description: Linear attenuation factor
  -
    name: AttenuationQuad
    type: System.Double
    description: Quadratic attenuation factor
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related: []
keywords:
  - spot
  - lights
  - getadvancedspotlightproperties
  - imodeldocextension
  - model
  - doc
  - extension
  - advanced
  - light
  - properties
  - name
  - string
  - exponent
  - double
  - attenuation
  - const
  - linear
  - quad
  - void
  - vba
---

# IModelDocExtension.GetAdvancedSpotLightProperties

Gets the attenuation-related, advanced properties for the specified SOLIDWORKS spot light in this model.

## Signature

```csharp
void GetAdvancedSpotLightProperties( 
   System.String
Name
,
   out System.Double
Exponent
,
   out System.Double
AttenuationConst
,
   out System.Double
AttenuationLinear
,
   out System.Double
AttenuationQuad
)
```
## Parameters

- `Name` (System.String): SOLIDWORKS light source name
- `Exponent` (System.Double): Attenuation exponent
- `AttenuationConst` (System.Double): Constant attenuation factor
- `AttenuationLinear` (System.Double): Linear attenuation factor
- `AttenuationQuad` (System.Double): Quadratic attenuation factor

## Return Value

Unknown.

## Remarks

See the SOLIDWORKS Help for more information about the advanced properties of spot lights.

## Examples

- Get Advanced Properties of Spot Light (VBA) (Get_Advanced_Properties_of_Spot_Light_Example_VB.htm)