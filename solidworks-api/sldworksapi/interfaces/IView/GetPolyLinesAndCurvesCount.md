---
type: method
interface: IView
member: GetPolyLinesAndCurvesCount
returns: System.Int32
parameters:
  -
    name: CrossHatchOption
    type: System.Int16
    description: Crosshatch option as defined in swCrossHatchFilter_e
  -
    name: PointCount
    type: System.Int32
    description: Size of array to allocate in doubles for IView::IGetPolyLinesAndCurves
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetDisplayMode2
  - IView.GetPolyLineCount5
  - IView.GetPolyLinesAndCurves
  - IView.GetPolylines6
  - IView.IGetPolylines6
keywords:
  - polylines
  - drawing
  - views
  - see
  - also
  - iview
  - view
  - curves
  - curve
  - icurve
  - getpolylinesandcurvescount
  - poly
  - lines
  - count
  - cross
  - hatch
  - option
  - int16
  - point
  - int32
---

# IView.GetPolyLinesAndCurvesCount

Gets the number of lines, including arcs, ellipses, splines, and polylines, in the view with the option to include or exclude cross hatch }}--> }}-->lines.

## Signature

```csharp
System.Int32 GetPolyLinesAndCurvesCount( 
   System.Int16
CrossHatchOption
,
   out System.Int32
PointCount
)
```
## Parameters

- `CrossHatchOption` (System.Int16): Crosshatch option as defined in swCrossHatchFilter_e
- `PointCount` (System.Int32): Size of array to allocate in doubles for IView::IGetPolyLinesAndCurves

## Return Value

Number of lines

## Remarks

Call this method before calling
IView::IGetPolyLinesAndCurves
.
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

## See Also

- `IView.GetDisplayMode2`
- `IView.GetPolyLineCount5`
- `IView.GetPolyLinesAndCurves`
- `IView.GetPolylines6`
- `IView.IGetPolylines6`