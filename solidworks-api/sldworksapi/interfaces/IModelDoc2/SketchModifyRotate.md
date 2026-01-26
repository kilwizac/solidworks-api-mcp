---
type: method
interface: IModelDoc2
member: SketchModifyRotate
returns: void
parameters:
  -
    name: CenterX
    type: System.Double
    description: X point to rotate about
  -
    name: CenterY
    type: System.Double
    description: Y point to rotate about
  -
    name: Angle
    type: System.Double
    description: Angle of rotation
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
  - rotate
  - sketchmodifyrotate
  - imodeldoc2
  - model
  - doc2
  - modify
  - center
  - double
  - angle
  - void
  - scale
  - copy
  - vb
  - net
  - vba
---

# IModelDoc2.SketchModifyRotate

Rotates the coordinate system of the active or selected sketch.

## Signature

```csharp
void SketchModifyRotate( 
   System.Double
CenterX
,
   System.Double
CenterY
,
   System.Double
Angle
)
```
## Parameters

- `CenterX` (System.Double): X point to rotate about
- `CenterY` (System.Double): Y point to rotate about
- `Angle` (System.Double): Angle of rotation

## Return Value

Unknown.

## Examples

- Rotate, Scale, and Copy Sketch (C#) (Rotate_Scale_Copy_Sketch_Example_CSharp.htm)
- Rotate, Scale, and Copy Sketch (VB.NET) (Rotate_Scale_Copy_Sketch_Example_VBNET.htm)
- Rotate, Scale, and Copy Sketch (VBA) (Rotate_Scale_Copy_Sketch_Example_VB.htm)