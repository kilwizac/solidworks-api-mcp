---
type: method
interface: ISketchManager
member: ExplodeSketchBlockInstance
returns: void
parameters:
  -
    name: LpSketchBlockInstance
    type: SketchBlockInstance
    description: Block instance to explode
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchBlockInstance
keywords:
  - blocks
  - see
  - also
  - isketchblockdefinition
  - isketchblockinstance
  - interfaces
  - instances
  - sketch
  - isketch
  - explodesketchblockinstance
  - isketchmanager
  - manager
  - explode
  - block
  - instance
  - lp
  - void
---

# ISketchManager.ExplodeSketchBlockInstance

Explodes the specified block instance.

## Signature

```csharp
void ExplodeSketchBlockInstance( 
   SketchBlockInstance
LpSketchBlockInstance
)
```
## Parameters

- `LpSketchBlockInstance` (SketchBlockInstance): Block instance to explode

## Return Value

Unknown.

## Remarks

If this is the only or last block instance, then:
All sketch entities in the block instances are copied to the owning sketch of the block instance.
Source block definition is destroyed.
See
Block Definitions and Block Instances
for details.

## See Also

- `ISketchBlockInstance`