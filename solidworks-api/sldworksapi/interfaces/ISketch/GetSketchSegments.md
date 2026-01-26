---
type: method
interface: ISketch
member: GetSketchSegments
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketch.GetSketchTextSegments
  - ISketch.IEnumSketchSegments
  - ISketch.IEnumSketchTextSegments
keywords:
  - sketch
  - entities
  - segments
  - see
  - also
  - isketch
  - isketchsegment
  - getsketchsegments
  - object
  - delete
  - all
  - constraints
  - selected
  - vba
  - find
  - total
  - length
  - elements
  - drawing
  - template
  - insert
  - dxf
  - file
  - add
  - dimension
  - spline
  - parameters
  - vb
  - net
  - rotate
  - copy
  - 3d
  - about
  - coordinates
---

# ISketch.GetSketchSegments

Gets the sketch segments in this sketch, which include line, arc, spline, parabola, and ellipse entities.

## Signature

```csharp
System.Object GetSketchSegments()
```
## Parameters

None.

## Return Value

Array of sketch segments , which include line, arc, spline, parabola, and ellipse entities, in this sketch (see Remarks )

## Remarks

If the sketch has errors, this method does not return all of the sketch segments.

## Examples

- Delete All Constraints in Selected Sketch (VBA) (Delete_All_Constraints_in_Selected_Sketch_Example_VB.htm)
- Find Total Length of Sketch Segments in Sketch (VBA) (Find_Total_Length_of_Sketch_Segments_in_Sketch_Example_VB.htm)
- Get All Elements of Sketch (VBA) (Get_All_Elements_of_Sketch_Example_VB.htm)
- Get All Sketch Segments in Drawing Template (VBA) (Get_All_Sketch_Segments_in_Drawing_Template_Example_VB.htm)
- Get Sketch Constraints (VBA) (Get_Sketch_Constraints_Example_VB.htm)
- Insert DXF File and Add Dimension (VBA) (Insert_DXF_File_and_Add_Dimension_Example_VB.htm)
- Get Spline's Parameters (C#) (Get_Spline's_Parameters_Example_CSharp.htm)
- Get Spline's Parameters (VB.NET) (Get_Spline's_Parameters_Example_VBNET.htm)
- Get Spline's Parameters (VBA) (Get_Spline's_Parameters_Example_VB.htm)
- Rotate and Copy 3D Sketch About Coordinates (C#) (Rotate_and_Copy_3D_Sketch_About_Coordinates_Example_CSharp.htm)
- Rotate and Copy 3D Sketch About Coordinates (VB.NET) (Rotate_and_Copy_3D_Sketch_About_Coordinates_Example_VBNET.htm)
- Rotate and Copy 3D Sketch About Coordinates (VBA) (Rotate_and_Copy_3D_Sketch_About_Coordinates_Example_VB.htm)

## See Also

- `ISketch.GetSketchTextSegments`
- `ISketch.IEnumSketchSegments`
- `ISketch.IEnumSketchTextSegments`