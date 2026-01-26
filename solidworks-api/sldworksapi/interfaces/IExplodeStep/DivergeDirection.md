---
type: property
interface: IExplodeStep
member: DivergeDirection
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related: []
keywords:
  - divergedirection
  - iexplodestep
  - explode
  - step
  - diverge
  - direction
  - object
readonly: null
---

# IExplodeStep.DivergeDirection

Gets or sets the diverge direction entity for this radial explode step.

## Signature

```csharp
System.Object DivergeDirection {get; set;}
```
## Parameters

None.

## Return Value

Cylindrical face , conical face, linear edge , or axis (see Remarks )

## Remarks

This property is valid only if:
IExplodeStep::ExplodeStepType
is set to
swAssemblyExplodeStepType_e
.swAssemblyExplodeStepType_Radial,
- and -
the selected entity creates an angle with the explode direction.
If you set this property to a valid diverge direction entity, then
IExplodeStep::DivergeFromAxis
is automatically set to true.
If you set this property to Nothing or null, then IExplodeStep::DivergeFromAxis is automatically set to false.

## Examples

- IExplodeStep (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IExplodeStep)