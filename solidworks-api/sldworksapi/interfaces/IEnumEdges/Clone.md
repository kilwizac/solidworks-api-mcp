---
type: method
interface: IEnumEdges
member: Clone
returns: void
parameters:
  -
    name: Ppenum
    type: EnumEdges
    description: Pointer to the clones edges enumeration
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - geometry
related: []
keywords:
  - clone
  - ienumedges
  - edges
  - ppenum
  - void
---

# IEnumEdges.Clone

Clones the edges enumeration.

## Signature

```csharp
void Clone( 
   out EnumEdges
Ppenum
)
```
## Parameters

- `Ppenum` (EnumEdges): Pointer to the clones edges enumeration

## Return Value

Unknown.

## Remarks

For use in in-process DLLs only.