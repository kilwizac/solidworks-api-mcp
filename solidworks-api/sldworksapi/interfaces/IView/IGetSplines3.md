---
type: method
interface: IView
member: IGetSplines3
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetSplines3
keywords:
  - splines
  - drawing
  - views
  - see
  - also
  - iview
  - view
  - igetsplines3
  - splines3
  - double
---

# IView.IGetSplines3

Gets all of the splines added by a user in the drawing view.

## Signature

```csharp
System.Double IGetSplines3()
```
## Parameters

None.

## Return Value

in-process, unmanaged C++: Pointer to an array of doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

This method only returns splines that were sketched by a user in this drawing view. Use
IView::GetPolylines6
or
IView::IGetPolylines6
to access the solid model's projected display data in the drawing view.
Format of return values is an array of doubles with the format:
[ [
Color, LineType, LineStyleIndex, LineWidth, LayerID, LayerOverride, NumSplinePoints, [x,y,z] ]
]
Color
= COLORREF returned as an integer. Return value could be 0 or -1 for default color.
LineType
= line type. Valid returns as defined in
swLineTypes_e
. A lineType is a combination of a lineStyle and lineWeight.
LineStyleIndex
= line style. Valid line styles as defined in
swLineStyles_e
.
LineWidth
= integer value defining the line width. Valid width values as defined in
swLineWeights_e
.
LayerID
= integer value indicating which layer holds this entity. Obtain the
ILayer
object by passing this integer value to
ILayerMgr::GetLayerById
or
ILayerMgr::IGetLayerById
.
LayerOverride
= integer with bit flags set to determine which properties, if any, have been overridden with respect to the Layer default properties. If the bit value is set, then the specific property or properties have been overridden. The bit indicators are: color = 0x1, style = 0x2, and width = 0x4. Therefore, if
LayerOverride
was returned as 3, you know the color and style have been specifically set for this item and may not match the default values associated with this item's layer.
This complete set of data repeats itself for each spline found in the view. For each spline, the array returned contains the color, line type, number of spline points in the spline, and X,Y,Z value for each of those points. Therefore, the
[x,y,z]
parameter is an array of
NumSplinePoints,
which can vary in size from spline to spline.
The
[x,y,z]
points for each spline are not the same as the points used to generate the spline. This method tessellates the spline based on the display quality and place points along the spline appropriately.
The data returned from this method is in terms of view space. If you want the data in terms of sheet space (for example, the 0,0 origin being the lower-left corner of the sheet), then combine this data with the three return values from
IView::GetXForm
or
IView::IGetXForm
.
To determine data size needed in this method, use
IView::GetSplineCount
or get the number of elements in the array returned by this method.
If you are using COM, then this method must be preceded by a call to IView::GetSplineCount to determine memory allocation and to perform the actual gathering of spline data.
The sheet must be visible. See
ISheet::SheetFormatVisible
.

## See Also

- `IView.GetSplines3`