---
type: method
interface: ISketchManager
member: InsertSketch
returns: void
parameters:
  -
    name: UpdateEditRebuild
    type: System.Boolean
    description: True to rebuild the part with any changes made to the sketch and exit sketch mode, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related: []
keywords:
  - insertsketch
  - isketchmanager
  - sketch
  - manager
  - insert
  - update
  - edit
  - rebuild
  - boolean
  - void
  - sheet
  - metal
  - edge
  - flange
  - vba
  - create
  - equation
  - driven
  - curve
  - vb
  - net
  - resize
  - slot
---

# ISketchManager.InsertSketch

Inserts a new sketch in the current part or assembly document.

## Signature

```csharp
void InsertSketch( 
   System.Boolean
UpdateEditRebuild
)
```
## Parameters

- `UpdateEditRebuild` (System.Boolean): True to rebuild the part with any changes made to the sketch and exit sketch mode, false to not

## Return Value

Unknown.

## Remarks

This method does not support drawing documents.

## Examples

- Insert Sheet Metal Edge Flange (VBA) (Insert_Sheet_Metal_Edge_Flange_Example_VB.htm)
- Create Equation-driven Curve (C#) (Create_Equation-driven_Curve_Example_CSharp.htm)
- Create Equation-driven Curve (VB.NET) (Create_Equation-driven_Curve_Example_VBNET.htm)
- Create Equation-driven Curve (VBA) (Create_Equation-driven_Curve_Example_VB.htm)
- Insert and Resize Sketch Slot (C#) (Insert_and_Resize_Sketch_Slot_Example_CSharp.htm)
- Insert and Resize Sketch Slot (VB.NET) (Insert_and_Resize_Sketch_Slot_Example_VBNET.htm)
- Insert and Resize Sketch Slot (VBA) (Insert_and_Resize_Sketch_Slot_Example_VB.htm)