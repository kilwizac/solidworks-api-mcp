---
type: method
interface: ISketchSegment
member: Select4
returns: System.Boolean
parameters:
  -
    name: Append
    type: System.Boolean
    description: True to append this selection to the selection list, false to replace the selection list with this selection
  -
    name: Data
    type: SelectData
    description: ISelectData object
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - selections
  - sketches
related: []
keywords:
  - select4
  - isketchsegment
  - sketch
  - segment
  - append
  - boolean
  - data
  - select
  - all
  - segments
  - drawing
  - template
  - vba
  - axis
  - revolve
  - feature
  - insert
  - coordinate
  - center
  - mass
  - create
  - path
  - vb
  - net
  - rotate
  - copy
  - 3d
  - about
  - coordinates
---

# ISketchSegment.Select4

Selects this sketch segment and marks it.

## Signature

```csharp
System.Boolean Select4( 
   System.Boolean
Append
,
   SelectData
Data
)
```
## Parameters

- `Append` (System.Boolean): True to append this selection to the selection list, false to replace the selection list with this selection
- `Data` (SelectData): ISelectData object

## Return Value

True if the sketch segment is selected, false if not

## Examples

- Get All Sketch Segments in Drawing Template (VBA) (Get_All_Sketch_Segments_in_Drawing_Template_Example_VB.htm)
- Get Axis of Revolve Feature (VBA) (Get_Axis_of_Revolve_Feature_Example_VB.htm)
- Insert Coordinate System at Center of Mass (VBA) (Insert_Coordinate_System_at_Center_of_Mass_Example_VB.htm)
- Create Sketch Path (C#) (Create_Sketch_Path_Example_CSharp.htm)
- Create Sketch Path (VB.NET) (Create_Sketch_Path_Example_VBNET.htm)
- Create Sketch Path (VBA) (Create_Sketch_Path_Example_VB.htm)
- Rotate and Copy 3D Sketch About Coordinates (C#) (Rotate_and_Copy_3D_Sketch_About_Coordinates_Example_CSharp.htm)
- Rotate and Copy 3D Sketch About Coordinates (VB.NET) (Rotate_and_Copy_3D_Sketch_About_Coordinates_Example_VBNET.htm)
- Rotate and Copy 3D Sketch About Coordinates (VBA) (Rotate_and_Copy_3D_Sketch_About_Coordinates_Example_VB.htm)