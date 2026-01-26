---
type: method
interface: IModelDoc2
member: SketchModifyScale
returns: System.Boolean
parameters:
  -
    name: ScaleFactor
    type: System.Double
    description: Amount by which to scale sketch
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - sketches
  - ui
related:
  - IModelDoc2.ToolsSketchScale
keywords:
  - scale
  - see
  - also
  - iscalefeaturedata
  - sketches
  - sketch
  - isketch
  - sketchmodifyscale
  - imodeldoc2
  - model
  - doc2
  - modify
  - factor
  - double
  - boolean
  - rotate
  - copy
  - vb
  - net
  - vba
---

# IModelDoc2.SketchModifyScale

Scales the active or selected sketch.

## Signature

```csharp
System.Boolean SketchModifyScale( 
   System.Double
ScaleFactor
)
```
## Parameters

- `ScaleFactor` (System.Double): Amount by which to scale sketch

## Return Value

True if successful, false if not

## Examples

- Rotate, Scale, and Copy Sketch (C#) (Rotate_Scale_Copy_Sketch_Example_CSharp.htm)
- Rotate, Scale, and Copy Sketch (VB.NET) (Rotate_Scale_Copy_Sketch_Example_VBNET.htm)
- Rotate, Scale, and Copy Sketch (VBA) (Rotate_Scale_Copy_Sketch_Example_VB.htm)

## See Also

- `IModelDoc2.ToolsSketchScale`