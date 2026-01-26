---
type: method
interface: IAssemblyDoc
member: GetPhysicalSimulationComponents
returns: void
parameters:
  -
    name: InDuration
    type: System.Double
    description: Total elapsed time for Physical Simulation
  -
    name: OutCount
    type: System.Int32
    description: Size for all returned arrays
  -
    name: OutComponents
    type: System.Object
    description: Array of the IComponent2 objects
  -
    name: OutTransforms
    type: System.Object
    description: Array of the IMathTransform objects
  -
    name: OutStepStartTimes
    type: System.Object
    description: Array of doubles of size outCount; when each step in the Physical Simulation should happen
  -
    name: OutStepDurations
    type: System.Object
    description: Array of doubles of size outCount; how long each step in the Physical Simulation should take
  -
    name: OutTotalPhysSimDuration
    type: System.Double
    description: Total elapsed time Physical Simulation should have taken
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related:
  - ISimulation
  - ISimulationGravityFeatureData
  - ISimulationLinearSpringFeatureData
  - ISimulationMotorFeatureData
keywords:
  - getphysicalsimulationcomponents
  - iassemblydoc
  - assembly
  - doc
  - physical
  - simulation
  - components
  - duration
  - double
  - out
  - count
  - int32
  - object
  - transforms
  - step
  - start
  - times
  - durations
  - total
  - phys
  - sim
  - void
---

# IAssemblyDoc.GetPhysicalSimulationComponents

Obsolete. Not superseded.

## Signature

```csharp
void GetPhysicalSimulationComponents( 
   System.Double
InDuration
,
   out System.Int32
OutCount
,
   out System.Object
OutComponents
,
   out System.Object
OutTransforms
,
   out System.Object
OutStepStartTimes
,
   out System.Object
OutStepDurations
,
   out System.Double
OutTotalPhysSimDuration
)
```
## Parameters

- `InDuration` (System.Double): Total elapsed time for Physical Simulation
- `OutCount` (System.Int32): Size for all returned arrays
- `OutComponents` (System.Object): Array of the IComponent2 objects
- `OutTransforms` (System.Object): Array of the IMathTransform objects
- `OutStepStartTimes` (System.Object): Array of doubles of size outCount; when each step in the Physical Simulation should happen
- `OutStepDurations` (System.Object): Array of doubles of size outCount; how long each step in the Physical Simulation should take
- `OutTotalPhysSimDuration` (System.Double): Total elapsed time Physical Simulation should have taken

## Return Value

Unknown.

## See Also

- `ISimulation`
- `ISimulationGravityFeatureData`
- `ISimulationLinearSpringFeatureData`
- `ISimulationMotorFeatureData`