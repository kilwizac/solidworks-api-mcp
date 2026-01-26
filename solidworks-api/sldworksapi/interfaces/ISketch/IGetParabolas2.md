---
type: method
interface: ISketch
member: IGetParabolas2
returns: System.Double
parameters:
  -
    name: ArraySize
    type: System.Int32
    description: Number of parabolas in the sketch
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketch.GetParabolas2
  - ISketchParabola
keywords:
  - sketch
  - entities
  - parabolas
  - see
  - also
  - isketch
  - igetparabolas2
  - parabolas2
  - array
  - size
  - int32
  - double
---

# ISketch.IGetParabolas2

Gets all of the parabolas in the sketch.

## Signature

```csharp
System.Double IGetParabolas2( 
   System.Int32
ArraySize
)
```
## Parameters

- `ArraySize` (System.Int32): Number of parabolas in the sketch

## Return Value

in-process, unmanaged C++: Pointer to an array of doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

See
ISketch::GetSketchSegments
or
ISketch::IEnumSketchSegments
for access to individual
ISketchSegment
and
ISketchParabola
objects.
The return values are in an array of doubles:
[
Color
,
LineType
,
LineStyleIndex
,
LineWidth
,
LayerID
,
LayerOverride
,
StartPt[3]
,
EndPt[3]
,
FocusPt[3]
,
ApexPt[3]
]
where:
Color
= COLORREF returned as an integer. Return value could be 0 or -1 for default color.
LineType
= line type. Valid returns as defined in
swLineTypes_e
. A line type is a combination of a line style and line weight.
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
= integer with bit flags set to determine which properties, if any, have been overridden with respect to the Layer default properties. If the bit value is set, then the specific property or properties have been overridden. The bit indicators are: color = 0x1, style = 0x2, and width = 0x4. Therefore, if LayerOverride was returned as 3, you know the color and style have been specifically set for this item and may not match the default values associated with this item's layer.
StartPt[3]
= array of 3 doubles (X,Y,Z) describing the parabola start point.
EndPt[3]
= array of 3 doubles (X,Y,Z) describing the parabola end point.
FocusPt[3]
= array of 3 doubles (X,Y,Z) describing the parabola focus point.
ApexPt[3]
= array of 3 doubles (X,Y,Z) describing the parabola apex point.
This set of data repeats for each parabola in the sketch. The size of the array is (NumParabolas * 18). To determine the number of parabolas, see
ISketch::GetParabolaCount
.

## See Also

- `ISketch.GetParabolas2`
- `ISketchParabola`