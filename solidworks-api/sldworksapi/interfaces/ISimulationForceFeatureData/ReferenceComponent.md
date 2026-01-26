---
type: property
interface: ISimulationForceFeatureData
member: ReferenceComponent
returns: Component2
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - features
related: []
keywords:
  - referencecomponent
  - isimulationforcefeaturedata
  - simulation
  - force
  - feature
  - data
  - reference
  - component
  - component2
  - create
  - vba
readonly: null
---

# ISimulationForceFeatureData.ReferenceComponent

Gets or sets the component to serve as a reference frame for the force.

## Signature

```csharp
Component2 ReferenceComponent {get; set;}
```
## Parameters

None.

## Return Value

Component to serve as a reference frame

## Remarks

Specifying a component to serve as a reference frame is optional. If a component is not specified, then the reference frame is the global ground.

## Examples

- Create Force Feature (VBA) (Create_Force_Feature_Example_VB.htm)