---
type: method
interface: IView
member: IGetArcs4
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetArcs4
keywords:
  - view
  - see
  - also
  - iview
  - arcs
  - drawing
  - views
  - igetarcs4
  - arcs4
  - double
---

# IView.IGetArcs4

Gets all of the information for all of the arcs added by a user in this drawing view. }}-->

## Signature

```csharp
System.Double IGetArcs4()
```
## Parameters

None.

## Return Value

in-process, unmanaged C++: Pointer to an array of doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

This method only returns arcs that were sketched by a user in a drawing view. Use
IView::GetPolylines6
or
IView::IGetPolylines6
to access the solid model's projected display data in the drawing view.
Return value is an array of doubles with the format:
[
Color, LineType, LineStyleIndex, LineWidth, LayerID, LayerOverride, StartPt[3], EndPt[3], CenterPt[3], RotDir, ...
]
where:
Color
- COLORREF returned as an integer. Return value could be 0 or -1 for default color.
LineType
- Line type. Valid returns as defined in
swLineTypes_e
. A
LineType
is a combination of a line style and line weight.
LineStyleIndex
- Line style. Valid line styles as defined in
swLineStyles_e
enumeration.
LineWidth
- Integer value defining the line width. Valid width values as defined in
swLineWeights_e
.
LayerID
- Integer value indicating which layer holds this entity. The
ILayer
object can be obtained by passing this integer value to
ILayerMgr::GetLayerById
or
ILayerMgr::IGetLayerById
.
LayerOverride
- Integer with bit flags set to determine which properties, if any, have been overridden with respect to the Layer default properties. If the bit value is set, then the specific property or properties have been overridden. The bit indicators are: color = 0x1, style = 0x2, and width = 0x4. Therefore, if
LayerOverride
was returned as 3, the color and style have been specifically set for this item and may not match the default values associated with this item's layer.
StartPt[3]
- An array of 3 doubles (X,Y,Z) describing the start point.
EndPt[3]
- An array of 3 doubles (X,Y,Z) describing the end point. If the arc is closed, then
EndPt[3]
is the same point as the StartPt.
CenterPt[3]
- An array of 3 doubles (X,Y,Z) describing the center point.
RotDir
- Rotational direction (CW = -1, CCW = 1)
...
This set of data repeats for each arc in the View. The size of the array is (NumArcs * 16). To determine the number of arcs, use
IView::GetArcCount
.
The data returned from this method is in terms of view space. If you want the data in terms of sheet space (for example, the 0,0 origin being the lower-left corner of the sheet), then you should combine this data with the three return values from
IView::GetXForm
or
IView::IGetXForm
.
The sheet must be visible. See
ISheet::SheetFormatVisible
.

## See Also

- `IView.GetArcs4`