---
type: property
interface: IExplodeStep
member: ReverseRotationDirection
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related: []
keywords:
  - reverserotationdirection
  - iexplodestep
  - explode
  - step
  - reverse
  - rotation
  - direction
  - boolean
readonly: null
---

# IExplodeStep.ReverseRotationDirection

Gets or sets whether to reverse the direction of rotation of components in this regular explode step.

## Signature

```csharp
System.Boolean ReverseRotationDirection {get; set;}
```
## Parameters

None.

## Return Value

True to reverse the direction of rotation of components, false to not

## Remarks

This property is valid only if
IExplodeStep::ExplodeStepType
is set to
swAssemblyExplodeStepType_e
.swAssemblyExplodeStepType_Translate.

## Examples

- IExplodeStep (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IExplodeStep)