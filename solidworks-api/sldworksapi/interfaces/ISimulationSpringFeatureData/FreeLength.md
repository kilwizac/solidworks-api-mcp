---
type: property
interface: ISimulationSpringFeatureData
member: FreeLength
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
  - ISimulationSpringFeatureData.SpringConstant
keywords:
  - freelength
  - isimulationspringfeaturedata
  - simulation
  - spring
  - feature
  - data
  - free
  - length
  - double
  - add
  - motion
  - study
  - vb
  - net
  - vba
readonly: null
---

# ISimulationSpringFeatureData.FreeLength

Gets or sets the free length (i.e., length to stretch or compress the spring) for the functional expression for this simulation spring feature.

## Signature

```csharp
System.Double FreeLength {get; set;}
```
## Parameters

None.

## Return Value

Free length

## Remarks

The initial distance is the distance between the parts as currently displayed in the graphics area. Call
ISimulationSpringFeatureData::UpdateToModelChanges
to have the free length dynamically update to model changes while the PropertyManager page is open.
The spring does not exert any force when its length is equal to its free length.

## Examples

- Add Spring to Motion Study (C#) (Add_Spring_to_Motion_Study_Example_CSharp.htm)
- Add Spring to Motion Study (VB.NET) (Add_Spring_to_Motion_Study_Example_VBNET.htm)
- Add Spring to Motion Study (VBA) (Add_Spring_to_Motion_Study_Example_VB.htm)

## See Also

- `ISimulationSpringFeatureData.ExponentOfDamperForceExpression`
- `ISimulationSpringFeatureData.ExponentOfSpringForceExpression`
- `ISimulationSpringFeatureData.FreeAngle`
- `ISimulationSpringFeatureData.SpringConstant`