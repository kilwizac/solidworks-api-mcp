---
type: property
interface: IExplodeStep
member: DivergeFromAxis
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related: []
keywords:
  - divergefromaxis
  - iexplodestep
  - explode
  - step
  - diverge
  - axis
  - boolean
readonly: null
---

# IExplodeStep.DivergeFromAxis

Gets or sets whether to move components at an angle from the explode direction of this radial explode step.

## Signature

```csharp
System.Boolean DivergeFromAxis {get; set;}
```
## Parameters

None.

## Return Value

True to move components at an angle from the explode direction, false to not (see Remarks )

## Remarks

This property is valid only if
IExplodeStep::ExplodeStepType
is set to
swAssemblyExplodeStepType_e
.swAssemblyExplodeStepType_Radial.
If you set this property to false, then
IExplodeStep::DivergeDirection
is automatically set to nothing or null.
If you want to set this property to true, then you must first set IExplodeStep::DivergeDirection to a valid diverge direction entity.

## Examples

- IExplodeStep (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IExplodeStep)