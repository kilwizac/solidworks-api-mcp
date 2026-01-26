---
type: method
interface: IPartExplodeStep
member: GetExplodeDirection
returns: System.Object
parameters:
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
  - IPartExplodeStep.SetExplodeDirection
keywords:
  - getexplodedirection
  - ipartexplodestep
  - part
  - explode
  - step
  - direction
  - expl
  - dir
  - index
  - int32
  - object
---

# IPartExplodeStep.GetExplodeDirection

Gets the explode direction (manipulator index and entity) for this explode step.

## Signature

```csharp
System.Object GetExplodeDirection( 
   out System.Int32
ExplDirIndex
)
```
## Parameters

- `ExplDirIndex` (System.Int32): Explode direction manipulator index as defined in swExplodeDirectionIndex_e

## Return Value

Explode direction entity (e.g., IEdge , IFace2 , IRefAxis ); Nothing or null if an explode direction entity was not selected during creation of this explode step

## See Also

- `IPartExplodeStep.SetExplodeDirection`