---
type: method
interface: ISketch
member: GetArcs2
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketch.IGetArcs2
  - ISketchArc
keywords:
  - sketch
  - see
  - also
  - isketch
  - arcs
  - entities
  - getarcs2
  - arcs2
  - object
  - vba
---

# ISketch.GetArcs2

Gets all of the arcs in the sketch.

## Signature

```csharp
System.Object GetArcs2()
```
## Parameters

None.

## Return Value

Array of doubles containing the arcs in the sketch (see Remarks )

## Remarks

To determine the number of arcs, use
ISketch::GetArcCount
.
Return value is an array of doubles with the format:
[
Color, Type, Line Font, Line Width, Layer ID, Layer Override, [Start], [End], [Center] Rotation Dir
]
where
Color
- COLORREF returned as an integer. Return value could be 0 or -1 for default color.
Type
- Line type. Valid returns as defined in
swLineTypes_e
. A line type is a combination of a line style and line weight.
Line Font
- Line style. Valid line styles as defined in
swLineStyles_e
enumeration.
Line Width
- Integer value defining the line width. Valid width values as defined in
swLineWeights_e
.
Layer ID
- Integer value indicating which layer holds this entity. The
ILayer
object can be obtained by passing this integer value to
ILayerMgr::GetLayerById
or
ILayerMgr::IGetLayerById
.
Layer Override
- Integer with bit flags set to determine which properties, if any, have been overridden with respect to the layer default properties. If the bit value is set, then the specific property or properties have been overridden. The bit indicators are: color = 0x1, style = 0x2, and width = 0x4. Therefore, if Layer Override was returned as 3, the color and style have been specifically set for this item and may not match the default values associated with this item's layer.
Start[3]
- An array of 3 doubles (X,Y,Z) describing the start point.
End[3]
- An array of 3 doubles (X,Y,Z) describing the end point. If the arc is closed, then End[3] is the same point as the Start.
Center[3]
- An array of 3 doubles (X,Y,Z) describing the center point.
Rotation Dir
- Rotational direction (CW = -1, CCW = 1)
This set of data repeats for each arc in the sketch. The size of the array is (NumArcs * 16).

## Examples

- Get Arcs in Sketch (VBA) (Get_Arcs_in_Sketch_Example_VB.htm)

## See Also

- `ISketch.IGetArcs2`
- `ISketchArc`