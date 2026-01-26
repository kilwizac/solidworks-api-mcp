---
type: property
interface: IModelDocExtension
member: SunLightInformation
returns: System.Double
parameters:
  -
    name: Type
    type: System.Int32
    description: Sunlight information as defined by swSunlightInfoType_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.GetSunLightAdvancedPropertyValues
  - IModelDocExtension.SetSunLightAdvancedPropertyValues
  - IModelDocExtension.UpdateSunLight
keywords:
  - lighting
  - advanced
  - properties
  - sunlightinformation
  - imodeldocextension
  - model
  - doc
  - extension
  - sun
  - light
  - information
  - type
  - int32
  - double
  - sunlight
  - source
  - values
  - vba
  - vb
  - net
readonly: true
---

# IModelDocExtension.SunLightInformation

Gets the specified sunlight information.

## Signature

```csharp
System.Double SunLightInformation( 
   System.Int32
Type
) {get;}
```
## Parameters

- `Type` (System.Int32): Sunlight information as defined by swSunlightInfoType_e

## Return Value

Sunlight information

## Examples

- Get and Set Sunlight Source Property Values (VBA) (Get_and_Set_Sunlight_Source_Property_Values_Example_VB.htm)
- Get and Set Sunlight Source Property Values (VB.NET) (Get_and_Set_Sunlight_Source_Property_Values_Example_VBNET.htm)
- Get and Set Sunlight Source Property Values (C#) (Get_and_Set_Sunlight_Source_Property_Values_Example_CSharp.htm)

## See Also

- `IModelDocExtension.GetSunLightAdvancedPropertyValues`
- `IModelDocExtension.SetSunLightAdvancedPropertyValues`
- `IModelDocExtension.UpdateSunLight`