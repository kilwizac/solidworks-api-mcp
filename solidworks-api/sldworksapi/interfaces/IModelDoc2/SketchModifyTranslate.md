---
type: method
interface: IModelDoc2
member: SketchModifyTranslate
returns: void
parameters:
  -
    name: StartX
    type: System.Double
    description: X sketch value defining the from-position
  -
    name: StartY
    type: System.Double
    description: Y sketch value defining the from-position
  -
    name: EndX
    type: System.Double
    description: X sketch value defining the to-position
  -
    name: EndY
    type: System.Double
    description: Y sketch value defining the to-position
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - sketches
  - ui
related:
  - IModelDoc2.ToolsSketchTranslate
keywords:
  - coordinate
  - sketch
  - see
  - also
  - isketch
  - translate
  - origin
  - sketchmodifytranslate
  - imodeldoc2
  - model
  - doc2
  - modify
  - start
  - double
  - end
  - void
  - vba
  - vb
  - net
---

# IModelDoc2.SketchModifyTranslate

Translates the coordinate system of the active or selected sketch.

## Signature

```csharp
void SketchModifyTranslate( 
   System.Double
StartX
,
   System.Double
StartY
,
   System.Double
EndX
,
   System.Double
EndY
)
```
## Parameters

- `StartX` (System.Double): X sketch value defining the from-position
- `StartY` (System.Double): Y sketch value defining the from-position
- `EndX` (System.Double): X sketch value defining the to-position
- `EndY` (System.Double): Y sketch value defining the to-position

## Return Value

The sketch is translated from the XY start point position to the XY end point position.

## Examples

- Translate Sketch (VBA) (Translate_Sketch_Example_VB.htm)
- Translate Sketch (VB.NET) (Translate_Sketch_Example_VBNET.htm)
- Translate Sketch (C#) (Translate_Sketch_Example_CSharp.htm)

## See Also

- `IModelDoc2.ToolsSketchTranslate`