---
type: method
interface: IExplodeStep
member: GetExplodeDirection
returns: System.Object
parameters:
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
  - IExplodeStep.SetExplodeDirection
keywords:
  - getexplodedirection
  - iexplodestep
  - explode
  - step
  - direction
  - expl
  - dir
  - index
  - int32
  - object
---

# IExplodeStep.GetExplodeDirection

Gets the explode direction (manipulator index and entity) for this explode step.

## Signature

```csharp
System.Object GetExplodeDirection( 
   out System.Int32
ExplDirIndex
)
```
## Parameters

- `ExplDirIndex` (System.Int32): Explode direction manipulator index as defined in swExplodeDirectionIndex_e ; valid only for regular explode steps

## Return Value

Explode direction entity; Nothing or null if an explode direction entity was not selected during creation of this explode step

## Remarks

This method is not valid for subassembly explode steps.

## See Also

- `IExplodeStep.SetExplodeDirection`