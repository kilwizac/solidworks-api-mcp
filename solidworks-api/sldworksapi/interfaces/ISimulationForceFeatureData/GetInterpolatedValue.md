---
type: method
interface: ISimulationForceFeatureData
member: GetInterpolatedValue
returns: System.Double
parameters:
  -
    name: Time
    type: System.Double
    description: Time at which to get the interpolated value
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - features
related:
  - ISimulationForceFeatureData.FunctionInterpolatedValues
  - ISimulationForceFeatureData.InterpolationScheme
keywords:
  - getinterpolatedvalue
  - isimulationforcefeaturedata
  - simulation
  - force
  - feature
  - data
  - interpolated
  - value
  - time
  - double
---

# ISimulationForceFeatureData.GetInterpolatedValue

Gets the interpolated value at the specified time for this Force feature.

## Signature

```csharp
System.Double GetInterpolatedValue( 
   System.Double
Time
)
```
## Parameters

- `Time` (System.Double): Time at which to get the interpolated value

## Return Value

Interpolated value

## See Also

- `ISimulationForceFeatureData.FunctionInterpolatedValues`
- `ISimulationForceFeatureData.InterpolationScheme`