---
type: method
interface: ISketch
member: GetSketchPoints2
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketch.GetUserPoints2
  - ISketch.GetUserPointsCount
  - ISketch.IEnumSketchPoints
  - ISketch.IGetSketchPoints2
  - ISketch.IGetUserPoints2
  - ISketch.MergePoints
  - ISketchPoint
keywords:
  - sketch
  - points
  - see
  - also
  - isketchpoint
  - isketch
  - entities
  - getsketchpoints2
  - points2
  - object
  - delete
  - all
  - constraints
  - selected
  - vba
  - their
  - persistent
  - ids
  - locations
  - insert
  - dxf
  - file
  - add
  - dimension
  - transform
  - model
  - autodimension
  - sketches
  - vb
  - net
---

# ISketch.GetSketchPoints2

Gets the sketch points in this sketch.

## Signature

```csharp
System.Object GetSketchPoints2()
```
## Parameters

None.

## Return Value

Array of sketch points in this sketch

## Remarks

The difference between this method and the now obsolete method
ISketch::GetSketchPoints
is that this method does not return sketch points intended for internal SOLIDWORKS use only.

## Examples

- Delete All Constraints in Selected Sketch (VBA) (Delete_All_Constraints_in_Selected_Sketch_Example_VB.htm)
- Get Sketch Points and Their Persistent IDs (VBA) (Get_Sketch_Points_and_Their_Persistent_IDs_Example_VB.htm)
- Get Sketch Points (VBA) (Get_Sketch_Points_Example_VB.htm)
- Get x,y,z Locations of Points in Sketch (VBA) (Get_x,y,z_Locations_of_Points_in_Sketch_Example_VB.htm)
- Insert DXF File and Add Dimension (VBA) (Insert_DXF_File_and_Add_Dimension_Example_VB.htm)
- Transform Sketch to Model (VBA) (Transform_Sketch_to_Model_Example_VB.htm)
- Autodimension All Sketches (C#) (Autodimension_All_Sketches_Example_CSharp.htm)
- Autodimension All Sketches (VB.NET) (Autodimension_All_Sketches_Example_VBNET.htm)
- Autodimension All Sketches (VBA) (Autodimension_All_Sketches_Example_VB.htm)

## See Also

- `ISketch.GetUserPoints2`
- `ISketch.GetUserPointsCount`
- `ISketch.IEnumSketchPoints`
- `ISketch.IGetSketchPoints2`
- `ISketch.IGetUserPoints2`
- `ISketch.MergePoints`
- `ISketchPoint`