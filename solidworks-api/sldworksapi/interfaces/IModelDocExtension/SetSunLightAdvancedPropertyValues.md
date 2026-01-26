---
type: property
interface: IModelDocExtension
member: SetSunLightAdvancedPropertyValues
returns: System.Boolean
parameters:
  -
    name: Haze
    type: System.Double
    description: 0.0 <= Haze setting < = 1.0
  -
    name: SunDiameter
    type: System.Double
    description: 0.01 < = sun diameter visible in the scene <= 21474836.47
  -
    name: GroundAlbedo
    type: System.Int32
    description: RGB color reflected from the ground upwards
  -
    name: SkyGamma
    type: System.Double
    description: 0.1 <= visible sky Output Gamma <= 100.0
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.GetSunLightAdvancedPropertyValues
  - IModelDocExtension.SetSunLightSourcePropertyValues
  - IModelDocExtension.SunLightInformation
keywords:
  - lighting
  - advanced
  - properties
  - setsunlightadvancedpropertyvalues
  - imodeldocextension
  - model
  - doc
  - extension
  - sun
  - light
  - values
  - haze
  - double
  - diameter
  - ground
  - albedo
  - int32
  - sky
  - gamma
  - boolean
readonly: null
---

# IModelDocExtension.SetSunLightAdvancedPropertyValues

Sets the specified sunlight advanced properties.

## Signature

```csharp
System.Boolean SetSunLightAdvancedPropertyValues( 
   System.Double
Haze
,
   System.Double
SunDiameter
,
   System.Int32
GroundAlbedo
,
   System.Double
SkyGamma
)
```
## Parameters

- `Haze` (System.Double): 0.0 <= Haze setting < = 1.0
- `SunDiameter` (System.Double): 0.01 < = sun diameter visible in the scene <= 21474836.47
- `GroundAlbedo` (System.Int32): RGB color reflected from the ground upwards
- `SkyGamma` (System.Double): 0.1 <= visible sky Output Gamma <= 100.0

## Return Value

True if successful, false if not

## Remarks

After calling this method, call
IModelDocExtension::UpdateSunLight
.

## See Also

- `IModelDocExtension.GetSunLightAdvancedPropertyValues`
- `IModelDocExtension.SetSunLightSourcePropertyValues`
- `IModelDocExtension.SunLightInformation`