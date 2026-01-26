---
type: method
interface: IView
member: IGetLines4
returns: System.Double
parameters:
  -
    name: CrossHatchOption
    type: System.Int16
    description: Crosshatch option as defined in swCrossHatchFilter_e
  -
    name: ArraySize
    type: System.Int32
    description: Number of lines in the view
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetLines4
keywords:
  - view
  - see
  - also
  - iview
  - lines
  - drawing
  - views
  - igetlines4
  - lines4
  - cross
  - hatch
  - option
  - int16
  - array
  - size
  - int32
  - double
---

# IView.IGetLines4

Gets all of the lines in the view with an option to include or exclude crosshatch lines.

## Signature

```csharp
System.Double IGetLines4( 
   System.Int16
CrossHatchOption
,
   System.Int32
ArraySize
)
```
## Parameters

- `CrossHatchOption` (System.Int16): Crosshatch option as defined in swCrossHatchFilter_e
- `ArraySize` (System.Int32): Number of lines in the view

## Return Value

in-process, unmanaged C++: Pointer to an array of doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

This method only returns lines that were sketched in this drawing view. Use
IView::GetPolylines6
or
IView::IGetPolylines6
to access the solid model's projected display data in this view.
Call
IView::GetLineCount2
before calling this method to get the value for ArraySize.
The return value is the following array of doubles:
[
Color, LineType, LineStyleIndex, LineWidth, LayerID, LayerOverride, StartPt[3], EndPt[3], ...
]
where all data values are returned as doubles:
Color
= COLORREF returned as an integer. Return value could be 0 or -1 for default color.
LineType
= line type. Valid returns as defined in
swLineTypes_e
. A
lineType
is a combination of a lineStyle and lineWeight.
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
is returned as 3, you know the color and style have been specifically set for this item and may not match the default values associated with this item's layer.
StartPt[3]
= array of 3 doubles (X,Y,Z) describing the line start point.
EndPt[3]
= array of 3 doubles (X,Y,Z) describing the line end point.
This set of data repeats for each line in the view. The number of doubles returned is (lineCount * 12).
The data returned from this method is in terms of view space. If you want the data in terms of sheet space (that is, the 0,0 origin being the lower-left corner of the sheet), then combine this data with the three return values from
IView::GetXForm
or
IView::IGetXForm
.
The sheet must be visible. See
ISheet::SheetFormatVisible
.

## See Also

- `IView.GetLines4`