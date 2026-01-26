---
type: property
interface: ISensor
member: SensorAlertEnabled
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - DAssemblyDocEvents_SensorAlertPreNotifyEventHandler
  - DPartDocEvents_SensorAlertPreNotifyEventHandler
  - ISensor.SensorAlertState
  - ISensor.SensorAlertType
  - ISensor.SensorAlertValue1
  - ISensor.SensorAlertValue2
keywords:
  - sensoralertenabled
  - isensor
  - sensor
  - alert
  - enabled
  - boolean
  - vb
  - net
  - vba
readonly: null
---

# ISensor.SensorAlertEnabled

Gets or sets whether an alert is triggered when the limits of the sensor deviate from its specified values.

## Signature

```csharp
System.Boolean SensorAlertEnabled {get; set;}
```
## Parameters

None.

## Return Value

True for an alert to be triggered when the limits of the sensor deviate from its specified values, false for it to not

## Examples

- Get and Set Sensor (C#) (Get_and_Set_Sensor_Example_CSharp.htm)
- Get and Set Sensor (VB.NET) (Get_and_Set_Sensor_Example_VBNET.htm)
- Get and Set Sensor (VBA) (Get_and_Set_Sensor_Example_VB.htm)

## See Also

- `DAssemblyDocEvents_SensorAlertPreNotifyEventHandler`
- `DPartDocEvents_SensorAlertPreNotifyEventHandler`
- `ISensor.SensorAlertState`
- `ISensor.SensorAlertType`
- `ISensor.SensorAlertValue1`
- `ISensor.SensorAlertValue2`