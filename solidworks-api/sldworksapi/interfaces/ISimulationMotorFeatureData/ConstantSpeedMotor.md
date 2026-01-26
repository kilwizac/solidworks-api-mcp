---
type: method
interface: ISimulationMotorFeatureData
member: ConstantSpeedMotor
returns: void
parameters:
  -
    name: Speed
    type: System.Double
    description: Constant speed in RPMs
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - features
related:
  - ISimulationMotorFeatureData.DistanceMotor
  - ISimulationMotorFeatureData.Expression
  - ISimulationMotorFeatureData.InterpolatedMotor
  - ISimulationMotorFeatureData.OscillatingMotor
keywords:
  - constantspeedmotor
  - isimulationmotorfeaturedata
  - simulation
  - motor
  - feature
  - data
  - constant
  - speed
  - double
  - void
---

# ISimulationMotorFeatureData.ConstantSpeedMotor

Sets the constant speed for this motor feature.

## Signature

```csharp
void ConstantSpeedMotor( 
   System.Double
Speed
)
```
## Parameters

- `Speed` (System.Double): Constant speed in RPMs

## Return Value

Unknown.

## See Also

- `ISimulationMotorFeatureData.DistanceMotor`
- `ISimulationMotorFeatureData.Expression`
- `ISimulationMotorFeatureData.InterpolatedMotor`
- `ISimulationMotorFeatureData.OscillatingMotor`