---
type: method
interface: IEnumSketchPoints
member: Next
returns: void
parameters:
  -
    name: Celt
    type: System.Int32
    description: Number of sketch points for the sketch points enumeration
  -
    name: Rgelt
    type: SketchPoint
    description: Pointer to an array of sketch points of size Celt
  -
    name: PceltFetched
    type: System.Int32
    description: Pointer to the number of sketch points returned from the list; this value can be less than celt if you ask for more sketch points than exist, or it can be NULL if no more sketch points exist
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - sketches
related: []
keywords:
  - next
  - ienumsketchpoints
  - sketch
  - points
  - celt
  - int32
  - rgelt
  - point
  - pcelt
  - fetched
  - void
---

# IEnumSketchPoints.Next

Gets the next sketch point in the sketch points enumeration.

## Signature

```csharp
void Next( 
   System.Int32
Celt
,
   out SketchPoint
Rgelt
,
   out System.Int32
PceltFetched
)
```
## Parameters

- `Celt` (System.Int32): Number of sketch points for the sketch points enumeration
- `Rgelt` (SketchPoint): Pointer to an array of sketch points of size Celt
- `PceltFetched` (System.Int32): Pointer to the number of sketch points returned from the list; this value can be less than celt if you ask for more sketch points than exist, or it can be NULL if no more sketch points exist

## Return Value

Unknown.

## Remarks

For use in in-process DLLs only.