---
type: method
interface: ISimulationForceFeatureData
member: GetFunctionHarmonicValues
returns: System.Boolean
parameters:
  -
    name: Amplitude
    type: System.Double
    description: Amplitude of the function measured peak to peak
  -
    name: Frequency
    type: System.Double
    description: Frequency of the function
  -
    name: Average
    type: System.Double
    description: Average value of the function; the function oscillates about this value
  -
    name: PhaseShift
    type: System.Double
    description: Phase shift for the function
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
  - ISimulationForceFeatureData.GetFunctionStepValues
  - ISimulationForceFeatureData.SetFunctionHarmonicValues
  - ISimulationForceFeatureData.SetFunctionStepValues
keywords:
  - getfunctionharmonicvalues
  - isimulationforcefeaturedata
  - simulation
  - force
  - feature
  - data
  - function
  - harmonic
  - values
  - amplitude
  - double
  - frequency
  - average
  - phase
  - shift
  - boolean
---

# ISimulationForceFeatureData.GetFunctionHarmonicValues

Gets the harmonic function values for this Force feature.

## Signature

```csharp
System.Boolean GetFunctionHarmonicValues( 
   out System.Double
Amplitude
,
   out System.Double
Frequency
,
   out System.Double
Average
,
   out System.Double
PhaseShift
)
```
## Parameters

- `Amplitude` (System.Double): Amplitude of the function measured peak to peak
- `Frequency` (System.Double): Frequency of the function
- `Average` (System.Double): Average value of the function; the function oscillates about this value
- `PhaseShift` (System.Double): Phase shift for the function

## Return Value

True if the operation succeeds, false if it fails

## See Also

- `ISimulationForceFeatureData.ForceFunctionType`
- `ISimulationForceFeatureData.FunctionConstantValue`
- `ISimulationForceFeatureData.FunctionExpression`
- `ISimulationForceFeatureData.GetFunctionStepValues`
- `ISimulationForceFeatureData.SetFunctionHarmonicValues`
- `ISimulationForceFeatureData.SetFunctionStepValues`