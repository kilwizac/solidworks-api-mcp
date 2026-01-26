---
type: property
interface: ISimulationForceFeatureData
member: FunctionInterpolatedValues
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - features
related:
  - ISimulationForceFeatureData.GetInterpolatedValue
  - ISimulationForceFeatureData.InterpolationScheme
keywords:
  - functioninterpolatedvalues
  - isimulationforcefeaturedata
  - simulation
  - force
  - feature
  - data
  - function
  - interpolated
  - values
  - object
readonly: null
---

# ISimulationForceFeatureData.FunctionInterpolatedValues

Gets or sets the interpolated values for this Force feature.

## Signature

```csharp
System.Object FunctionInterpolatedValues {get; set;}
```
## Parameters

None.

## Return Value

Array of interpolated values (time and force)

## Remarks

SOLIDWORKS interpolates a spline betweeen the data points.

## See Also

- `ISimulationForceFeatureData.GetInterpolatedValue`
- `ISimulationForceFeatureData.InterpolationScheme`