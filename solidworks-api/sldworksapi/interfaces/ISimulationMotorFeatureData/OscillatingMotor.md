---
type: method
interface: ISimulationMotorFeatureData
member: OscillatingMotor
returns: void
parameters:
  -
    name: Displacement
    type: System.Double
    description: Displacement in degrees
  -
    name: Frequency
    type: System.Double
    description: Frequency in Hz
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - features
related:
  - ISimulationMotorFeatureData.ConstantSpeedMotor
  - ISimulationMotorFeatureData.DistanceMotor
  - ISimulationMotorFeatureData.Expression
  - ISimulationMotorFeatureData.InterpolatedMotor
keywords:
  - oscillatingmotor
  - isimulationmotorfeaturedata
  - simulation
  - motor
  - feature
  - data
  - oscillating
  - displacement
  - double
  - frequency
  - void
---

# ISimulationMotorFeatureData.OscillatingMotor

Sets the displacement and frequency for oscillating motion for this motor feature.

## Signature

```csharp
void OscillatingMotor( 
   System.Double
Displacement
,
   System.Double
Frequency
)
```
## Parameters

- `Displacement` (System.Double): Displacement in degrees
- `Frequency` (System.Double): Frequency in Hz

## Return Value

Unknown.

## See Also

- `ISimulationMotorFeatureData.ConstantSpeedMotor`
- `ISimulationMotorFeatureData.DistanceMotor`
- `ISimulationMotorFeatureData.Expression`
- `ISimulationMotorFeatureData.InterpolatedMotor`