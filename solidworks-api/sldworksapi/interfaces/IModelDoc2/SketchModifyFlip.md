---
type: method
interface: IModelDoc2
member: SketchModifyFlip
returns: void
parameters:
  -
    name: AxisFlag
    type: System.Int32
    description: Axis about which to flip the sketch: X = 1 Y = 2
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - sketches
  - ui
related: []
keywords:
  - coordinate
  - sketch
  - see
  - also
  - isketch
  - flip
  - sketchmodifyflip
  - imodeldoc2
  - model
  - doc2
  - modify
  - axis
  - flag
  - int32
  - void
  - vba
  - vb
  - net
---

# IModelDoc2.SketchModifyFlip

Flips the the active or selected sketch about the specified coordinate system axis.

## Signature

```csharp
void SketchModifyFlip( 
   System.Int32
AxisFlag
)
```
## Parameters

- `AxisFlag` (System.Int32): Axis about which to flip the sketch: X = 1 Y = 2

## Return Value

Unknown.

## Examples

- Flip Sketch (VBA) (Flip_Sketch_Example_VB.htm)
- Flip Sketch (VB.NET) (Flip_Sketch_Example_VBNET.htm)
- Flip Sketch (C#) (Flip_Sketch_Example_CSharp.htm)