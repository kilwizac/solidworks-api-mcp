---
type: method
interface: IModelDoc2
member: EditSketch
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - sketches
  - ui
related:
  - IModelDoc2.EditSketchOrSingleSketchFeature
keywords:
  - edit
  - sketches
  - sketch
  - see
  - also
  - isketch
  - editsketch
  - imodeldoc2
  - model
  - doc2
  - void
  - autodimension
  - all
  - vba
  - delete
  - constraints
  - selected
  - insert
  - dxf
  - file
  - add
  - dimension
  - replace
  - text
  - create
  - circular
  - pattern
  - vb
  - net
---

# IModelDoc2.EditSketch

Allows the currently selected sketch to be edited.

## Signature

```csharp
void EditSketch()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

This method corresponds to
SOLIDWORKS menu > Edit > Sketch
. If the selection is a feature, its underlying sketch is placed in edit mode.
After a sketch is in edit mode, you can add or delete geometry from the sketch and perform other standard sketch operations.

## Examples

- Autodimension All Sketches (VBA) (Autodimension_All_Sketches_Example_VB.htm)
- Delete All Constraints in Selected Sketch (VBA) (Delete_All_Constraints_in_Selected_Sketch_Example_VB.htm)
- Get Sketch Constraints (VBA) (Get_Sketch_Constraints_Example_VB.htm)
- Insert DXF File and Add Dimension (VBA) (Insert_DXF_File_and_Add_Dimension_Example_VB.htm)
- Replace Sketch Text (VBA) (Replace_Sketch_Text_Example_VB.htm)
- Create and Edit Circular Sketch Pattern (VB.NET) (Create_and_Edit_Circular_Sketch_Pattern_Example_VBNET.htm)
- Create and Edit Circular Sketch Pattern (C#) (Create_and_Edit_Circular_Sketch_Pattern_Example_CSharp.htm)
- Create and Edit Circular Sketch Pattern (VBA) (Create_and_Edit_Circular_Sketch_Pattern_Example_VB.htm)

## See Also

- `IModelDoc2.EditSketchOrSingleSketchFeature`