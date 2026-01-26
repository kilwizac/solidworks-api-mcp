---
type: method
interface: IExplodeStep
member: GetRotationAxis
returns: System.Object
parameters:
  -
    name: RotAxisIndex
    type: System.Int32
    description: Rotation manipulator index as defined in swRotationAxisIndex_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IExplodeStep.SetRotationAxis
keywords:
  - getrotationaxis
  - iexplodestep
  - explode
  - step
  - rotation
  - axis
  - rot
  - index
  - int32
  - object
---

# IExplodeStep.GetRotationAxis

Gets the rotation axis (manipulator index and entity) for this regular explode step.

## Signature

```csharp
System.Object GetRotationAxis( 
   out System.Int32
RotAxisIndex
)
```
## Parameters

- `RotAxisIndex` (System.Int32): Rotation manipulator index as defined in swRotationAxisIndex_e

## Return Value

Rotation axis entity; Nothing or null if a rotation axis entity was not selected during creation of this explode step

## Remarks

This method is not valid for subassembly explode steps.

## See Also

- `IExplodeStep.SetRotationAxis`