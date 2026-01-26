---
type: method
interface: ISimulationMotorFeatureData
member: LoadSplineData
returns: System.Boolean
parameters:
  -
    name: Value
    type: System.String
    description: File from which to load the spline data point values
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - features
related:
  - ISimulationMotorFeatureData.SplineData
keywords:
  - loadsplinedata
  - isimulationmotorfeaturedata
  - simulation
  - motor
  - feature
  - data
  - load
  - spline
  - value
  - string
  - boolean
  - create
  - linear
  - vba
---

# ISimulationMotorFeatureData.LoadSplineData

Loads the spline data from the specified file for this motor feature.

## Signature

```csharp
System.Boolean LoadSplineData( 
   System.String
Value
)
```
## Parameters

- `Value` (System.String): File from which to load the spline data point values

## Return Value

True if the operation succeeds, false if it fails

## Remarks

The file should contain one data point per line. The data point consists of two values:
Time
Value at that time
Use commas or spaces as separators between the values.

## Examples

- Create Linear Motor Feature (VBA) (Create_Linear_Motor_Feature_Example_VB.htm)

## See Also

- `ISimulationMotorFeatureData.SplineData`