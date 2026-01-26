---
type: method
interface: IEnumCoEdges
member: Clone
returns: void
parameters:
  -
    name: Ppenum
    type: EnumCoEdges
    description: Pointer to the cloned coedges enumeration
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - geometry
related: []
keywords:
  - clone
  - ienumcoedges
  - co
  - edges
  - ppenum
  - void
---

# IEnumCoEdges.Clone

Clones the a coedges enumeration.

## Signature

```csharp
void Clone( 
   out EnumCoEdges
Ppenum
)
```
## Parameters

- `Ppenum` (EnumCoEdges): Pointer to the cloned coedges enumeration

## Return Value

Unknown.

## Remarks

For use in in-process DLLs only.