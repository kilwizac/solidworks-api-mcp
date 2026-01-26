---
type: method
interface: ISimulationMotorFeatureData
member: DistanceMotor
returns: void
parameters:
  -
    name: Displacement
    type: System.Double
    description: Displacement in degrees
  -
    name: StartTime
    type: System.Double
    description: Start time in seconds
  -
    name: Duration
    type: System.Double
    description: Duration in seconds
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - features
related:
  - ISimulationMotorFeatureData.ConstantSpeedMotor
  - ISimulationMotorFeatureData.Expression
  - ISimulationMotorFeatureData.InterpolatedMotor
  - ISimulationMotorFeatureData.OscillatingMotor
keywords:
  - distancemotor
  - isimulationmotorfeaturedata
  - simulation
  - motor
  - feature
  - data
  - distance
  - displacement
  - double
  - start
  - time
  - duration
  - void
---

# ISimulationMotorFeatureData.DistanceMotor

Sets the distance and time for which to operate this motor feature.

## Signature

```csharp
void DistanceMotor( 
   System.Double
Displacement
,
   System.Double
StartTime
,
   System.Double
Duration
)
```
## Parameters

- `Displacement` (System.Double): Displacement in degrees
- `StartTime` (System.Double): Start time in seconds
- `Duration` (System.Double): Duration in seconds

## Return Value

Unknown.

## See Also

- `ISimulationMotorFeatureData.ConstantSpeedMotor`
- `ISimulationMotorFeatureData.Expression`
- `ISimulationMotorFeatureData.InterpolatedMotor`
- `ISimulationMotorFeatureData.OscillatingMotor`