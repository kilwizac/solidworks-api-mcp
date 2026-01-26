---
type: method
interface: IExplodeStep
member: SetRotationAxis
returns: void
parameters:
  -
    name: RotationAxis
    type: System.Object
    description: Rotation axis entity
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
  - IExplodeStep.GetRotationAxis
keywords:
  - setrotationaxis
  - iexplodestep
  - explode
  - step
  - rotation
  - axis
  - object
  - rot
  - index
  - int32
  - void
---

# IExplodeStep.SetRotationAxis

Sets the rotation axis (manipulator index and entity) for this regular explode step.

## Signature

```csharp
void SetRotationAxis( 
   System.Object
RotationAxis
,
   System.Int32
RotAxisIndex
)
```
## Parameters

- `RotationAxis` (System.Object): Rotation axis entity
- `RotAxisIndex` (System.Int32): Rotation manipulator index as defined in swRotationAxisIndex_e

## Return Value

Unknown.

## See Also

- `IExplodeStep.GetRotationAxis`