---
type: property
interface: IModelDocExtension
member: GetSunLightSourcePropertyValues
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
  - IModelDocExtension.GetSunLightAdvancedPropertyValues
  - IModelDocExtension.SetSunLightSourcePropertyValues
keywords:
  - lighting
  - source
  - properties
  - getsunlightsourcepropertyvalues
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

# IModelDocExtension.GetSunLightSourcePropertyValues

Gets the property values for a sunlight source.

## Signature

```csharp
System.Boolean GetSunLightSourcePropertyValues( 
   out MathVector
NorthDirection
,
   out System.Double
NorthLatitude
,
   out System.Double
EastLongitude
,
   out System.Double
TimeZone
,
   out System.String
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

True if getting the value is successful, false if not

## Examples

- Get and Set Sunlight Source Property Values (VBA) (Get_and_Set_Sunlight_Source_Property_Values_Example_VB.htm)
- Get and Set Sunlight Source Property Values (VB.NET) (Get_and_Set_Sunlight_Source_Property_Values_Example_VBNET.htm)
- Get and Set Sunlight Source Property Values (C#) (Get_and_Set_Sunlight_Source_Property_Values_Example_CSharp.htm)

## See Also

- `IModelDoc2.LightSourcePropertyValues`
- `IModelDocExtension.GetSunLightAdvancedPropertyValues`
- `IModelDocExtension.SetSunLightSourcePropertyValues`