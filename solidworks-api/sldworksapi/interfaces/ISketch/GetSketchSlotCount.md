---
type: method
interface: ISketch
member: GetSketchSlotCount
returns: System.Int32
parameters: []
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
  - getsketchslotcount
  - count
  - int32
  - data
  - vba
---

# ISketch.GetSketchSlotCount

Gets the number of sketch slots in this sketch.

## Signature

```csharp
System.Int32 GetSketchSlotCount()
```
## Parameters

None.

## Return Value

Number of sketch slots in this sketch

## Remarks

Call this method before calling
ISketch::IGetSketchSlots
to determine the size of the array for that method.

## Examples

- Get Sketch Slot Data (VBA) (Get_Sketch_Slot_Data_Example_vb.htm)

## See Also

- `ISketch.GetSketchSlots`