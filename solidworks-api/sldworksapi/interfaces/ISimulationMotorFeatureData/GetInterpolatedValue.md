---
type: method
interface: ISimulationMotorFeatureData
member: GetInterpolatedValue
returns: System.Double
parameters:
  -
    name: Time
    type: System.Double
    description: Time for which you want the interpolated value
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - features
related:
  - ISimulationMotorFeatureData.InterpolatedMotor
  - ISimulationMotorFeatureData.InterpolationScheme
keywords:
  - getinterpolatedvalue
  - isimulationmotorfeaturedata
  - simulation
  - motor
  - feature
  - data
  - interpolated
  - value
  - time
  - double
---

# ISimulationMotorFeatureData.GetInterpolatedValue

Gets the interopolated value at the specified time for this motor feature.

## Signature

```csharp
System.Double GetInterpolatedValue( 
   System.Double
Time
)
```
## Parameters

- `Time` (System.Double): Time for which you want the interpolated value

## Return Value

Interpolated value at the specfied time

## See Also

- `ISimulationMotorFeatureData.InterpolatedMotor`
- `ISimulationMotorFeatureData.InterpolationScheme`