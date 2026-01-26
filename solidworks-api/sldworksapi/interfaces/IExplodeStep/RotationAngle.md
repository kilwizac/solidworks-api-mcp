---
type: property
interface: IExplodeStep
member: RotationAngle
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related: []
keywords:
  - rotationangle
  - iexplodestep
  - explode
  - step
  - rotation
  - angle
  - double
readonly: null
---

# IExplodeStep.RotationAngle

Gets or sets the angle of component rotation in this regular or radial explode step.

## Signature

```csharp
System.Double RotationAngle {get; set;}
```
## Parameters

None.

## Return Value

Angle in radians of component rotation

## Remarks

If
IExplodeStep::AutoSpaceComponentsOnDrag
is set to true, then this property is automatically 0.0.
If
IExplodeStep::ExplodeStepType
is set to
swAssemblyExplodeStepType_e
:
swAssemblyExplodeStepType_Radial, then this property sets the degree of rotation of components about their origins.
swAssemblyExplodeStepType_Translate, then this property sets the degree of rotation of components about the rotation axis.

## Examples

- IExplodeStep (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IExplodeStep)