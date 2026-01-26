---
type: method
interface: IView
member: GetName2
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.SetName2
keywords:
  - drawing
  - views
  - see
  - also
  - iview
  - names
  - view
  - name
  - getname2
  - name2
  - string
  - activate
  - each
  - current
  - sheet
  - vba
  - types
  - polylines
  - information
  - visible
  - components
  - entities
  - list
  - center
  - marks
  - number
  - lines
  - flat
  - pattern
  - boundary
  - box
  - sketch
  - vb
  - net
  - centerlines
---

# IView.GetName2

Gets the name of this drawing view displayed in the FeatureManager design tree.

## Signature

```csharp
System.String GetName2()
```
## Parameters

None.

## Return Value

Name of the drawing view

## Remarks

This method does not return unique names for section views. Call
IView::GetUniqueName
to get the unique name of a section view.

## Examples

- Activate Each View On Current Sheet (VBA) (Activate_Each_View_on_Current_Sheet_Example_VB.htm)
- Get Drawing View Names and Types (VBA) (Get_Drawing_View_Names_and_Types_Example_VB.htm)
- Get Polylines Information (VBA) (Get_Polylines_Information_Example_VB.htm)
- Get Visible Components and Entities in Drawing View (VBA) (Get_Visible_Components_and_Entities_in_Drawing_View_Example_VB.htm)
- List Center Marks in Drawing (VBA) (List_Center_Marks_in_Drawing_Example_VB.htm)
- Get the Number of Lines of Flat-pattern Drawing View's Boundary-box Sketch (C#) (Get_Number_of_Lines_Flat-pattern_Drawing_View_Boundary-box_Sketch_Example_CSharp.htm)
- Get the Number of Lines of Flat-pattern Drawing View's Boundary-box Sketch (VB.NET) (Get_Number_of_Lines_Flat-pattern_Drawing_View_Boundary-box_Sketch_Example_VBNET.htm)
- Get the Number of Lines of Flat-pattern Drawing View's Boundary-box Sketch (VBA) (Get_Number_of_Lines_Flat-pattern_Drawing_View_Boundary-box_Sketch_Example_VB.htm)
- Get Centerlines in Drawing (C#) (Get_Centerlines_in_Drawing_Example_CSharp.htm)
- Get Centerlines in Drawing (VB.NET) (Get_Centerlines_in_Drawing_Example_VBNET.htm)
- Get Centerlines In Drawing (VBA) (Get_Centerlines_in_Drawing_Example_VB.htm)

## See Also

- `IView.SetName2`