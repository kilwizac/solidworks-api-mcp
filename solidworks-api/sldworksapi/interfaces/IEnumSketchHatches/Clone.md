---
type: method
interface: IEnumSketchHatches
member: Clone
returns: void
parameters:
  -
    name: Ppenum
    type: EnumSketchHatches
    description: Pointer to the cloned sketch hatches enumeration
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - sketches
related: []
keywords:
  - clone
  - ienumsketchhatches
  - sketch
  - hatches
  - ppenum
  - void
---

# IEnumSketchHatches.Clone

Clones the sketch hatches enumeration.

## Signature

```csharp
void Clone( 
   out EnumSketchHatches
Ppenum
)
```
## Parameters

- `Ppenum` (EnumSketchHatches): Pointer to the cloned sketch hatches enumeration

## Return Value

Unknown.

## Remarks

For use in in-process DLLs only.