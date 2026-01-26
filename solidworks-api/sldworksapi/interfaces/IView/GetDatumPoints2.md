---
type: method
interface: IView
member: GetDatumPoints2
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.IGetDatumPoints2
keywords:
  - view
  - see
  - also
  - iview
  - datum
  - points
  - drawing
  - views
  - getdatumpoints2
  - points2
  - object
---

# IView.GetDatumPoints2

Gets all of the information about all the datum points in this view.

## Signature

```csharp
System.Object GetDatumPoints2()
```
## Parameters

None.

## Return Value

Array of doubles (see Remarks )

## Remarks

Return value is an array of doubles with the format:
[
Color, LineStyleIndex, LineWidth, LayerID, LayerOverride, ptLoc[3] ...
]
Color
= COLORREF returned as an integer. Return value can be 0 or -1 for default color.
LineStyleIndex
= line style. Valid line styles as defined in
swLineStyles_e
.
LineWidth
= integer value defining the line width. Valid width values as defined in
swLineWeights_e
.
LayerID
= integer value indicating which layer holds this entity. This integer value is the array index value into the layerList array. The layerList array can be obtained using
ILayerMgr::GetLayerList
or
ILayerMgr::IGetLayerList
. A value of 1 indicates that this item is not on a layer.
LayerOverride
= integer with bit flags set to determine which properties, if any, have been overridden with respect to the
ILayer
default properties. If the bit value is set, then the specific property or properties have been overridden. The bit indicators are: color = 0x1, style = 0x2, and width = 0x4. Therefore, if
LayerOverride
is returned as 3, you know the color and style have been specifically set for this item and may not match the default values associated with this item's layer.
ptLoc[3]
= array of 3 doubles (X,Y,Z) describing the point location
...
This entire set of data repeats for each datum point in the view. The size of the array is (NumPts * 8). To determine the number of points,use
IView::GetDatumPointsCount
.
The data returned from this method is in terms of view space. If you want the data in terms of sheet space (for example, the 0,0 origin being the lower-left corner of the sheet), then combine this data with the three return values from
IView::GetXForm
or
IView::IGetXForm
.

## See Also

- `IView.IGetDatumPoints2`