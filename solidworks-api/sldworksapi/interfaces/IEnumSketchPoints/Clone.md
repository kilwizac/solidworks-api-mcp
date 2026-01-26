---
type: method
interface: IEnumSketchPoints
member: Clone
returns: void
parameters:
  -
    name: Ppenum
    type: EnumSketchPoints
    description: Pointer to the cloned sketch points enumeration
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - sketches
related: []
keywords:
  - clone
  - ienumsketchpoints
  - sketch
  - points
  - ppenum
  - void
---

# IEnumSketchPoints.Clone

Clones the sketch points enumeration.

## Signature

```csharp
void Clone( 
   out EnumSketchPoints
Ppenum
)
```
## Parameters

- `Ppenum` (EnumSketchPoints): Pointer to the cloned sketch points enumeration

## Return Value

Unknown.

## Remarks

For use in in-process DLLs only.