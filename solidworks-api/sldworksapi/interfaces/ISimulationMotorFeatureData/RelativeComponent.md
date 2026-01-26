---
type: property
interface: ISimulationMotorFeatureData
member: RelativeComponent
returns: Component2
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - features
related:
  - ISimulationMotorFeatureData.LoadReferences
  - ISimulationMotorFeatureData.Location
keywords:
  - relativecomponent
  - isimulationmotorfeaturedata
  - simulation
  - motor
  - feature
  - data
  - relative
  - component
  - component2
  - create
  - linear
  - vba
readonly: null
---

# ISimulationMotorFeatureData.RelativeComponent

Gets or sets a part in the assembly to which to reference motion when setting motion relative to another part in this motor feature.

## Signature

```csharp
Component2 RelativeComponent {get; set;}
```
## Parameters

None.

## Return Value

Relative component

## Examples

- Create Linear Motor Feature (VBA) (Create_Linear_Motor_Feature_Example_VB.htm)

## See Also

- `ISimulationMotorFeatureData.LoadReferences`
- `ISimulationMotorFeatureData.Location`