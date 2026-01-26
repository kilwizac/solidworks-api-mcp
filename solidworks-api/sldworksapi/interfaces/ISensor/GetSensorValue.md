---
type: method
interface: ISensor
member: GetSensorValue
returns: System.Boolean
parameters:
  -
    name: Value
    type: System.Double
    description: Value of the sensor
  -
    name: Units
    type: System.String
    description: Units of the sensor
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - getsensorvalue
  - isensor
  - sensor
  - value
  - double
  - units
  - string
  - boolean
---

# ISensor.GetSensorValue

Gets the value and units of this sensor.

## Signature

```csharp
System.Boolean GetSensorValue( 
   out System.Double
Value
,
   out System.String
Units
)
```
## Parameters

- `Value` (System.Double): Value of the sensor
- `Units` (System.String): Units of the sensor

## Return Value

True if successful, false if not