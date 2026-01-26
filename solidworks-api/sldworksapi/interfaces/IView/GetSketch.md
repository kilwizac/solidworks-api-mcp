---
type: method
interface: IView
member: GetSketch
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - sketches
  - ui
related:
  - IView.IGetSketch
keywords:
  - drawing
  - views
  - see
  - also
  - iview
  - sketch
  - view
  - isketch
  - getsketch
  - object
  - hatching
  - data
  - vba
  - polylines
  - information
  - point
  - insert
  - position
  - dxf
  - file
  - area
  - hatch
  - vb
  - net
---

# IView.GetSketch

Gets the sketch used by this view.

## Signature

```csharp
System.Object GetSketch()
```
## Parameters

None.

## Return Value

Sketch

## Remarks

Each drawing view contains an underlying sketch. The user can activate the sketch for a drawing view by double-clicking the view. Once the drawing view is active, you can add sketch directly to the view's sketch.

## Examples

- Get Hatching Data (VBA) (Get_Hatching_Data_Example_VB.htm)
- Get Polylines Information (VBA) (Get_Polylines_Information_Example_VB.htm)
- Get Sketch Point's View (VBA) (Get_Sketch_Point_s_View_Example_VB.htm)
- Insert and Position DXF File in Drawing (VBA) (Insert_and_Position_DXF_File_in_Drawing_Example_VB.htm)
- Get Area Hatch Data (VBA) (Get_Area_Hatch_Data_Example_VB.htm)
- Get Area Hatch Data (VB.NET) (Get_Area_Hatch_Data_Example_VBNET.htm)
- Get Area Hatch Data (C#) (Get_Area_Hatch_Data_Example_CSharp.htm)

## See Also

- `IView.IGetSketch`