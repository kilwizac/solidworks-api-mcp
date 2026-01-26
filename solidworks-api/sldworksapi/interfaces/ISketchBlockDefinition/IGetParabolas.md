---
type: method
interface: ISketchBlockDefinition
member: IGetParabolas
returns: System.Double
parameters:
  -
    name: ArraySize
    type: System.Int32
    description: Number of parabolas
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchBlockDefinition.GetParabolas
keywords:
  - blocks
  - see
  - also
  - isketchblockdefinition
  - isketchblockinstance
  - interfaces
  - parabolas
  - igetparabolas
  - sketch
  - block
  - definition
  - array
  - size
  - int32
  - double
---

# ISketchBlockDefinition.IGetParabolas

Gets information about all of the parabolas in this block definition.

## Signature

```csharp
System.Double IGetParabolas( 
   System.Int32
ArraySize
)
```
## Parameters

- `ArraySize` (System.Int32): Number of parabolas

## Return Value

in-process, unmanaged C++: Pointer to an array of doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
ISketchBlockDefinition::GetParabolaCount
before calling this method to get value for ArraySize.
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
. A
LineType
is a combination of a line style and line weight.
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
StartPt[3]
= array of 3 doubles (X,Y,Z) describing the parabola start point.
EndPt[3]
= array of 3 doubles (X,Y,Z) describing the parabola end point.
FocusPt[3]
= array of 3 doubles (X,Y,Z) describing the parabola focus point.
ApexPt[3]
= array of 3 doubles (X,Y,Z) describing the parabola apex point.
This set of data repeats for each parabola in the sketch. The size of the array is (NumParabolas * 18).

## See Also

- `ISketchBlockDefinition.GetParabolas`