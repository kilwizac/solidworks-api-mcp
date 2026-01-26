---
type: method
interface: ISketch
member: IGetLines2
returns: System.Double
parameters:
  -
    name: CrossHatchOption
    type: System.Int16
    description: Crosshatch option as defined in swCrossHatchFilter_e
  -
    name: ArraySize
    type: System.Int32
    description: Number of lines in the sketch
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketch.GetLines2
  - ISketchLine
keywords:
  - sketch
  - entities
  - lines
  - see
  - also
  - isketch
  - sketches
  - igetlines2
  - lines2
  - cross
  - hatch
  - option
  - int16
  - array
  - size
  - int32
  - double
---

# ISketch.IGetLines2

Gets all of the lines in the sketch with an option to include or exclude crosshatch lines.

## Signature

```csharp
System.Double IGetLines2( 
   System.Int16
CrossHatchOption
,
   System.Int32
ArraySize
)
```
## Parameters

- `CrossHatchOption` (System.Int16): Crosshatch option as defined in swCrossHatchFilter_e
- `ArraySize` (System.Int32): Number of lines in the sketch

## Return Value

in-process, unmanaged C++: Pointer to an array of doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

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

## See Also

- `ISketch.GetLines2`
- `ISketchLine`