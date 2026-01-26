---
type: property
interface: ISimulationForceFeatureData
member: ActionLocation
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - features
related:
  - ISimulationForceFeatureData.ActionDirection
  - ISimulationForceFeatureData.ActionType
  - ISimulationForceFeatureData.ReactionLocation
keywords:
  - actionlocation
  - isimulationforcefeaturedata
  - simulation
  - force
  - feature
  - data
  - action
  - location
  - object
  - create
  - vba
readonly: null
---

# ISimulationForceFeatureData.ActionLocation

Gets or sets the location at which to apply the force for an action-only force.

## Signature

```csharp
System.Object ActionLocation {get; set;}
```
## Parameters

None.

## Return Value

Vertex, circular edge, or linear edge to define the points at which the moment is applied

## Examples

- Create Force Feature (VBA) (Create_Force_Feature_Example_VB.htm)

## See Also

- `ISimulationForceFeatureData.ActionDirection`
- `ISimulationForceFeatureData.ActionType`
- `ISimulationForceFeatureData.ReactionLocation`