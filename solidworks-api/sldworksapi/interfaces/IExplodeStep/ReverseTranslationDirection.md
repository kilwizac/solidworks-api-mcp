---
type: property
interface: IExplodeStep
member: ReverseTranslationDirection
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related: []
keywords:
  - reversetranslationdirection
  - iexplodestep
  - explode
  - step
  - reverse
  - translation
  - direction
  - boolean
readonly: null
---

# IExplodeStep.ReverseTranslationDirection

Gets or sets whether to reverse the explode direction in this regular explode step.

## Signature

```csharp
System.Boolean ReverseTranslationDirection {get; set;}
```
## Parameters

None.

## Return Value

True to reverse the explode direction, false to not

## Remarks

This property is valid only if
IExplodeStep::ExplodeStepType
is set to
swAssemblyExplodeStepType_e
.swAssemblyExplodeStepType_Translate.

## Examples

- IExplodeStep (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IExplodeStep)