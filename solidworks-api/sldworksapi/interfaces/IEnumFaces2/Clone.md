---
type: method
interface: IEnumFaces2
member: Clone
returns: void
parameters:
  -
    name: Ppenum
    type: EnumFaces2
    description: Pointer to the cloned faces enumeration
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - geometry
related: []
keywords:
  - clone
  - ienumfaces2
  - faces2
  - ppenum
  - void
---

# IEnumFaces2.Clone

Clones the faces enumeration.

## Signature

```csharp
void Clone( 
   out EnumFaces2
Ppenum
)
```
## Parameters

- `Ppenum` (EnumFaces2): Pointer to the cloned faces enumeration

## Return Value

Unknown.

## Remarks

For use in in-process DLLs only.