---
type: property
interface: ISimulationSpringFeatureData
member: SpringConstant
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - features
related:
  - ISimulationSpringFeatureData.ExponentOfDamperForceExpression
  - ISimulationSpringFeatureData.ExponentOfSpringForceExpression
  - ISimulationSpringFeatureData.FreeAngle
  - ISimulationSpringFeatureData.FreeLength
keywords:
  - springconstant
  - isimulationspringfeaturedata
  - simulation
  - spring
  - feature
  - data
  - constant
  - double
readonly: null
---

# ISimulationSpringFeatureData.SpringConstant

Gets or sets the strength of this simulation spring feature.

## Signature

```csharp
System.Double SpringConstant {get; set;}
```
## Parameters

None.

## Return Value

Strength

## Remarks

Springs apply a force to a component. A spring with a higher spring constant moves a component faster than a spring with a lower spring constant. A component with a smaller mass moves faster than a component with a larger mass when acted upon by an equal strength spring.

## See Also

- `ISimulationSpringFeatureData.ExponentOfDamperForceExpression`
- `ISimulationSpringFeatureData.ExponentOfSpringForceExpression`
- `ISimulationSpringFeatureData.FreeAngle`
- `ISimulationSpringFeatureData.FreeLength`