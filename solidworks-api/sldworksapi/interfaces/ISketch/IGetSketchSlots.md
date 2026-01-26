---
type: method
interface: ISketch
member: IGetSketchSlots
returns: SketchSlot
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of sketch slots in this sketch
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketch.GetSketchSlots
keywords:
  - sketch
  - see
  - also
  - isketch
  - slot
  - igetsketchslots
  - slots
  - count
  - int32
---

# ISketch.IGetSketchSlots

Gets the sketch slots in this sketch.

## Signature

```csharp
SketchSlot IGetSketchSlots( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of sketch slots in this sketch

## Return Value

in-process, unmanaged C++: Pointer to an array of sketch slots VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling htis method, call
ISketch::GetSketchSlotCount
to get Count.

## See Also

- `ISketch.GetSketchSlots`