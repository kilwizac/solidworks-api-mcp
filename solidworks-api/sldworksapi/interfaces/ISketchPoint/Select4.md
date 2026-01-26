---
type: method
interface: ISketchPoint
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
related:
  - ISketchPoint.DeSelect
keywords:
  - selection
  - see
  - also
  - iselectionmgr
  - point
  - select4
  - isketchpoint
  - sketch
  - append
  - boolean
  - data
  - select
  - create
  - plane
  - thru
  - points
  - context
  - vba
  - reference
  - wizard
  - hole
  - insert
  - coordinate
  - center
  - mass
  - dxf
  - file
  - add
  - dimension
  - mark
  - vb
  - net
  - relations
---

# ISketchPoint.Select4

Selects the sketch point and marks it.

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

True if the sketch point is selected, false if not

## Examples

- Create Plane Thru 3 Points In-context (VBA) (Create_Plane_Thru_3_Points_In-context_Example_VB.htm)
- Get Reference Point Data (VBA) (Get_Reference_Point_Data_Example_VB.htm)
- Get Sketch Points in Wizard Hole (VBA) (Get_Sketch_Points_in_Wizard_Hole_Example_VB.htm)
- Insert Coordinate System at Center of Mass (VBA) (Insert_Coordinate_System_at_Center_of_Mass_Example_VB.htm)
- Insert DXF File and Add Dimension (VBA) (Insert_DXF_File_and_Add_Dimension_Example_VB.htm)
- Get Sketch Point's Selection Mark (C#) (Get_Sketch_Points_Selection_Mark_Example_CSharp.htm)
- Get Sketch Point's Selection Mark (VB.NET) (Get_Sketch_Points_Selection_Mark_Example_VBNET.htm)
- Get Sketch Point's Selection Mark (VBA) (Get_Sketch_Points_Selection_Mark_Example_VB.htm)
- Get Sketch Relations (VBA) (Get_Sketch_Relations_Example_VB.htm)
- Get Sketch Relations (VB.NET) (Get_Sketch_Relations_Example_VBNET.htm)
- Get Sketch Relations (C#) (Get_Sketch_Relations_Example_CSharp.htm)

## See Also

- `ISketchPoint.DeSelect`