---
type: method
interface: ISketch
member: GetUserPoints2
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
  - ui
related:
  - ISketch.IGetUserPoints2
keywords:
  - sketch
  - see
  - also
  - isketch
  - points
  - isketchpoint
  - user
  - entities
  - getuserpoints2
  - points2
  - object
  - their
  - persistent
  - ids
  - vba
---

# ISketch.GetUserPoints2

Gets all of the user points in this sketch.

## Signature

```csharp
System.Object GetUserPoints2()
```
## Parameters

None.

## Return Value

Array of doubles (see Remarks )

## Remarks

The return value is an array of doubles with this format:
[
Color, Line Font, Line Width, Layer ID, Layer Override,
p
tLoc[3]
]
where:
Color
= COLORREF returned as an integer. Return value could be 0 or -1 for default color.
Line Font
= line style. Valid line styles can be found in the
swLineStyles_e
enumeration.
Line Width
= integer value defining the line width. Valid width values can be found in the
swLineWeights_e
enumeration.
Layer ID
= integer value indicating which layer holds this entity. The
ILayer
object can be obtained by passing this integer value to
ILayerMgr::GetLayerById
or
ILayerMgr::IGetLayerById
.
Layer Override
= integer with bit flags set to determine which properties, if any, have been overridden with respect to the Layer default properties. If the bit value is set, then the specific property or properties have been overridden. The bit indicators are: color = 0x1, style = 0x2, and width = 0x4. Therefore, if LayerOverride was returned as 3, you know the color and style have been specifically set for this item and may not match the default values associated with this item's layer.
p
tLoc[3]
= an array of doubles (x, y, z) describing the point location
This set of data repeats for each user point in the sketch. The size of the array is (NumPts * 8). To determine the number of points in the sketch, use
ISketch::GetUserPointsCount
.
See
ISketch::GetSketchPoints2
,
ISketch::IGetSketchPoints2
, or
ISketch::IEnumSketchPoints
for access to individual
ISketchPoint
objects.

## Examples

- Get Sketch Points and Their Persistent IDs (VBA) (Get_Sketch_Points_and_Their_Persistent_IDs_Example_VB.htm)

## See Also

- `ISketch.IGetUserPoints2`