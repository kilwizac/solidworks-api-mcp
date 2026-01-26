---
type: method
interface: ISketchPoint
member: GetSketchSlot
returns: SketchSlot
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related: []
keywords:
  - sketch
  - points
  - see
  - also
  - isketchpoint
  - slot
  - getsketchslot
  - point
  - using
  - segment
  - vb
  - net
  - vba
---

# ISketchPoint.GetSketchSlot

Gets sketch slot with which this sketch point is associated.

## Signature

```csharp
SketchSlot GetSketchSlot()
```
## Parameters

None.

## Return Value

Sketch slot if the sketch point is associated with a sketch slot, or null if the sketch point is not associated with a sketch slot

## Remarks

Sketch slot information is independent of the sketch point type.
A sketch slot is returned if it is associated with the sketch point regardless if the sketch point is an internal point or a user point.

## Examples

- Get Sketch Slot Using Sketch Point and Segment (C#) (Get_Sketch_Slot_Using_Sketch_Point_and_Segment_Example_CSharp.htm)
- Get Sketch Slot Using Sketch Point and Segment (VB.NET) (Get_Sketch_Slot_Using_Sketch_Point_and_Segment_Example_VBNET.htm)
- Get Sketch Slot Using Sketch Point and Segment (VBA) (Get_Sketch_Slot_Using_Sketch_Point_and_Segment_Example_VB.htm)