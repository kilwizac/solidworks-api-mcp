---
type: property
interface: IModelDocExtension
member: GetSunLightAdvancedPropertyValues
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
  - IModelDocExtension.GetSunLightSourcePropertyValues
  - IModelDocExtension.SetSunLightAdvancedPropertyValues
  - IModelDocExtension.SunLightInformation
  - IModelDocExtension.UpdateSunLight
keywords:
  - lighting
  - advanced
  - properties
  - getsunlightadvancedpropertyvalues
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
  - sunlight
  - source
  - vba
  - vb
  - net
readonly: null
---

# IModelDocExtension.GetSunLightAdvancedPropertyValues

Gets the specified sunlight advanced properties.

## Signature

```csharp
System.Boolean GetSunLightAdvancedPropertyValues( 
   out System.Double
Haze
,
   out System.Double
SunDiameter
,
   out System.Int32
GroundAlbedo
,
   out System.Double
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

## Examples

- Get and Set Sunlight Source Property Values (VBA) (Get_and_Set_Sunlight_Source_Property_Values_Example_VB.htm)
- Get and Set Sunlight Source Property Values (VB.NET) (Get_and_Set_Sunlight_Source_Property_Values_Example_VBNET.htm)
- Get and Set Sunlight Source Property Values (C#) (Get_and_Set_Sunlight_Source_Property_Values_Example_CSharp.htm)

## See Also

- `IModelDocExtension.GetSunLightSourcePropertyValues`
- `IModelDocExtension.SetSunLightAdvancedPropertyValues`
- `IModelDocExtension.SunLightInformation`
- `IModelDocExtension.UpdateSunLight`