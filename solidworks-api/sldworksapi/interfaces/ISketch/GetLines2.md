---
type: method
interface: ISketch
member: GetLines2
returns: System.Object
parameters:
  -
    name: CrossHatchOption
    type: System.Int16
    description: Crosshatch option as defined in swCrossHatchFilter_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketch.IGetLines2
  - ISketchLine
keywords:
  - sketch
  - entities
  - lines
  - see
  - also
  - isketch
  - sketches
  - getlines2
  - lines2
  - cross
  - hatch
  - option
  - int16
  - object
  - vba
---

# ISketch.GetLines2

Gets all of the lines in the sketch with an option to include or exclude crosshatch lines.

## Signature

```csharp
System.Object GetLines2( 
   System.Int16
CrossHatchOption
)
```
## Parameters

- `CrossHatchOption` (System.Int16): Crosshatch option as defined in swCrossHatchFilter_e

## Return Value

Array of doubles (see Remarks )

## Remarks

The return value is the following array of doubles:
[
Color, Type, Line Font, Line Width, Layer ID, Layer Override, [Start], [End]
]
where all data values are returned as doubles:
Color
= COLORREF returned as an integer. Return value could be 0 or -1 for default color.
Type
= line type. Valid returns as defined in
swLineTypes_e
. A line type is a combination of a line style and line weight.
Line Font
= line style. Valid line styles as defined in
swLineStyles_e
.
Line Width
= integer value defining the line width. Valid width values as defined in
swLineWeights_e
.
Layer ID
= integer value indicating which layer holds this entity. Obtain the
ILayer
object by passing this integer value to
ILayerMgr::GetLayerById
or
ILayerMgr::IGetLayerById
.
Layer Override
= integer with bit flags set to determine which properties, if any, have been overridden with respect to the Layer default properties. If the bit value is set, then the specific property or properties have been overridden. The bit indicators are: color = 0x1, style = 0x2, and width = 0x4. Therefore, if LayerOverride is returned as 3, you know the color and style have been specifically set for this item and may not match the default values associated with this item's layer.
Start[3]
= array of 3 doubles (X,Y,Z) describing the line start point.
End[3]
= array of 3 doubles (X,Y,Z) describing the line end point.
This set of data repeats for each line in the sketch. The number of doubles returned is (lineCount * 12). To determine the number of lines in the sketch, use
ISketch::GetLineCount2
.
See
ISketch::GetSketchSegments
or
ISketch::IEnumSketchSegments
for access to individual
ISketchSegment
and
ISketchLine
objects.

## Examples

- Get Lines in Sketch (VBA) (Get_Lines_in_Sketch_Example_VB.htm)

## See Also

- `ISketch.IGetLines2`
- `ISketchLine`