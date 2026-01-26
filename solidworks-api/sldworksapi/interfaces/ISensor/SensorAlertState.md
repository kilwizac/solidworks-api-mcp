---
type: property
interface: ISensor
member: SensorAlertState
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - ISensor.SensorAlertEnabled
  - ISensor.SensorAlertType
  - ISensor.SensorAlertValue1
  - ISensor.SensorAlertValue2
keywords:
  - sensoralertstate
  - isensor
  - sensor
  - alert
  - state
  - boolean
  - vb
  - net
  - vba
readonly: true
---

# ISensor.SensorAlertState

Gets whether an alert is currently triggered for this sensor.

## Signature

```csharp
System.Boolean SensorAlertState {get;}
```
## Parameters

None.

## Return Value

True if an alert is currently triggered for this sensor, false if not

## Examples

- Get and Set Sensor (C#) (Get_and_Set_Sensor_Example_CSharp.htm)
- Get and Set Sensor (VB.NET) (Get_and_Set_Sensor_Example_VBNET.htm)
- Get and Set Sensor (VBA) (Get_and_Set_Sensor_Example_VB.htm)

## See Also

- `ISensor.SensorAlertEnabled`
- `ISensor.SensorAlertType`
- `ISensor.SensorAlertValue1`
- `ISensor.SensorAlertValue2`