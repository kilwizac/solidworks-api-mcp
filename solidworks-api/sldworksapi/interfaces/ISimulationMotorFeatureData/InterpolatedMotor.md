---
type: method
interface: ISimulationMotorFeatureData
member: InterpolatedMotor
returns: void
parameters:
  -
    name: DriveType
    type: System.Int32
    description: Drive type as defined in swSimulationMotorDriveType_e
  -
    name: InterpolationScheme
    type: System.Int32
    description: Interpolation scheme
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
  - ISimulationMotorFeatureData.GetInterpolatedValue
  - ISimulationMotorFeatureData.InterpolationScheme
  - ISimulationMotorFeatureData.OscillatingMotor
keywords:
  - interpolatedmotor
  - isimulationmotorfeaturedata
  - simulation
  - motor
  - feature
  - data
  - interpolated
  - drive
  - type
  - int32
  - interpolation
  - scheme
  - void
  - create
  - linear
  - vba
---

# ISimulationMotorFeatureData.InterpolatedMotor

Sets the drive type and interpolation scheme for this motor feature.

## Signature

```csharp
void InterpolatedMotor( 
   System.Int32
DriveType
,
   System.Int32
InterpolationScheme
)
```
## Parameters

- `DriveType` (System.Int32): Drive type as defined in swSimulationMotorDriveType_e
- `InterpolationScheme` (System.Int32): Interpolation scheme

## Return Value

Unknown.

## Examples

- Create Linear Motor Feature (VBA) (Create_Linear_Motor_Feature_Example_VB.htm)

## See Also

- `ISimulationMotorFeatureData.ConstantSpeedMotor`
- `ISimulationMotorFeatureData.DistanceMotor`
- `ISimulationMotorFeatureData.Expression`
- `ISimulationMotorFeatureData.GetInterpolatedValue`
- `ISimulationMotorFeatureData.InterpolationScheme`
- `ISimulationMotorFeatureData.OscillatingMotor`