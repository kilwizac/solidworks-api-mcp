---
type: method
interface: IExplodeStep
member: GetSubAssemblyExplodeSteps
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related: []
keywords:
  - exploded
  - views
  - subassemblies
  - getsubassemblyexplodesteps
  - iexplodestep
  - explode
  - step
  - sub
  - assembly
  - steps
  - object
---

# IExplodeStep.GetSubAssemblyExplodeSteps

Gets the explode steps of this subassembly explode step.

## Signature

```csharp
System.Object GetSubAssemblyExplodeSteps()
```
## Parameters

None.

## Return Value

Array of IExplodeSteps in the subassembly explode view

## Remarks

A subassembly explode step is created when you click
Reuse Subassembly Explode
on the Explode PropertyManager. This method retrieves the nested explode steps of the subassembly.
This method is valid only if
IExplodeStep::ExplodeStepType
returns
swAssemblyExplodeStepType_e
.swAssemblyExplodeStepType_SubAssembly.

## Examples

- IExplodeStep (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IExplodeStep)