---
type: method
interface: IEnumSketchSegments
member: Clone
returns: void
parameters:
  -
    name: Ppenum
    type: EnumSketchSegments
    description: Pointer to the cloned sketch segments enumeration
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - sketches
related: []
keywords:
  - clone
  - ienumsketchsegments
  - sketch
  - segments
  - ppenum
  - void
---

# IEnumSketchSegments.Clone

Clones the sketch segments enumeration.

## Signature

```csharp
void Clone( 
   out EnumSketchSegments
Ppenum
)
```
## Parameters

- `Ppenum` (EnumSketchSegments): Pointer to the cloned sketch segments enumeration

## Return Value

Unknown.

## Remarks

For use in in-process DLLs only.