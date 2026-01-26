---
type: method
interface: ISketchManager
member: SketchReplace2
returns: System.Boolean
parameters:
  -
    name: MakeConstruction
    type: System.Boolean
    description: True to convert the replaced sketch entity to construction geometry, false to delete it
  -
    name: MakeContour
    type: System.Boolean
    description: True to make the replacement sketch entity a contour, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related: []
keywords:
  - sketch
  - entities
  - replace
  - sketchreplace2
  - isketchmanager
  - manager
  - replace2
  - make
  - construction
  - boolean
  - contour
  - entity
  - vba
  - vb
  - net
---

# ISketchManager.SketchReplace2

Replaces a sketch entity in a model with another sketch entity, preserving all references.

## Signature

```csharp
System.Boolean SketchReplace2( 
   System.Boolean
MakeConstruction
,
   System.Boolean
MakeContour
)
```
## Parameters

- `MakeConstruction` (System.Boolean): True to convert the replaced sketch entity to construction geometry, false to delete it
- `MakeContour` (System.Boolean): True to make the replacement sketch entity a contour, false to not

## Return Value

True if the the sketch entity is successfully replaced, false if not

## Remarks

Before calling this method, call
IModelDocExtension::SelectByID2
with Append set to true to select each of the following entities:
Sketch entity to be replaced.
Replacement sketch entity that does not reference downstream geometry or have references outside of the sketch.
After calling this method, call
ISketchManager::InsertSketch
to rebuild the model with the replacement sketch.

## Examples

- Replace Sketch Entity (VBA) (Replace_Sketch_Example_VB.htm)
- Replace Sketch Entity (VB.NET) (Replace_Sketch_Example_VBNET.htm)
- Replace Sketch Entity (C#) (Replace_Sketch_Example_CSharp.htm)