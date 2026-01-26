---
type: method
interface: IView
member: IGetPolylines7
returns: System.Object
parameters:
  -
    name: CrossHatchOption
    type: System.Int16
    description: 0 = include crosshatch lines 1 = exclude crosshatch lines 2 = include only crosshatch lines
  -
    name: ArraySize
    type: System.Int32
    description: Number of lines in the view
  -
    name: Polylines
    type: System.Double
    description: Array of doubles of the lines in the view of size ArraySize
  -
    name: EdgeArraySize
    type: System.Int32
    description: Size of array of modeling edges
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetDisplayMode2
  - IView.GetPolyLinesAndCurvesCount
  - IView.GetPolylines7
keywords:
  - polylines
  - drawing
  - views
  - see
  - also
  - iview
  - view
  - igetpolylines7
  - polylines7
  - cross
  - hatch
  - option
  - int16
  - array
  - size
  - int32
  - double
  - edge
  - object
---

# IView.IGetPolylines7

Gets all of the polylines in the view with an option to include or exclude crosshatch lines

## Signature

```csharp
System.Object IGetPolylines7( 
   System.Int16
CrossHatchOption
,
   System.Int32
ArraySize
,
   out System.Double
Polylines
,
   System.Int32
EdgeArraySize
)
```
## Parameters

- `CrossHatchOption` (System.Int16): 0 = include crosshatch lines 1 = exclude crosshatch lines 2 = include only crosshatch lines
- `ArraySize` (System.Int32): Number of lines in the view
- `Polylines` (System.Double): Array of doubles of the lines in the view of size ArraySize
- `EdgeArraySize` (System.Int32): Size of array of modeling edges

## Return Value

in-process, unmanaged C++: Pointer to an array of modeling edges and silhouette edges corresponding to polylines in the view VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

The difference between this method and
IView::GetPolyLinesAndCurves
and
IView::IGetPolyLinesAndCurves
is that splines and ellipses returned by these methods are returned as equation parameters, which are more precise definitions.
This method returns data for all visible solid model edges in the drawing view. This includes these types of edges:
1 = arcs: Returned using a center point, radius, and start and stop location.
1 = circles: Returned using a center point, radius, and start and stop location.
2 = ellipses: Returned as tessellated polylines.
3 = splines: Returned as tessellated polylines.
0 = straight lines: Returned as tessellated polylines, but because the edges are straight, there is no loss of data in the approximation.
For each arc:
first double gives the type
next double gives the number of doubles required to hold arc geometry ( center, startPt, endPt, normal ) == 12
next three doubles give the coordinates of center
next three doubles give the coordinates of startPt
next three doubles give the coordinates of endPt
next three doubles give the coordinates of the normal
next six doubles are line attributes:
LineColor
= polyline color. This value is determined either by the explicitly set value or by the layer that the polyline is on.
LineStyle
= value combines polyline font and weight information. This value can be used as an input to GetLineFontInfo and GetLineFontName. If this value is -1, then the user has probably modified the line display manually in the drawing and you should use the LineFont and LineWeight return values to recreate the exact polyline style.
LineFont
= value is used for polyline font information. This value can be used as an input to the GetLineFontInfo2 and GetLineFontName2 functions. This value will only be valid if LineStyle is -1.
LineWeight
= polyline weight where Thin = 0.0, Normal = 1.0, Thick = 2.0. This value will only be valid if LineStyle is -1.
LayerID
= integer value indicating which layer holds this polyline. The
ILayer
object can be obtained by passing this integer value to
ILayerMgr::IGetLayerById
.
LayerOverride
= integer with bit flags set to determine which properties, if any, have been overridden with respect to the Layer default properties. If the bit value is set, then the specific property or properties have been overridden. The bit indicators are: color = 0x1, style = 0x2, and width = 0x4. Therefore, if LayerOverride was returned as 3, you know the color and style have been specifically set for this item and may not match the default values associated with this item's layer.
next double is the number of points lying on the arc
next ( numPoints * 3 ) doubles are the coordinates of points lying on the arc
For each ellipse:
first double gives the type
next double gives the number of doubles required to hold ellipse geometry ( center, unit vector along majorAxis, unit vector along minor axis, major radius, minor radius, startPt, endPt, normal ) == 17
next three doubles give the coordinates of center
next three doubles give the coordinates of unit vector along major axis
next three doubles give the coordinates of unit vector along minor axis
next doubles gives the major radius
next double gives the minor radius
next three doubles give the coordinates of startPt
next three doubles give the coordinates of endPt
next six doubles are line attributes (see description of line attributes in previous bulleted item)
next double is the number of points lying on the ellipse
next ( numPoints * 3 ) doubles are the coordinates of points lying on the ellipse
For each spline
first double gives the type
next double gives the number of doubles required to hold the information about the spline geometry ( 5 + numCtrlPts* numDims + numKnot ); if the spline is rational, numDims ==4 otherwise numDims ==3
next double gives degree = order -1
next double gives whether the spline is rational (1) or non-rational (0)
next double gives numDims ( i.e., number of coordinates associated with each control point; if the spline is rational , these are four, else three)
next double gives the number of control points of the spline
next double gives the number of knots on the spline
next ( numCtlPoints*numDims ) number of doubles are the coordinates of control points; each control point has numDims number of coordinates
next "numKnots" number of doubles; the knots on the spline
next six doubles are line attributes (see description of line attributes in previous bulleted item)
next double is the number of points lying on the spline
next ( numPoints * 3 ) doubles are the coordinates of points lying on the spline
For each polyline
first double gives the type
next double holds value 0.0 as there is no geometry information for a polyline
next six doubles are line attributes (see description of line attributes in previous bulleted item)
next double is the number of points lying on the polyline
next ( numPoints * 3 ) doubles are the coordinates of points lying on the polyline
This method also lets you include or exclude crosshatch lines. This method does not return data for sketch segments added by a user in the drawing view.
To get...
Call...
Size of array needed to hold this data in COM applications
IView::GetPolyLinesandCurvesCount
Items that were sketched in this drawing view
IView::IGetArcs4
IView::IGetLines4
IView::IGetSplines3
IView::IGetEllipses5
If...
Then...
Display mode of the view is:
Shaded
Shaded with Edges
Draft Quality
Fast HLR/HLV
A value is not returned.
Use
IView::SetDisplayMode3
to change Shaded or Shaded with Edges mode to Wireframe, Hidden Lines Removed (HLR), or Hidden Lines Visible (HLV), and then get the polylines.
Changes are made to the parts or assemblies shown in this drawing
Polylines are only generated that are in the visible viewing bounds when the drawing is opened.
Drawing is already open
All polylines in the drawing are generated. If you open a drawing that is zoomed in to a particular region, then the polylines that are outside the zoomed region do not exist if the parts or assemblies shown in this drawing have been changed. To force the generation of all possible polyline data, call
IModelDoc2::ViewZoomtofit2
.

## See Also

- `IView.GetDisplayMode2`
- `IView.GetPolyLinesAndCurvesCount`
- `IView.GetPolylines7`