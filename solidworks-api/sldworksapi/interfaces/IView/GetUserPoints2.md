---
type: method
interface: IView
member: GetUserPoints2
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.IGetUserPoints2
keywords:
  - drawing
  - views
  - see
  - also
  - iview
  - points
  - view
  - getuserpoints2
  - user
  - points2
  - object
---

# IView.GetUserPoints2

Gets all of the information about all of the user points in this view.

## Signature

```csharp
System.Object GetUserPoints2()
```
## Parameters

None.

## Return Value

Array of doubles (see Remarks )

## Remarks

The return value is the following array of doubles:
[
Color, LineStyleIndex, LineWidth, LayerID, LayerOverride, ptLoc[3] ...
]
Color
= COLORREF returned as an integer. Return value could be 0 or -1 for default color.
LineStyleIndex
= line style. Valid line styles can be found in the
swLineStyles_e
enumeration.
LineWidth
= integer value defining the line width. Valid width values can be found in the
swLineWeights_e
enumeration.
LayerID
= integer value indicating which layer holds this entity. The
ILayer
object can be obtained by passing this integer value to
ILayerMgr::GetLayerById
or
ILayerMgr::IGetLayerById
.
LayerOverride
= integer with bit flags set to determine which properties, if any, have been overridden with respect to the Layer default properties. If the bit value is set, then the specific property or properties have been overridden. The bit indicators are: color = 0x1, style = 0x2, and width = 0x4. Therefore, if LayerOverride was returned as 3, you know the color and style have been specifically set for this item and may not match the default values associated with this item's layer.
ptLoc[3]
= an array of 3 doubles (X,Y,Z) describing the point location
...
This set of data repeats for each user point in the view. The size of the array is (NumPts * 8). To determine the number of points in the view, see
IView::GetUserPointsCount
.
The data returned from this method is in terms of view space. If you want the data in terms of sheet space (that is, the 0,0 origin being the lower-left corner of the sheet), then combine this data with the three return values from
IView::GetXForm
or
IView::IGetXForm
.
The sheet must be visible. See
ISheet::SheetFormatVisible
.

## See Also

- `IView.IGetUserPoints2`