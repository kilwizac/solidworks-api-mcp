---
type: method
interface: ISketchManager
member: Insert3DSketch
returns: void
parameters:
  -
    name: UpdateEditRebuild
    type: System.Boolean
    description: True if you want to edit and rebuild, false if not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchManager.AddToDB
  - ISketchManager.CreateSketchPlane
  - ISketchManager.DisplayWhenAdded
  - ISketchManager.InsertExplodeLineSketch
  - ISketchSegment.JogLine
keywords:
  - 3d
  - sketches
  - sketch
  - see
  - also
  - isketch
  - insert3dsketch
  - isketchmanager
  - manager
  - insert3
  - update
  - edit
  - rebuild
  - boolean
  - void
  - insert
  - explode
  - line
  - jog
  - vb
  - net
  - vba
---

# ISketchManager.Insert3DSketch

Inserts a new 3D sketch in a model or closes the active sketch.

## Signature

```csharp
void Insert3DSketch( 
   System.Boolean
UpdateEditRebuild
)
```
## Parameters

- `UpdateEditRebuild` (System.Boolean): True if you want to edit and rebuild, false if not

## Return Value

Unknown.

## Examples

- Insert Explode Line Sketch and Jog Line (VB.NET) (Insert_Explode_Line_Sketch_and_Jog_Line_Example_VBNET.htm)
- Insert Explode Line Sketch and Jog Line (VBA) (Insert_Explode_Line_Sketch_and_Jog_Line_Example_VB.htm)
- Insert Explode Line Sketch and Jog Line (C#) (Insert_Explode_Line_Sketch_and_Jog_Line_Example_CSharp.htm)

## See Also

- `ISketchManager.AddToDB`
- `ISketchManager.CreateSketchPlane`
- `ISketchManager.DisplayWhenAdded`
- `ISketchManager.InsertExplodeLineSketch`
- `ISketchSegment.JogLine`