---
type: method
interface: IEnumSketchSegments
member: Next
returns: void
parameters:
  -
    name: Celt
    type: System.Int32
    description: Number of sketch segments for the sketch segments enumeration
  -
    name: Rgelt
    type: SketchSegment
    description: Pointer to an array of sketch segments of size Celt
  -
    name: PceltFetched
    type: System.Int32
    description: Pointer to the number of sketch segments returned from the list; this value can be less than celt if you ask for more sketch segments than exist, or it can be NULL if no more sketch segments exist
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - sketches
related: []
keywords:
  - next
  - ienumsketchsegments
  - sketch
  - segments
  - celt
  - int32
  - rgelt
  - segment
  - pcelt
  - fetched
  - void
  - select
  - all
---

# IEnumSketchSegments.Next

Gets the next sketch segment in the sketch segments enumeration.

## Signature

```csharp
void Next( 
   System.Int32
Celt
,
   out SketchSegment
Rgelt
,
   out System.Int32
PceltFetched
)
```
## Parameters

- `Celt` (System.Int32): Number of sketch segments for the sketch segments enumeration
- `Rgelt` (SketchSegment): Pointer to an array of sketch segments of size Celt
- `PceltFetched` (System.Int32): Pointer to the number of sketch segments returned from the list; this value can be less than celt if you ask for more sketch segments than exist, or it can be NULL if no more sketch segments exist

## Return Value

Unknown.

## Remarks

For use in in-process DLLs only.

## Examples

- Select All Sketch Segments (C++) (Select_All_Sketch_Segments_Example_CPlusPlus_COM.htm)