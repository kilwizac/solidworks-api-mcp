---
type: method
interface: IView
member: GetPolyLineCount5
returns: System.Int32
parameters:
  -
    name: CrossHatchOption
    type: System.Int16
    description: Crosshatch option as defined in swCrossHatchFilter_e
  -
    name: PointCount
    type: System.Int32
    description: Size of array needed to allocate in doubles for IView::IGetPolylines6
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetDisplayMode2
  - IView.GetPolyLinesAndCurves
  - IView.GetPolyLinesAndCurvesCount
  - IView.GetPolylines6
  - IView.IGetPolyLinesAndCurves
keywords:
  - drawing
  - views
  - see
  - also
  - iview
  - polylines
  - view
  - getpolylinecount5
  - poly
  - line
  - count5
  - cross
  - hatch
  - option
  - int16
  - point
  - count
  - int32
  - number
  - shaded
  - mode
  - vba
---

# IView.GetPolyLineCount5

Gets the number of polylines in this view with an option to include or exclude crosshatch lines.

## Signature

```csharp
System.Int32 GetPolyLineCount5( 
   System.Int16
CrossHatchOption
,
   out System.Int32
PointCount
)
```
## Parameters

- `CrossHatchOption` (System.Int16): Crosshatch option as defined in swCrossHatchFilter_e
- `PointCount` (System.Int32): Size of array needed to allocate in doubles for IView::IGetPolylines6

## Return Value

Number of polylines

## Remarks

Call this method before calling
IView::IGetPolylines6.
If...
Then...
Drawing view is in any of these modes:
Shaded mode
Shaded with edges mode
Draft quality
This method returns 0.
Use
IView::SetDisplayMode3
to change Shaded or Shaded with edges mode to Wireframe, Hidden Lines Removed (HLR), or Hidden Lines Visible (HLV), and then get the number of polylines.
Changes are made to the parts or assemblies shown in this drawing
Polylines are only generated that are in the visible viewing bounds when the drawing is opened.
Drawing is already open
All polylines in the drawing are generated. If you open a drawing that is zoomed in to a particular region, then the polylines that are outside the zoomed region do not exist if the parts or assemblies shown in this drawing have been changed. To force the generation of all possible polyline data, call
IModelDoc2::ViewZoomtofit2
.

## Examples

- Get Number of Polylines in Shaded Mode Drawing View (VBA) (Get_Number_of_Polylines_in_Shaded_Mode_Drawing_View_Example_VB.htm)

## See Also

- `IView.GetDisplayMode2`
- `IView.GetPolyLinesAndCurves`
- `IView.GetPolyLinesAndCurvesCount`
- `IView.GetPolylines6`
- `IView.IGetPolyLinesAndCurves`