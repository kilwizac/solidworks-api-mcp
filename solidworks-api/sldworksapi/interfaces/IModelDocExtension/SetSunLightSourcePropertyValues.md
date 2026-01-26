---
type: property
interface: IModelDocExtension
member: SetSunLightSourcePropertyValues
returns: System.Boolean
parameters:
  -
    name: NorthDirection
    type: MathVector
    description: IMathVector ; north direction of the sunlight source
  -
    name: NorthLatitude
    type: System.Double
    description: North latitude of the sunlight source
  -
    name: EastLongitude
    type: System.Double
    description: East longitude of the sunlight source
  -
    name: TimeZone
    type: System.Double
    description: Standard time zone of the sunlight source
  -
    name: DateTime
    type: System.String
    description: Date and time stamp in the specified TimeZone
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDoc2.LightSourcePropertyValues
  - IModelDoc2.SetLightSourcePropertyValuesVB
  - IModelDocExtension.GetSunLightSourcePropertyValues
  - IModelDocExtension.SetSunLightAdvancedPropertyValues
keywords:
  - lighting
  - source
  - properties
  - setsunlightsourcepropertyvalues
  - imodeldocextension
  - model
  - doc
  - extension
  - sun
  - light
  - values
  - north
  - direction
  - math
  - vector
  - latitude
  - double
  - east
  - longitude
  - time
  - zone
  - date
  - string
  - boolean
  - sunlight
  - vba
  - vb
  - net
readonly: null
---

# IModelDocExtension.SetSunLightSourcePropertyValues

Sets the property values for a sunlight source.

## Signature

```csharp
System.Boolean SetSunLightSourcePropertyValues( 
   MathVector
NorthDirection
,
   System.Double
NorthLatitude
,
   System.Double
EastLongitude
,
   System.Double
TimeZone
,
   System.String
DateTime
)
```
## Parameters

- `NorthDirection` (MathVector): IMathVector ; north direction of the sunlight source
- `NorthLatitude` (System.Double): North latitude of the sunlight source
- `EastLongitude` (System.Double): East longitude of the sunlight source
- `TimeZone` (System.Double): Standard time zone of the sunlight source
- `DateTime` (System.String): Date and time stamp in the specified TimeZone

## Return Value

True if sunlight source property values are successfully set, false if not

## Examples

- Get and Set Sunlight Source Property Values (VBA) (Get_and_Set_Sunlight_Source_Property_Values_Example_VB.htm)
- Get and Set Sunlight Source Property Values (VB.NET) (Get_and_Set_Sunlight_Source_Property_Values_Example_VBNET.htm)
- Get and Set Sunlight Source Property Values (C#) (Get_and_Set_Sunlight_Source_Property_Values_Example_CSharp.htm)

## See Also

- `IModelDoc2.LightSourcePropertyValues`
- `IModelDoc2.SetLightSourcePropertyValuesVB`
- `IModelDocExtension.GetSunLightSourcePropertyValues`
- `IModelDocExtension.SetSunLightAdvancedPropertyValues`