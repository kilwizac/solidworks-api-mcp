---
type: method
interface: ISimulationForceFeatureData
member: SetFunctionStepValues
returns: System.Boolean
parameters:
  -
    name: F1InitialValue
    type: System.Double
    description: Value of the function before the step
  -
    name: T1StartStepTime
    type: System.Double
    description: Time at which the step begins
  -
    name: F2InitialValue
    type: System.Double
    description: Value of the function after the step
  -
    name: T2EndStepTime
    type: System.Double
    description: Time at which the step ends
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - features
related:
  - ISimulationForceFeatureData.ForceFunctionType
  - ISimulationForceFeatureData.FunctionConstantValue
  - ISimulationForceFeatureData.FunctionExpression
  - ISimulationForceFeatureData.GetFunctionHarmonicValues
  - ISimulationForceFeatureData.GetFunctionStepValues
  - ISimulationForceFeatureData.SetFunctionHarmonicValues
keywords:
  - setfunctionstepvalues
  - isimulationforcefeaturedata
  - simulation
  - force
  - feature
  - data
  - function
  - step
  - values
  - f1
  - initial
  - value
  - double
  - t1
  - start
  - time
  - f2
  - t2
  - end
  - boolean
---

# ISimulationForceFeatureData.SetFunctionStepValues

Sets the step function, whose magnitude transitions smoothly from one value to another value, for this Force feature.

## Signature

```csharp
System.Boolean SetFunctionStepValues( 
   System.Double
F1InitialValue
,
   System.Double
T1StartStepTime
,
   System.Double
F2InitialValue
,
   System.Double
T2EndStepTime
)
```
## Parameters

- `F1InitialValue` (System.Double): Value of the function before the step
- `T1StartStepTime` (System.Double): Time at which the step begins
- `F2InitialValue` (System.Double): Value of the function after the step
- `T2EndStepTime` (System.Double): Time at which the step ends

## Return Value

True if the operation succeeds, false if it fails

## See Also

- `ISimulationForceFeatureData.ForceFunctionType`
- `ISimulationForceFeatureData.FunctionConstantValue`
- `ISimulationForceFeatureData.FunctionExpression`
- `ISimulationForceFeatureData.GetFunctionHarmonicValues`
- `ISimulationForceFeatureData.GetFunctionStepValues`
- `ISimulationForceFeatureData.SetFunctionHarmonicValues`