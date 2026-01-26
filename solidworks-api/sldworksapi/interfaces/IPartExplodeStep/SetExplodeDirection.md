---
type: method
interface: IPartExplodeStep
member: SetExplodeDirection
returns: void
parameters:
  -
    name: ExplodeDirection
    type: System.Object
    description: Explode direction entity (e.g., IEdge , IFace2 , IRefAxis )
  -
    name: ExplDirIndex
    type: System.Int32
    description: Explode direction manipulator index as defined in swExplodeDirectionIndex_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - parts
related:
  - IPartExplodeStep.GetExplodeDirection
keywords:
  - setexplodedirection
  - ipartexplodestep
  - part
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

# IPartExplodeStep.SetExplodeDirection

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

- `ExplodeDirection` (System.Object): Explode direction entity (e.g., IEdge , IFace2 , IRefAxis )
- `ExplDirIndex` (System.Int32): Explode direction manipulator index as defined in swExplodeDirectionIndex_e

## Return Value

Unknown.

## See Also

- `IPartExplodeStep.GetExplodeDirection`