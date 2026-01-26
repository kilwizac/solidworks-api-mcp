---
type: method
interface: IExplodeStep
member: SetExplodeDirection
returns: void
parameters:
  -
    name: ExplodeDirection
    type: System.Object
    description: Explode direction entity
  -
    name: ExplDirIndex
    type: System.Int32
    description: Explode direction manipulator index as defined in swExplodeDirectionIndex_e ; valid only for regular explode steps
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IExplodeStep.GetExplodeDirection
keywords:
  - setexplodedirection
  - iexplodestep
  - explode
  - step
  - direction
  - object
  - expl
  - dir
  - index
  - int32
  - void
---

# IExplodeStep.SetExplodeDirection

Sets the explode direction (manipulator index and entity) for this explode step.

## Signature

```csharp
void SetExplodeDirection( 
   System.Object
ExplodeDirection
,
   System.Int32
ExplDirIndex
)
```
## Parameters

- `ExplodeDirection` (System.Object): Explode direction entity
- `ExplDirIndex` (System.Int32): Explode direction manipulator index as defined in swExplodeDirectionIndex_e ; valid only for regular explode steps

## Return Value

Unknown.

## Examples

- IExplodeStep (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IExplodeStep)

## See Also

- `IExplodeStep.GetExplodeDirection`