---
type: method
interface: ISketchManager
member: CreateSketchSlot
returns: SketchSlot
parameters:
  -
    name: SlotCreationType
    type: System.Int32
    description: Type of sketch slot as defined in swSketchSlotCreationType_e
  -
    name: SlotLengthType
    type: System.Int32
    description: Type of length of sketch slot as defined in swSketchSlotLengthType_e
  -
    name: Width
    type: System.Double
    description: Width of sketch slot
  -
    name: X1
    type: System.Double
    description: x coordinate of point 1
  -
    name: Y1
    type: System.Double
    description: y coordinate of point 1
  -
    name: Z1
    type: System.Double
    description: z coordinate of point 2
  -
    name: X2
    type: System.Double
    description: x coordinate of point 2
  -
    name: Y2
    type: System.Double
    description: y coordinate of point 2
  -
    name: Z2
    type: System.Double
    description: z coordinate of point 2
  -
    name: X3
    type: System.Double
    description: x coordinate of point 3
  -
    name: Y3
    type: System.Double
    description: y coordinate of point 3
  -
    name: Z3
    type: System.Double
    description: z coordinate of point 3
  -
    name: CenterArcDirection
    type: System.Int32
    description: -1 = Clockwise (CW) 1 = Counterclockwise (CCW)
  -
    name: AddDimension
    type: System.Boolean
    description: True to automatically add dimensions, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related: []
keywords:
  - sketchslot
  - see
  - isketchslot
  - sketch
  - also
  - isketch
  - slot
  - createsketchslot
  - isketchmanager
  - manager
  - create
  - creation
  - type
  - int32
  - length
  - width
  - double
  - x1
  - y1
  - z1
  - x2
  - y2
  - z2
  - x3
  - y3
  - z3
  - center
  - arc
  - direction
  - add
  - dimension
  - boolean
  - insert
  - resize
  - vb
  - net
  - vba
---

# ISketchManager.CreateSketchSlot

Creates a sketch slot.

## Signature

```csharp
SketchSlot CreateSketchSlot( 
   System.Int32
SlotCreationType
,
   System.Int32
SlotLengthType
,
   System.Double
Width
,
   System.Double
X1
,
   System.Double
Y1
,
   System.Double
Z1
,
   System.Double
X2
,
   System.Double
Y2
,
   System.Double
Z2
,
   System.Double
X3
,
   System.Double
Y3
,
   System.Double
Z3
,
   System.Int32
CenterArcDirection
,
   System.Boolean
AddDimension
)
```
## Parameters

- `SlotCreationType` (System.Int32): Type of sketch slot as defined in swSketchSlotCreationType_e
- `SlotLengthType` (System.Int32): Type of length of sketch slot as defined in swSketchSlotLengthType_e
- `Width` (System.Double): Width of sketch slot
- `X1` (System.Double): x coordinate of point 1
- `Y1` (System.Double): y coordinate of point 1
- `Z1` (System.Double): z coordinate of point 2
- `X2` (System.Double): x coordinate of point 2
- `Y2` (System.Double): y coordinate of point 2
- `Z2` (System.Double): z coordinate of point 2
- `X3` (System.Double): x coordinate of point 3
- `Y3` (System.Double): y coordinate of point 3
- `Z3` (System.Double): z coordinate of point 3
- `CenterArcDirection` (System.Int32): -1 = Clockwise (CW) 1 = Counterclockwise (CCW)
- `AddDimension` (System.Boolean): True to automatically add dimensions, false to not

## Return Value

Sketch slot

## Examples

- Insert and Resize Sketch Slot (C#) (Insert_and_Resize_Sketch_Slot_Example_CSharp.htm)
- Insert and Resize Sketch Slot (VB.NET) (Insert_and_Resize_Sketch_Slot_Example_VBNET.htm)
- Insert and Resize Sketch Slot (VBA) (Insert_and_Resize_Sketch_Slot_Example_VB.htm)