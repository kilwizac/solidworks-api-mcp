---
type: property
interface: IExplodeStep
member: RotateAboutEachComponentOrigin
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related: []
keywords:
  - rotateabouteachcomponentorigin
  - iexplodestep
  - explode
  - step
  - rotate
  - about
  - each
  - component
  - origin
  - boolean
readonly: null
---

# IExplodeStep.RotateAboutEachComponentOrigin

Gets or sets whether components rotate about their origins in this regular explode step.

## Signature

```csharp
System.Boolean RotateAboutEachComponentOrigin {get; set;}
```
## Parameters

None.

## Return Value

True if components rotate about their origins, false if not

## Remarks

If
IExplodeStep::AutoSpaceComponentsOnDrag
is set to true, then this property is automatically false.
This property is valid only if
IExplodeStep::ExplodeStepType
is set to
swAssemblyExplodeStepType_e
.swAssemblyExplodeStepType_Translate.
If this property is set to true, then the rotation axis is automatically populated.

## Examples

- IExplodeStep (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IExplodeStep)