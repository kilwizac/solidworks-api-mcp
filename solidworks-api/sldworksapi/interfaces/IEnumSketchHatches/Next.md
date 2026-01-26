---
type: method
interface: IEnumSketchHatches
member: Next
returns: void
parameters:
  -
    name: Celt
    type: System.Int32
    description: Number of sketch hatches for this sketch hatch enumeration
  -
    name: Rgelt
    type: SketchHatch
    description: Pointer to an array of sketch hatches of size Celt
  -
    name: PceltFetched
    type: System.Int32
    description: Pointer to the number of sketch hatches returned from the list; this value can be less than celt if you ask for more SketchHatch objects than exist, or it can be NULL if no more SketchHatch objects exist
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - sketches
related: []
keywords:
  - next
  - ienumsketchhatches
  - sketch
  - hatches
  - celt
  - int32
  - rgelt
  - hatch
  - pcelt
  - fetched
  - void
---

# IEnumSketchHatches.Next

Gets the next sketch hatch in the sketch hatch enumeration.

## Signature

```csharp
void Next( 
   System.Int32
Celt
,
   out SketchHatch
Rgelt
,
   out System.Int32
PceltFetched
)
```
## Parameters

- `Celt` (System.Int32): Number of sketch hatches for this sketch hatch enumeration
- `Rgelt` (SketchHatch): Pointer to an array of sketch hatches of size Celt
- `PceltFetched` (System.Int32): Pointer to the number of sketch hatches returned from the list; this value can be less than celt if you ask for more SketchHatch objects than exist, or it can be NULL if no more SketchHatch objects exist

## Return Value

Unknown.

## Remarks

For use in in-process DLLs only.